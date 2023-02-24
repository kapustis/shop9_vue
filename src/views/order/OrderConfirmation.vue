<template>
  <div>
    <h2>Order Confirmation</h2>
    <div v-if="order">
      <p>Thank you for your order! Your order number is {{ order.order_number }}.</p>
      <h3>Order Details</h3>
      <table>
        <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Subtotal</th>
        </tr>
        </thead>
        <tbody v-if="products">
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.name }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.subtotal }}</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="3">Total:</td>
          <td>{{ order.total }}</td>
        </tr>
        </tfoot>
      </table>
      <p>Shipping address:</p>
      <p>{{ order.address }}</p>
    </div>
    <div v-else>
      <p>Please complete the order form.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderConfirmation',
  mounted() {
    this.order = this.$route.params.orderData;
  },
  data() {
    return {
      order:'',
      products:''
    }
  },
  methods:{
    async getProducts() {
      try {
        const ids = JSON.parse(this.order.products).map(product => product.id);
        const response = await this.axios.get(`http://localhost:8876/api/order/${ids}`);
        this.products = response.data
      }catch (error) {
        console.log(error)
      }
    }
  }
};
</script>
