<template>
  <section class="cart-area pt-120 pb-120">
    <div class="container">
      <div class="row wow fadeInUp animated">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="cart-table-box">
            <div class="table-outer">
              <table class="cart-table">
                <thead class="cart-header">
                <tr>
                  <th class="">Product Name</th>
                  <th class="price">Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th class="hide-me"></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="product in products">
                  <td>
                    <div class="thumb-box">
                      <router-link :to="{name:'products.show',params:{id: product.id}}" class="thumb">
                        <img :src="`http://localhost:8876/storage/${product.preview_image}`" alt="">
                      </router-link>
                      <router-link :to="{name:'products.show',params:{id: product.id}}" class="title">
                        <h5> {{ product.title }}</h5>
                      </router-link>
                    </div>
                  </td>
                  <td>${{ product.price }}</td>
                  <td class="qty">
                    <div class="qtySelector text-center">
                      <span class="decreaseQty">
                        <i class="flaticon-minus"></i>
                      </span>
                      <input type="number" class="qtyValue" :value="getQuantity(product.id)"/>
                      <span class="increaseQty">
                        <i class="flaticon-plus"></i>
                      </span>
                    </div>
                  </td>
                  <td class="sub-total">${{ getSubtotal(product) }}</td>
                  <td>
                    <div class="remove"><i class="flaticon-cross"></i></div>
                  </td>
                </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="row pt-30">
        <div class="col-xl-6 col-lg-7 wow fadeInUp animated">
          <div class="cart-total-box">
            <div class="inner-title">
              <h3>Cart Totals</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt--30">
        <div class="col-xl-6 col-lg-5 wow fadeInUp animated">
          <div class="cart-check-out mt-30">
            <h3>Check Out</h3>
            <ul class="cart-check-out-list">
              <li>
                <div class="left">
                  <p>Subtotal</p>
                </div>
                <div class="right">
                  <p>$2500.00</p>
                </div>
              </li>
              <li>
                <div class="left">
                  <p>Shipping</p>
                </div>
                <div class="right">
                  <p><span>Flat rate:</span> $50.00</p>
                </div>
              </li>
              <li>
                <div class="left">
                  <p>Total Price:</p>
                </div>
                <div class="right">
                  <p>$2550.00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-12">
          <div class="cart-button-box">
            <div class="apply-coupon wow fadeInUp animated">
              <div class="apply-coupon-input-box mt-30 ">
                <input type="text" name="coupon-code" value="" placeholder="Coupon Code">
              </div>
              <div class="apply-coupon-button mt-30">
                <button class="btn--primary style2" type="submit">Apply Coupon</button>
              </div>
            </div>
            <div class="cart-button-box-right wow fadeInUp animated">
              <button @click="sOrder" class="btn--primary mt-30">Continue Shopping</button>
              <button class="btn--primary mt-30" type="submit">Update Cart</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>


export default {
  name: "OrderIndex",
  mounted() {
    this.getCart()
  },
  data() {
    return {
      products: null
    }
  },
  methods: {
    async getCart() {
      try {
        const cart = localStorage.getItem('cart');
        const ids = JSON.parse(cart).map(product => product.id);

        const response = await this.axios.get(`http://localhost:8876/api/order/${ids}`);
        // console.log(response.data);
        this.products = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        $(document).trigger('changed');
      }
    },
    getQuantity(id) {
      let cart = localStorage.getItem('cart');
      const quantity = JSON.parse(cart).find(product => product.id === id)?.quantity;
      return quantity;
    },
    getSubtotal(product) {
      const quantity = this.getQuantity(product.id)

      const subtotal = quantity * product.price

      return subtotal
    },
    async sOrder() {
      try {
        const cart = localStorage.getItem('cart');

        const response = await this.axios.post(`http://localhost:8876/api/storeorder/`, JSON.parse(cart));
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    },
  }

}
</script>

<style scoped>

</style>
