<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <Sidebar :collapsed="state.collapsed" :onClose="onClose" :logout="logout" />
    <a-layout>
      <Header :title="title" :showDrawer="showDrawer" />
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
  import { MENU } from "../../../../config/menu";
  import { clearCookies } from "../../../../utils/cookies";

  export default {
    name: 'Main',
    components: {
      Header,
      Sidebar,
      Dashboard
    },
    props: {
      title: String
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
    methods: {
      showDrawer() {
        this.state.collapsed = true;
      },
      onClose() {
        this.state.collapsed = false
      },
      logout() {
        clearCookies();
        this.$router.push(MENU.LOGIN)
      }
    },
  }
</script>