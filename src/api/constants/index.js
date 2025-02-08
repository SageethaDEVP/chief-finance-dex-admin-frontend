export const apiUrls = {
    auth: {
        login: '/api/auth/login',
        logout: '/api/auth/logout',
        refresh: '/api/auth/refresh',
        changePassword: '/api/auth/change-password',
        changePasswordByAdmin: '/api/auth/change-password-by-admin',
        registerByAdmin: '/api/auth/register-by-admin',
    },
    roles: {
        list: '/api/roles/list',
        myRoles: '/api/roles/my',
    },
    users: {
        myUser: '/api/users/me',
        getUserById: '/api/users/{id}',
        deleteUser: '/api/users/{id}',
        getAllUsers: '/api/users',
        editByAdmin: '/api/users/edit-by-admin',
        editByMe: '/api/users/edit-me',
    },
    otp: {
        generateUri: '/api/otp/generate-uri',
        setOtp: '/api/otp/set-otp',
        disable: '/api/otp/disable',
        disableByAdmin: '/api/otp/disable-by-admin',
    },
    wallets: {
        getAllWallets: '/api/wallets',
        addWallet: '/api/wallets',
        address: '/api/wallets/{address}/address',
        getWalletById: '/api/wallets/{id}',
        toggle: '/api/wallets/toggle-wallet',
    },
    bdlty: {
        burn: '/api/bdlty-token/burn',
        mint: '/api/bdlty-token/mint',
        pause: '/api/bdlty-token/pause',
        unpause: '/api/bdlty-token/unpause',
        getBurn: '/api/bdlty-token/burn',
    },
    fees: {
        swap: '/api/fee/swap',
        removeLiquidity: '/api/fee/remove-liquidity',
        addLiquidity: '/api/fee/add-liquidity',
    },
    quiz: {
        question: 'api/quiz/question',
        level: 'api/quiz/level',
        getQuestion: 'api/quiz/get-question',
        getLevel: 'api/quiz/get-level',
    },
    tokens: {
        getByAddress: '/api/tokens/{address}',
        saveToken: '/api/tokens/save',
    },
    pairs: {
        getPair: '/api/pairs',
        hiddenPairs: '/api/pairs/hide-list',
        savePair: '/api/pairs/save',
        lock: '/api/pairs/lock',
        unlock: '/api/pairs/unlock',
    },
}
