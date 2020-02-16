<template>
  <div>
    <api-info-card
      :info="info"
      :servers="servers"
    ></api-info-card>

    <div>
      <div
        class="api-method-detail"
        v-for="method in methods"
        :id="method.operationId"
      >

        <h2 class="method-title">
          <a
            :href="`#${method.operationId}`"
            class="anchor-icon"
          >
            <i class="el-icon-link"></i>
          </a>
          <span
            class="method-badge"
            :class="`method-${method.method}`"
          >
            {{method.method}}
          </span>
          <span>
            {{method.operationId}}
          </span>
        </h2>

        <p>{{method.summary}}</p>

        <el-card>
          <api-method-tabs :method="method"></api-method-tabs>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import APIInfoCard from './APIInfoCard'
import APIMethodTabs from './APIMethodTabs'

export default {
  props: ['info', 'servers', 'methods', 'externalDocs'],

  name: 'api-view',

  components: {
    'api-info-card': APIInfoCard,
    'api-method-tabs': APIMethodTabs
  },

  data () {
    return {
      activeNames: [],
      activeTab: 'content'
    }
  },

  methods: {
    handleChange (val) {
      console.log(val);
    },

    handleTabClick (tab, event) {

    }
  }
}
</script>

<style lang="stylus" scoped>
.api-method-detail {
  padding: 1rem;
  margin-bottom: 7rem;

  h2.method-title {
    display: flex;
    align-items: center;

    a.anchor-icon {
      display: none;
      margin auto 1rem;
    }

    &:hover {
      a.anchor-icon {
        display: block;
      }
    }
  }
}
</style>