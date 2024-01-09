import { message } from 'antd';
import Web3, { validator } from 'web3';

import { useAppDispatch, useAppSelector } from '@/shared/model/hooks';
import { SET_ACCOUNTS_AND_STOP_LOADING, SET_LOADING } from '@/entities/metamask/model/slice.ts';
import { MetamaskSliceStore } from '@/entities/metamask/model/types.ts';

export const useConnectToMetamask = () => {
    const {
        isLoading,
    } = useAppSelector(state => state.metamask);
    const dispatch = useAppDispatch();

    const getCurrentProvider = () => {
        let provider: any = null;

        if (window.ethereum) {
            provider = window.ethereum;
        } else {
            console.log('Metamask did not detect');
        }

        return provider;
    };

    const connect = async () => {
        if(isLoading) return;

        const currentProvider = getCurrentProvider();

        if (currentProvider === null) {
            message.error('Metamask was not detected');
            return;
        }

        dispatch(SET_LOADING(true));
        try {

            const accounts: MetamaskSliceStore['accounts'] = [];

            await currentProvider.request({ method: 'eth_requestAccounts' });
            const web3 = new Web3(currentProvider);
            const addresses = await web3.eth.getAccounts();

            for (const address of addresses) {
                const balanceWei = await web3.eth.getBalance(address);
                const balance = web3.utils.fromWei(balanceWei, 'ether');

                const networkIdHEX = await web3.eth.net.getId();

                accounts.push({
                    address: address.toLowerCase(),
                    balance: balance === '0.' ? '0' : balance,
                    networkId: parseInt(String(networkIdHEX), 16)
                });
            }

            dispatch(SET_ACCOUNTS_AND_STOP_LOADING(accounts));

        } catch (e) {
            dispatch(SET_LOADING(false));
        }
    };
    return {
        connect,
        isLoading,
    };
};
