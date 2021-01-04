export default function(context) {
    if(context.store.getters["auth/getToken"]) {
        return context.redirect('/');
    } else return;
}