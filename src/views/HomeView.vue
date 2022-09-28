<template>
  <div>
    <TopCard />
    <MultiChart />
    <TableController />
    <!-- 
    <StockPopup />
    <DataTable /> -->
  </div>
</template>

<script>
import TopCard from "../components/TopCard.vue";
import MultiChart from "../components/MultiChart.vue";
import TableController from "../components/TableController.vue";
// import StockPopup from "./components/StockPopup.vue";
// import DataTable from "./components/DataTable.vue";

export default {
  name: "HomePage",
  components: {
    TopCard,
    MultiChart,
    TableController,
    // StockPopup,
    // DataTable,
  },
};
</script>
