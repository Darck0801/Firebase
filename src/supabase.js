import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dqlpfoxqakdzkoaskyjl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxbHBmb3hxYWtkemtvYXNreWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NTU1MDQsImV4cCI6MjA2NDIzMTUwNH0.RrIM0JyjxInVr5Q8fFXPtObCkbOjYzM8ZQzWCBTQC1M';
export const supabase = createClient(supabaseUrl, supabaseKey);

