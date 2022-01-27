<template>
  <div class="col-sm-3">
				<div class="left-sidebar">
					<h2>Category</h2>
					<div class="panel-group category-products" id="accordian"><!--category-productsr-->
						<div v-for="(category,index) in categories" v-bind:key="index">
							<div class="panel panel default">
								<div class="panel-heading">
									<h4 class="panel-title"><router-link :to="`/home/${category.id}`">{{category.name}}</router-link>

									</h4>
								</div>
							<div>
						</div>
					</div>
				</div><br>
						<!--/category-products-->
					
						<div class="brands_products"><!--brands_products-->
							<h2>Brands</h2>
							<div class="brands-name">
								<ul class="nav nav-pills nav-stacked">
									<li><a href="#"> <span class="pull-right">(50)</span>Acne</a></li>
									<li><a href="#"> <span class="pull-right">(56)</span>Grüne Erde</a></li>
									<li><a href="#"> <span class="pull-right">(27)</span>Albiro</a></li>
									<li><a href="#"> <span class="pull-right">(32)</span>Ronhill</a></li>
									<li><a href="#"> <span class="pull-right">(5)</span>Oddmolly</a></li>
									<li><a href="#"> <span class="pull-right">(9)</span>Boudestijn</a></li>
									<li><a href="#"> <span class="pull-right">(4)</span>Rösch creative culture</a></li>
								</ul>
							</div>
						</div><!--/brands_products-->
						<div class="shipping text-center"><!--shipping-->
							<img src="images/home/shipping.jpg" alt="" />
						</div><!--/shipping-->
					</div>
				</div>	
            </div>			
</template>

<script>
import Vue from "vue";
import axios from "axios";
import  constant  from '@/common/Constant';
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
name:"Sidebar",
data(){
	return {
		categories:null,
	};
  },
  mounted(){
	const url = constant.API_URL+'category';
	axios.get(url).then((res) => {
	console.log(res.data);
	this.categories = res.data;
	});
  },
};
</script>

<style>
.panel-title{
	text-transform: capitalize;
}
</style>