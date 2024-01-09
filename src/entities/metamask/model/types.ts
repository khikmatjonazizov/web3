import { PayloadAction } from '@reduxjs/toolkit';

export type MetamaskSliceStore = {
    isConnected: boolean;
    isLoading: boolean;
    accounts: MetamaskSliceStoreAccount[];
    currentAccountIndex: number;
};

export type MetamaskSliceStoreAccount = {
    balance: string;
    address: string;
    networkId: number;
}

export type SetLoadingAction = PayloadAction<boolean>;

export type SetAccountsAndStopLoadingAction = PayloadAction<MetamaskSliceStore['accounts']>;

export type UpdateCurrentAccountNetworkIdAndBalanceAction =
    PayloadAction<Pick<MetamaskSliceStoreAccount, 'networkId' | 'balance'>>;

export type UpdateCurrentAccountIndexAction = PayloadAction<MetamaskSliceStore['currentAccountIndex']>;
