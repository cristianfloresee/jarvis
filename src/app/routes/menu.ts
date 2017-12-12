
const Home = {
    text: 'Inicio',
    link: '/home',
    icon: 'icon-home'
};

const Categories = {
    text: 'Instituciones',
    link: '/categories/manageCategories',
    icon: 'icon-note'

};

const Organizations = {
  text: 'Divisiones',
  link: '/organizations/manageOrganizations',
  icon: 'icon-note'

};
const Menu = {
    text: 'Organizaciones',
    link: '/menu/manageItems',
    icon: 'fa fa-th-list'
};

const Orders = {
    text : 'Orders',
    link:'/order/allOrder',
    icon: 'fa fa-bars'
};

const Users = {
    text: 'Usuarios',
    link: '/users/manageUsers',
    icon: 'fa fa-users'
};

const Chat = {
    text: 'Chat',
    link:'/chat',
    icon: 'fa fa-comments-o'
};
/*
const Setting = {
    text: 'Setting',
    link:'/setting',
    icon: 'fa fa-cog'
};*/

const Tags = {
    text: 'Tags',
    link: '/tags/all',
    icon: 'fa fa-tags'
};

const News = {
    text: 'News',
    link: '/news/manageNews',
    icon: 'fa fa-newspaper-o'
};
const Business = {
    text: 'Business Info',
    link: '/businessInfo',
    icon: 'fa fa-briefcase'
};
const Coupons = {
    text: 'Coupons',
    link: '/coupons/all',
    icon: 'fa fa-minus-square'
};

const pushNotification = {
    text: 'Alerta Roja',
    link: '/pushNotification',
    icon: 'fa fa-briefcase'
};

// const Pages = {
//     text: 'Pages',
//     link: '/pages',
//     icon: 'icon-doc',
//     submenu: [
//         {
//             text: 'Login',
//             link: '/login'
//         },
//         {
//             text: 'Register',
//             link: '/register'
//         },
//         {
//             text: 'Recover',
//             link: '/recover'
//         },
//         {
//             text: '404',
//             link: '/404'
//         }
//     ]
// };

// const Ecommerce = {
//     text: 'Ecommerce',
//     link: '/ecommerce',
//     icon: 'icon-basket-loaded',
//     submenu: [
//         {
//             text: 'Orders',
//             lin k: '/ecommerce/orders'
//         },
//         {
//             text: 'Order View',
//             link: '/ecommerce/orderview'
//         },
//         {
//             text: 'Products',
//             link: '/ecommerce/products'
//         },
//         {
//             text: 'Product View',
//             link: '/ecommerce/productview'
//         },
//         {
//             text: 'Checkout',
//             link: '/ecommerce/checkout'
//         }
//     ]
// }




const headingMain = {
    text: 'Navigation',
    heading: true
};

const headingComponents = {
    text: 'Components',
    heading: true
};

const headingMore = {
    text: 'More',
    heading: true
};

export const menu = [
    Home,
    Categories,
    Organizations,
    Menu,
    Orders,    
    Coupons,
    Tags,
    Users,
    pushNotification,
    News,
    Business,
    //Setting,
    Chat
    //Pages
];
