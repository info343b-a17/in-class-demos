import {createStore} from 'redux';

//actions
const BAKE_COOKIE = 'bake_cookie';
const EAT_COOKIE = 'eat_cookie';

//action creators (helpers to make available)
export function createBakeAction(flavor){
  return {
    type:BAKE_COOKIE,
    flavor:flavor
  }
}
export function createEatAction(cookieId){
  return {
    type:EAT_COOKIE,
    cookieId:cookieId
  }
}

//reducer
function cookieReducer(state, action){
  switch(action.type){
    case BAKE_COOKIE:
      let allCookies = state.cookies.concat({
        cookieId: state.baked,
        flavor:action.flavor
      });
      return {cookies:allCookies, baked:state.baked+1} 
    case EAT_COOKIE:
      let remaining = state.cookies.filter((c) => c.cookieId !== action.cookieId);
      return Object.assign({}, state, {cookies:remaining});
    default:
      return state;
  }
}

//store!
export let store = createStore(cookieReducer, {cookies: [], baked: 0});
