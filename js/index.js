/*
    # index.js

    - Application의 전반적인 로직 관리.
    - localStorage의 정보를 이용해 elements를 관리합니다.
    - elements들의 eventListener를 달아주는 init 함수들을 실행합니다.
*/

import { getLoginUser } from "./utils/localDB.js";
import { sliderInit } from "./components/slider.js";
import { dateInit } from "./components/date.js";
import { authInit } from "./components/auth.js";
import { clockInit } from "./components/clock.js";

let id = getLoginUser();

if (id === null) {
} else {
}

sliderInit();
dateInit();
authInit();
clockInit();
