<script setup>
import { computed, ref } from "vue";

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
let random_quiz = ref([]);

// Point, Deepening
function setLowerCase(point, deepening) {
  while (LowerAnswer.value <= 5) LowerAnswer.value.push(point, deepening);
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

let level_now = 0;

const answer_hint = ["Vue에서  DOM을 접근하는 방법은?"];

for (let i = 0; i < answer_hint.length; i++) {
  console.log("answer Hint", answer_hint[0]);
}

const resultHint = [];

function shuffleHint() {
  for (let i = 0; i < point.length; i++) {
    const j = Math.floor(Math.random() * (answer_hint.length - i));
    const temp = answer_hint[i];
    answer_hint[i] = answer_hint[j];
    answer_hint[j] = temp;
    resultHint.push(answer_hint[i]);
  }
}

let check_point = "";

const checkPoint = () => {
  const set = () => {
    for (let i = 0; i < answer_hint.length; i++) {
      if (deepening[0] === point[0]) {
        check_point = "다음 단계로 넘어갑니다.";
        return alert(check_point);
      } else {
        check_point = "정답이 일치하지 않습니다.";
        return alert(check_point);
      }
    }
  };
  set();
};

shuffleHint();

function startShuffle() {
  show_point.value = true;
  ShuffleGame();
  shuffleHint();
}

let hasError = ref(false);

// if (LowerAnswer.value) {
//   const style = {
//     color: "red",
//     backgroundColor: "black",
//   };
// }

let isActive = ref(false);
const error = ref(null);

const classObject = computed({
  active: isActive.value && !error.value,
  "text-danger": error.value && error.value.type === "fatal",
});

function take_random_answer() {
  ShuffleGame();
  isActive = true;
}
let show_point = ref(false);
</script>
<template>
  <div>
    <button @click="startShuffle">게임 시작</button>
    <table>
      <thead
        class="static"
        :class="{ active: isActive, 'text-danger': hasError }"
      >
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
          <td
            v-for="point in point"
            :key="point"
            class="static"
            :class="{ active: isActive, 'text-danger': hasError }"
          >
            <div v-if="show_point">
              <button @click="checkPoint" class="start_button">
                {{ point }}
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      {{ level_now }} {{ resultHint[0] }}
      <p></p>
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
