<script setup>
import { ref } from "vue";

const open = ref(false);
</script>

<template>
  <button @click="open = true">모달 열기</button>
  <transition name="fade">
    <div v-if="open" class="modal">
      <div class="modal_wrap">
        <div class="profile_style">
          <!-- Code for the new pen -->
        </div>
        <br />
        <button @click="open = false">닫기</button>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  top: 0;
}

.modal_wrap {
  width: 400px;
  left: 50%;
  margin: 10% auto;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 100%;
}

.skill {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  animation: rotate 2s;
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

@keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
