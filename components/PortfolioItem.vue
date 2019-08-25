<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="column is-one-third-desktop is-half-tablet is-12-mobile">
    <figure class="image is-3by2 portfolio">
      <img :src="image" alt="" />
    </figure>
  </div>
</template>

<style scoped>
.portfolio {
  cursor: pointer;
}
</style>
