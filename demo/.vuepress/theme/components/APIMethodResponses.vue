<template>
  <div>
    <div v-if="responses">
      <ul class="reponses">
        <li
          v-for="(res, code) of responses"
          :key="code"
          class="response-item"
        >
          <el-alert
            :type="code[0] === '2'? 'success': 'error'"
            :description="res.description"
            :closable="false"
            show-icon
          >
            <template slot="title">
              <span>
                {{code}}
              </span>
            </template>
          </el-alert>
        </li>
      </ul>
    </div>
    <div v-else>
      <span>No Responses!</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['responses']
}
</script>

<style lang="stylus" scoped>
ul.reponses {
  list-style: none;
  padding: 0;

  li.response-item {
    margin: 0.5rem auto;
  }
}
</style>