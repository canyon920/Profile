<script setup>
import { ref } from "vue";

let is_open = ref(false);
const is_skill = () => (is_open.value = !is_open.value);

let modal = document.querySelector(".modal");

const variable_clear = (variable_first, variable_second, variable_third) => {
  return;
};

const set = (variable_first, modal, three) => {
  variable_first = "Hello Two";
  const sub_quest = () => {
    return set;
  };
};

const skill = ["TypeScript & Javascript", "React", "Vue"];
set(modal);
</script>
<template>
  <button @click="is_skill" class="is_front">Skill Tree</button>
  <transition name="fade">
    <div v-if="is_open" class="modal">
      <div class="modal_wrap">
        <div class="profile_style">
          <div class="container">
            <div class="container__progressbars">
              <ul class="skill_list">
                <li>
                  <div class="progressbar">
                    <span class="progressbar__text shadow-html">
                      {{ skill[0] }}</span
                    >
                  </div>
                </li>
                <li>
                  <div class="progressbar">
                    <span class="progressbar__text shadow-css">
                      {{ skill[1] }}</span
                    >
                  </div>
                </li>
                <li>
                  <div class="progressbar">
                    <span class="progressbar__text shadow-css">
                      {{ skill[2] }}</span
                    >
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- My social networks (imported from another pen)-->
          <div id="main-container-social" class="main-container-social"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
div {
  margin: 0;
  padding: 0;
}

.modal {
  position: relative;
  width: 100%;
  z-index: 10;
  display: flex;
  margin-top: 0%;
}

.modal_wrap {
  width: 100%;
  left: 50%;
  margin: 10% auto;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 100%;
}

.skill {
  width: 100px;
  height: 100px;
  top: 50%;
  border-radius: 100%;
  animation: rotate 2s;
}

.skill_list {
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

$color-black: hsl(0, 0%, 5%);
$color-color: hsl(0, 0%, 100%);

$color-html: hsl(15, 100%, 60%);
$color-css: hsl(200, 100%, 60%);
$color-scss: hsl(300, 100%, 60%);
$color-js: hsl(60, 100%, 60%);
$color-ts: hsl(220, 100%, 60%);
$color-node: hsl(110, 100%, 60%);
$color-react: hsl(180, 100%, 60%);
$color-angular: hsl(0, 100%, 60%);
$color-vue: hsl(145, 100%, 60%);

$porcent-html: 100;
$porcent-css: 100;
$porcent-scss: 100;
$porcent-js: 100;
$porcent-ts: 100;
$porcent-node: 100;
$porcent-react: 100;
$porcent-angular: 100;
$porcent-vue: 100;

//@function strokeDashoffset($num) {
//  @return 440 - (440 * $num) / 100;
//}

.container {
  display: flex;
  //justify-content: center;
  //align-items: center;
  //background-color: $color-black;
}

.container__progressbars {
  width: 100%;
  display: flex;
  //justify-content: space-around;
  //align-items: center;
}

.progressbar {
  position: relative;
  width: 170px;
  height: 170px;
  margin: 1em;
  transform: rotate(-90deg);
  animation: fadein 1s;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.progressbar__svg {
  position: relative;
  width: 100%;
}

.progressbar__svg-circle {
  width: 100%;
  fill: none;
  stroke-width: 10;
  stroke-dasharray: 440;
  stroke-dashoffset: 440;
  stroke: hsl(0, 0%, 100%);
  stroke-linecap: round;
  transform: translate(5px, 5px); // stroke-width / 2
}

.shadow {
  &-html {
    filter: drop-shadow(0 0 5px $color-html);
  }
  &-css {
    filter: drop-shadow(0 0 5px $color-css);
  }
  &-scss {
    filter: drop-shadow(0 0 5px $color-scss);
  }
  &-js {
    filter: drop-shadow(0 0 5px $color-js);
  }
  &-ts {
    filter: drop-shadow(0 0 5px $color-ts);
  }
  &-node {
    filter: drop-shadow(0 0 5px $color-node);
  }
  &-react {
    filter: drop-shadow(0 0 5px $color-react);
  }
  &-angular {
    filter: drop-shadow(0 0 5px $color-angular);
  }
  &-vue {
    filter: drop-shadow(0 0 5px $color-vue);
  }
}

.circle {
  &-html {
    animation: anim_circle-html 1s ease-in-out forwards;
  }
  &-css {
    animation: anim_circle-css 1s ease-in-out forwards;
  }
  &-scss {
    animation: anim_circle-scss 1s ease-in-out forwards;
  }
  &-js {
    animation: anim_circle-js 1s ease-in-out forwards;
  }
  &-ts {
    animation: anim_circle-ts 1s ease-in-out forwards;
  }
  &-node {
    animation: anim_circle-node 1s ease-in-out forwards;
  }
  &-react {
    animation: anim_circle-react 1s ease-in-out forwards;
  }
  &-angular {
    animation: anim_circle-angular 1s ease-in-out forwards;
  }
  &-vue {
    animation: anim_circle-vue 1s ease-in-out forwards;
  }
}

.progressbar__text {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0.25em 0.5em;
  color: hsl(0, 0%, 100%);
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 0.25em;
  transform: translate(-50%, -50%) rotate(90deg);
}

//  @keyframes

@keyframes anim_circle-html {
  to {
    stroke-dashoffset: strokeDashoffset($porcent-html);
  }
}

@keyframes anim_circle-css {
  to {
    stroke-dashoffset: strokeDashoffset($porcent-css);
  }
}

@keyframes anim_circle-scss {
  to {
    stroke-dashoffset: strokeDashoffset($porcent-scss);
  }
}

@keyframes anim_circle-js {
  to {
    stroke-dashoffset: strokeDashoffset($porcent-js);
  }
}

@keyframes anim_circle-ts {
  to {
    stroke-dashoffset: strokeDashoffset($porcent-ts);
  }
}

@keyframes anim_circle-node {
  to {
    stroke-dashoffset: strokeDashoffset($porcent-node);
  }
}

@keyframes anim_circle-react {
  to {
    stroke-dashoffset: strokeDashoffset($porcent-react);
  }
}

@keyframes anim_circle-angular {
  to {
    stroke-dashoffset: strokeDashoffset($porcent-angular);
  }
}

@keyframes anim_circle-vue {
  to {
    stroke-dashoffset: strokeDashoffset($porcent-vue);
  }
}

.is_front {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: black;
  color: white;
}
.is_front:active {
  background-color: navy;
  color: white;
  animation: front_animation 1s;
}

@keyframes front_animation {
  0% {
    opacity: 1;
  }
  100% {
    scale: 1.6;
  }
}
</style>
