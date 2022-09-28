<template>
  <hr />
  <div class="row d-flex justify-content-between">
    <div class="isMobile">
      <div
        id="addStock"
        class="btn btn-light ml-2"
        role="button"
        @click="openModal"
        ref="addButtonEl"
      >
        <i class="fas fa-plus mr-2"></i>
        종목 추가
      </div>
      <div
        class="btn btn-light text-danger ml-2"
        role="button"
        @click="removeAllStock"
      >
        <i class="fas fa-trash mr-2"></i>
        전체 삭제
      </div>
      <!-- {modalOn ? (
      <SearchStockPopup
        modalOn="{modalOn}"
        setModalOn="{setModalOn}"
        stockData="{stockData}"
        setStockData="{setStockData}"
        ref="{stockPopupEl}"
      />
      ) : ( "" )} -->
      <StockPopup
        v-show="isModal == true"
        :isModal="isModal"
        :stockData="stockData"
      />
    </div>
    <div class="isMobile">
      <button class="btn btn-info" @click="saveData">종목 저장</button>
      <button class="btn btn-success ml-2" @click="getData">get data</button>
      <button class="btn btn-danger ml-2" @click="stopData">stop data</button>
    </div>
  </div>
  <hr />
</template>

<script>
import StockPopup from "./StockPopup.vue";
import { ws, initWebSocket, removeAllWebSocket } from "@/websocket";

export default {
  name: "TableController",
  data() {
    return {
      isMobile: this.checkMobile()
        ? "col-md-5 col-sm-6 d-flex justify-content-center"
        : null,
      isModal: false,
      stockData: [],
    };
  },
  methods: {
    checkMobile() {
      const user = navigator.userAgent;
      let isCheck = false;
      if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
        isCheck = true;
      }
      return isCheck;
    },
    openModal() {
      // setModalOn(!modalOn);
      this.isModal = !this.isModal;

      // setTimeout(function () {
      //   if (stockPopupEl.current) {
      //     // console.log(stockPopupEl);
      //     stockPopupEl.current.focus();
      //   }
      // }, 100);
    },
    removeAllStock() {
      console.log("remove all");
      // setStockData([]);
      if (ws.length > 0) {
        // 웹소켓 전체 삭제
        removeAllWebSocket();
      }
    },
    saveData() {
      // console.log(stockData);
      // localstorage 저장. 종목 정보 + 평단/수량
      const data = [...this.stockData];
      for (let i in data) {
        // console.log(data[i]);
        let avgPriceInput = null;
        let amountInput = null;
        if (data[i].category === "stock") {
          avgPriceInput = document.querySelector(`#A${data[i].code}-avgPrice`);
          amountInput = document.querySelector(`#A${data[i].code}-amount`);
        } else {
          avgPriceInput = document.querySelector(`#${data[i].code}-avgPrice`);
          amountInput = document.querySelector(`#${data[i].code}-amount`);
        }
        // data에 인덱스 기준으로 평단,수량 저장
        data[i].avgPrice = avgPriceInput.value;
        data[i].amount = amountInput.value;
      }
      console.log("data:", data);
      localStorage.setItem("saveData", JSON.stringify(data));

      // 저장 성공 팝업
      alert("종목 저장 성공!");
    },

    getData() {
      if (ws.length > 0) removeAllWebSocket();
      console.log("get data");
      this.stockData.forEach((stock) => {
        // console.log(stockData);
        if (stock.category === "coin") {
          initWebSocket(stock.code, stock.codes);
        }
      });
      // console.log("ws:", ws);
    },

    // 실시간 off
    stopData() {
      console.log("stop data");
      if (ws.length > 0) removeAllWebSocket();
    },
  },
  components: {
    StockPopup,
  },
};
</script>
