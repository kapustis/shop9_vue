<template>
  <div class="product-grid-two list mt-30 ">
    <div class="product-grid-two__img">
      <a href="shop-details-2.html" class="d-block">
        <img :src="image_url" class="first-img" :alt="title"/>
        <img src="src/assets/images/home-three/products-hover-1.png" :alt="title" class="hover-img"/>
      </a>
      <div class="products-grid-one__badge-box">
        <span class="badge discount">Best</span>
      </div>
    </div>
    <!--popup-->
    <div :id="`popup${id}`" class="product-gird__quick-view-popup mfp-hide">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-6">
            <div class="quick-view__left-content">
              <div class="tabs">
                <div class="popup-product-thumb-box">
                  <ul>
                    <li class="tab-nav popup-product-thumb">
                      <a href="#tab7111111b">
                        <img src="src/assets/images/shop/shop-grid-page-img1.jpg" alt=""/>
                      </a>
                    </li>
                    <li class="tab-nav popup-product-thumb ">
                      <a href="#tab8111111b">
                        <img src="src/assets/images/shop/shop-grid-page-img2.jpg" alt=""/>
                      </a>
                    </li>
                    <li class="tab-nav popup-product-thumb ">
                      <a href="#tab9111111b">
                        <img src="src/assets/images/shop/shop-grid-page-img3.jpg" alt=""/>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="popup-product-main-image-box">
                  <div id="tab7111111b" class="tab-item popup-product-image">
                    <div class="popup-product-single-image">
                      <img src="src/assets/images/shop/shop-grid-page-img1.jpg" alt=""/>
                    </div>
                  </div>
                  <div id="tab8111111b" class="tab-item popup-product-image">
                    <div class="popup-product-single-image">
                      <img src="src/assets/images/shop/shop-grid-page-img2.jpg" alt=""/>
                    </div>
                  </div>
                  <div id="tab9111111b" class="tab-item popup-product-image">
                    <div class="popup-product-single-image">
                      <img src="src/assets/images/shop/shop-grid-page-img3.jpg" alt=""/>
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
              <h3>Round Small Table</h3>
              <div class="ratting">
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <i class="flaticon-star"></i>
                <span>(123)</span>
              </div>
              <p class="text">
                Wooden Tables to Brighten Your Dining Room
              </p>
              <div class="price">
                <h2> $50 USD
                  <del> $105 USD</del>
                </h2>
                <h6> In stuck</h6>
              </div>

              <div class="color-varient">
                <a href="#0" class="color-name pink">
                  <span>Pink</span>
                </a>
                <a href="#0" class="color-name red">
                  <span>Red</span>
                </a>
                <a href="#0" class="color-name yellow">
                  <span>Yellow</span>
                </a>
                <a href="#0" class="color-name blue">
                  <span>Blue</span>
                </a>
                <a href="#0" class="color-name black">
                  <span>Black</span>
                </a>
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
    <!--popup-->
    <div class="product-grid-two-content text-center">
      <span>{{category.title}}</span>
      <h5>
        <a href="shop-details-2.html"> {{ title }} </a>
      </h5>
      <p>
        <del v-if="old_price">${{old_price}}</del>
        $ {{ price }}
      </p>
      <p class="text"> {{ description }} </p>
      <div class="product-grid-two__overlay-box">
        <div class="title">
          <h6><a href="cart.html">Add To Cart</a></h6>
        </div>
        <div class="icon">
          <ul>
            <li>
              <a :href="`#popup${id}`" class="popup_link">
                <i class="flaticon-eye"></i>
              </a>
            </li>
            <li>
              <a href="wishlist.html">
                <i class="flaticon-heart"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ['data'],
  data() {
    return {
      id: this.data.id,
      title: this.data.title,
      category: this.data.category,
      price: this.data.price,
      old_price: this.data.old_price,
      description: this.data.description,
      image_url: this.data.image_url,
    }
  }
}
</script>

<style scoped>

</style>
