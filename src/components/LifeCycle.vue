<template>
  <div>
    <h2>LifeCycle Component</h2>
    LifeCycle LifeCycle!!

    <br><br><br><br>
    <input type='text' v-model='inputBox' />
    <button type='button' @click='getData'>GetData</button>
    <button type='button' @click='setData'>SetData</button>
    <br>
    <h1> 이벤트 라이프사이클 및 훅 이라는 개념 이에유, 콘솔로그보셈</h1>
    <br><br><br>
    <h1>셀렉트 박스 만들어봐유</h1>
    <br>

    <select class='form-control'
            v-model='region'
            @change='changeReason'>
      <option
        :key='index'
        v-for='(data,index) in dataOptions'>
        {{ data.type }}
      </option>
    </select>


    <select class='form-control'>
      <option
        :key='index' :value='data.value'
        v-for='(data,index) in dataOptions'>
        {{ data.value }}
      </option>
    </select>
    <br><br><br>

    <br>
    <table class='table table-bordered'>
      <tr :key='index' v-for='(data,index) in dataOptions '>
        <td>{{ data.value }}</td>
        <td>{{ data.type }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'LifeCycle',
  data() {
    return {
      region: null,
      title: '안녕하세요 제목이에요',
      inputBox: '입력박스입니다',
      dataOptions: [
        { value: 'S', type: 'Seoul' },
        { value: 'J', type: 'Jeju' },
        { value: 'B', type: 'Busan' }
      ]
    }
  },
  watch: {
    input1() {

    },
    inputBox() {
      console.log('inputBox>', this.inputBox)
    }
  },
  methods: {
    getData() {
      alert(this.inputBox)
    },
    setData() {
      this.inputBox = "data is changed!"
    },
    changeReason() {
      alert(this.region)
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
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  }
  // beforeDestroy() {
  //   console.log('beforeDestroy')
  // },
  // destroyed() {
  //   console.log('destroyed')
  // },
}

</script>

<style scoped>

</style>
