export const chainss = { 97: 'BINANCETEST' }

export const ChainId = {
    BINANCETEST: 97,
}

export const wrappedSymbol = {
    97: 'WBNB',
}

export const nativeSymbol = {
    97: 'BNB',
}
export const ChainsName = {
    11155111: 'SEPOLIA',
    97: 'BINANCETEST',
    80002: 'AMOY',
    421614: 'ARBITRUM',
    4002: 'FANTOM',
    43113: 'AVALANCE',
    420: 'OPTIMISM',
    59144: 'LINEA',
    84531: 'BASE',
    44787: 'CELO',
    23888: 'BLAST',
    1313161555: 'AURORA',
    534352: 'SCROLL',
    1287: 'MOONBASE',
}

export const ChainToSymbol = { 97: 'BNB' }

export const getContractData = (chainId) => {
    return Factory[chainId]
}
export const graphUrls = {
    11155111:
        'https://api.studio.thegraph.com/proxy/55988/cf-sepolia/version/latest',
    97: 'https://api.studio.thegraph.com/query/57306/cf-chapel/version/latest',
    80002: 'https://api.studio.thegraph.com/query/57306/cf-polygon-amoy/version/latest',
    421614: 'https://api.studio.thegraph.com/query/57306/cf-arbitrum-sepolia/version/latest',
    4002: 'https://api.studio.thegraph.com/query/57306/cf-fantom-testnet/version/latest',
    43113: ' https://api.studio.thegraph.com/query/57306/cf-avalanche-fuji-testnet/version/latest',
    420: 'https://api.studio.thegraph.com/proxy/55988/cf-optimism/0.0.1',
    59144: 'https://api.studio.thegraph.com/query/57306/cf-lineasepolia/version/latest',
    84531: 'https://api.studio.thegraph.com/query/57306/cf-basesepolia/v0.0.1',
    44787: 'https://api.studio.thegraph.com/query/57306/cf-celoalfajores/v0.0.1',
    23888: ' https://api.studio.thegraph.com/query/57306/cf-blasttestnet/v0.0.1',
    1313161555:
        'https://api.studio.thegraph.com/query/57306/cf-auroratestnet/version/latest',
    534352: 'https://api.studio.thegraph.com/query/57306/cf-scroll-testnet/version/latest',
    1287: 'https://api.studio.thegraph.com/query/57306/cf-moonbase-alpha/version/latest',
}

export const Factory = {
    11155111: '0x2752604ec26fAf7153eEa3053F06982e063D8742',
    97: '0xe96B698EAc8C07A6e5352BE3d492709C8aa78117',
    80002: '0xa1749f0f055c6b85e600B1303DF4EBDCB3fc9635',
    421614: '0x448e31F4682eE1bbF36aDF44cC38f7C9d84fd262',
    4002: '0x448e31f4682ee1bbf36adf44cc38f7c9d84fd262',
    43113: '0x4cd93352D611BeDaC1E28c7C68d8BB52E35eA104',
    420: '0xC8481648F5Ff2Fe46027a4E5B49165A55DE106Fd',
    59144: '0x4370963Dd8295d4BF309d8541CC8a5062222dE2f',
    84531: '0xC8481648F5Ff2Fe46027a4E5B49165A55DE106Fd',
    44787: '0x9014dAE23DfB0059A0c2bc7E6503334F213A8036',
    23888: '0x01805a841ece00cf680996bF4B4e21746C68Fd4e',
    1313161555: '0xceBa082c764292e475A026BD3ED7cF89369c94cF',
    534352: '0x01805a841ece00cf680996bF4B4e21746C68Fd4e',
    1287: '0xC8481648F5Ff2Fe46027a4E5B49165A55DE106Fd',
}
