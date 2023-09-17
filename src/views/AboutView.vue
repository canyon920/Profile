<script setup>
import { computed, ref } from "vue";

const point = {
  "앱 생성": "Vue에서  DOM을 접근하는 방법은?",
  "App을 생성하는 방법은?": "npm run serve",
  "템플릿 문법": `<template></template>`,
  "반응형 기초": "ref",
  "계산된 속성": "정답",
  "클래스와 스타일 바인딩": "정답",
  "조건부 렌더링": "정답",
  "리스트 렌더링": "정답",
  "이벤트 핸들링": "정답",
  "Form 입력 바인딩": "정답",
  "생명주기 훅": "정답",
  "감시자 ": "정답",
  "템플릿 참조": "정답",
  "컴포넌트 기초": "정답",
  "npm run serve": "정답",
  Template: "정답",
};

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

let LowerAnswer = ref([]);
let random_quiz = ref([]);

// Point, Deepening
// function setLowerCase(point, deepening) {
//   while (LowerAnswer.value <= 5) LowerAnswer.value.push(point, deepening);
// }

// setLowerCase(point, deepening);
// console.log(LowerAnswer);

function ShuffleGame() {
  for (let i = 0; i < point.length; i++) {
    const random_index = Math.floor(Math.random() * (point.length - i));
    const temp = point[i];
    point[i] = point[random_index];
    point[random_index] = temp;
  }
}
ShuffleGame();
console.log(point);

// function shuffleHint() {
//   for (let i = 0; i < point.length; i++) {
//     const j = Math.floor(Math.random() * (answer_hint.length - i));
//     const temp = answer_hint[i];
//     answer_hint[i] = answer_hint[j];
//     answer_hint[j] = temp;
//     resultHint.push(answer_hint[i]);
//   }
// }
// shuffleHint();

function checkPoint() {
  return;
}

const startShuffle = (e) => {
  e.preventDefault();
  show_point.value = true;
  ShuffleGame();
  // shuffleHint();
};

let show_point = ref(false);
</script>
<template>
  <div>
    <button @click="startShuffle">게임 시작</button>
    <table>
      <thead class="static">
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
          <td>
            <div v-if="show_point" style="display: flex">
              <button
                v-for="(qu, index) in point"
                @click="checkPoint"
                :key="index"
                class="start_button"
              >
                {{ qu }}
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      <span> 문제 {{ Object.keys(point)[2] }} </span>
    </div>
  </div>
</template>

<style>
td,
th,
tr {
  width: 100px;
  height: 50px;
}

.active {
  background-color: black;
}

.start_button {
  background-color: white;
  color: black;
  border: none;
}

.start_button:active {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
