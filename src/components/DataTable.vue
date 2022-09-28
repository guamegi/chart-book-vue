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
          <div v-if="stockData">
            <!-- <tr key={index} id={stock.code}>
                    <td>{stock.name}</td>
                    <td
                      id={`${
                        stock.category === "stock"
                          ? "A" + stock.code
                          : stock.code
                      }-price`}
                    ></td>
                    <td>
                      <div
                        id={`${
                          stock.category === "stock"
                            ? "A" + stock.code
                            : stock.code
                        }-changeRate`}
                      ></div>
                      <div
                        class="small"
                        id={`${
                          stock.category === "stock"
                            ? "A" + stock.code
                            : stock.code
                        }-changePrice`}
                      ></div>
                    </td>
                    <td>
                      <NumberFormat
                        class={`${styles.stockInput} avgPrice bg-light form-control small`}
                        placeholder="평균단가 입력"
                        name="avgPrice"
                        type="tel"
                        id={`${
                          stock.category === "stock"
                            ? "A" + stock.code
                            : stock.code
                        }-avgPrice`}
                        thousandSeparator={true}
                        value={stock.avgPrice ? stock.avgPrice : null}
                      />
                    </td>
                    <td>
                      <NumberFormat
                        class={`${styles.stockInput} amount bg-light form-control small`}
                        placeholder="수량 입력"
                        name="amount"
                        type="tel"
                        id={`${
                          stock.category === "stock"
                            ? "A" + stock.code
                            : stock.code
                        }-amount`}
                        thousandSeparator={true}
                        value={stock.amount ? stock.amount : null}
                      />
                    </td>
                    <td
                      class="eval"
                      id={`${
                        stock.category === "stock"
                          ? "A" + stock.code
                          : stock.code
                      }-eval`}
                    ></td>
                    <td
                      class="profit"
                      id={`${
                        stock.category === "stock"
                          ? "A" + stock.code
                          : stock.code
                      }-profit`}
                    ></td>
                    <td
                      id={`${
                        stock.category === "stock"
                          ? "A" + stock.code
                          : stock.code
                      }-yield`}
                    ></td>
                    <td>
                      <button
                        class="btn btn-light text-danger"
                        onClick={() => removeStock(stock.code, index)}
                      >
                        <i class="fas fa-trash "></i>
                      </button>
                    </td>
                  </tr> -->
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
import { addStockData } from "config/crawler";
export default {
  name: "DataTable",
  data() {
    return {
      stockData: [],
    };
  },
};
</script>

<style scoped>
.stockInput {
  min-width: 100px;
}
</style>
