<script setup></script>
<template>
  <nav>
    <ul class="HeaderMain">
      <li><router-link to="/"> Home</router-link></li>
      |
      <li><router-link to="/About">About</router-link></li>
      |
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>
  <!--  <div class="black-bg" v-if="modalOpen === true">-->
  <!--    <div class="white-bg">-->
  <!--      <h3>상품 제목입니다.</h3>-->
  <!--      <p>상품 설명입니다.</p>-->
  <!--      <button v-on:click="modalOpen = false" class="modal-exit-btn">-->
  <!--        닫기-->
  <!--      </button>-->
  <!--    </div>-->
  <!--  </div>-->
  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  margin: 0;
  padding: 0;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

nav a.router-link-exact-active {
  color: #42b983;
}
ul {
  background-color: black;
  padding: 0;
  height: 50px;
  line-height: 50px;
}
ul > li {
  list-style: none;
  color: white;
  margin: 0 20px;
}

.HeaderMain {
  display: flex;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
<script>
export default {};
</script>
