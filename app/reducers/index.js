/**
 * Created by jialao on 2016/10/10.
 */
import {combineReducers} from 'redux'

const today = (state = [],action) => {
    switch(action.type){
        case 'GET_TODAY':
            return action.data.data.stories;
        default:
            return state;
    }
}

const history = (state = [],action) =>{
    switch(action.type){
        case 'GET_HISTORY' :
            return action.data.stories;
        default:
            return state;
    }
}

const hot = (state = [],action) => {
    switch(action.type){
        case 'GET_HOT':
            return action.data.data.recent;
        default:
            return state;
    }
}

const mainList = (state = [],action) => {
    switch(action.type){
        case 'GET_LATEST':
            return action.data.data.stories;
        case 'GET_HISTORY':
            return [...state,...action.data.stories];
        default:
            return state;
    }
}

const themeList = (state = [],action) => {
    switch(action.type){
        case 'LOAD_THEME_LIST':
            return action.list;
        default:
            return state;
    }
}

const theme = (state = {},action) => {
    switch(action.type){
        case 'GET_THEME':
            return Object.assign({},action.theme);
        default:
            return state;
    }
}

const detail = (state = {},action) => {
    switch(action.type){
        case 'GET_DETAIL':
            return Object.assgin({},state,action.data);
        case 'EMPTY_DETAIL':
            return {};
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    today,
    history,
    mainList,
    themeList,
    theme,
    hot,
    detail
})

export default rootReducer;
