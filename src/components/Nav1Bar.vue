<template lang="">
    <nav>
        <v-app-bar app clipped-left flat class="deep-purple lighten-4">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-tittle>VueTube</v-app-bar-tittle>
            <v-spacer></v-spacer>
            <v-app-bar-tittle>VueTube</v-app-bar-tittle>
        </v-app-bar>
        <v-navigation-drawer 
        app 
        clipped 
        class="deep-purple lighten-5"
        v-model="drawer"></v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar',
        data: () => {
            return {
                "drawer": true,
            };
        },
    };
</script>

<style lang="scss" scoped>

</style>