<template>
  <a-layout-header :style="{ background: '#fff', padding: 0 }">
    <div class="app-header">
      <div class="app-header__logo">
        <div class="toggle-menu" @click="showDrawer">
          <span />
        </div>
        <div class="app-header__logo-svg" @click={backToHome}>
          <img :src="state.logo" alt="" />
        </div>
      </div>
      <div class="app-header__title">{{title}}</div>
    </div>
  </a-layout-header>
</template>


<script>
  import Logo from "../../../../assets/logo.png";

  export default {
    name: 'Header',
    props: {
      title: String,
      showDrawer: { type: Function }
    },
    data() {
      return {
        state: {
          logo: Logo
        },
      }
    },
  }
</script>