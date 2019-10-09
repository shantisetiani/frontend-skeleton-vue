<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <Sidebar :collapsed="state.collapsed" :onClose="onClose" />
    <a-layout>
      <Header title="Dashboard" :showDrawer="showDrawer" />
      <a-layout-content class="main-content">
        <slot name="content" />
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
  import Header from "../header";
  import Sidebar from "../sidebar";
  import Dashboard from "../../../Dashboard.vue";
  import PropTypes from 'vue-prop-types';

  export default {
    name: 'Main',
    components: {
      Header,
      Sidebar,
      Dashboard
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