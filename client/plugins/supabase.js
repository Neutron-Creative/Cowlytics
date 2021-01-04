import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wnmamjwvtmmllablrdzp.supabase.co';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYwOTM5Mzk1MywiZXhwIjoxOTI0OTY5OTUzfQ.tKpDO_orLV9gWiaIq9C9iWwYpTNR3sNL9tM-D88dOE0';

const supabase = createClient(supabaseUrl, supabaseKey);

export default(_, inject) => {
    inject("supabase", supabase);
}