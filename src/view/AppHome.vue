<template>
  <div>
    <h1>AppHome!</h1>

    <div class='button-container'>
      <a class='button' href='/helloWorld'>helloWorld</a>
      <a class='button' href='/test'>TestComponent</a>
      <a class='button' href='/about'>About Us</a>
      <a class='button' href='/join'>Join Us</a>
      <a class='button' href='/login'>Login</a>
      <a class='button' href='/life'>lifeCycle</a>
      <a class='button' href='/subComp'>subComp</a>
      <a class='button' href='/'></a>
      <a class='button' href='/ListComm'>ListComm</a>
      <a class='button' href='/appHeaderV2'>appHeaderV2</a>
      <a class='button' href='/bookDetail'>bookDetail</a>
      <a class='button' href='/dragtab'>dragtab</a>

    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHome'
}
</script>

<style scoped>
.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  display: block;
  margin-bottom: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  width: 150px;
}

.button:hover {
  background-color: #0056b3;
}
</style>
