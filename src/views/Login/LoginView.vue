<script setup>
import ButtonComponent from "@/components/ButtonComponent";
import { ref } from "vue";

const email = ref("");
const password = ref("");

const submitForm = () => {
  console.log(email);
  // event.preventDefault(); 위 form태그에 event Modifiers로 적용(.prevent)
  if (email.value === example[0] && password.value === password_example[0]) {
    alert("로그인 성공");
  } else {
    alert("로그인 실패");
  }
};

// const submit = (e) => {
//   console.log(e.target.value);
// };

const submit = (e) => {
  console.log(e);
};
const example = ["test@naver.com"];
const password_example = ["test"];
</script>
<template>
  <div class="login_container">
    <ButtonComponent />
    <!--    <form @click="login" class="login_form">-->
    <form v-on:submit.prevent="submitForm">
      <div>
        <label for="username">id: </label>
        <input id="username" type="text" v-model="email" />
      </div>
      <div>
        <label for="password">pw: </label>
        <input id="password" type="password" v-model="password" />
      </div>
      <button type="submit">login</button>
    </form>
  </div>
</template>

<style>
.login_container {
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  justify-items: center;
  text-align: center;
  position: absolute;
}

.login_wrap {
  margin: 0 auto;
  justify-content: center;
  justify-items: center;
  text-align: center;
}

input {
  background-color: black;
  color: white;
  border: none;
  padding: 20px;
  margin: 20px;
  border-radius: 25px;
}

input:hover {
  color: white;
  border: none;
  animation: scale_ani 0.5s;
  z-index: 99;
}

@keyframes scale_ani {
  0% {
  }
  100% {
    scale: 1.1;
  }
}

.login_form {
  animation: fadeIn 3s ease-in-out;
  z-index: 999;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
