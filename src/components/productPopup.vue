<template>
  <div class="container">
    <div v-if="productItem" class="row justify-content-between align-items-center">
      <div class="col-lg-6">
        <div class="quick-view__left-content">
          <div class="tabs">
            <div class="popup-product-thumb-box">
              <ul>
                <li v-for="product_img in productItem.product_images" class="tab-nav popup-product-thumb">
                  <a :href="`#tabb${product_img.id}`">
                    <img :src="product_img.file_path" alt=""/>
                  </a>
                </li>
              </ul>
            </div>
            <div  class="popup-product-main-image-box">

              <div
                  v-for="product_img in productItem.product_images"
                  :id="`tabb${product_img.id}`"
                  class="tab-item popup-product-image"
              >
                <div class="popup-product-single-image">
                  <img :src="product_img.file_path" :alt="productItem.title"/>
                </div>
              </div>

              <button class="prev">
                <i class="flaticon-back"></i>
              </button>
              <button class="next">
                <i class="flaticon-next"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="popup-right-content">
          <h3>{{ productItem.title }}</h3>
          <div class="ratting">
            <i class="flaticon-star"></i>
            <i class="flaticon-star"></i>
            <i class="flaticon-star"></i>
            <i class="flaticon-star"></i>
            <i class="flaticon-star"></i>
            <span>(112)</span>
          </div>
          <p class="text">
            {{ productItem.description }}
          </p>
          <div class="price">
            <h2> ${{ productItem.price }} USD
              <del v-if="productItem.old_price"> ${{ productItem.old_price }} USD</del>
            </h2>
            <h6> In stuck</h6>
          </div>
          <div class="color-varient">
            <template v-for="group_product in productItem.group_products">
              <a
                  @click.prevent="getProduct(group_product.id)"
                  :href="`#${group_product.id}`"
                  class="color-name"
                  :style="`background:${group_product.color.title};`"
              >
                <span>{{ group_product.title }}</span>
              </a>
            </template>
          </div>

          <div class="add-product">
            <h6>Qty:</h6>
            <div class="button-group">
              <div class="qtySelector text-center">
                    <span class="decreaseQty">
                      <i class="flaticon-minus"></i>
                    </span>
                <input type="number" class="qtyValue" value="1"/>
                <span class="increaseQty">
                      <i class="flaticon-plus"></i>
                </span>
              </div>
              <button class="btn--primary">
                Add to Cart
              </button>
            </div>
          </div>
          <div class="payment-method">
            <a href="#0">
              <img src="src/assets/images/payment_method/method_1.png" alt="">
            </a>
            <a href="#0">
              <img src="src/assets/images/payment_method/method_2.png" alt="">
            </a>
            <a href="#0">
              <img src="src/assets/images/payment_method/method_3.png" alt="">
            </a>
            <a href="#0">
              <img src="src/assets/images/payment_method/method_4.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productPopup",
  props: ['data'],
  data() {
    return {
      productItem: this.data,
    }
  },
  methods: {
    getProduct(id) {
      this.productItem = null
      this.axios.get(`http://localhost:8876/api/products/${id}`)
          .then(res => {
            this.productItem = res.data.data
            // console.log(res.data.data)
          })
          .finally(v => {
            $(document).trigger('changed')
          })
    }
  }
}
</script>

<style scoped>

</style>
