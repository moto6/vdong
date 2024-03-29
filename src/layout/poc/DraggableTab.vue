<!--<template>-->
<!--  <draggable-tab>-->
<!--    <span class='draggable-tab-prev' @click='moveTab(true)'>-->
<!--      <i class='arr'></i>-->
<!--    </span>-->
<!--    <span class='draggable-tab-next' @click='moveTab(true)'>-->
<!--      <i class='arr'></i>-->
<!--    </span>-->
<!--    <div class='menuTab'-->
<!--         v-for='it in links'-->
<!--         v-bind:key='it.key'>-->
<!--      <router-link :to='it.path' ref='Item'>-->
<!--        <span>{{ it.title }}</span>-->
<!--      </router-link>-->
<!--    </div>-->

<!--  </draggable-tab>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'DraggableTab',-->
<!--  methods: {-->
<!--    moveTab(action) {-->
<!--      console.log(action)-->
<!--      //let idx = this.-->
<!--    }-->
<!--  },-->
<!--  data() {-->
<!--    const links = "sdf"-->
<!--    return {-->
<!--      links-->
<!--    }-->
<!--  },-->
<!--  watch: {-->
<!--    links: function(val) {-->
<!--      if (this.links.length <= 12) {-->
<!--        this.$store.dispatch('router/setMenuItems', val)-->
<!--        this.$store.dispatch('router/setMenuTabs', val)-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.draggable-tab-prev {-->
<!--  right: 21px;-->

<!--  .arr {-->
<!--    &:after {-->
<!--      position: absolute;-->
<!--      top: 13px;-->
<!--      left: 10px;-->
<!--      display: block;-->
<!--      width: 10px;-->
<!--      height: 1px;-->
<!--      margin-left: -5px;-->
<!--      background-color: #fff;-->
<!--      transition: background-color 0.2s ease-in-out;-->
<!--      content: "";-->
<!--      transform: rotate(45deg);-->
<!--    }-->

<!--    &:before {-->
<!--      content: '';-->
<!--      position: absolute;-->
<!--      top: 6px;-->
<!--      left: 10px;-->
<!--      display: block;-->
<!--      width: 10px;-->
<!--      height: 1px;-->
<!--      margin-left: -5px;-->
<!--      background-color: #fff;-->
<!--      transition: background-color 0.2s ease-in-out;-->
<!--      content: "";-->
<!--      transform: rotate(-45deg);-->
<!--    }-->
<!--  }-->
<!--}-->

<!--.draggable-tab-next {-->
<!--  right: 0;-->

<!--  &:before {-->
<!--    content: '';-->
<!--    position: absolute;-->
<!--    left: -1px;-->
<!--    height: 37px;-->
<!--    border-left: 1px solid #FFD000;-->
<!--  }-->

<!--  .arr {-->
<!--    &:after {-->
<!--      position: absolute;-->
<!--      top: 13px;-->
<!--      left: 10px;-->
<!--      display: block;-->
<!--      width: 10px;-->
<!--      height: 1px;-->
<!--      margin-left: -5px;-->
<!--      background-color: #fff;-->
<!--      transition: background-color 0.2s ease-in-out;-->
<!--      content: "";-->
<!--      transform: rotate(-45deg);-->
<!--    }-->

<!--    &:before {-->
<!--      content: '';-->
<!--      position: absolute;-->
<!--      top: 6px;-->
<!--      left: 10px;-->
<!--      display: block;-->
<!--      width: 10px;-->
<!--      height: 1px;-->
<!--      margin-left: -5px;-->
<!--      background-color: #fff;-->
<!--      transition: background-color 0.2s ease-in-out;-->
<!--      transform: rotate(45deg);-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
