<template>
    <nav class="blue accent-3">
        <div class="nav-wrapper">
            <router-link to="/" class="brand-logo">Contacts</router-link>
            <ul class="right hide-on-med-and-down">
                <router-link tag="li"
                             to="/"
                             exact
                             active-class="active"
                >
                    <a href="#">Home</a>
                </router-link>
                <router-link tag="li"
                             to="/login"
                             active-class="active"
                >
                    <a href="#">Login</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    nav {
        padding: 0 2rem;
    }
</style>