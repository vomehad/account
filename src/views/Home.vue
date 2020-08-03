<template>
  <div class="home">
    <h1>Home</h1>

    <div v-for="user in USERS" :key="user.id">
      <div class="item">
        <p class="name"><b>Name:</b> {{ user.name }}</p>
        <p class="username"><b>Username:</b> {{ user.username }}</p>
        <p class="email"><b>email:</b> {{ user.email }}</p>
        <div class="address"><b>City:</b> {{ user.address.city }}
          <p class="street"><b>Street:</b> {{ user.address.street }}</p>
          <p class="suite"><b>Suite:</b> {{ user.address.suite }}</p>
          <p class="zipcode"><b>ZipCode:</b> {{ user.address.zipcode }}</p>
          <p class="geo"><b>GEO:</b> {{ user.address.geo.lat }} latitude {{ user.address.geo.lng }} longitude</p>
        </div>
        <p class="phone"><b>Phone:</b> {{ user.phone }}</p>
        <p class="website"><b>Website:</b> {{ user.website }}</p>
        <div class="company"><b>Company:</b> {{ user.company.name }}
          <p class="catch-phrase"><b>Catch-Phrase:</b> {{ user.company.catchPhrase }}</p>
          <p class="bs"><b>BS:</b> {{ user.company.bs }}</p>
        </div>
        <button class="btn btn-small blue" @click="showUser(user.id)" :item_data="user">open</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Item from '@/components/Item';
  import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'Home',
  components: {Item},
  props: {},
  data() {
    return {
      title: 'All Users',
    }
  },
  computed: {
    ...mapGetters([
            'USERS'
    ])
  },
  methods: {
    ...mapActions([
            'GET_USERS_FROM_API'
    ]),
    showUser(id) {
      this.$router.push('/user/' + id)
    }
  },
  watch: {},
  mounted() {
    this.GET_USERS_FROM_API().then(response => {
      if (response.data) {
        console.log('Data arrived!');
      }
    });
  }
}
</script>

<style scoped lang="scss">
  .home {
    display: block;
    max-width: 900px;
    margin: 0 auto;
  }

  .get {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
  }
</style>
