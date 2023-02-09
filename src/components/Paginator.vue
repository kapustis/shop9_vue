<template>
  <div class="row">
    <div class="col-12 d-flex justify-content-center wow fadeInUp animated">
      <ul class="pagination text-center">

        <li v-if="dataSet.current_page !== 1" class="next">
          <a @click.prevent="pagination(dataSet.current_page - 1)" href="#">
            <i class="flaticon-left-arrow-1" aria-hidden="true"></i>
          </a>
        </li>

        <template v-for="link in dataSet.links">
          <li v-if="
                  Number(link.label) && (dataSet.current_page - link.label < 3 && dataSet.current_page - link.label > -3)
                  || Number(link.label) === 1 || Number(link.label) === pagination.last_page
              "
          >
            <a
                @click.prevent="pagination(link.label)"
                :href="link.url" :class="link.active ? 'active' : ''"
            >
              {{ link.label }}
            </a>
          </li>
        </template>

        <li v-if="dataSet.current_page !== dataSet.last_page" class="next">
          <a @click.prevent="pagination(dataSet.current_page + 1)" href="#">
            <i class="flaticon-next-1" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Paginator",
  props: ['dataSet', 'dataProducts'],
  data() {
    return {}
  },
  methods: {
    pagination(id) {
      this.dataProducts(id)
    }
  }
}
</script>

<style scoped>

</style>
