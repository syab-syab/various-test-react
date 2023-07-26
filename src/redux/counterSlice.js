// **Slice.jsと名付けるのが慣例になってるっぽい？

import { createSlice } from "@reduxjs/toolkit";
import numValue from "../other/data.json";

export const counterSlice = createSlice({
    // name=Sliceを識別するための名前
    name: 'counter',
    // initialState=共有するデータ(state)の初期値を設定
    initialState: {
        // こんな感じでjson形式のファイルも入れられる
        // あくまで状態管理だけだから外部リソースへのアクセスはカスタムフックの方が無難っぽい
        // ここに入れるのは外部リソースのデータを選ぶためのidとかの方が良い
        count: numValue["value"][0]["value"]
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