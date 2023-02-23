<template>
  <div class="side-cart-closer"></div>

  <div class="side-cart d-flex flex-column justify-content-between">
    <div class="top">
      <div class="content d-flex justify-content-between align-items-center">
        <h6 class="text-uppercase">Your Cart (03)</h6>
        <span class="cart-close text-uppercase">X</span>
      </div>
      <div class="cart_items">
        <div class="items d-flex justify-content-between align-items-center">
          <div class="left d-flex align-items-center">
            <a href="shop-details-1.html" class="thumb d-flex justify-content-between align-items-center">
              <img src="/src/assets/images/shop/products-img1.jpg" alt="">
            </a>
            <div class="text">
              <a href="shop-details-1.html">
                <h6>Diamond Bracelet</h6>
              </a>
              <p>2 X <span>$350.00</span></p>
            </div>
          </div>
          <div class="right">
            <div class="item-remove">
              <i class="flaticon-cross"></i>
            </div>
          </div>
        </div>
        <div class="items d-flex justify-content-between align-items-center">
          <div class="left d-flex align-items-center">
            <a href="shop-details-1.html" class="thumb d-flex justify-content-between align-items-center">
              <img src="/src/assets/images/shop/products-img2.jpg" alt="">
            </a>
            <div class="text">
              <a href="shop-details-1.html">
                <h6>Blacked Neckles </h6>
              </a>
              <p>1 X <span>$150.00</span></p>
            </div>
          </div>
          <div class="right">
            <div class="item-remove">
              <i class="flaticon-cross"></i>
            </div>
          </div>
        </div>
        <div class="items d-flex justify-content-between align-items-center">
          <div class="left d-flex align-items-center">
            <a href="shop-details-1.html" class="thumb d-flex justify-content-between align-items-center">
              <img src="/src/assets/images/shop/products-img3.jpg" alt="">
            </a>
            <div class="text">
              <a href="shop-details-1.html">
                <h6>Diamond Ring </h6>
              </a>
              <p>1 X <span>$200.00</span></p>
            </div>
          </div>
          <div class="right">
            <div class="item-remove">
              <i class="flaticon-cross"></i>
            </div>
          </div>
        </div>
        <div class="items d-flex justify-content-between align-items-center">
          <div class="left d-flex align-items-center">
            <a href="shop-details-2.html" class="thumb d-flex justify-content-between align-items-center">
              <img src="/src/assets/images/shop/products-img4.jpg" alt="">
            </a>
            <div class="text">
              <a href="shop-details-1.html">
                <h6>Women Earring</h6>
              </a>
              <p>1 X <span>$150.00</span></p>
            </div>
          </div>
          <div class="right">
            <div class="item-remove">
              <i class="flaticon-cross"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="total-ammount d-flex justify-content-between align-items-center">
        <h6 class="text-uppercase">Total:</h6>
        <h6 class="ammount text-uppercase">$850.00</h6>
      </div>
      <div class="button-box d-flex justify-content-between">
        <router-link :to="{name:'order'}"  class="btn_black cart-close">
          View Cart
        </router-link>
        <a href="cart.html" class="button-2 btn_theme">
          Chekout
        </a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "CartInHeader"
}
</script>

<style scoped>

</style>
