<script setup></script>
<template>
  <div class="container">
    <div class="container__progressbars">
      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle
            cx="80"
            cy="80"
            r="70"
            class="progressbar__svg-circle circle-html shadow-html"
          ></circle>
        </svg>
        <span class="progressbar__text shadow-html">HTML</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle
            cx="80"
            cy="80"
            r="70"
            class="progressbar__svg-circle circle-css shadow-css"
          ></circle>
        </svg>
        <span class="progressbar__text shadow-css">CSS</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle
            cx="80"
            cy="80"
            r="70"
            class="progressbar__svg-circle circle-scss shadow-scss"
          ></circle>
        </svg>
        <span class="progressbar__text shadow-scss">SCSS</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle
            cx="80"
            cy="80"
            r="70"
            class="progressbar__svg-circle circle-js shadow-js"
          ></circle>
        </svg>
        <span class="progressbar__text shadow-js">JavaScript</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle
            cx="80"
            cy="80"
            r="70"
            class="progressbar__svg-circle circle-ts shadow-ts"
          ></circle>
        </svg>
        <span class="progressbar__text shadow-ts">TypeScript</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle
            cx="80"
            cy="80"
            r="70"
            class="progressbar__svg-circle circle-node shadow-node"
          ></circle>
        </svg>
        <span class="progressbar__text shadow-node">React.js</span>
      </div>

      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle
            cx="80"
            cy="80"
            r="70"
            class="progressbar__svg-circle circle-react shadow-react"
          ></circle>
        </svg>
        <span class="progressbar__text shadow-react">React.js</span>
      </div>
      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle
            cx="80"
            cy="80"
            r="70"
            class="progressbar__svg-circle circle-angular shadow-angular"
          ></circle>
        </svg>
        <span class="progressbar__text shadow-angular">Angular.js</span>
      </div>
      <div class="progressbar">
        <svg class="progressbar__svg">
          <circle
            cx="80"
            cy="80"
            r="70"
            class="progressbar__svg-circle circle-vue shadow-vue"
          ></circle>
        </svg>
        <span class="progressbar__text shadow-vue">Vue.js</span>
      </div>
    </div>
  </div>
  <!-- My social networks (imported from another pen)-->
  <div id="main-container-social" class="main-container-social"></div>
  <div class="chart dought1"><span class="center"> 80%</span></div>
</template>

<style lang="scss">
.fade-enter-form,
fade-leave-to {
  transform: scale(0);
}

.fade-enter-active,
fade-leave-active {
  transition: all 0.5s;
}

.fade-enter-to,
.fade-leave-from {
  transform: s(1);
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

@function strokeDashoffset($num) {
  @return 440 - (440 * $num) / 100;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-black;
}

.container__progressbars {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  min-width: 270px;
  //width: 100%;
  //min-height: 100%;
}

.progressbar {
  position: relative;
  width: 170px;
  height: 170px;
  margin: 1em;
  transform: rotate(-90deg);
}

.progressbar__svg {
  position: relative;
  width: 100%;
  height: 100%;
}

.progressbar__svg-circle {
  width: 100%;
  height: 100%;
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
</style>
