<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu
        v-for="tag in tags"
        :title="tag.name"
        :index="tag.name"
      >
        <template slot="title">
          <span>{{tag.name}}</span>
        </template>
        <el-menu-item
          v-for="method in methods.filter(method => method.tags[0] === tag.name)"
          :index="method.operationId"
          :key="method.operationId"
          @click="handleMenuItemClick(method.operationId)"
        >
          <span
            class="method-badge"
            :class="`method-${method.method}`"
          >{{method.method}}</span>
          <span>{{method.operationId}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'api-sidebar-menu',

  props: [
    'methods',
    'tags'
  ],

  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    handleMenuItemClick (mehtodId) {
      this.$router.push({ hash: `#${mehtodId}` })
    }
  }
}
</script>
