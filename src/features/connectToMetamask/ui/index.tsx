import { Button } from 'antd';

import { useConnectToMetamask } from '../model/hooks/useConnectToMetamask.ts'

export const ConnectToMetamask = () => {
    const {
        connect,
        isLoading
    } = useConnectToMetamask()
    return (
        <Button loading={isLoading} onClick={connect}>Connect</Button>
    )
}
