import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface WaitlistEntry {
  id?: number
  first_name: string
  last_name: string
  primary_email: string
  primary_influence_platform: string
  created_at?: string
}

export const addToWaitlist = async (entry: Omit<WaitlistEntry, 'id' | 'created_at'>) => {
  const { data, error } = await supabase
    .from('sse_waitlist')
    .insert([entry])
    .select()

  if (error) {
    throw new Error(error.message)
  }

  return data
} 