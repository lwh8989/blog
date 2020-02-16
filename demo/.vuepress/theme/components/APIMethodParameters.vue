<template>
  <div>
    <div v-if="parameters">
      <el-card
        v-for="param in parameters"
        :key="param.name"
        class="param-card"
        shadow="never"
      >
        <ul>
          <li v-for="(val, key) of param">
            <b>{{key}}:</b> <span>{{val}}</span>
          </li>
        </ul>
      </el-card>
    </div>
    <div v-else>
      <span>No Parameters!</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['parameters']
}
</script>

<style lang="stylus" scoped>
.param-card {
  margin 1rem auto;
}
</style>