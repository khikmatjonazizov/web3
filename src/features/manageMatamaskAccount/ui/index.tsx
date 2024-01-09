import { Avatar, Dropdown } from 'antd';

import { useManageMetamaskAccount } from '../model/hooks/useManageMetamaskAccount.ts'


export const ManageMetamaskAccount = () => {
    const {
        accountsForMenu,
        currentAccountIndex,
    } = useManageMetamaskAccount()
    return (
        <Dropdown
            menu={{
                items: accountsForMenu,
                selectable: true,
                selectedKeys: [String(currentAccountIndex)]
            }}
            trigger={['click']}
        >
            <Avatar style={{cursor: 'pointer'}} size={40}>USER {currentAccountIndex}</Avatar>
        </Dropdown>
    )
}
