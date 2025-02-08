import Login from '../../pages/Login'
import UserManagement from '../../pages/UserManagement'
import User from '../../pages/User'
import Swap from '../../pages/Swap'
import Pairs from '../../pages/Swap/components/Pairs'
import Tokens from '../../pages/Swap/components/Tokens'
import Transactions from '../../pages/Swap/components/Transactions'
import Limit from '../../pages/Limit'
import Insight from '../../pages/Limit/components/Insight'
import OpenOrders from '../../pages/Limit/components/OpenOrders'
import OrdersHistory from '../../pages/Limit/components/OrdersHistory'
import Pool from '../../pages/Pool'
import General from '../../pages/Pool/components/General'
import TransactionHistory from '../../pages/Pool/components/TransactionHistory'
import LPToken from '../../pages/LPToken'
import Fees from '../../pages/Fees'
import BDLTToken from '../../pages/BDLTToken'
import UserIcon from '../../assets/svg/user.svg'
import UserActiveIcon from '../../assets/svg/user-active.svg'
import SwapIcon from '../../assets/svg/swap.svg'
import SwapActiveIcon from '../../assets/svg/swap-active.svg'
import LpTokenIcon from '../../assets/svg/lp-token.svg'
import LpTokenActiveIcon from '../../assets/svg/lp-token-active.svg'
import PoolIcon from '../../assets/svg/pool.svg'
import PoolActiveIcon from '../../assets/svg/pool-active.svg'
import FeesIcon from '../../assets/svg/fees.svg'
import FeesActiveIcon from '../../assets/svg/fees-active.svg'
import RolesIcon from '../../assets/svg/roles.svg'
import RolesActiveIcon from '../../assets/svg/roles-active.svg'
import BdltyIcon from '../../assets/svg/bdlty.svg'
import BdltyActiveIcon from '../../assets/svg/bdlty-active.svg'
import AdministrativeRoles from '../../pages/admin/AdministrativeRoles'
import CreateAdmin from '../../pages/admin/CreateAdmin'
import EditAdmin from '../../pages/admin/EditAdmin'
import Account from '../../pages/admin/Account'
import ChangePassword from '../../pages/admin/Account/components/ChangePassword'
import TwoFactorAuthentication from '../../pages/admin/Account/components/TwoFactorAuthentication'
import Quiz from '../../pages/Quiz'
import QuizIcon from '../../assets/svg/quiz.svg'
import QuizActiveIcon from '../../assets/svg/quiz-active.svg'

export const ROUTES = {
    login: '/login',
    users: '/users',
    user: '/users/:id',
    swap: '/swap',
    pairs: '/swap',
    tokens: '/swap/tokens',
    transactions: '/swap/transactions',
    limit: '/limit',
    insight: '/limit',
    openorders: '/limit/openorders',
    ordershistory: '/limit/ordershistory',
    pool: '/pool',
    history: '/pool/history',
    lptoken: '/lptoken',
    fees: '/fees',
    quiz: '/quiz',
    roles: '/roles',
    create: '/roles/create',
    edit: '/roles/edit/:id',
    account: '/roles/account',
    two_fa: '/roles/account/2fa',
    bdlty: '/cfnc',
}

export const routes = {
    public: [{ path: ROUTES.login, Element: Login }],
    private: [
        { path: ROUTES.users, Element: UserManagement },
        { path: ROUTES.user, Element: User },
        { path: ROUTES.lptoken, Element: LPToken },
        { path: ROUTES.fees, Element: Fees },
        { path: ROUTES.bdlty, Element: BDLTToken },
        { path: ROUTES.roles, Element: AdministrativeRoles },
        { path: ROUTES.create, Element: CreateAdmin },
        { path: ROUTES.quiz, Element: Quiz },
        { path: ROUTES.edit, Element: EditAdmin },
        {
            path: ROUTES.swap,
            Element: Swap,
            children: [
                {
                    path: ROUTES.pairs,
                    Element: Pairs,
                },
                {
                    path: ROUTES.tokens,
                    Element: Tokens,
                },
                {
                    path: ROUTES.transactions,
                    Element: Transactions,
                },
            ],
        },
        {
            path: ROUTES.limit,
            Element: Limit,
            children: [
                {
                    path: ROUTES.insight,
                    Element: Insight,
                },
                {
                    path: ROUTES.openorders,
                    Element: OpenOrders,
                },
                {
                    path: ROUTES.ordershistory,
                    Element: OrdersHistory,
                },
            ],
        },
        {
            path: ROUTES.pool,
            Element: Pool,
            children: [
                {
                    path: ROUTES.pool,
                    Element: General,
                },
                {
                    path: ROUTES.history,
                    Element: TransactionHistory,
                },
            ],
        },
        {
            path: ROUTES.account,
            Element: Account,
            children: [
                {
                    path: ROUTES.account,
                    Element: ChangePassword,
                },
                {
                    path: ROUTES.two_fa,
                    Element: TwoFactorAuthentication,
                },
            ],
        },
    ],
}

export const menuLinks = [
    {
        icon: UserIcon,
        iconActive: UserActiveIcon,
        title: 'User Management',
        link: ROUTES.users,
    },
    {
        icon: SwapIcon,
        iconActive: SwapActiveIcon,
        title: 'Exchange/Swap',
        link: ROUTES.swap,
    },
    // {
    //     icon: SwapIcon,
    //     iconActive: SwapActiveIcon,
    //     title: 'Limit',
    //     link: ROUTES.limit,
    // },
    {
        icon: LpTokenIcon,
        iconActive: LpTokenActiveIcon,
        title: 'LP Token',
        link: ROUTES.lptoken,
    },
    {
        icon: PoolIcon,
        iconActive: PoolActiveIcon,
        title: 'Pool Liquidity',
        link: ROUTES.pool,
    },
    {
        icon: FeesIcon,
        iconActive: FeesActiveIcon,
        title: 'Fees',
        link: ROUTES.fees,
    },
    {
        icon: QuizIcon,
        iconActive: QuizActiveIcon,
        title: 'Quiz',
        link: ROUTES.quiz,
    },
    {
        icon: RolesIcon,
        iconActive: RolesActiveIcon,
        title: 'Administrative roles',
        link: ROUTES.roles,
    },
    {
        icon: BdltyIcon,
        iconActive: BdltyActiveIcon,
        title: 'CFNC token',
        link: ROUTES.bdlty,
    },
]
