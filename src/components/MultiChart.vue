<template>
  <div class="row">
    <!-- Area Chart -->
    <div class="col-md-7">
      <div class="card shadow mb-4">
        <div
          class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
        >
          <h6 class="m-0 font-weight-bold text-primary">자산 흐름</h6>
        </div>
        <div class="card-body">
          <div class="chart-area">
            <canvas id="myAreaChart"></canvas>
          </div>
        </div>
      </div>
    </div>

    <!-- Pie Chart -->
    <div class="col-md-5">
      <div class="card shadow mb-4">
        <!-- Card Header - Dropdown -->
        <div
          class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
        >
          <h6 class="m-0 font-weight-bold text-primary">보유 비중</h6>
        </div>
        <div class="card-body">
          <div class="chart-pie pt-4 pb-2">
            <canvas id="myDoughnutChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultiChart",
};
</script>
