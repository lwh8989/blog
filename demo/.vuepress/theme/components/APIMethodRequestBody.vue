<template>
  <div>
    <div v-if="requestBody">
      {{requestBody}}
    </div>
    <div v-else>
      <span>No Request Body!</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['requestBody']
}
</script>

<style>
</style>