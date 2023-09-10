<script setup>
import { onMounted, ref } from "vue";
import DeveloperSKillModal from "@/modal/DeveloperSKillModal";
let typedText = ref("");
let txt = `긍정의 힘을 믿습니다. 항상 새로운 것에 관심을 갖고 있고, 끝 없이 노력과 \n 인내를 가져가며 배워가면 언젠가 결실이 이루어질 것이라 확신 합니다.`;
let i = 0;
const ViewText = () => {
  if (i < txt.length) {
    typedText.value += txt.charAt(i);
    i++;
    setTimeout(ViewText, 100);
  }
};

const Profile = [
  {
    name: "김동원",
    Phone: "010-2623-3000",
    Birth: "92.09.02",
    Email: "Canyon920@gmail.com",
    Address: "서울시 관악구",
    Carrer: "2년차",
  },
];

const result = [];

// for (let i = 0; i < Profile.length; i++) {
//   result.push(Profile[i]);
// }

onMounted(() => {
  ViewText();
});
</script>

<template>
  <section>
    <div class="profile_wrap">
      <div class="Profile">{{ txt }}</div>
    </div>
  </section>
  <DeveloperSKillModal />
  <div class="ProfileComponent">
    <div>Profile</div>
    <br /><br /><br />
    <section>
      <ul class="profile-wrap">
        <li>
          <ul class="profile_list">
            <li>
              <div>
                <p class="profile_key">{{ Object.keys(Profile[0])[0] }}</p>
                <p>{{ Object.values(Profile[0])[0] }}</p>
              </div>
            </li>
            <li>
              <div>
                <p class="profile_key">{{ Object.keys(Profile[0])[1] }}</p>
                <p>{{ Object.values(Profile[0])[1] }}</p>
              </div>
            </li>
            <li>
              <div>
                <p class="profile_key">{{ Object.keys(Profile[0])[2] }}</p>
                <p>{{ Object.values(Profile[0])[2] }}</p>
              </div>
            </li>
          </ul>
          <ul class="profile_list2">
            <li>
              <div>
                <p class="profile_key">{{ Object.keys(Profile[0])[3] }}</p>
                <p>{{ Object.values(Profile[0])[3] }}</p>
              </div>
            </li>
            <li>
              <div>
                <p class="profile_key">{{ Object.keys(Profile[0])[4] }}</p>
                <p>{{ Object.values(Profile[0])[4] }}</p>
              </div>
            </li>
            <li>
              <div>
                <p class="profile_key">{{ Object.keys(Profile[0])[5] }}</p>
                <p>{{ Object.values(Profile[0])[5] }}</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<style>
ul {
  margin: 0;
  padding: 0;
}
.Profile {
  margin: 0 auto;
  color: black;
  text-align: center;
  width: 48ch;
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 1.6em;
  white-space: pre;
  margin: 200px auto;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
ul {
  list-style: none;
}

.profile-wrap {
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
}

.ProfileComponent {
  margin-top: 300px;
}

.profile_list {
  width: 100%;
  display: flex;
  text-align: center;
}

.profile_list > li {
  width: 200px;
  height: 100px;
  list-style: none;
  border: 1px solid black;
  padding: 20px;
  margin: 20px;
}

.profile_list2 > li {
  width: 200px;
  height: 100px;
  padding: 20px;
  margin: 20px;
  list-style: none;
  border: 1px solid black;
  border-radius: 25px;
}

.profile_list2 {
  display: flex;
}

.profile_list2 > li {
  width: 200px;
  height: 100px;
  list-style: none;
}

.profile_key {
  background-color: black;
  color: white;
}
</style>
