<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
/* import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue'; */

export default {
  components: {
    Header,
    Main,
  },
};
</script>
