export default async function(context) {
    const token = context.store.getters["auth/getToken"];
    if(token) {
        return;
    } else {
        return context.redirect('/users/login');
    }
}