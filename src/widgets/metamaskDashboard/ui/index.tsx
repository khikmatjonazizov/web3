import styles from './metamaskDashboard.module.css';
import { useMetamaskDashboard } from '../model/hooks/useMetamaskDashboard.ts';
import { ConnectToMetamask } from '@/features/connectToMetamask/ui';
import { ManageMetamaskAccount } from '@/features/manageMatamaskAccount/ui';
import { getNetworkNameById } from '@/shared/utils';


export const MetamaskDashboard = () => {
    const {
        isConnected,
        currentAccount,
    } = useMetamaskDashboard();
    return (
        <div className={styles.wrapper}>
            <header className={styles['top-bar']}>
                <h1 className={styles['top-bar__title']}>Metamask dashboard</h1>
                {
                    isConnected ?
                        <ManageMetamaskAccount />:
                        <ConnectToMetamask />
                }
            </header>
            {
                isConnected &&
                <>
                    <p>Portfolio value: {currentAccount.balance}</p>
                    <p>Network: {getNetworkNameById(currentAccount.networkId)}</p>
                </>
            }
        </div>
    );
};
