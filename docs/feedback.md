# In-app Feedback / Q&A

This patch adds a small in-app feedback / Q&A system. Anyone can create and read posts; only admins can soft-delete posts.

## Quick setup

1. Run the SQL migration `sql/001_create_feedback_table.sql` against your Postgres database (or apply in Supabase migrations).
2. If you use Supabase, ensure your admin profile exists in the `profiles` table and has `is_admin = true`:

```sql
INSERT INTO profiles (id, email, display_name, is_admin)
VALUES ('your-auth-uid', 'admin@example.com', 'Admin Name', true)
ON CONFLICT (id) DO UPDATE SET is_admin = true;
```

3. Install required dependencies if not already present:

```bash
npm install @supabase/auth-helpers-nextjs swr
```

4. Configure your Supabase environment variables in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Usage

### For Users
- Navigate to `/questions` to view and post questions or feedback
- Posts can be made anonymously or with name/email (optional)
- All posts are visible to everyone (non-deleted only)

### For Admins
- Admins can soft-delete posts via the DELETE endpoint: `/api/feedback/[id]`
- Requires authentication with an admin account (is_admin = true in profiles table)
- Deleted posts are hidden from public view but remain in the database

## API Endpoints

### GET /api/feedback
Get all non-deleted feedback posts, optionally filtered by category.

**Query Parameters:**
- `category` (optional): Filter by category (e.g., 'general', 'bug', 'feature')

**Response:**
```json
{
  "data": [
    {
      "id": "uuid",
      "author_name": "John Doe",
      "content": "This is a question",
      "category": "general",
      "created_at": "2025-12-09T16:00:00Z"
    }
  ]
}
```

### POST /api/feedback
Create a new feedback post.

**Body:**
```json
{
  "author_name": "John Doe",
  "author_email": "john@example.com",
  "content": "This is my question or feedback",
  "category": "general"
}
```

**Response:**
```json
{
  "data": {
    "id": "uuid",
    "author_name": "John Doe",
    "content": "This is my question or feedback",
    "category": "general",
    "created_at": "2025-12-09T16:00:00Z"
  }
}
```

### DELETE /api/feedback/[id]
Soft-delete a feedback post (admin only).

**Requires:** Authenticated session with admin privileges

**Response:**
```json
{
  "data": {
    "id": "uuid",
    "deleted": true,
    "deleted_at": "2025-12-09T16:00:00Z",
    "deleted_by": "admin-uuid"
  }
}
```

## Security Features

- Row Level Security (RLS) policies ensure only admins can soft-delete posts
- Content length validation (max 5000 characters)
- IP address tracking for moderation purposes
- Optional reCAPTCHA integration (placeholder in code)

## Future Enhancements

- Add reCAPTCHA verification to prevent spam
- Implement rate limiting
- Add email notifications for new posts
- Add admin dashboard for managing posts
- Support for replies/comments on posts
- Upvoting/downvoting functionality
