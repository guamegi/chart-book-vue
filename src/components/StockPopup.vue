<template>
  <div class="container">
    <div class="input-group">
      <input
        class="bg-light form-control small"
        type="text"
        placeholder="종목명 입력"
        ref="ref"
        @input="searchStock($event)"
      />
      <div class="input-group-append">
        <button class="btn btn-primary py-0" type="button">
          <i class="fas fa-search" />
        </button>
      </div>
    </div>
    <div class="stockList">
      <ul>
        <div v-if="searchList.length > 0">
          <div v-for="stock in searchList" :key="stock.code">
            <li @click="() => selectStockList(stock.code)">
              <div class="row">
                <span class="col mr-2">{{ stock.name }}</span>
                <span class="col-auto">
                  <small class="font-weight-light">{{ stock.code }}</small>
                </span>
              </div>
            </li>
          </div>
        </div>
        <div v-else>
          <div v-for="stock in stockList" :key="stock.code">
            <li @click="() => selectStockList(stock.code)">
              <div class="row">
                <span class="col mr-2">{{ stock.name }}</span>
                <span class="col-auto">
                  <small class="font-weight-light">{{ stock.code }}</small>
                </span>
              </div>
            </li>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { initWebSocket } from "@/websocket";
import stockList from "../model/stockList";
import { addStockData } from "../model/crawler";

export default {
  name: "StockPopup",
  props: {
    isModal: Boolean,
    stockData: Array,
  },
  data() {
    return {
      stockList: stockList,
      isModals: this.isModal,
      searchList: [],
      newStockData: [...this.stockData],
    };
  },
  methods: {
    selectStockList(code) {
      // popup 닫기
      this.isModals = !this.isModals;

      // stockList 에 해당 code와 같은 종목 저장
      let stock = stockList.find((list) => list.code === code);

      // 중복 코드는 생성 안함
      if (this.stockData.filter((e) => e.code === code).length > 0) {
        alert("동일한 종목이 존재합니다. 다시 선택해주세요!");
        return;
      }
      console.log(code, stock);
      // 해당 종목의 table 추가
      // setStockData((list) => [...list, stock]);
      this.newStockData = [...this.newStockData, stock];

      let avgPriceInput = null;
      if (stock.category === "stock") {
        addStockData(stock.code);

        avgPriceInput = document.querySelector(`#A${stock.code}-avgPrice`);

        // stock 10초마다 호출
        setInterval(function () {
          addStockData(stock.code);
        }, 10000);
      } else {
        // coin 시세 호출
        initWebSocket(stock.code, stock.codes);

        avgPriceInput = document.querySelector(`#${stock.code}-avgPrice`);
      }
      // add 하면 input 에 포커스
      avgPriceInput.focus();
    },

    searchStock(e) {
      // console.log(e.target.value);
      // stockList에서 입력된 종목 검색
      const words = stockList.filter((stock) =>
        stock.name.includes(e.target.value.toUpperCase())
      );
      // console.log(words);
      // setSearchList(words);
      this.searchList = [...words];
    },
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  background-color: white;
  width: 250px;
  margin-top: 10px;
  z-index: 999;
  /* margin-left: 10px; */
}

.stockList {
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 200px;
  border: 1px solid #d1d3e2;
}

.stockList ul {
  list-style: none;
  padding-left: 0px;
}

.stockList li {
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
