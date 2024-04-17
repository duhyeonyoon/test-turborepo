<script setup lang="ts">
import { onMounted } from "vue";
import { createRoot } from "react-dom/client";
import { lazy, createElement } from "react";

onMounted(() => {
  // @ts-ignore
  const Button = lazy(() => import("remoteApp/Button"));

  const container = document.createElement("div"); // React 컴포넌트를 렌더링할 DOM 요소 생성
  const root = createRoot(container); // React의 루트 생성

  root.render(createElement(Button));

  document.getElementById("reactRoot")?.appendChild(container);
});
</script>
<template>
  <header>
    <div class="gnb_container">
      <nav class="gnb">
        <RouterLink class="link" to="/a">A메뉴</RouterLink>
        <RouterLink class="link" to="/b">B메뉴</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  <div id="reactRoot"></div>
</template>

<style scoped>
.gnb-container {
  display: flex;
}
.gnb {
  display: flex;
  gap: 18px;
  font-size: 18px;
  background-color: black;
  height: 48px;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.link {
  color: white;
}
</style>
