import { useAppSelector } from '@/shared/model/hooks';


export const useMetamaskDashboard = () => {
    const {
        isConnected,
        accounts,
        isLoading,
        currentAccountIndex,
    } = useAppSelector(state => state.metamask);

    const currentAccount = accounts[currentAccountIndex];


    return {
        isConnected,
        isLoading,
        currentAccount,
    }
};
