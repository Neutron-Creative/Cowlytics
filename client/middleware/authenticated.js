export default async function(context) {
    const session = context.$supabase.auth.session();
    if(!session) return context.redirect('/users/login');
    return;
    /*const token = context.store.getters["auth/getToken"];
    if(token) {
        return;
    } else {
        return context.redirect('/users/login');
    }*/
}