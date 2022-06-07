import {DataManager} from "./Data/DataManager.js";
import {AirPod_Max} from "./data/product/AirPods.js";
import {iPad_Pro_5_SpaceGray} from "./data/product/iPad.js";
import {iPhone13, iPhone13_Option} from "./data/product/iPhone.js";
import {Watch7} from "./data/product/Watch.js";
import {Basket} from "./Function/basket/Basket.js";
import {buyS, Option} from "./function/buy/Buy.js";

// 이것들 한 번에 묶기
// facade pattern : 로직은 내부에서 작동하고 사용자에게는 간단한 인터페이스만 제공 => 사용자는 번호만 고르고 고른 번호에 따른 출력들을 숨기면 되나??
const iPhoneMainModel = function () {
    console.log(`모델명 : ${iPhone13.Name}`);
    console.log(`세대 : ${iPhone13.Generation}`);
    console.log(`색상 : ${iPhone13.Color}`);
    console.log(`성능 = {프로세서 : ${iPhone13.Performance.CPU}칩, 메모리 : ${iPhone13.Performance.RAM}, 저장공간 : ${iPhone13.Performance.Storage}GB, 화면크기 : ${iPhone13.Performance.ScreenSize}인치}`);
}

const iPadMainModel = function () {
    console.log(`모델명 : ${iPad_Pro_5_SpaceGray.Name}`);
    console.log(`세대 : ${iPad_Pro_5_SpaceGray.Generation}`);
    console.log(`색상 : ${iPad_Pro_5_SpaceGray.Color}`);
    console.log(`성능 = {프로세서 : ${iPad_Pro_5_SpaceGray.Performance.CPU}칩, 메모리 : ${iPad_Pro_5_SpaceGray.Performance.RAM}, 저장공간 : ${iPad_Pro_5_SpaceGray.Performance.Storage}GB, 화면크기 : ${iPad_Pro_5_SpaceGray.Performance.ScreenSize}인치}`);
}

const MacMainModel = function () {
    console.log(`모델명 : ${MacBook_Air.Name}`);
    console.log(`세대 : ${MacBook_Air.Generation}`);
    console.log(`색상 : ${MacBook_Air.Color}`);
    console.log(`성능 = {프로세서 : ${MacBook_Air.Performance.CPU}칩, 메모리 : ${MacBook_Air.Performance.RAM}, 저장공간 : ${MacBook_Air.Performance.Storage}GB, 화면크기 : ${MacBook_Air.Performance.ScreenSize}인치}`);
}

const AirPodMainModel = function () {
    console.log(`모델명 : ${AirPod_Max.Name}`);
    console.log(`세대 : ${AirPod_Max.Generation}`);
    console.log(`색상 : ${AirPod_Max.Color}`);
}

const WatchMainModel = function () {
    console.log(`모델명 : ${Watch7.Name}`);
    console.log(`세대 : ${iPhone13.Generation}`);
    console.log(`색상 : ${iPhone13.Color}`);
}

// 메인 메뉴 시작
console.log("환영합니다. AppleStore입니다.\n\n");

console.log("[제품보기 : 1. iPhone    2. iPad     3. Mac      4. AirPods      5. AppleWatch]\n");
const SearchMainModel = function (num) {
    switch (num) {   // switch 인자 뭐로 받아야 하지..
        case 1 :
            iPhoneMainModel();
            break;

        case 2 :
            iPadMainModel();
            break;
        case 3 :
            MacMainModel();
            break;
        case 4 :
            AirPodMainModel();
            break;
        case 5 :
            WatchMainModel();
            break;
    }
}

SearchMainModel(1);

// 이것도 case로 나눠서 실행해야 할 듯 (iPhone, iPad, ...)
console.log("\niPhone을 선택하셨습니다. 옵션을 선택해주세요.");
console.log(iPhone13_Option);
console.log("\n옵션 선택을 완료하였습니다.\n1. 구매하러 가기\t2. 장바구니에 담기\n");
const BuyOrBasket = function (num) {
    switch (num) {
        // 1. 구매기능으로 넘어가야 함.
        case 1 :
            console.log("[구매하기]")
            Option("iPhone");

        // 1. 장바구니로 넘어갈 때 datamanager라는 객체를 new로 생성해줘야 하는데 이러면 제품을 고를때마다 datamanager객체가 새로 생김.
        // 2. datamanager 객체를 생성해서 제품을 받을 때 사용자가 선택한 제품을 받아야 하는데 this 로 구분해주는 함수 만들어야 함.
        case 2 :
            buyS("iPhone");
    }
}

BuyOrBasket(1);
console.log('\n');
BuyOrBasket(2);