/*
# Fix RLS policy on contact_messages

## Problem
The `anon_insert_contact_messages` INSERT policy used `WITH CHECK (true)`,
allowing unrestricted inserts — any row, including nulls or junk data,
could be written by anyone with the anon key.

## Changes
1. Add NOT NULL constraints on name, email, and message columns so the
   database itself rejects empty submissions regardless of the client.
2. Add a CHECK constraint ensuring email contains a basic `@` pattern.
3. Replace the permissive INSERT policy with one that validates the
   submitted row has non-empty name, email, and message before allowing
   the insert. Anon and authenticated roles can still insert (contact
   form is public), but only well-formed rows pass the check.
4. No SELECT / UPDATE / DELETE policies are added — only the site owner
   (via service role / dashboard) can read or manage messages. Anon
   visitors cannot read other people's submissions.

## Security
- RLS remains enabled.
- INSERT is the only operation exposed to anon/authenticated.
- The WITH CHECK clause enforces data integrity at the policy level.
*/

-- Ensure columns reject nulls
ALTER TABLE public.contact_messages
  ALTER COLUMN name SET NOT NULL,
  ALTER COLUMN email SET NOT NULL,
  ALTER COLUMN message SET NOT NULL;

-- Basic email shape validation at the DB level
ALTER TABLE public.contact_messages
  DROP CONSTRAINT IF EXISTS contact_messages_email_check;
ALTER TABLE public.contact_messages
  ADD CONSTRAINT contact_messages_email_check
  CHECK (email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$');

-- Replace the permissive insert policy with a validated one
DROP POLICY IF EXISTS "anon_insert_contact_messages" ON public.contact_messages;
CREATE POLICY "anon_insert_contact_messages"
  ON public.contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    name IS NOT NULL
    AND length(btrim(name)) > 0
    AND email IS NOT NULL
    AND length(btrim(email)) > 0
    AND message IS NOT NULL
    AND length(btrim(message)) > 0
  );
