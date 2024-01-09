import {combineReducers} from "@reduxjs/toolkit";

import {MetamaskSlice} from "@/entities/metamask/model/slice.ts";

export const rootReducer = combineReducers({
    [MetamaskSlice.name]: MetamaskSlice.reducer,
})
