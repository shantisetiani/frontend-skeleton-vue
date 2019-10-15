<template>
  <a-drawer
    title=" "
    placement="left"
    :closable="false"
    @close="onClose"
    :visible="collapsed"
  >
    <div>
      <div class="sidebar__profile">
        <a-avatar :size="40" icon="user"/>
      </div>
      <a-menu
        mode="inline"
        :defaultSelectedKeys="['1']"
        @click=""
      >
        <a-menu-item key="1">
          <router-link to="/dashboard">Dashboard</router-link>
        </a-menu-item>
        <a-menu-item key="2" @click="logout">
          Logout
        </a-menu-item>
      </a-menu>
    </div>
  </a-drawer>
</template>


<script>
  export default {
    name: 'Sidebar',
    props: {
      collapsed: Boolean,
      onClose: { type: Function },
      logout: { type: Function }
    }
  }
</script>