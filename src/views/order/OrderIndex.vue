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
        </div>
      </div>


<!--
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
-->
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="cart-table-box">
        <form @submit.prevent="submitOrder">
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" required>
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div>
            <label for="address">Address:</label>
            <input type="text" id="address" v-model="address" required>
          </div>
          <div>
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" v-model="phone" required>
          </div>
          <button class="btn--primary mt-30" type="submit">Submit Order</button>
        </form>
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
      products: null,
      name: '',
      email: '',
      address: '',
      phone: ''
    }
  },
  methods: {
    async getCart() {
      try {
        const cart = localStorage.getItem('cart');
        const ids = JSON.parse(cart).map(product => product.id);
        const response = await this.axios.get(`http://localhost:8876/api/order/${ids}`);

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
      const quantity = this.getQuantity(product.id);
      const subtotal = quantity * product.price;

      return subtotal
    },

    submitOrder() {

      let items = JSON.parse(localStorage.getItem('cart')).map(item => {
        const product = this.products.find(product => product.id === item.id);
        return {
          id: item.id,
          quantity: item.quantity,
          price: product.price,
          name: product.title,
        };
      });

      let totalCost = items.reduce((total, item) => {
        return total + item.quantity * item.price;
      }, 0);

      // Отправка данных формы на сервер
      const orderData = {
        name: this.name,
        email: this.email,
        address: this.address,
        phone: this.phone,
        products: items,
        amount: totalCost
      };
      this.axios.post('http://localhost:8876/api/order', orderData)
          .then(res => {
            console.log(res.data);
            // Очистка корзины
            // localStorage.removeItem('cart');
            // Редирект на страницу подтверждения заказа
            this.$router.push({
              name: 'OrderConfirmation' ,
              params: {
                orderData: this.orderData
              }
            });
          })
          .catch(error => {
            console.log(error);
          });
    }
  }

}
</script>

<style scoped>

</style>
