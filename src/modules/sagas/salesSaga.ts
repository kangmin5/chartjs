import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
// yarn add @redux-saga/is --dev , yarn add @types/redux, yarn add redux-saga

import { salesActions } from 'modules/slice/salesSlice';
import { salesApi } from 'modules/apis/salesApi';

interface salesType{
    type: string;
    payload: {
        year:string , Sales:string, Cost:string, Profit:string
    }
}
interface salesSuccessType{
    type: string;
    payload: {
        year:string , Sales:string, Cost:string, Profit:string
    }
}
function* sales(sales: salesType){
    try {
        const response: salesSuccessType = yield salesApi(sales.payload)
        yield put(salesActions.salesSuccess(response))
    }catch(error){
         console.log('3 saga내부 join 실패  ')
         yield put(salesActions.salesFailure(error))
    }
}
export function* watchSales(){
    yield takeLatest(salesActions.salesRequest, sales)
}