<template>
  <el-tabs
    v-model="activeName"
    @tab-click="handleClick"
  >
    <el-tab-pane
      label="Parameters"
      name="parameters"
    >
      <api-method-parameters :parameters="method.parameters"></api-method-parameters>
    </el-tab-pane>

    <el-tab-pane
      label="Responses"
      name="responses"
    >
      <api-method-responses :responses="method.responses"></api-method-responses>
    </el-tab-pane>

    <el-tab-pane
      label="Request Body"
      name="requestBody"
    >
      <api-method-request-body :requestBody="method.requestBody"></api-method-request-body>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import APIMethodParameters from './APIMethodParameters'
import APIMethodResponses from './APIMethodResponses'
import APIMethodRequestBody from './APIMethodRequestBody'

export default {
  props: ['method'],

  components: {
    'api-method-parameters': APIMethodParameters,
    'api-method-responses': APIMethodResponses,
    'api-method-request-body': APIMethodRequestBody
  },

  data () {
    return {
      activeName: 'parameters'
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
};
</script>