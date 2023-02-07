<template>
  <main class="overflow-hidden">
    <!--Start Breadcrumb Style2-->
    <div
        class="breadcrumb-area"
        style="background-image: url(src/assets/images/inner-pages/breadcum-bg.png);"
    >
      <!--
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb-content pb-60 text-center wow fadeInUp animated">
              <h2>Shop Grid</h2>
              <div class="breadcrumb-menu">
                <ul>
                  <li><a href="index.html"><i class="flaticon-home pe-2"></i>Home</a></li>
                  <li><i class="flaticon-next"></i></li>
                  <li class="active">Shop Grid</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      -->
    </div>
    <!--End Breadcrumb Style2-->
    <!--Start Product Categories One-->
    <!--
    <section class="product-categories-one pb-60">
      <div class="container">
        <div class="row wow fadeInUp animated">
          <div class="col-xl-12">
            <div class="product-categories-one__inner">
              <ul>
                <li>
                  <a href="#0" class="img-box">
                    <div class="inner">
                      <img src="src/assets/images/shop/product-categories-v1-img1.png" alt=""/>
                    </div>
                  </a>
                  <div class="title">
                    <a href="#0">
                      <h6>Accessories</h6>
                    </a>
                  </div>
                </li>
                <li>
                  <a href="#0" class="img-box">
                    <div class="inner">
                      <img src="src/assets/images/shop/product-categories-v1-img2.png" alt=""/>
                    </div>
                  </a>
                  <div class="title">
                    <a href="#0">
                      <h6>Furnitures</h6>
                    </a>
                  </div>
                </li>
                <li>
                  <a href="#0" class="img-box">
                    <div class="inner">
                      <img src="src/assets/images/shop/product-categories-v1-img3.png" alt=""/>
                    </div>
                  </a>
                  <div class="title">
                    <a href="#0">
                      <h6>Jewellery</h6>
                    </a>
                  </div>
                </li>
                <li><a href="#0" class="img-box">
                  <div class="inner">
                    <img src="src/assets/images/shop/product-categories-v1-img4.png" alt=""/>
                  </div>
                </a>
                  <div class="title">
                    <a href="#0">
                      <h6>Shoes</h6>
                    </a>
                  </div>
                </li>
                <li><a href="#0" class="img-box">
                  <div class="inner">
                    <img src="src/assets/images/shop/product-categories-v1-img5.png" alt=""/>
                  </div>
                </a>
                  <div class="title">
                    <a href="#0">
                      <h6>Electronics</h6>
                    </a>
                  </div>
                </li>
                <li>
                  <a href="#0" class="img-box">
                    <div class="inner">
                      <img src="src/assets/images/shop/product-categories-v1-img6.png" alt=""/>
                    </div>
                  </a>
                  <div class="title">
                    <a href="#0">
                      <h6>Fashion</h6>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    -->
    <!--End Product Categories One-->
    <!--Start product-grid-->
    <div class="product-grid pt-60 pb-120">
      <div class="container">
        <div class="row gx-4">
          <div class="col-xl-3 col-lg-4">
            <div class="shop-grid-sidebar">
              <button class="remove-sidebar d-lg-none d-block">
                <i class="flaticon-cross"> </i>
              </button>

              <template v-if="filterItems">
                <filters :data="filterItems" :refresData="refresh"/>
              </template>

            </div>
          </div>

          <div class="col-xl-9 col-lg-8">
            <div class="row">
              <!--Sort  -->
              <div class="col-xl-12">
                <div class="shop-grid-page-top-info p-0 justify-content-md-between justify-content-center">
                  <div class="left-box wow fadeInUp animated">
                    <p>Showing 1–12 of 50 Results</p>
                  </div>
                  <div
                      class="right-box justify-content-md-between justify-content-center wow fadeInUp animated"
                  >
                    <div class="short-by">
                      <div class="select-box">
                        <select class="wide">
                          <option data-display="Short by latest">Featured</option>
                          <option value="1">Best selling</option>
                          <option value="2">Alphabetically, A-Z</option>
                          <option value="3">Alphabetically, Z-A</option>
                          <option value="3">Price, low to high</option>
                          <option value="3">Price, high to low</option>
                          <option value="3">Date, old to new</option>
                        </select>
                      </div>
                    </div>
                    <div class="product-view-style d-flex justify-content-md-between justify-content-center">
                      <ul class="nav nav-pills" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button
                              :class="`nav-link ${productIsGrid ? 'active' :''}`"
                              type="button"
                              @click="productIsGrid = true"
                          >
                            <i class="flaticon-grid"></i>
                          </button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button
                              :class="`nav-link ${!productIsGrid ? 'active' :''}`  "
                              type="button"
                              @click="productIsGrid = false"
                          >
                            <i class="flaticon-list"></i>
                          </button>
                        </li>
                      </ul>
                      <button class="slidebarfilter d-lg-none d-flex">
                        <i class="flaticon-edit"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <div class="tab-content">
                  <div class="row" v-if="productIsGrid">
                    <div v-for="product in products" :key="product.id" class="col-xl-4 col-lg-6 col-6">
                      <product-grid :data="product"></product-grid>
                    </div>
                  </div>

                  <div class="row" v-if="!productIsGrid">
                    <div v-for="product in products" :key="product.id" class="col-12">
                      <product :data="product"></product>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--Pagination-->
            <div class="row">
              <div class="col-12 d-flex justify-content-center wow fadeInUp animated">
                <ul class="pagination text-center">
                  <li class="next">
                    <a href="#0">
                      <i class="flaticon-left-arrows" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li><a href="#0">1</a></li>
                  <li><a href="#0" class="active">2</a></li>
                  <li><a href="#0">3</a></li>
                  <li><a href="#0">...</a></li>
                  <li><a href="#0">10</a></li>
                  <li class="next">
                    <a href="#0">
                      <i class="flaticon-next-1" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <!--End product-grid-->
  </main>
</template>

<script>
import Product from "@/views/product/Product.vue";
import ProductGrid from "@/views/product/ProductGrid.vue";
import Filters from "@/components/Filters.vue";

export default {
  name: "Index",
  components: {Filters, ProductGrid, Product},
  mounted() {
    this.getProducts()
    this.getFilterList()
  },
  data() {
    return {
      products: [],
      productIsGrid: true,
      filterItems: false
    }
  },
  methods: {
    getFilterList() {
      this.axios.get('http://localhost:8876/api/products/filters')
          .then(res => {
            this.filterItems = res.data;
          })
          .finally(v => {
            $(document).trigger('changed')
          })
    },
    getProducts() {
      this.axios.post('http://localhost:8876/api/products', {})
          .then(res => {
            this.products = res.data.data
          })
          .finally(v => {
            $(document).trigger('changed')
          })
    },
    refresh({data}) {
      this.products = data.data
    }

  }
}
</script>

<style scoped>

</style>
