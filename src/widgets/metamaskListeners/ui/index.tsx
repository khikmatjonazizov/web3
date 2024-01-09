import { useEffect } from 'react';
import Web3 from 'web3';

import { useAppDispatch, useAppSelector } from '@/shared/model/hooks';
import {
    UPDATE_CURRENT_ACCOUNT_INDEX,
    UPDATE_CURRENT_ACCOUNT_NETWORK_ID_AND_BALANCE,
} from '@/entities/metamask/model/slice.ts';

export const MetamaskListeners = () => {
    const dispatch = useAppDispatch();

    const {
        currentAccountIndex,
        accounts,
        isConnected,
    } = useAppSelector(state => state.metamask);

    useEffect(() => {
        if (window.ethereum && isConnected) {
            const address = accounts[currentAccountIndex].address;
            window.ethereum.on('chainChanged', async (chainId: bigint) => {
                const networkId = parseInt(String(chainId), 16);

                const web3 = new Web3(window.ethereum);
                const balanceWei = await web3.eth.getBalance(address);
                const balance = web3.utils.fromWei(balanceWei, 'ether');

                dispatch(UPDATE_CURRENT_ACCOUNT_NETWORK_ID_AND_BALANCE({
                    balance: balance === '0.' ? '0' : balance,
                    networkId,
                }));
            });

            window.ethereum.on('accountsChanged', async (addresses: string[]) => {
                const address = addresses[0];

                for (let index = 0; index < accounts.length; index++) {
                    if (accounts[index].address !== address) continue;

                    dispatch(UPDATE_CURRENT_ACCOUNT_INDEX(index));
                    const web3 = new Web3(window.ethereum);
                    const networkIdBigInt = await web3.eth.net.getId();
                    const networkId = parseInt(String(networkIdBigInt), 16);
                    if (accounts[index].networkId !== networkId) {
                        const balanceWei = await web3.eth.getBalance(address);
                        const balance = web3.utils.fromWei(balanceWei, 'ether');

                        dispatch(UPDATE_CURRENT_ACCOUNT_NETWORK_ID_AND_BALANCE({
                            balance: balance === '0.' ? '0' : balance,
                            networkId,
                        }));
                    }

                    break;
                }
            });
        }
    }, [isConnected]);

    return null;
};
