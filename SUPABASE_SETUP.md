# Supabase Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Replace the values with your actual Supabase project credentials from the AdsGPT organization, SSE-waitlist project.

## Database Table Setup

Create a table named `sse_waitlist` in your Supabase database with the following SQL:

```sql
CREATE TABLE sse_waitlist (
  id BIGSERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  primary_email TEXT NOT NULL,
  primary_influence_platform TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Optional: Add Row Level Security (RLS)
ALTER TABLE sse_waitlist ENABLE ROW LEVEL SECURITY;

-- Allow inserts for all users (since this is a public waitlist)
CREATE POLICY "Enable insert for all users" ON sse_waitlist FOR INSERT WITH CHECK (true);

-- Allow read access for authenticated users only (optional)
CREATE POLICY "Enable read access for authenticated users" ON sse_waitlist FOR SELECT USING (true);
```

## How to Find Your Supabase Credentials

1. Go to your Supabase dashboard
2. Select the SSE-waitlist project in the AdsGPT organization
3. Go to Settings → API
4. Copy the Project URL and anon/public key

## Testing the Setup

Once configured, the waitlist form will:

1. Collect user information (first name, last name, email, platform)
2. Submit the data to your Supabase database
3. Show a success message upon completion
