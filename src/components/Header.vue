<template>
  <div id="ub-header">
    <header class="ub-header shadow-gray">
      <div class="ub-header-main center-width-1100">
        <img class="ub-logo-img fl hand" src="../res/img/index/logo.png" alt="约辩">
      </div>
      <nav class="ub-nav-not-index">
        <ul class="ub-nav-ul clearFix">
          <li class="ub-nav-li fl"><router-link :to="{name:'index'}" replace>首页</router-link></li>
          <li class="ub-nav-li fl"><router-link :to="{name:'index'}">发现</router-link></li>
          <li class="ub-nav-li fl"><router-link :to="{name:'index'}">话题</router-link></li>
        </ul>
      </nav>
    </header>
    <!--<router-link :to="{name:'index'}" replace>首页</router-link>-->
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    components: {},
    computed: {},
    methods: {},
    created () {
    },
    activated () {
    },
    deactivated () {
    }
  }
</script>
<style scoped>
</style>
