export default async function(context) {
    const session = context.$supabase.auth.session()
    
    const { data, error } = await context.$supabase
        .from('organizations')
        .select();

    const organizations = data;

    if(organizations.length==0 || !organizations[0].stripe_id) {
        return context.redirect('/get-started');
    }
}