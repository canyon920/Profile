<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";
// onMounted(() => {
//   Projects = "VirtualFlow";
// });
@Options({
  components: {
    ProfileComponent,
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  Projects = ["VirtualFlow", "YESCNC", "주식회사에이블유컴즈"];
}
</script>

<template>
  <div class="about">
    <ProfileComponent />
    <div>
      <ul>
        <li>
          <h3>{{ Projects[0] }} [프리랜서]</h3>
          <p>2023.08.07 ~ 2023.09.06</p>
          <h4>네이버 출근 [정자]</h4>
          <div>Vue 와 Vue-Flow 를 통한 그래프 서비스를 구현 했습니다.</div>
          <br />
          <div>
            <img src="../assets/VirtualFlow.png" />
          </div>
        </li>
        <br />
        <br />
        <br />
        <li>
          <h3>{{ Projects[1] }}</h3>
          <p>2022.10.14 ~ 2023.01.24</p>
          <p><b>YESCNC 출근 [뚝섬]</b></p>
          <div>삼성 자동화 시스템 선행 개발</div>
          <br />
          <br />
          <br />
          <p>
            MySQL, Flask, Vue 를 통한 로그인 유저 정보 어드민 페이지 구현를
            구현했습니다.
          </p>
          <p>MySQL, Flask, Vue를 통한 프로젝트 생성 페이지를 구현 했습니다.</p>
          <p>
            MySQL, Flask, Vue를 통한 유저 정보 관련 설정 페이지를 구현 했습니다.
          </p>
          <br />
          <div>
            <img src="../assets/TestPortal.png" alt="" /> <br />
            <img src="../assets/TestPortal02.png" alt="" />
          </div>

          <p>2022.03.02 ~ 2022.10.13</p>
          <p><b>YESCNC 근무 [뚝섬]</b></p>
          <p><b>Vue, Node, React, Javascript, Html, Css 세미나 강의 진행</b></p>
        </li>
        <br /><br />
        <li>
          <h3>{{ Projects[2] }}</h3>
          <p>2023.08.07 ~ 2023.09.06</p>
          <p><b> 소노 호텔[송파]</b></p>
          <div>Java와 Vue 를 통한 홈페이지 리뉴얼을 구현 했습니다.</div>
          <br />
          <div>
            <img src="../assets/Sono.png" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
div {
  width: auto;
  margin: 0;
  padding: 0;
  font-family: "SBAggro";
}

section {
  margin: 0;
  padding: 0;
}

.main_section {
  width: 100%;
  height: 1020px;
  background-color: black;
}

ul {
  margin: 0 auto;
}

ul > li {
  list-style: none;
}
img {
  width: 1200px;
}

.about {
  margin: 0 auto;
  text-align: center;
}

.about > div {
  margin: 0 auto;
}
</style>
