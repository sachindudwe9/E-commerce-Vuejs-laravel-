import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Main from '../components/Main.vue'
import Contact from '../components/Contact.vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Cart from '../components/Cart.vue'
import Profile from '../components/Profile.vue'
import Updateprofile from '../components/Updateprofile.vue'
import Productdetails from '../components/Productdetails.vue'
import Changepassword from '../components/Changepassword.vue'
import Checkout from '../components/Checkout.vue'
import Cms from '../components/Cms.vue'
export default new Router({
    
    routes:[
        {
            path:'/',
            name:'Main',
            component:Main
        },
        {
            path:'/Updateprofile',
            name:'Updateprofile',
            component:Updateprofile
        },
        {
            path:'/changepassword',
            name:'Changepassword',
            component:Changepassword
        },
        {
            path:'/home/:id',
            name:'Home',
            component:Home
        },
        {
            path:'/profile',
            name:'Profile',
            component:Profile
        },
        {
            path: '/productdetails/:id',
            name: 'Productdetails',
            component: Productdetails
        },
        {
            path:'/contact',
            name:'Contact',
            component:Contact
        },
        {
            path:'/login',
            name:'Login',
            component:Login
        },{
            path:'/cart',
            name:'Cart',
            component:Cart
        },
        {
            path:'/checkout',
            name:'Checkout',
            component:Checkout
        },
        {
            path:'/cms/:id',
            name:'Cms',
            component:Cms
        }
    ]
})