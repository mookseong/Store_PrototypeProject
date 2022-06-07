// 제품 등록, 제품 삭제, 리스트 보여주기
export const DataManager = (function () {
    function DataManager() {
        this.dataList = [];
    }

    DataManager.prototype.register = function (item) {
        this.dataList.push(item);
    }
    // 장바구니에서 deleteItem이 실행되면 dataList에서 item을 찾아 항목을 삭제함
    DataManager.prototype.unregister = function (item) {
        this.dataList = this.dataList.filter((iName) => iName !== item);
        console.log("항목을 삭제했습니다.");
    };
    // 장바구니에서 showList가 실행되면 dataList를 출력해줌
    DataManager.prototype.getDataList = function () {
        this.dataList.forEach((item) => {
            try {
                console.log(item);
            } catch {
                console.log("장바구니에 물건이 없습니다.");
            }
        })
    }
    return DataManager;
}());

