<template>
  <el-container>
    <api-sidebar
      :methods="httpMethods"
      :tags="apiSpecs.tags"
    />
    <el-main class="api-view">
      <api-view
        :info="apiSpecs.info"
        :servers="apiSpecs.servers"
        :methods="httpMethods"
        :externalDocs="apiSpecs.externalDocs"
      ></api-view>
    </el-main>
  </el-container>
</template>

<script>
import yaml from 'js-yaml'
import APISidebar from '../components/APISidebar'
import APIView from '../components/APIView'

export default {

  components: {
    "api-sidebar": APISidebar,
    "api-view": APIView
  },
  data () {
    return {
      apiSpecs: {}
    }
  },

  mounted () {
    this.fetchApiSpecs()
  },

  computed: {
    httpMethods () {
      const result = []
      const items = this.apiSpecs.paths
      if (items) {
        for (const item in items) {
          const path = items[item]
          for (const method in path) {
            result.push({ method, ...path[method] })
          }
        }
      }
      return result
    }
  },

  methods: {
    fetchApiSpecs () {
      const apiSpecsUrl = this.$site.themeConfig.apiSpecsURL
      fetch(apiSpecsUrl).then(res => res.text()).then(res => {
        yaml.safeLoadAll(res, (jsonSpecs) => {
          this.apiSpecs = jsonSpecs
        })
      })

    }
  }
}
</script>

<style lang="stylus">
.api-view {
  margin-left: 23rem;
  max-width: 800px;
  line-height: 2;
}

.method-badge {
  background-color: lighten(blue, 95%);
  display: inline-block;
  padding: 0.2rem 0.5rem;
  margin-right: 1rem;
  width: 2.1rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  color: white;
  font-size: 0.6rem;
  text-transform: uppercase;
}

.method-badge.method-put {
  background-color: lighten(orange, 40%);
}

.method-badge.method-get {
  background-color: lightgreen;
}

.method-badge.method-post {
  background-color: skyblue;
}

.method-badge.method-delete {
  background-color: lighten(red, 40%);
}
</style>