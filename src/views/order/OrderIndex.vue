<template>
  <div
      class="breadcrumb-area"
      style="background-image: url(src/assets/images/inner-pages/breadcum-bg.png);"
  >

  </div>
  <section class="cart-area pt-120 pb-120">
    <div class="container">
      <div class="row wow fadeInUp animated">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="cart-table-box">
            <div class="table-outer">
              <table class="cart-table">
                <thead class="cart-header">
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="product in products">
                  <td>
                    <div class="thumb-box">
                      <router-link :to="{name:'products.show',params:{id: product.id}}" class="thumb">
                        <img :src="`http://localhost:8876/storage/${product.preview_image}`" :alt="product.title">
                      </router-link>
                      <router-link :to="{name:'products.show',params:{id: product.id}}" class="title">
                        <h5> {{ product.title }} </h5>
                      </router-link>
                    </div>
                  </td>
                  <td>${{ product.price }}</td>
                  <td class="qty">
                    <div class="qtySelector text-center">
                      <button :disabled="product.quantity === 1" @click="updatingQuantity(product.id,-1)">
                         <span class="decreaseQty">
                        <i class="flaticon-minus"></i>
                      </span>
                      </button>
                      <input type="number" class="qtyValue" :value="product.quantity"/>
                      <button :disabled="product.count === product.quantity" @click="updatingQuantity(product.id,1)">
                        <span class="increaseQty">
                          <i class="flaticon-plus"></i>
                        </span>
                      </button>

                    </div>
                  </td>
                  <td class="sub-total">${{ product.subtotal }}</td>
                  <td>
                    <div class="remove" @click="removeItemCart(product.id)"><i class="flaticon-cross"></i></div>
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="cart-check-out ">
                <ul class="cart-check-out-list">
                  <li>
                    <div class="left">
                      <p>Total Price:</p>
                    </div>
                    <div class="right">
                      <p>${{ total }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

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
      phone: '',
      total: ''
    }
  },
  methods: {
    async getCart() {
      try {
        const cart = JSON.parse(localStorage.getItem('cart'));
        const ids = cart.map(product => product.id);
        const response = await this.axios.get(`http://localhost:8876/api/order/${ids}`);

        let items = JSON.parse(localStorage.getItem('cart')).map(item => {
          const product = response.data.find(product => product.id === item.id);

          return {
            id: item.id,
            quantity: item.quantity,
            count: product.count,
            price: product.price,
            title: product.title,
            preview_image: product.preview_image,
            subtotal: item.quantity * product.price
          };
        });

        this.products = items;

        this.setTotal();

      } catch (error) {
        console.error(error);
      } finally {
        $(document).trigger('changed');
      }
    },
    setTotal() {
      if (this.products) {
        this.total = this.products.reduce((total, item) => {
          return total + item.quantity * item.price;
        }, 0);
      }
    },
    updatingQuantity(id, plusOrMinus) {
      const cart = JSON.parse(localStorage.getItem('cart'));

      // ?????????????? ?????????? ?? ?????????????? ???? id
      const productCart = cart.find(item => item.id === id);

      // ?????????????????????? ???????????????????? ???????????? ???? 1
      productCart.quantity += plusOrMinus;

      // ?????????????????? ?????????????? ?? localStorage
      localStorage.setItem('cart', JSON.stringify(cart));

      const product = this.products.find(p => p.id === id);
      product.quantity += plusOrMinus;
      product.subtotal = product.quantity * product.price;

      this.products = [
        ...this.products.slice(0, this.products.indexOf(product)),
        product,
        ...this.products.slice(this.products.indexOf(product) + 1)
      ];

      this.setTotal();
    },

    removeItemCart(idToRemove) {
      let cart = JSON.parse(localStorage.getItem('cart'));

      cart = cart.filter(item => item.id !== idToRemove);

      this.products = this.products.filter(item => item.id !== idToRemove)

      localStorage.setItem('cart', JSON.stringify(cart));
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

      // ???????????????? ???????????? ?????????? ???? ????????????
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
            // ?????????????? ??????????????
            // localStorage.removeItem('cart');
            // ???????????????? ???? ???????????????? ?????????????????????????? ????????????
            // this.$router.push({
            //   name: 'OrderConfirmation' ,
            //   params: {
            //     orderData: this.orderData
            //   }
            // });
          })
          .catch(error => {
            console.log(error);
          });
    }
  }

}
</script>

<style scoped>

button:disabled span{
  color: #a6a5a5;
  cursor: default;
  background:#FFFFFF;
}

</style>
