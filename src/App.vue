<template>
  <div class="container">
    <HeaderTop />
    <NavBar />
    <TopCard />
    <MultiChart />
    <TableController />
    <!-- <StockPopup
      modalOn="{modalOn}"
      setModalOn="{setModalOn}"
      stockData="{stockData}"
      setStockData="{setStockData}"
      ref="{stockPopupEl}"
    />
    <DataTable /> -->
  </div>
</template>

<script>
import HeaderTop from "./components/layout/Header.vue";
import NavBar from "./components/layout/NavBar.vue";
import TopCard from "./components/TopCard.vue";
import MultiChart from "./components/MultiChart.vue";
import TableController from "./components/TableController.vue";
// import StockPopup from "./components/StockPopup.vue";
// import DataTable from "./components/DataTable.vue";

export default {
  name: "App",
  components: {
    HeaderTop,
    NavBar,
    TopCard,
    MultiChart,
    TableController,
    // StockPopup,
    // DataTable,
  },
};
</script>

<style></style>
