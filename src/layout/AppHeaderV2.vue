<template>
  <div class='topmenu'>
    <div class='contentbox'>

      <div class='system'>
        <button class='login' v-b-modal.login>로그인</button>
        <button class='member' v-b-modal.member>회원가입</button>
      </div>
    </div>
  </div>
  <nav>
    <div class='contentbox'>
      <ul>
        <li
          v-for='(item, index) in menulists'
          :key='index'
          v-on:click='goToPage(item.link)'
        >
          <button v-html='item.menutext'></button>
        </li>
      </ul>
    </div>
  </nav>

  <div class='btnwrap half'>
    <b-button type='submit' variant='login'>확인</b-button>
    <b-button type='reset' variant='cancel'>취소</b-button>
  </div>

</template>
<script>
export default {
  name: 'AppHeaderV2',
  data() {
    return {
      // 메뉴명 배열
      menulists: [
        { menutext: '도서 소개', link: '/book' },
        { menutext: '자료실', link: '/reference' },
        { menutext: '동영상 강의', link: '/movieclass' },
        { menutext: '교재 샘플', link: '/classsample' },
        { menutext: '회사 소개', link: '/company' }
      ],
      form: {
        id: '',
        pass: '',
        mail: '',
        checkedtype: []
      },
      Topclass: ''
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestory() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    goToPage(target) {
      if (this.$router.currentRoute.path !== target) {
        this.$router.push(target)
      }
    },
    Joinmember(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
      this.$nextTick(() => {
        this.form.id = ''
        this.form.pass = ''
        this.form.mail = ''
        this.form.checkedtype = []
      })
    },

    handleScroll() {
      const scrollTop = window.pageYOffset
      const headerTop = document.querySelector('header').clientHeight
      if (scrollTop < headerTop) {
        this.Topclass = ''
      } else {
        this.Topclass = 'scrollTop'
      }
    }
  }
}
</script>
