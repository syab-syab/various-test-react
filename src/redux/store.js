import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'

export const store = configureStore({
    reducer: {
        // counterSliceの関数を
        // toolkit由来のconfigureStoreの引数のオブジェクトに登録
        counter: counterReducer,
        // 複数のSliceを作成した場合は作成したSliceをimportして
        // reducerプロパティのオブジェクトに追加することで
        // 各Sliceで設定したstateをすべてのコンポーネントから
        // アクセスすることが可能
    },
});