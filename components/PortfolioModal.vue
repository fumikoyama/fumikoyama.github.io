<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-card">
      <section class="modal-card-body">
        <figure class="image is-3by2">
          <img :src="image" alt="" />
        </figure>
        <p>{{ description }}</p>
      </section>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="closeModal"
    ></button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('portfolio_modal', ['image', 'description', 'isActive'])
  },
  methods: {
    ...mapActions('portfolio_modal', ['closeModal'])
  }
}
</script>
