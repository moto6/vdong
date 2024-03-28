<template>
  <div>
    <h2>LifeCycle Component</h2>
    LifeCycle LifeCycle!!

    <br><br><br><br>
    <input type='text' v-model='inputBox' />
    <button type='button' @click='getData'>GetData</button>
    <button type='button' @click='setData'>SetData</button>
  </div>
</template>

<script>
export default {
  name: 'LifeCycle',
  data() {
    return {
      title: '안녕하세요 제목이에요',
      inputBox: '입력박스입니다'
    }
  },
  methods: {
    getData() {
      alert(this.inputBox)
    },
    setData() {
      this.inputBox = "data is changed!"
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  // beforeDestroy() {
  //   console.log('beforeDestroy')
  // },
  // destroyed() {
  //   console.log('destroyed')
  // },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  }
}

</script>

<style scoped>

</style>
