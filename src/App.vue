<template>
  <div id="app">
    <keep-alive>
      <uubian-header></uubian-header>
    </keep-alive>
    <div class="content">
      <!-- TODO:这里还差个面包屑 -->
      <keep-alive>
        <transition name="slide-fade">
          <router-view></router-view>
        </transition>
      </keep-alive>
    </div>
    <keep-alive>
      <uubian-footer></uubian-footer>
    </keep-alive>
  </div>
</template>

<script>
  import uubianHeader from './components/Header'
  import uubianFooter from './components/Footer'
  export default {
    name: 'app',
    data () {
      return {
        isIndex: true
      }
    },
    components: {
      uubianHeader, uubianFooter
    },
    computed: {},
    methods: {},
    created () {
      this.isPublish = this.$config.isPublish
    },
    activated () {
    },
    deactivated () {
    },
    watch: {
      '$route' (to, from) {
        console.log('%c =============== VINSEA提示：路由改变了 ===============', 'color:green')
      }
    }
  }
</script>

<style src="./res/css/index.css"></style>
<style src="./res/css/common/reset.css"></style>
<style>
  
  /*切换页面的动画*/
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-active {
    /*padding-left: 10px;*/
    opacity: 0;
  }
</style>
