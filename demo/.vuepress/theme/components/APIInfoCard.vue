<template>
  <header v-if="info">
    <div class="api-info">
      <el-badge
        :value="info.version"
        class="item"
        type="primary"
      >
        <h1>{{info.title}}</h1>
      </el-badge>
      <markdown>{{info.description}}</markdown>
    </div>
    <div>
      <span>
        <span>License: </span>
        <span><a
            :href="info.license.url"
            target="_blank"
            rel="noopener noreferrer"
          >{{info.license.name}}</a>
          <OutboundLink /></span>
      </span>
      <span v-if="servers">
        <el-dropdown placement="right">
          <span class="el-link">
            Servers
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="server in servers">{{server.url}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </div>

  </header>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'api-info-card',

  props: ['info', 'servers'],

  components: {
    'markdown': VueMarkdown
  }
}
</script>

<style lang="stylus" scoped>
.api-info {
  h1 {
    margin: 0;
    text-align: center;
  }

  .servers-dropdown {
    margin-left: 2rem;
  }
}
</style>