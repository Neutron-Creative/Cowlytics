export default function(context) {
    const session = context.$supabase.auth.session();
    if(session) return context.redirect('/');
    return;
    /*if(context.store.getters["auth/getToken"]) {
        return context.redirect('/');
    } else return;*/
}