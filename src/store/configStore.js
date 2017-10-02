import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Reducer from '../reducers/Reducer'

const configStore = preparedStore => createStore(
  Reducer,
  preparedStore,
  applyMiddleware(thunk)
)

export default configStore
