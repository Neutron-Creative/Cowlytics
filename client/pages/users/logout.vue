<template>
    
</template>
<script>
export default {
    data: {

    },
    async mounted() {
        const { error } = this.$supabase.auth.signOut();
        this.$router.push('/users/login');
    }
}
</script>