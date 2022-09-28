<template>
  <div class="container">
    <HeaderTop />
    <NavBar />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderTop from "./components/layout/Header.vue";
import NavBar from "./components/layout/NavBar.vue";

export default {
  name: "App",
  components: {
    HeaderTop,
    NavBar,
  },
  data() {
    return {
      modalOn: false,
      stockData: [],
      defaultData: {
        0: {
          amount: "0.1",
          avgPrice: "20,000,000",
          category: "coin",
          code: "BTC",
          codes: "KRW-BTC",
          en_name: "Bitcoin",
          name: "비트코인",
        },
        1: {
          amount: "10",
          avgPrice: "50,000",
          category: "stock",
          code: "005930",
          codes: null,
          en_name: null,
          name: "삼성전자",
        },
      },
    };
  },
};
</script>

<style></style>
