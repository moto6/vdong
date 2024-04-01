<template>
  <div class='container'>
  <br><br><br><hr>

  <h3>푸터@@@</h3>

  <br><br><br>

  <div class='botinfo'>
    <div class='botbtngroup'>
      <button class='btn-text'>찾아오시는 길</button>
      <button class='btn-text'>개인정보취급방침</button>
      <button class='btn-text'>이용 약관</button>
      <button class='btn-gray'>저자 신청</button>
      <button class='btn-gray'>역자 신청</button>
      <button class='btn-gray'>교재 샘플/강의자료 신청</button>
    </div>
  </div>
  <div class='footerinfo'>
    <div class='footer-logo'><img src='/images/footer-logo.png'  alt='푸터로고'/></div>
    <div class='footer-sub'>
      <address>
        경기도 성남시 어쩌구  <span>Tel 034-333-412112</span>
      </address>
      <p>email@email.com / 2020-남남-001234</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      myData: null
    }
  },
  watch: {
    myData() {

    }
  },
  methods: {
    getData() {

    }
  }
}
</script>

<style scoped>


</style>
