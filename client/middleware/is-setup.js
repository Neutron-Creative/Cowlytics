export default async function(context) {
    const session = context.$supabase.auth.session()
    
    const { data, error } = await context.$supabase
        .from('organizations')
        .select()
        .match({ 'parent': session.user.id });

    const organizations = data;

    console.log(organizations);

    if(organizations.length==0) {
        return context.redirect('/get-started');
    }

    let has_one_profile_setup = false;

    for(let i=0;i<organizations.length;i++) {
        if(organizations[i].stripe_code) {
            has_one_profile_setup = true;
        }
    }

    if(!has_one_profile_setup) return context.redirect('/get-started');

    return;
}