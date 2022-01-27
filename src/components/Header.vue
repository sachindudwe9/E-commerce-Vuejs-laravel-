<template>
  <header id="header">
    <!--header-->
    <div class="header_top">
      <!--header_top-->
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="contactinfo">
              <ul class="nav nav-pills">
                <li>
                  <a href="#"><i class="fa fa-phone"></i> +2 95 01 88 821</a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-envelope"></i>{{user}}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="social-icons pull-right">
              <ul class="nav navbar-nav">
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-linkedin"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-google-plus"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header_top-->

    <div class="header-middle">
      <!--header-middle-->
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <div class="logo pull-left">
              <a href="index.html"><img src="images/home/logo.png" alt="" /></a>
            </div>
            <div class="btn-group pull-right">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-default dropdown-toggle usa"
                  data-toggle="dropdown"
                >
                  USA
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li><a href="#">Canada</a></li>
                  <li><a href="#">UK</a></li>
                </ul>
              </div>

              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-default dropdown-toggle usa"
                  data-toggle="dropdown"
                >
                  DOLLAR
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li><a href="#">Canadian Dollar</a></li>
                  <li><a href="#">Pound</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="shop-menu pull-right">
              <ul class="nav navbar-nav">
                 <!-- <li>
                  <a href="/profile"><i class="fa fa-star"></i>Account</a>
                </li>
                 <li>
                  <a href="/Updateprofile"><i class="fa fa-star"></i>Update Account</a>
                </li> -->
                <li>
                  <a href="#"><i class="fa fa-star"></i> Wishlist</a>
                </li>
                <li>
                 <router-link to="/cart"
                    ><i class="fa fa-shopping-cart"></i> Cart({{numInCart}})</router-link
                  >
                <li>
                  <router-link to="/checkout"
                    ><i class="fa fa-crosshairs"></i> Checkout</router-link
                  >
                </li>
                
                 <li>
                  <router-link to="#" 
                    >Welcome {{user}}
                  </router-link>
                  {{ShowState}}
                </li>
                <li>
                 <router-link to="/login" @click.native="logout()" v-if="msg">Logout </router-link>
                  <router-link to="/login" v-if="!msg">Login </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-middle-->

    <div class="header-bottom">
      <!--header-bottom-->
      <div class="container">
        <div class="row">
          <div class="col-sm-9">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div class="mainmenu pull-left">
              <ul class="nav navbar-nav collapse navbar-collapse">
                <li><router-link to="/" class="active">Home</router-link></li>
                <li class="dropdown">
                  <a href="#">Shop<i class="fa fa-angle-down"></i></a>
                  <ul role="menu" class="sub-menu">
                    <li><a href="shop.html">Products</a></li>
                    <li><a href="product-details.html">Product Details</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><router-link to="/cart">cart </router-link></li>
                    <li>
                       <router-link to="/login" @click.native="logout()" v-if="msg">Logout </router-link>
                      <router-link to="/login" v-if="!msg">Login </router-link> 
                       <!-- <router-link to="/" v-if="loginn" @click.native="logout()"
                        >Logout</router-link
                      >
                      <router-link to="/login" v-if="!loginn"
                        >Login</router-link
                      > -->
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#">Account<i class="fa fa-angle-down"></i></a>
                  <ul role="menu" class="sub-menu">
                    <li><router-link to="/profile">My Account</router-link></li>
                    <li><router-link to="/Updateprofile">Edit Account</router-link></li>
                     <li><router-link to="/changepassword">Change Password</router-link></li>
                  </ul>
                </li>
                 <li class="dropdown">
                  <a href="#">Explore<i class="fa fa-angle-down"></i></a>
                  <ul role="menu" class="sub-menu">
                    <li v-for="(c, index) in cms" :key="index">
                      <router-link :to="`/cms/${c.id}`">{{c.title}}</router-link>
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link to="/contact">Contact Us </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="search_box pull-right">
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/header-bottom-->
  </header>
</template>

<script>
import { mapState } from "vuex";
import { cms } from "@/common/Service";
import  constant  from '@/common/Constant';
import store from "../store/store";
import * as type from "../store/type";
import { getToken } from "@/common/Jwttoken";
import axios from "axios";
export default {
  name: "Header",
  data(){
    return{cms:[],useremail: localStorage.getItem("uid"),}
  },
  computed: mapState({
    msg: (state) => state.opt,
    loginn: (state) => state.islogin,
    user: (state) => state.emailId,
    inCart() { return this.$store.getters.inCart},
    numInCart() { return this.inCart.length},
   
    

  }),
  methods: {
    logout() {
      const token = getToken();
      const url =  constant.API_URL+'logout';
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const data = token;
      axios.post(url, data, config).then((res) => {
        this.$router.push("/login");
        localStorage.clear();
        store.dispatch({
          type: type.Opt,
          id: null,
          userId: null,
        });
        console.log(res.data.message);
      });
    },
     showcms() {
      cms()
        .then((res) => {
          this.cms = res.data.cms;
          console.log(this.cms);
        })
        .catch((error) => {
          console.log("Something Wrong " + error);
        });
    },
    show() {
      if ("access_token" in localStorage) {
        store.dispatch({
          type: type.Opt,
          id: getToken(),
          userId: localStorage.getItem("uid"),
        });
      }
    },
  },
  mounted: function mounted() {
    this.show();
    this.showcms();
  },
};
</script>

<style>
</style>