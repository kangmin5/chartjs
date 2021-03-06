import { createSlice } from "@reduxjs/toolkit";

export interface Earning{
    year:string , Sales:string, Cost:string, Profit:string
}
export interface SalesState {
    data: Earning[],
    status: 'idle' | 'loading' | 'succeeded' |'failed'
}
const initialState: SalesState = {
    data: [
        {year:'2020' , Sales:'49494', Cost:'2323', Profit:'23232'}
    ],
    status: 'idle'
}
export const salesSlice = createSlice({
    name: 'sales',
    initialState,
    reducers: {
        salesRequest(state: SalesState, _payload) {
            // alert(`진행 2 : 영업 데이터 ${state.data}`)
            state.status = 'loading';
        },
        salesSuccess(state: SalesState, { payload }) {
            state.status = 'idle'
            state.data = [...state.data, payload]
        },
        salesFailure(state: SalesState, { payload }) {
            state.status = 'failed'
            state.data = payload
        }
    }
    })
    export const { salesRequest, salesSuccess, salesFailure,
        } = salesSlice.actions;
    const {reducer, actions} = salesSlice
    export const salesActions = actions
    export default reducer;