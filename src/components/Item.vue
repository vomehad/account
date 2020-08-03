<template>
    <div class="item">
        <p class="name">Name: {{ item_data.name }}</p>
        <p class="username">Username: {{ item_data.username }}</p>
        <p class="email">email: {{ item_data.email }}</p>
        <div class="address">address: {{ item_data.address }}</div>
        <p class="phone">Phone: {{ item_data.phone }}</p>
        <p class="website">Website: {{ item_data.website }}</p>
        <div class="company">Company: {{ item_data.company }} </div>
        <button class="btn btn-small blue" @click="showUser(item_data.id)">open</button>
    </div>
</template>

<script>
    export default {
        name: "Item",
        props: {
            item_data: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss">
    .item {
        flex-basis: 25%;
        padding: 1rem 2rem;
        border: solid 2px darkblue;
        border-radius: 2rem;
        max-width: 500px;
    }
</style>
