import { createClient } from "@supabase/supabase-js";

const supabaseURL = "";
const supabaseKey = "";

const supaClient = createClient(supabaseURL, supabaseKey);

export default supaClient;
