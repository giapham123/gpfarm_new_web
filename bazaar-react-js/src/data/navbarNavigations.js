import categoriesMegaMenu from "./categoriesMegaMenu";

// // MEGAMENU DATA
// const megaMenus = [
//   [
//     {
//       title: "Home",
//       url: "/",
//     },
//   ],
//   [
//     {
//       title: "User Account",
//       child: [
//         {
//           title: "Order List",
//           url: "/orders",
//         },
//         {
//           title: "Order Details",
//           url: "/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
//         },
//         {
//           title: "View Profile",
//           url: "/profile",
//         },
//         {
//           title: "Edit Profile",
//           url: "/profile/e42e28ea-528f-4bc8-81fb-97f658d67d75",
//         },
//         {
//           title: "Address List",
//           url: "/address",
//         },
//         {
//           title: "Add Address",
//           url: "/address/d27d0e28-c35e-4085-af1e-f9f1b1bd9c34",
//         },
//         {
//           title: "All tickets",
//           url: "/support-tickets",
//         },
//         {
//           title: "Ticket details",
//           url: "/support-tickets/when-will-my-product-arrive",
//         },
//         {
//           title: "Wishlist",
//           url: "/wish-list",
//         },
//       ],
//     },
//   ],
//   [
//     {
//       title: "Vendor Account",
//       child: [
//         {
//           title: "Dashboard",
//           url: "/vendor/dashboard",
//         },
//         {
//           title: "Profile",
//           url: "/vendor/account-setting",
//         },
//       ],
//     },
//     {
//       title: "Products",
//       child: [
//         {
//           title: "All products",
//           url: "/admin/products",
//         },
//         {
//           title: "Add/Edit product",
//           url: "/admin/products/create",
//         },
//       ],
//     },
//     {
//       title: "Orders",
//       child: [
//         {
//           title: "All orders",
//           url: "/admin/orders",
//         },
//         {
//           title: "Order details",
//           url: "/admin/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
//         },
//       ],
//     },
//   ],
//   [
//     {
//       title: "Sale Page",
//       child: [
//         {
//           title: "Sales Version 1",
//           url: "/sale-page-1",
//         },
//         {
//           title: "Sales Version 2",
//           url: "/sale-page-2",
//         },
//       ],
//     },
//     {
//       title: "Shop",
//       child: [
//         {
//           title: "Search product",
//           url: "/product/search/mobile phone",
//         },
//         {
//           title: "Single product",
//           url: "/product/lord-2019",
//         },
//         {
//           title: "Cart",
//           url: "/cart",
//         },
//         {
//           title: "Checkout",
//           url: "/checkout",
//         },
//         {
//           title: "Alternative Checkout",
//           url: "/checkout-alternative",
//         },
//         {
//           title: "Order confirmation",
//           url: "/order-confirmation",
//         },
//       ],
//     },
//   ],
// ];

// MAIN NAVIGATION DATA
const navbarNavigations = [
  {
    title: "Home",
    megaMenu: false,
    megaMenuWithSub: false,
    url:"/"
    
  },
  {
    title: "Nông Sản Theo Mùa",
    megaMenu: false,
    megaMenuWithSub: false,
    url:"/product/search/nong-san-theo-mua"
    
  },
  {
    megaMenu: false,
    megaMenuWithSub: true,
    title: "Sản Phẩm Hạt",
    // child: categoriesMegaMenu,
    child: [
      {
        title: "Hạt Ngũ Cốc",
        url: "/product/search/hat-ngu-coc"
      },
      {
        title: "Trái Cây Sấy",
        url: "/product/search/trai-cay-say"
      },
      {
        title: "Bánh Dinh Dưỡng",
        url: "/product/search/banh-dinh-duong",
      },
      {
        title: "Granola",
        url: "/product/search/granola",
      },
      {
        title: "Mật Ong Và Nghệ",
        url: "/product/search/mat-ong-nghe",
      }
    ]
  },
  {
    title: "Về Chúng Tôi",
    megaMenu: false,
    megaMenuWithSub: false,
    url:"/about-us"
    
  },
  // {
  //   megaMenu: false,
  //   megaMenuWithSub: true,
  //   title: "Nông Sản Theo Mùa",
  //   // child: categoriesMegaMenu,
  //   child: [
  //     {
  //       title: "T-Shirt",
  //       url: "/product/search/t-shirt"
  //     },
  //     {
  //       title: "Formal Shirt",
  //       url: "/product/search/formal-shirt"
  //     },
  //     {
  //       title: "Shirt",
  //       url: "/product/search/shirt",
  //     }
  //   ],
  // },
  // {
  //   megaMenu: false,
  //   megaMenuWithSub: true,
  //   title: "Woman",
  //   child: [
  //     {
  //       title: "T-Shirt",
  //       url: "/product/search/Fresh Frutes"
  //     },
  //     {
  //       title: "Formal Shirt",
  //       url: "/product/lord-2019"
  //     },
  //     {
  //       title: "Shirt",
  //       url: "#",
  //     }
  //   ],
  // },
  // {
  //   megaMenu: false,
  //   megaMenuWithSub: false,
  //   title: "Pages",
  //   child: [
  //     {
  //       title: "Sale Page",
  //       child: [
  //         {
  //           title: "Version 1",
  //           url: "/sale-page-1",
  //         },
  //         {
  //           title: "Version 2",
  //           url: "/sale-page-2",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Vendor",
  //       child: [
  //         {
  //           title: "All vendors",
  //           url: "/shops",
  //         },
  //         {
  //           title: "Vendor store",
  //           url: "/shops/scarlett-beauty",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Shop",
  //       child: [
  //         {
  //           title: "Search product",
  //           url: "/product/search/mobile phone",
  //         },
  //         {
  //           title: "Single product",
  //           url: "/product/lord-2019",
  //         },
  //         {
  //           title: "Cart",
  //           url: "/cart",
  //         },
  //         {
  //           title: "Checkout",
  //           url: "/checkout",
  //         },
  //         {
  //           title: "Alternative Checkout",
  //           url: "/checkout-alternative",
  //         },
  //         {
  //           title: "Order confirmation",
  //           url: "/order-confirmation",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   megaMenu: false,
  //   megaMenuWithSub: false,
  //   title: "User Account",
  //   child: [
  //     {
  //       title: "Orders",
  //       child: [
  //         {
  //           title: "Order List",
  //           url: "/orders",
  //         },
  //         {
  //           title: "Order Details",
  //           url: "/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Profile",
  //       child: [
  //         {
  //           title: "View Profile",
  //           url: "/profile",
  //         },
  //         {
  //           title: "Edit Profile",
  //           url: "/profile/e42e28ea-528f-4bc8-81fb-97f658d67d75",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Address",
  //       child: [
  //         {
  //           title: "Address List",
  //           url: "/address",
  //         },
  //         {
  //           title: "Add Address",
  //           url: "/address/d27d0e28-c35e-4085-af1e-f9f1b1bd9c34",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Support tickets",
  //       child: [
  //         {
  //           title: "All tickets",
  //           url: "/support-tickets",
  //         },
  //         {
  //           title: "Ticket details",
  //           url: "/support-tickets/when-will-my-product-arrive",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Wishlist",
  //       url: "/wish-list",
  //     },
  //   ],
  // },
  // {
  //   megaMenu: false,
  //   megaMenuWithSub: false,
  //   title: "Vendor Account",
  //   child: [
  //     {
  //       title: "Dashboard",
  //       url: "/vendor/dashboard",
  //     },
  //     {
  //       title: "Products",
  //       child: [
  //         {
  //           title: "All products",
  //           url: "/admin/products",
  //         },
  //         {
  //           title: "Add/Edit product",
  //           url: "/admin/products/lord-2019",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Orders",
  //       child: [
  //         {
  //           title: "All orders",
  //           url: "/admin/orders",
  //         },
  //         {
  //           title: "Order details",
  //           url: "/admin/orders/f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Profile",
  //       url: "/vendor/account-setting",
  //     },
  //   ],
  // },
];
export default navbarNavigations;
