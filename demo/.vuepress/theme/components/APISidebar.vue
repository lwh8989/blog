<template>
  <el-aside class="api-sidebar">
    <div class="api-sidebar__header">
      <router-link
        :to="$localePath"
        class="home-link"
      >
        <img
          class="logo"
          v-if="$site.themeConfig.logo"
          :src="$withBase($site.themeConfig.logo)"
          :alt="$siteTitle"
        >
        <h1
          ref="siteName"
          class="site-name"
          v-if="$siteTitle"
          :class="{ 'can-hide': $site.themeConfig.logo }"
        >
          {{ $siteTitle }}
        </h1>
      </router-link>
    </div>
    <div>
      <api-search-box />
      <api-sideabr-menu :methods="methods" :tags="tags"/>
    </div>
  </el-aside>
</template>

<script>
import APISearchBox from './APISearchBox'
import APISidebarMenu from './APISidebarMenu'

export default {
  name: 'api-sidebar',

  props: [
    'methods',
    'tags'
  ],

  components: {
    'api-search-box': APISearchBox,
    'api-sideabr-menu': APISidebarMenu
  }

}
</script>

<style lang="stylus" scoped>
.api-sidebar {
  height: 100vh;
  border-right: 1px solid #DCDFE6;
  position: fixed;
  width: 23rem;

  &__header {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #DCDFE6;
    margin-bottom: 1rem;

    .home-link {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-size: 1.2rem;
      }

      .logo {
        max-width: 10rem;
      }
    }
  }
}
</style>