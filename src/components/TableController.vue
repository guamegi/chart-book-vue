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
        isModal="isModal"
        stockData="stockData"
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
import { ws, removeAllWebSocket } from "@/websocket";

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
  },
  components: {
    StockPopup,
  },
};
</script>
