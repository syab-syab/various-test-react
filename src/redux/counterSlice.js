// **Slice.jsと名付けるのが慣例になってるっぽい？

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    // name=Sliceを識別するための名前
    name: 'counter',
    // initialState=共有するデータ(state)の初期値を設定
    initialState: {
        count: 0,
    },
    // reducers=stateを更新するための関数を設定
    reducers: {
        // ここで設定した関数(increase, decrease)は
        // 自動的に同名のAction creators を作成する
        increase: (state) => {
            state.count += 1
        },
        decrease: (state) => {
            state.count -= 1
        },
    },
})

export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;