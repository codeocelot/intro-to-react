import ReactDOM from 'react-dom'
import React from 'react'
import 'style/style.scss'

import {createStore} from 'redux'
import {connect,Provider} from 'react-redux'
import {combineReducers} from 'redux'

import App from './app'

export const addNode = (yId) => ({type:"ADD_NODE",yId})

const nodeReducer = (state = [],action) => {
  switch(action.type){
    case 'ADD_NODE':
      return state.concat(action.yId)
    default: return state;
  }
}

// state : {nodes:[]}
const rootReducer = combineReducers(
  {
    nodes: nodeReducer
  }
)

const store = createStore(rootReducer)

store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch(addNode(1))
store.dispatch(addNode(2))




const notify = () => alert('hi world!')
// const hiWorld = <h1>Hi world! </h1>
ReactDOM.render(
  <Provider store={store}>
  <div>
    <App
      handleClick={notify}
      greeting={"Hi Yewno!"}/>
  </div>
  </Provider>,
  document.getElementById('react-app')
)
