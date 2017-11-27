//where our Redux store lives
import { createStore } from 'redux';

//Actions
const ADD_COOKIE = 'add_cookie';
const EAT_COOKIE = 'eat_cookie';

//Action creators
export function createBakeAction(flavor){
    let action = {type:ADD_COOKIE, flavor:flavor};
    return action;
}

export function createEatAction(cookieId){
    return { type:EAT_COOKIE, cookieId:cookieId };
}

function cookieReducer(state, action){
    switch(action.type){
        case ADD_COOKIE:
            let allCookies = state.cookies.concat({ //new array!
                cookieId: state.baked,
                flavor: action.flavor
            });
            
            return { cookies:allCookies, baked:state.baked+1 }; //return the new state

        case EAT_COOKIE:
            let remainingCookies = state.cookies.filter((c) => c.cookieId !== action.cookieId);

            return Object.assign({}, state, {cookies: remainingCookies});
        default:
            return state; //make no changes!
    }
}

//actual Redux store
const initialState = { cookies: [], baked: 0 };
export const store = createStore(cookieReducer, initialState);
