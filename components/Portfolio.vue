<template>
  <section class="section hero">
    <div class="hero-head">
      <div class="container">
        <h1 class="title">My Recent Works</h1>
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="columns is-mobile is-multiline is-centered">
          <portfolioItem
            v-for="(item, index) in portfolioItems"
            :key="index"
            :image="item.image"
            @click.native="openModal(item)"
          />
        </div>
      </div>
    </div>
    <!-- .modal -->
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background"></div>
      <div class="modal-card">
        <section class="modal-card-body">
          <figure class="image is-3by2">
            <img :src="modalImage" alt="" />
          </figure>
          <p>{{ modalDescription }}</p>
        </section>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="closeModal"
      ></button>
    </div>
    <!-- / .modal -->
  </section>
</template>

<script>
import PortfolioItem from '~/components/PortfolioItem.vue'
export default {
  components: {
    PortfolioItem
  },
  data() {
    return {
      portfolioItems: [
        {
          image: require('~/assets/images/my-page.png'),
          description: 'Nuxt.js と Bulma を使って作成しました。'
        }
      ],
      isActive: false,
      modalImage: null,
      modalDescription: null
    }
  },
  methods: {
    openModal(item) {
      this.isActive = true
      this.modalImage = item.image
      this.modalDescription = item.description
    },
    closeModal() {
      this.isActive = false
    }
  }
}
</script>
