<template>
  <hr />
  <div class="row d-flex justify-content-between">
    <!-- <div
          class={
            isMobile
              ? "col-xl-3 col-md-5 col-sm-6 d-flex justify-content-center"
              : null
          }
        > -->
    <div class="isMobile">
      <div
        id="addStock"
        class="btn btn-light ml-2"
        role="button"
        onClick="{openModal}"
        ref="{addButtonEl}"
      >
        <i class="fas fa-plus mr-2"></i>
        종목 추가
      </div>
      <div
        class="btn btn-light text-danger ml-2"
        role="button"
        onClick="{removeAllStock}"
      >
        <i class="fas fa-trash mr-2"></i>
        전체 삭제
      </div>
      {modalOn ? (
      <SearchStockPopup
        modalOn="{modalOn}"
        setModalOn="{setModalOn}"
        stockData="{stockData}"
        setStockData="{setStockData}"
        ref="{stockPopupEl}"
      />
      ) : ( "" )}
    </div>
    <!-- <div
          class={
            isMobile
              ? "col-xl-3 col-md-5 col-sm-6 d-flex justify-content-center"
              : null
          }
        > -->
    <div class="isMobile">
      <button class="btn btn-info" onClick="{saveData}">종목 저장</button>
      <button class="btn btn-success ml-2" onClick="{getData}">get data</button>
      <button class="btn btn-danger ml-2" onClick="{stopData}">
        stop data
      </button>
    </div>
  </div>
  <hr />
</template>

<script>
function checkMobile() {
  const user = navigator.userAgent;
  let isCheck = false;

  if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
    isCheck = true;
  }

  return isCheck;
}

export default {
  name: "TableController",
  data() {
    return {
      isMobile: checkMobile()
        ? "col-xl-3 col-md-5 col-sm-6 d-flex justify-content-center"
        : null,
    };
  },
};
</script>
