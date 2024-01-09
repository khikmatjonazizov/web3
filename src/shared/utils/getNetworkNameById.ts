export const getNetworkNameById = (networkId: number) => {
    let networkName;
    switch(networkId) {
        case 1:
            networkName = 'Ethereum Mainnet';
            break;
        case 3:
            networkName = 'Ropsten Test Network';
            break;
        case 4:
            networkName = 'Rinkeby Test Network';
            break;
        case 5:
            networkName = 'Goerli Test Network';
            break;
        case 42:
            networkName = 'Kovan Test Network';
            break;
        default:
            networkName = 'Unknown';
    }

    return networkName;
}
