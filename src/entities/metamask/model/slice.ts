import { createSlice } from '@reduxjs/toolkit';

import {
    MetamaskSliceStore,
    SetAccountsAndStopLoadingAction,
    SetLoadingAction,
    UpdateCurrentAccountNetworkIdAndBalanceAction,
    UpdateCurrentAccountIndexAction,
} from './types.ts';

const initialState: MetamaskSliceStore = {
    currentAccountIndex: 0,
    isLoading: false,
    isConnected: false,
    accounts: [],
};

export const MetamaskSlice = createSlice({
    name: 'metamask',
    initialState,
    reducers: {
        SET_LOADING: (state, { payload }: SetLoadingAction) => {
            state.isLoading = payload;
        },
        SET_ACCOUNTS_AND_STOP_LOADING: (_, { payload }: SetAccountsAndStopLoadingAction) => {
            return {
                currentAccountIndex: 0,
                accounts: payload,
                isLoading: false,
                isConnected: true,
            };
        },
        UPDATE_CURRENT_ACCOUNT_NETWORK_ID_AND_BALANCE: (
            state,
            { payload }: UpdateCurrentAccountNetworkIdAndBalanceAction,
        ) => {
            state.accounts[state.currentAccountIndex].balance = payload.balance;
            state.accounts[state.currentAccountIndex].networkId = payload.networkId;
        },
        UPDATE_CURRENT_ACCOUNT_INDEX: (
            state,
            { payload }: UpdateCurrentAccountIndexAction,
        ) => {
            state.currentAccountIndex = payload;
        },
    },
});

export const {
    SET_LOADING,
    SET_ACCOUNTS_AND_STOP_LOADING,
    UPDATE_CURRENT_ACCOUNT_NETWORK_ID_AND_BALANCE,
    UPDATE_CURRENT_ACCOUNT_INDEX,
} = MetamaskSlice.actions;
