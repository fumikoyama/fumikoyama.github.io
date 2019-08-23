<script>
export default {
  props: {
    image: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="column is-one-third-desktop is-half-tablet is-12-mobile">
    <figure class="image is-3by2 portfolio">
      <img :src="image" :alt="title" />
      <div class="overlay">
        <span class="has-text-success">{{ description }}</span>
      </div>
    </figure>
  </div>
</template>

<style scoped>
.portfolio {
  cursor: pointer;
}
.portfolio .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
}
.portfolio:hover .overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
}
.overlay span {
  font-weight: bold;
  font-size: 14px;
}
</style>
