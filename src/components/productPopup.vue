<template>
  <div  :id="`popup${id}`" class="product-gird__quick-view-popup mfp-hide">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-6">
          <div class="quick-view__left-content">
            <div class="tabs">
              <div class="popup-product-thumb-box">
                <ul>
                  <li class="tab-nav popup-product-thumb">
                    <a href="#tabb1">
<!--                      <img :src="image_url" alt=""/>-->
                    </a>
                  </li>
                  <li class="tab-nav popup-product-thumb ">
                    <a href="#tabb2">
                      <img src="src/assets/images/shop/products-v6-img6.jpg" alt=""/>
                    </a>
                  </li>
                  <li class="tab-nav popup-product-thumb ">
                    <a href="#tabb3">
                      <img src="src/assets/images/shop/products-v6-img7.jpg" alt=""/>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="popup-product-main-image-box">
                <div id="tabb1" class="tab-item popup-product-image">
                  <div class="popup-product-single-image">
<!--                    <img :src="image_url" :alt="title"/>-->
                  </div>
                </div>
                <div id="tabb2" class="tab-item popup-product-image">
                  <div class="popup-product-single-image">
                    <img src="src/assets/images/shop/products-v6-img6.jpg" alt=""/>
                  </div>
                </div>
                <div id="tabb3" class="tab-item popup-product-image">
                  <div class="popup-product-single-image">
                    <img src="src/assets/images/shop/products-v6-img7.jpg" alt=""/>
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
            <h3>title</h3>
            <div class="ratting">
              <i class="flaticon-star"></i>
              <i class="flaticon-star"></i>
              <i class="flaticon-star"></i>
              <i class="flaticon-star"></i>
              <i class="flaticon-star"></i>
              <span>(112)</span>
            </div>
            <p class="text">
              description
            </p>
            <div class="price">
              <h2> $price USD
<!--                <del v-if="old_price"> ${{ old_price }} USD</del>-->
              </h2>
              <h6> In stuck</h6>
            </div>
            <div class="color-varient">
<!--              <template v-for="group_product in group_products">-->
<!--                <a-->
<!--                    v-for="color in group_product.colors"-->
<!--                    :href="`#${group_product.id}`"-->
<!--                    class="color-name"-->
<!--                    :style="`background:${color.title};`"-->
<!--                >-->
<!--                  <span>{{ color.id }}</span>-->
<!--                </a>-->
<!--              </template>-->

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
                <button class="btn--primary ">
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
  </div>
</template>

<script>
export default {
  name: "productPopup",
  props: ['id'],
  data() {
    return {
      id: this.id,
    }
  }
}
</script>

<style scoped>

</style>
