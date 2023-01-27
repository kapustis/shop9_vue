<template>
  <div class="products-three-single w-100  mt-30">
    <div class="products-three-single-img">
      <a href="shop-details-3.html" class="d-block">
        <img :src="image_url" class="first-img" alt=""/>
        <img src="src/assets/images/home-three/productss2-hover-1.png" alt="" class="hover-img"/>
      </a>

      <div class="products-grid-one__badge-box">
        <span class="bg_base badge new ">New</span>
      </div>

      <a href="cart.html" class="addcart btn--primary style2">
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
          <li >
            <a @click.prevent="getProduct(id)" :href="`#popup${id}`" class="popup_link" >
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
        <a href="shop-details-3.html"> {{ title }} </a>
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

export default {
  name: "ProductGrid",
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
            $(document).trigger('change')
          })
    }
  }
}
</script>

<style scoped>

</style>
