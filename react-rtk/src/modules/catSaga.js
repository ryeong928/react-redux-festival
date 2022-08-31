import {call, put, delay, fork, all, takeEvery, takeLatest } from 'redux-saga/effects'
import catSlice, {catActions} from '../features/catSlice'

function* getCats(){
  try{
    const cats = yield call(() => fetch('https://jsonplaceholder.typicode.com/users'))
    const temp1 = yield cats.json()
    const temp2 = temp1.slice(0, 10)
    yield delay(2000)
    yield put(catActions.getCatsSuccess(temp2))
  }catch(err){
    yield put(catActions.getCatsFailure(err))
  }
}

export default function* catSaga(){
  yield takeEvery(catActions.getCatsPending, getCats)
}

// call() : 주어진 함수 실행
// fork() : 함수의 비동기적인 호출
// put : 액션을 디스패치
// takeEvery(action, saga) : 들어오는 모든 액션을 실행
// takeLatest(action, saga) : 여러 액션이 실행될 때 가장 마지막 액션말 실행
// all([saga1, saga2]) : 병렬 처리