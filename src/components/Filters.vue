<template>
  <div class="sidebar-holder">
    <!-- Search?
    <form action="#0" class="footer-default__subscrib-form m-0 p-0 wow fadeInUp animated">
      <div class="footer-input-box p-0 ">
        <input type="email" placeholder="Email address" name="email">
        <button type="submit" class="subscribe_btn">
          <i class="flaticon-magnifying-glass"></i>
        </button>
      </div>
    </form>
    -->
    <!--Select Categories-->
    <div class="single-sidebar-box mt-30 wow fadeInUp animated ">
      <h4>Select Categories</h4>
      <div class="checkbox-item">
        <form>
          <div v-for="category in filters.categories" class="form-group">
            <input
                type="checkbox"
                :id="category.id"
                :value="category.id"
                v-model="categories"
            >
            <label :for="category.id">{{category.title}}</label>
          </div>

        </form>
      </div>
    </div>
    <!--Select Categories-->

    <!--Color Option-->
    <div class="single-sidebar-box mt-30 wow fadeInUp animated">
      <h4>Color Option </h4>
      <ul class="color-option">
        <li v-for="color in filters.colors">
          <a
              @click.prevent="addColor(color.id)"
              href="#0"
              class="color-option-single"
              :style="`background-color:${color.title}`"
          >
            <span> {{ color.title }}</span>
          </a>
        </li>

      </ul>
    </div>
    <!--Color Option-->

    <!--Filter By Price-->
    <div class="single-sidebar-box mt-30 wow fadeInUp animated">
      <h4>Filter By Price</h4>
      <div class="slider-box">
        <div id="price-range" class="slider"></div>
        <div class="output-price">
          <label for="priceRange">Price:</label>
          <input type="text" id="priceRange" readonly>
        </div>
        <button
            @click.prevent="filterProducts()"
            class="filterbtn"
            type="submit"
        >
          Filter
        </button>
      </div>
    </div>
    <!--Filter By Price-->

    <!--Tags-->
    <div class="single-sidebar-box mt-30 wow fadeInUp animated pb-0 border-bottom-0 ">
      <h4>Tags </h4>
      <ul class="popular-tag">
        <li v-for="tag in filters.tags">
          <a
              @click.prevent="addTag(tag.id)"
              href="#0"
          >{{tag.title}}</a>
        </li>
      </ul>
    </div>
    <!--Tags-->
  </div>
</template>

<script>
export default {
  name: "Filters",
  props:['data','dataProducts','setFilters'],
  mounted() {
    this.filters = this.data;
    this.setPriceFilter();
  },
  data() {
    return{
      filters: false,
      categories:[],
      colors:[],
      tags:[],
      prices:[],
    }
  },
  methods:{
    setPriceFilter(){
          //  Price Filter
          if ($("#price-range").length) {
            $("#price-range").slider({
              range: true,
              min: this.filters.price.min,
              max: this.filters.price.max,
              values: [this.filters.price.min, this.filters.price.max],
              slide: function (event, ui) {
                $("#priceRange").val("$" + ui.values[0] + " - $" + ui.values[1]);
              }
            });
            $("#priceRange").val("$" + $("#price-range").slider("values", 0) + " - $" + $("#price-range").slider("values", 1));
          }
      $(document).trigger('changed')
    },

    addColor(id){
      if(!this.colors.includes(id)){
        this.colors.push(id)
      }else{
        this.colors = this.colors.filter(item => {
          return item !== id
        })
      }
    },
    addTag(id){
      if(!this.tags.includes(id)){
        this.tags.push(id)
      }else{
        this.tags = this.tags.filter(item => {
          return item !== id
        })
      }
    },
    filterProducts(){
      let prices = $('#priceRange').val();

      this.prices = prices.replace(/[\s+|[$]/g,'').split('-');



      this.setFilters({
        'categories' : this.categories,
        'colors' : this.colors,
        'tags' : this.tags,
        'prices' : this.prices,
      })

      this.dataProducts()

    }
  }
}
</script>

<style scoped>

</style>
