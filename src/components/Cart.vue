<template>
  <div>
    <section id="cart_items">
      <div class="container">
        <div class="table-responsive cart_info">
          <table class="table table-condensed">
            <thead>
              <tr class="cart_menu">
                <td class="image">Item</td>
                <td class="price">Price</td>
                <td class="quantity">Quantity</td>
                <td class="total">Total</td>
                <td></td>
              </tr>
            </thead>
            <tbody v-for="(item, i) in carts" :key="i">				
              <tr>
                <td class="cart_product">
                  <a href="">
                    <img
                      :src="url + item.image"
                      width="100"
                      height="50"
                      alt="image"
                  /></a>
                </td>
                <td class="cart_price">
                  <h4>
                    <a href="">{{ item.sale_price }}</a>
                  </h4>               
                </td>              
                <td class="cart_quantity">
                  <div class="cart_quantity_button">
                    <button
                      class="btn btn-success btn-sm"
                      @click="addItem(item)">
                      +
                    </button>
                    <input type="text" v-model="item.quantity" />
                     <button
                      class="btn btn-danger btn-sm"
                      @click="subItem(item)">- </button>
                  </div>
                </td>
                <td class="cart_total">					
					<h4><b><span>{{ item.quantity * item.sale_price }}</span></b></h4>
					<!-- {{ total += (parseInt(item.quantity) * parseInt(item.price)) }} -->
                 <h3 class="cart_total_price"><b>{{total }}</b></h3>
                </td>
                <td class="cart_delete">
                  <a class="cart_quantity_delete" v-on:click="showAlertConfirm"  @click="removeCart(item)"
                    ><i class="fa fa-times"></i
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <!--/#cart_items-->
  </div>
</template>

<script>
import  constant  from '@/common/Constant';
export default {
  name: "Cart",
  data() {
    return { carts: undefined, url:constant.UPLOAD_URL};
  },
  created() {
    this.viewCart();
	//this.additem(carts);
  },
//   computed:{
// 	total:function () {

// 	}
//   },
  methods: {
    viewCart() {
      if (localStorage.getItem("mycart")) {
        this.carts = JSON.parse(localStorage.getItem("mycart"));
        console.log(this.carts);
      }
    },

	addItem(carts) {
    Object.assign(carts,{
		quantity:parseInt(carts.quantity)+1,
	});
		localStorage.setItem("mycart",JSON.stringify(this.carts));
    },
	subItem(carts) {
      Object.assign(carts,{
		quantity:parseInt(carts.quantity)-1,
	});
		localStorage.setItem("mycart",JSON.stringify(this.carts));
    },
	removeCart(item) {
     var del=this.carts.indexOf(item);
		this.carts.splice(del,1);
     localStorage.setItem("mycart",JSON.stringify(this.carts));
     },
		// showAlertConfirm(){

    //           this.$swal({

    //                  title: 'Are you sure?',

    //                 text: "You won't be able to revert this!",

    //                 type: 'warning',

    //                 showCancelButton: true,

    //                 confirmButtonColor: '#3085d6',

    //                 cancelButtonColor: '#d33',

    //                confirmButtonText: 'Yes, delete it!'

    //           }).then((result) => {

    //                   if (result.value) {

    //                           this.$swal(

    //                                'Deleted!',

    //                               'Your file has been deleted.',

    //                                'success'

    //                         )

    //               }

    //         });

    //       },
  },
  mounted() {
    this.carts = JSON.parse(localStorage.getItem("mycart"));   
    console.log(this.carts);
  },
};
</script>

<style>

</style>