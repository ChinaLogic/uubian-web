<template>
  <div>
    <count-down v-show="isPublish"></count-down>
    <router-link :to="{name:'debatePage'}">点击查看辩论详情</router-link>
  </div>
</template>
<script>
  import countDown from './others/CountDown'
  export default {
    data () {
      return {
        isPublish: false
      }
    },
    components: {
      countDown
    },
    computed: {},
    methods: {},
    created () {
      this.isPublish = this.$config.isPublish
    },
    activated () {
    },
    deactivated () {
    }
  }
</script>
<style scoped>
</style>
