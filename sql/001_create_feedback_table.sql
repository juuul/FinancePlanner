-- Create extension if not present (for gen_random_uuid)
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Create the feedback table
CREATE TABLE IF NOT EXISTS feedback (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name text,
  author_email text,
  content text NOT NULL,
  category text NOT NULL DEFAULT 'general', -- e.g. 'general', 'bug', 'feature'
  created_at timestamptz DEFAULT now(),
  deleted boolean DEFAULT false,
  deleted_at timestamptz,
  deleted_by uuid,
  ip text
);

-- Simple profiles table to track admin status (if you already have a profiles table, skip creating or merge accordingly)
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY,
  email text,
  display_name text,
  is_admin boolean DEFAULT false
);

-- Enable Row Level Security on feedback
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;

-- Allow public read of non-deleted rows
CREATE POLICY public_select ON feedback
FOR SELECT
USING (deleted = false);

-- Allow anyone to insert (anonymous posting). You can tighten later to only-authenticated.
CREATE POLICY public_insert ON feedback
FOR INSERT
WITH CHECK (true);

-- Allow only admins (profiles.is_admin = true) to UPDATE feedback rows (used for soft-deletes)
CREATE POLICY admin_update ON feedback
FOR UPDATE
USING (
  (SELECT is_admin FROM profiles WHERE profiles.id = auth.uid()) = true
)
WITH CHECK (true);

-- Note: If you're using Supabase, ensure the profiles rows exist for admin users and auth.uid() is available.
