import { createApp } from 'vue'
import Vuex from 'vuex'
import storage from "./modules/storage";
import * as getters from "./modules/getters";
import * as mutations from "./modules/mutations";

const app = createApp();
app.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch(),
        userName: storage.fetchName(),
        todoOldestOrder: true
    },
    getters: getters,
    mutations: mutations
});


/*
*
* - state : 상태 변수

vuex는 single state tree(단일 상태 트리)를 사용한다.
애플리케이션마다 하나의 저장소만 갖게 된다는 것을 의미한다.
state는 key:value로 구성되며, 콤마(,)로 다중으로 선언 가능하다.
todoItems : storage.fetch()
- 화면에서 Todo 아이템 목록.
- storage.js 에 있는 fetch() 함수를 통해서 관리한다.(아래에서 설명)
userName: strage.fetchName()
- 화면에서의 사용자 이름.
- storage.js 에 있는 fetchName() 함수를 통해서 관리한다.
todoOldestOrder
- 아이템 목록의 정렬 순서
- getters : state를 계산 또는 변형 시 호출

getters는 콤마(,)로 다중 함수를 선언 가능하다.
함수의 첫 번째 인자는 state(상태)이고 두 번째 인자는 getters 이다.
getters.js 에서 관리한다.(아래에서 설명)
- mutations : state를 변경할 때 호출

state는 직접 변경할 수 없다.
핸들러 함수를 통해서 state를 변경해야 한다.(setter 로 생각)
함수의 첫 번째 인자는 state(상태)이고 두 번째 인자는 payload(전송되는 데이터)이다.
mutations.js 에서 관리한다.
* */