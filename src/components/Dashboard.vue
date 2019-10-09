<template>
  <Main>
    <template v-slot:content>
      <div id="dashboard-container" :style="{ height: state.height + 'px' }">
        <div class="dashboard-container-mask">
          <div class="dashboard-text-container">
            <div>Welcome to</div>
            <h1>Skeleton Dashboard!</h1>
            <div>"Who you are tomorrow begins with what you do today."</div>
            <div class="dashboard-text-quote-source">- Tim Fargo</div>
          </div>
        </div>
      </div>
    </template>
  </Main>
</template>

<script>
  import Main from "./shared/layouts/main";
  import Header from "./shared/layouts/header";
  import PropTypes from 'vue-prop-types';

  export default {
    name: 'Dashboard',
    components: {
      Main,
      Header,
    },
    data() {
      return {
        state : {
          collapsed: false,
          height: 0
        },
        styleObject: {
          height: "100%"
        },
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
      })
    },
    beforeDestroy: function () {
      window.removeEventListener("resize", this.updateWindowDimensions);
    },
    methods: {
      showDrawer() {
        this.state.collapsed = true
      },
      onClose() {
        this.state.collapsed = false
      },
      updateWindowDimensions() {
        this.state.height = window.innerHeight - 64;
      },
    },
  }
</script>