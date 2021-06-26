<template>
  <div>
    <Header />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
// import { mapActions, mapMutations } from 'vuex';

export default {
  components: { Header, Footer },
};
</script>