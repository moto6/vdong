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
    <button type='button' @click='blink'>보이기/숨기기</button>
    <h1 class='h1' v-if='tableShow'> 보였다가안보였다가 : V-IF
      <p class='h5'>v-if 는 조건을 만족안하면 아예 랜더링을 안함 "랜더링 변경"</p>
    </h1>
    <h1 class='h1' v-show='!tableShow'> 보였다가안보였다가 : V-SHOW
      <p class='h5'>v-show 는 무조건 랜더링함. 숨겼다가 보였다가만 함 "디스플레이 히든"</p>
    </h1>

    <br><br><br>
    <p>
      레슨런1 : @chage 를 통해서 이벤트콜백을 걸수 있다, 다중데이터는 v-for 를 이용하면 된다
    </p>
    <p>
      레슨런2 : v-if 조건에 따라서 화면에 보이게할수도, 안보이게 할 수도 있음
    </p>
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
      ],
      tableShow: true
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
    },
    blink() {
      this.tableShow = !this.tableShow
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
