import { useMemo } from 'react';
import { MenuProps } from 'antd';

import { useAppSelector } from '@/shared/model/hooks';

export const useManageMetamaskAccount = () => {
    const {
        accounts,
        currentAccountIndex,
    } = useAppSelector(state => state.metamask)

    const accountsForMenu: MenuProps['items'] = useMemo(() => {
        return accounts.map((account, idx) => ({
            key: idx,
            address: account.address,
            label: `User ${idx}`,
        }))
    }, [accounts])

    return {
        accountsForMenu,
        currentAccountIndex
    }
}
