import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../features'
import rootSaga from '../modules'
// middlewares
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(createLogger())
  middleware: [sagaMiddleware]
})
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
export default store