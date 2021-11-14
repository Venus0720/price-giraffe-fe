import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import notificationReducer from 'reducers/notificationReducer'
import userReducer from 'reducers/userReducer'
import modalReducer from 'reducers/modalReducer'

const reducers = combineReducers({
  notification: notificationReducer,
  user: userReducer,
  modal: modalReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store
