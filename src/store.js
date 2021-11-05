import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import notificationReducer from 'reducers/notificationReducer'
import overlayReducer from 'reducers/overlayReducer'
import userReducer from 'reducers/userReducer'

const reducers = combineReducers({
  notification: notificationReducer,
  overlay: overlayReducer,
  user: userReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store
