<template>
  <div class="row">
    <div class="table-responsive">
      <table class="table table-bordered" width="100%">
        <thead class="thead-light">
          <tr>
            <th>종목</th>
            <th>현재가</th>
            <th>전일대비</th>
            <th>평균단가</th>
            <th>수량</th>
            <th>평가금액</th>
            <th>평가손익</th>
            <th>수익률</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody id="dataTable">
          <div v-if="stockData.length > 0">
            <tr
              v-for="(stock, index) in stockData"
              :key="index"
              :id="stock.code"
            >
              <td>{{ stock.name }}</td>
              <td
                v-bind:id="[
                  stock.category == 'stock'
                    ? `A${stock.code}-price`
                    : `${stock.code}-price`,
                ]"
              ></td>
              <td>
                <div
                  v-bind:id="[
                    stock.category == 'stock'
                      ? `A${stock.code}-changeRate`
                      : `${stock.code}-changeRate`,
                  ]"
                ></div>
                <div
                  class="small"
                  v-bind:id="[
                    stock.category == 'stock'
                      ? `A${stock.code}-changePrice`
                      : `${stock.code}-changePrice`,
                  ]"
                ></div>
              </td>
              <td>
                <input
                  class="stockInput avgPrice bg-light form-control small"
                  placeholder="평균단가 입력"
                  name="avgPrice"
                  type="tel"
                  v-bind:id="[
                    stock.category == 'stock'
                      ? `A${stock.code}-avgPrice`
                      : `${stock.code}-avgPrice`,
                  ]"
                  thousandSeparator="{true}"
                  v-bind:value="[stock.avgPrice ? stock.avgPrice : null]"
                />
              </td>
              <td>
                <input
                  class="stockInput amount bg-light form-control small"
                  placeholder="수량 입력"
                  name="amount"
                  type="tel"
                  v-bind:id="[
                    stock.category == 'stock'
                      ? `A${stock.code}-amount`
                      : `${stock.code}-amount`,
                  ]"
                  thousandSeparator="{true}"
                  v-bind:value="[stock.amount ? stock.amount : null]"
                />
              </td>
              <td
                class="eval"
                v-bind:id="[
                  stock.category == 'stock'
                    ? `A${stock.code}-eval`
                    : `${stock.code}-eval`,
                ]"
              ></td>
              <td
                class="profit"
                v-bind:id="[
                  stock.category == 'stock'
                    ? `A${stock.code}-profit`
                    : `${stock.code}-profit`,
                ]"
              ></td>
              <td
                v-bind:id="[
                  stock.category == 'stock'
                    ? `A${stock.code}-yield`
                    : `${stock.code}-yield`,
                ]"
              ></td>
              <td>
                <button
                  class="btn btn-light text-danger"
                  @click="removeStock(stock.code, index)"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          </div>
          <div v-else>
            <tr>
              <td colSpan="9" class="text-center">No Data...</td>
            </tr>
          </div>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ws, removeWebSocket } from "@/websocket";

export default {
  name: "DataTable",
  data() {
    return {
      stockData: [],
    };
  },
  methods: {
    removeStock(code, index) {
      console.log("remove");
      // console.log(code, index);
      // setStockData(stockData.filter((stock) => stock.code !== code));
      this.stockData = this.stockData.filter((stock) => stock.code !== code);
      if (ws.length > 0) {
        // 웹소켓 삭제
        removeWebSocket(index);
      }
    },
  },
};
</script>

<style scoped>
.stockInput {
  min-width: 100px;
}
</style>
