<template>
  <div class="products-three-single w-100  mt-30">
    <div class="products-three-single-img">
      <a href="shop-details-3.html" class="d-block">
        <img :src="image_url" class="first-img" :alt="title"/>
        <img src="src/assets/images/home-three/productss2-hover-1.png" :alt="title" class="hover-img"/>
      </a>

      <div class="products-grid-one__badge-box">
        <span class="bg_base badge new ">New</span>
      </div>

      <a @click.prevent="addToCart(id)" href="cart.html" class="addcart btn--primary style2">
        Add To Cart
      </a>

      <div class="products-grid__usefull-links">
        <ul>
          <li>
            <a href="wishlist.html">
              <i class="flaticon-heart"> </i>
              <span>wishlist</span>
            </a>
          </li>
          <li>
            <a href="compare.html">
              <i class="flaticon-left-and-right-arrows"></i>
              <span>compare</span>
            </a>
          </li>
          <li>
            <a @click.prevent="getProduct(id)" :href="`#popup${id}`" class="popup_link">
              <i class="flaticon-visibility"></i>
              <span> quick view</span>
            </a>
          </li>
        </ul>
      </div>
    </div>


    <div :id="`popup${id}`" class="product-gird__quick-view-popup mfp-hide">
      <template v-if="productI">
        <product-popup :data="productI"></product-popup>
      </template>
    </div>

    <div class="products-three-single-content text-center">
      <span> {{ category.title }}</span>

      <h5>
        <router-link :to="{name:'products.show',params:{id: id}}"> {{ title }}</router-link>
      </h5>

      <p>
        <del v-if="old_price">${{ old_price }}</del>
        $ {{ price }}
      </p>
    </div>
  </div>
</template>

<script>
import ProductPopup from "@/components/productPopup.vue";
import product from "@/views/product/Product.vue";

export default {
  name: "ProductGrid",
  computed: {
    product() {
      return product
    }
  },
  components: {ProductPopup},
  props: ['data'],
  data() {
    return {
      id: this.data.id,
      title: this.data.title,
      price: this.data.price,
      old_price: this.data.old_price,
      category: this.data.category,
      description: this.data.description,
      image_url: this.data.image_url,
      group_products: this.data.group_products,

      productI: null
    }
  },
  methods: {
    getProduct(id) {
      this.axios.get(`http://localhost:8876/api/products/${id}`)
          .then(res => {
            this.productI = res.data.data
          })
          .finally(v => {
            $(document).trigger('changed')
          })
    },
    addToCart(id) {

      let cart = localStorage.getItem('cart');

      let newProduct = [
        {
          'id': id,
          'quantity': 1,
        }
      ]

      if (!cart) {
        localStorage.setItem('cart', JSON.stringify(newProduct))
      } else {
        cart = JSON.parse(cart)

        cart.forEach(productInCart => {
          if (productInCart.id === id) {
            productInCart.quantity = Number(productInCart.quantity) + 1
            newProduct = null
          }
        });

        Array.prototype.push.apply(cart, newProduct)

        localStorage.setItem('cart', JSON.stringify(cart));

      }

      $(document).trigger('changed')
    }
  }
}
</script>

<style scoped>

</style>
