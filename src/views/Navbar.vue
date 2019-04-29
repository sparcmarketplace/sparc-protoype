<template>
    <!-- code for navbar mostly from: https://github.com/johndatserakis/vue-navigation-bar -->
    <vue-navigation-bar :options="navbarOptions" />
</template>

// <script>
//     export default {
//         name: 'navbar',
//         data () {
//             return {
//                 navbarOptions: {
//                     elementId: 'main-navbar',
//                     isUsingVueRouter: true,
//                     mobileBreakpoint: 992,
//                     brandImagePath: './',
//                     //brandImage: require('./assets/sparclogo1.png'),
//                     brandImageAltText: 'brand-image',
//                     showBrandImageInMobilePopup: true,
//                     ariaLabelMainNav: 'Main Navigation',
//                     menuOptionsLeft: [
//                         {
//                             type: 'link',
//                             text: 'Engagee',
//                             subMenuOptions: [
//                                 {
//                                     type: 'link',
//                                     text: 'Engagements',
//                                     subText: 'Take a look at all the current engagements offered!',
//                                     path: './userDashboard',
//                                 },
//                                 {
//                                     type: 'hr',
//                                 },
//                                 {
//                                     type: 'link',
//                                     text: 'Profile',
//                                     subText: 'View your profile',
//                                     path: './userProfile',
//                                 },
//                                 {
//                                     type: 'hr',
//                                 },
//                                 {
//                                     type: 'link',
//                                     text: 'About',
//                                     path: './welcome',
//                                 },
//                             ]
//                         },
//                         {
//                             type: 'link',
//                             text: 'Host',
//                             subMenuOptions: [
//                                 {
//                                     type: 'link',
//                                     text: 'Create an Engagement',
//                                     path: './host'
//                                 },
//                                  {
//                                     type: 'hr',
//                                 },
//                                 {
//                                     type: 'link',
//                                     text: 'Host Dashboard',
//                                     path: './HostDashboard',
//                                 },
//                                 {
//                                     type: 'hr',
//                                 },
//                                 {
//                                     type: 'link',
//                                     text: 'Host Profile',
//                                     path: './hostProfile',
//                                 },
//                             ]
//                         },
                     
//                     ],
//                     menuOptionsRight: [
//                         {
//                             type: 'button',
//                             text: 'Signup',
//                             path: './signup',
//                             class: 'button-red',
//                             iconLeft: '<svg id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="currentcolor" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" /> </svg>'
//                         },
//                         {
//                             type: 'button',
//                             text: 'Login',
//                             path: './login',
//                             iconRight: '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'
//                         }
//                     ]
//                 }
//             }
//         }
//     }
// </script>

// <style lang="scss">
//     .vnb {
//         .button-red {
//             background: #FF3B30;

//             &:hover {
//                 background: darken(#FF3B30, 10%);
//             }
//         }
//     }
// </style>