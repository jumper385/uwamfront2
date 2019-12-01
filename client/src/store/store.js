import { createStore } from 'redux'

const rootReducer = (state = {},action) => {
    switch(action.type){
        case 'UPDATE_ARTICLES':
            state = {state, ...action.payload}
            return state
        case 'GET_STATE':
            return state
        case 'DELETE_ARTICLE':
            const articleList = state.articles.filter(object => {
                return object.shortid !== action.payload
            })
            const articles = {articles: articleList}
            state = {...state, ...articles}
            return state
        default:
            return state
    }
}

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store