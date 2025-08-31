import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Check if we're on the client side
const isClient = typeof window !== 'undefined'

// Get environment variables
const getSupabaseConfig = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'
  
  if (isClient) {
    // Client-side logging - will appear in browser console
    window.console.log('=== CLIENT-SIDE SUPABASE DEBUG ===')
    window.console.log('Environment type:', typeof process.env)
    window.console.log('NEXT_PUBLIC_SUPABASE_URL from env:', process.env.NEXT_PUBLIC_SUPABASE_URL)
    window.console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY from env:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'EXISTS' : 'UNDEFINED')
    window.console.log('Final supabaseUrl being used:', supabaseUrl)
    window.console.log('Final supabaseAnonKey (first 20 chars):', supabaseAnonKey.substring(0, 20) + '...')
    window.console.log('Using fallback values?', {
      url: supabaseUrl === 'https://your-project.supabase.co',
      key: supabaseAnonKey === 'your-anon-key'
    })
    window.console.log('=== END CLIENT DEBUG ===')

    if (supabaseUrl === 'https://your-project.supabase.co' || supabaseAnonKey === 'your-anon-key') {
      window.console.error('❌ CLIENT-SIDE SUPABASE ERROR: Environment variables not loaded!')
      window.console.error('Make sure .env.local is in the project root with NEXT_PUBLIC_ prefixed variables')
    }
  } else {
    // Server-side logging - will appear in terminal
    console.log('=== SERVER-SIDE SUPABASE DEBUG ===')
    console.log('NEXT_PUBLIC_SUPABASE_URL from env:', process.env.NEXT_PUBLIC_SUPABASE_URL)
    console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY from env:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'EXISTS' : 'UNDEFINED')
    console.log('Final supabaseUrl being used:', supabaseUrl)
    console.log('Final supabaseAnonKey (first 20 chars):', supabaseAnonKey.substring(0, 20) + '...')
    console.log('Using fallback values?', {
      url: supabaseUrl === 'https://your-project.supabase.co',
      key: supabaseAnonKey === 'your-anon-key'
    })
    console.log('=== END SERVER DEBUG ===')
  }

  return { supabaseUrl, supabaseAnonKey }
}

let supabaseClient: SupabaseClient | null = null

// Initialize Supabase client
const initializeSupabase = () => {
  if (!supabaseClient) {
    const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig()
    
    try {
      supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
      if (isClient) {
        window.console.log('✅ Supabase client created successfully')
      }
    } catch (error) {
      const errorMsg = `Failed to create Supabase client: ${error}`
      if (isClient) {
        window.console.error('❌', errorMsg)
      } else {
        console.error('❌', errorMsg)
      }
      throw new Error(errorMsg)
    }
  }
  return supabaseClient
}

// Export the client - will be initialized on first use
export const supabase = initializeSupabase()

export interface WaitlistEntry {
  id?: number
  first_name: string
  last_name: string
  primary_email: string
  primary_influence_platform: string
  created_at?: string
}


export const addToWaitlist = async (entry: Omit<WaitlistEntry, 'id' | 'created_at'>) => {
  const isClient = typeof window !== 'undefined'
  const log = isClient ? window.console.log : console.log
  const error = isClient ? window.console.error : console.error

  log('=== WAITLIST SUBMISSION DEBUG ===')
  log('Client side?', isClient)
  log('Attempting to add to waitlist with data:', {
    first_name: entry.first_name,
    last_name: entry.last_name,
    primary_email: entry.primary_email,
    primary_influence_platform: entry.primary_influence_platform.substring(0, 50) + '...'
  })

  // Re-check environment variables at submission time
  const currentUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const currentKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  log('Environment variables at submission time:')
  log('URL:', currentUrl)
  log('Key exists:', currentKey ? 'YES' : 'NO')
  log('Key first 20 chars:', currentKey ? currentKey.substring(0, 20) + '...' : 'UNDEFINED')

  // Test if supabase client exists
  log('Supabase client exists?', !!supabase)
  
  try {
    log('About to call supabase.from()...')
    const { data, error: supabaseError } = await supabase
      .from('sse_waitlist')
      .insert([entry])
      .select()

    log('Supabase call completed. Error?', !!supabaseError)

    if (supabaseError) {
      error('❌ SUPABASE ERROR DETAILS:')
      error('Error object:', supabaseError)
      error('Error message:', supabaseError.message)
      error('Error code:', supabaseError.code)
      error('Error details:', supabaseError.details)
      error('Error hint:', supabaseError.hint)
      error('Current API Key (first 20 chars):', currentKey ? currentKey.substring(0, 20) + '...' : 'UNDEFINED')
      throw new Error(supabaseError.message)
    }

    log('✅ Successfully added to waitlist:', data)
    return data
  } catch (err) {
    error('❌ UNEXPECTED ERROR in addToWaitlist:')
    error('Error type:', typeof err)
    error('Error instanceof Error:', err instanceof Error)
    error('Error message:', err instanceof Error ? err.message : String(err))
    error('Error stack:', err instanceof Error ? err.stack : 'No stack trace')
    error('Full error object:', err)
    throw err
  }
}