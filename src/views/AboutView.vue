<script setup>
import { ref } from "vue";

const point = [
  "앱 생성",
  "템플릿 문법",
  "반응형 기초",
  "계산된 속성",
  "클래스와 스타일 바인딩",
  "조건부 렌더링",
  "리스트 렌더링",
  "이벤트 핸들링",
  "Form 입력 바인딩",
  "생명주기 훅",
  "감시자",
  "템플릿 참조",
  "컴포넌트 기초",
];

const deepening = [
  "등록",
  "Props",
  "이벤트",
  "v-model",
  "폴스루 속성",
  "슬롯",
  "Provide / inject",
  "비동기 컴포넌트",
];

const reusability = ["Composable", "Custom Directive", "Plug in"];

let LowerAnswer = ref([]);
function setLowerCase(point, deepening) {
  LowerAnswer.value.push(point, deepening);
}

setLowerCase(point, deepening);
console.log(LowerAnswer);

function ShuffleGame() {
  for (let i = 0; i < point.length; i++) {
    const j = Math.floor(Math.random() * (point.length - i));
    const temp = point[i];
    point[i] = point[j];
    point[j] = temp;
  }
}

const answer = ["01. Vue에서 DOM을 접근하는 방법은?"];

function startShuffle() {
  ShuffleGame();
}

function take_random_answer() {
  ShuffleGame();
  for (let i = 0; i < point.length; i++) {
    const j = Math.floor(Math.random() * (point.length - i));
    const temp = point[i];
    point[i] = point[j];
    point[j] = temp;
  }
}
</script>
<template>
  <div>
    <button @click="take_random_answer">게임 시작</button>
    <table>
      <thead>
        <!--        <th>-->
        <!--          <tr></tr>-->
        <!--          <tr></tr>-->
        <!--          <tr></tr>-->
        <!--          <tr></tr>-->
        <!--          <tr></tr>-->
        <!--        </th>-->
      </thead>
      <tbody>
        <tr>
          <td v-for="point in 5" :key="point">
            {{ point }}
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <div>
      Answer
      <p></p>
    </div>
  </div>
</template>

<style>
td,
th,
tr {
  width: 50px;
  height: 50px;
  border: 1px solid black;
}
</style>
