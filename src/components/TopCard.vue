<template>
  <div class="row">
    <!-- 총 매수  -->
    <div class="col-6 col-sm-6 col-md-6 col-xl-3 mb-4">
      <div class="card shadow border-left-primary py-2">
        <div class="card-body">
          <div class="row align-items-center no-gutters">
            <div class="col mr-2">
              <div class="text-uppercase text-primary font-weight-bold mb-1">
                <span>총 매수</span>
              </div>
              <div class="text-dark font-weight-bold h5 mb-0">
                <span id="totalAmt">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 총 평가 -->
    <div class="col-6 col-sm-6 col-md-6 col-xl-3 mb-4">
      <div class="card shadow border-left-success py-2">
        <div class="card-body">
          <div class="row align-items-center no-gutters">
            <div class="col mr-2">
              <div class="text-uppercase text-success font-weight-bold mb-1">
                <span>총 평가</span>
              </div>
              <div class="text-dark font-weight-bold h5 mb-0">
                <span id="totalEval">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 평가 손익 -->
    <div class="col-6 col-sm-6 col-md-6 col-xl-3 mb-4">
      <div class="card shadow border-left-info py-2">
        <div class="card-body">
          <div class="row align-items-center no-gutters">
            <div class="col mr-2">
              <div class="text-uppercase text-info font-weight-bold mb-1">
                <span>평가손익</span>
              </div>
              <div class="text-dark font-weight-bold h5 mb-0 mr-3">
                <span id="totalProfit">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 수익률 -->
    <div class="col-6 col-sm-6 col-md-6 col-xl-3 mb-4">
      <div class="card shadow border-left-warning py-2">
        <div class="card-body">
          <div class="row align-items-center no-gutters">
            <div class="col mr-2">
              <div class="text-uppercase text-warning font-weight-bold mb-1">
                <span>수익률</span>
              </div>
              <div class="text-dark font-weight-bold h5 mb-0">
                <span id="totalProfitRate">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopCard",
};
</script>
