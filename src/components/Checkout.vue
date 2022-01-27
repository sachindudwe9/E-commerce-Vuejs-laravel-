<template>
  <div>
    <section id="cart_items">
      <div class="container">
        <!-- <div class="step-one">
				<h2 class="heading">Step1</h2>
			</div> -->
        <!-- <div class="checkout-options">
				<h3>New User</h3>
				<p>Checkout options</p>
				<ul class="nav">
					<li>
						<label><input type="checkbox"> Register Account</label>
					</li>
					<li>
						<label><input type="checkbox"> Guest Checkout</label>
					</li>
					<li>
						<a href=""><i class="fa fa-times"></i>Cancel</a>
					</li>
				</ul>
			</div>/checkout-options -->

        <!-- <div class="register-req">
				<p>Please use Register And Checkout to easily get access to your order history, or use Checkout as Guest</p>
			</div>/register-req -->

        <div class="shopper-informations text-center">
          <div class="container">
            <!-- <div class="col-sm-3">
						<div class="shopper-info">
							<p>Shopper Information</p>
							<form>
								<input type="text" placeholder="Display Name">
								<input type="text" placeholder="User Name">
								<input type="password" placeholder="Password">
								<input type="password" placeholder="Confirm password">
							</form>
							<a class="btn btn-primary" href="">Get Quotes</a>
							<a class="btn btn-primary" href="">Continue</a>
						</div>
					</div> -->
            <div class="form">
              <div class="bill-to">
                <div class="form-one">
                  <form class="col-12" @submit.prevent="postCheckout()">
                    <input
                      type="text"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.email.$error,
                      }"
                      placeholder="Email"
                      v-model="user.email"
                      name="email"
                    />
                    <input
                      type="text"
                      placeholder="First Name"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.first_name.$error,
                      }"
                      v-model="user.first_name"
                      name="first_name"
                    />
                    <div
                      v-if="submitted && $v.user.first_name.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.first_name.required">
                        Name is required</span
                      >
                      <span v-if="!$v.user.first_name.alpha">
                        Name should contain only letters.</span
                      >
                      <span v-if="!$v.user.first_name.minLength">
                        Length should be atleast 2.</span
                      >
                    </div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.last_name.$error,
                      }"
                      v-model="user.last_name"
                      name="last_name"
                    />
					<div
                      v-if="submitted && $v.user.last_name.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.last_name.required">
                       Last Name is required</span
                      >
                      <span v-if="!$v.user.last_name.alpha">
                       Last Name should contain only letters.</span
                      >
                      <span v-if="!$v.user.last_name.minLength">
                        Length should be atleast 2.</span
                      >
                    </div>
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.mobile.$error,
                      }"
                      v-model="user.mobile"
                      name="mobile"
                    />
					<div
                v-if="submitted && $v.user.mobile.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.user.mobile.required">
                  Contact number is required.</span
                >
                <span v-if="!$v.user.mobile.numeric">
                  Contact number should contain only digits.</span
                >
                <span v-if="!$v.user.mobile.maxLength">
                  Contact number cannot be more than 10 digit.</span
                >
				</div>
                    <input
                      type="text"
                      placeholder="Address"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.address.$error,
                      }"
                      v-model="user.address"
                      name="address"
                    />
					<div
                v-if="submitted && $v.user.address.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.user.address.required">
                  Address is required.</span
                >
				</div>
                    <input
                      type="text"
                      placeholder="City"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.city.$error,
                      }"
                      v-model="user.city"
                      name="city"
                    />
					<div
                v-if="submitted && $v.user.city.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.user.city.required">
                  City  is required.</span
                >
				</div>
                    <input
                      type="text"
                      placeholder="Pin Code"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.pin_code.$error,
                      }"
                      v-model="user.pin_code"
                      name="pin_code"
                    />
					<div
                v-if="submitted && $v.user.address.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.user.pin_code.required">
                  Pin Code number is required.</span
                >
				</div>
				<div class="form-group">
              <button class="btn btn-primary">Submit</button>
            </div>
                  </form>
                </div>

                <!-- <form>
									<input type="text" placeholder="Zip / Postal Code *">
									<select>
										<option>-- Country --</option>
										<option>United States</option>
										<option>Bangladesh</option>
										<option>UK</option>
										<option>India</option>
										<option>Pakistan</option>
										<option>Ucrane</option>
										<option>Canada</option>
										<option>Dubai</option>
									</select>
									<select>
										<option>-- State / Province / Region --</option>
										<option>United States</option>
										<option>Bangladesh</option>
										<option>UK</option>
										<option>India</option>
										<option>Pakistan</option>
										<option>Ucrane</option>
										<option>Canada</option>
										<option>Dubai</option>
									</select>
									<input type="password" placeholder="Confirm password">
									<input type="text" placeholder="Phone *">
									<input type="text" placeholder="Mobile Phone">
									<input type="text" placeholder="Fax">
								</form> -->
              </div>
            </div>
            <!-- <div class="col-sm-4">
						<div class="order-message">
							<p>Shipping Order</p>
							<textarea name="message"  placeholder="Notes about your order, Special Notes for Delivery" rows="16"></textarea>
							<label><input type="checkbox"> Shipping to bill address</label>
						</div>	
					</div>					 -->
          </div>
        </div>
        <div class="review-payment">
          <h2>Review & Payment</h2>
        </div>

        <div class="table-responsive cart_info">
          <table class="table table-condensed">
            <thead>
              <tr class="cart_menu">
                <td class="image">Item</td>
                <td class="description"></td>
                <td class="price">Price</td>
                <td class="quantity">Quantity</td>
                <td class="total">Total</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="cart_product">
                  <a href=""><img src="images/cart/one.png" alt="" /></a>
                </td>
                <td class="cart_description">
                  <h4><a href="">Colorblock Scuba</a></h4>
                  <p>Web ID: 1089772</p>
                </td>
                <td class="cart_price">
                  <p>$59</p>
                </td>
                <td class="cart_quantity">
                  <div class="cart_quantity_button">
                    <a class="cart_quantity_up" href=""> + </a>
                    <input
                      class="cart_quantity_input"
                      type="text"
                      name="quantity"
                      value="1"
                      autocomplete="off"
                      size="2"
                    />
                    <a class="cart_quantity_down" href=""> - </a>
                  </div>
                </td>
                <td class="cart_total">
                  <p class="cart_total_price">$59</p>
                </td>
                <td class="cart_delete">
                  <a class="cart_quantity_delete" href=""
                    ><i class="fa fa-times"></i
                  ></a>
                </td>
              </tr>

              <tr>
                <td class="cart_product">
                  <a href=""><img src="images/cart/two.png" alt="" /></a>
                </td>
                <td class="cart_description">
                  <h4><a href="">Colorblock Scuba</a></h4>
                  <p>Web ID: 1089772</p>
                </td>
                <td class="cart_price">
                  <p>$59</p>
                </td>
                <td class="cart_quantity">
                  <div class="cart_quantity_button">
                    <a class="cart_quantity_up" href=""> + </a>
                    <input
                      class="cart_quantity_input"
                      type="text"
                      name="quantity"
                      value="1"
                      autocomplete="off"
                      size="2"
                    />
                    <a class="cart_quantity_down" href=""> - </a>
                  </div>
                </td>
                <td class="cart_total">
                  <p class="cart_total_price">$59</p>
                </td>
                <td class="cart_delete">
                  <a class="cart_quantity_delete" href=""
                    ><i class="fa fa-times"></i
                  ></a>
                </td>
              </tr>
              <tr>
                <td class="cart_product">
                  <a href=""><img src="images/cart/three.png" alt="" /></a>
                </td>
                <td class="cart_description">
                  <h4><a href="">Colorblock Scuba</a></h4>
                  <p>Web ID: 1089772</p>
                </td>
                <td class="cart_price">
                  <p>$59</p>
                </td>
                <td class="cart_quantity">
                  <div class="cart_quantity_button">
                    <a class="cart_quantity_up" href=""> + </a>
                    <input
                      class="cart_quantity_input"
                      type="text"
                      name="quantity"
                      value="1"
                      autocomplete="off"
                      size="2"
                    />
                    <a class="cart_quantity_down" href=""> - </a>
                  </div>
                </td>
                <td class="cart_total">
                  <p class="cart_total_price">$59</p>
                </td>
                <td class="cart_delete">
                  <a class="cart_quantity_delete" href=""
                    ><i class="fa fa-times"></i
                  ></a>
                </td>
              </tr>
              <tr>
                <td colspan="4">&nbsp;</td>
                <td colspan="2">
                  <table class="table table-condensed total-result">
                    <tr>
                      <td>Cart Sub Total</td>
                      <td>$59</td>
                    </tr>
                    <tr>
                      <td>Exo Tax</td>
                      <td>$2</td>
                    </tr>
                    <tr class="shipping-cost">
                      <td>Shipping Cost</td>
                      <td>Free</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td><span>$61</span></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="payment-options">
          <span>
            <label><input type="checkbox" /> Direct Bank Transfer</label>
          </span>
          <span>
            <label><input type="checkbox" /> Check Payment</label>
          </span>
          <span>
            <label><input type="checkbox" /> Paypal</label>
          </span>
        </div>
      </div>
    </section>
    <!--/#cart_items-->
  </div>
</template>

<script>
import {
  required,
  email,
  alpha,
  minLength,
  maxLength,
  numeric,
} from "vuelidate/lib/validators";
import { checkout } from "@/common/Service";
export default {
  name: "Checkout",

  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        mobile: "",
        email: "",
        city: "",
        pin_code: "",
        address: "",
      },
      submitted: false,
    };
  },
  validations: {
    user: {
      first_name: {
        required,
        alpha,
        minLength: minLength(2),
        maxLength: maxLength(20),
      },
      last_name: {
        required,
        alpha,
        maxLength: minLength(2),
        axLength: maxLength(10),
      },
      email: { required, email },
      address: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(255),
      },
      city: { required },
      pin_code: { required },
      mobile: { required, numeric },
    },
  },
  methods: {
    postCheckout() {
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      let formData = {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        mobile: this.user.mobile,
        address: this.user.address,
        city: this.user.city,
        pin_code: this.user.pin_code,
      };
      checkout(formData)
        .then((res) => {
          if (res) {
            alert("Succefully inserted data");
            console.log(res.data);
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>