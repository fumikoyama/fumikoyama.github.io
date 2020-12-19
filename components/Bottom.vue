<template>
  <footer class="section hero is-dark">
    <!-- Links -->
    <div class="hero-body">
      <nav class="tabs is-centered">
        <div class="container">
          <ul>
            <li v-for="(item, index) in linkItems" :key="index">
              <a
                :href="item.url"
                :aria-label="item.label"
                class="button is-large is-dark"
              >
                <span class="icon is-medium">
                  <font-awesome-icon
                    v-if="item.icon"
                    :icon="item.icon"
                    :class="item.class"
                  />
                  <i v-else :class="item.class"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!-- / Links -->
    <div class="hero-foot">
      <div class="content has-text-centered">
        <p>Copyright &copy; Takafumi Koyama {{ year }}</p>
        <a href="https://bulma.io">
          <img
            data-src="https://bulma.io/images/made-with-bulma--white.png"
            class="lazyload"
            alt="Made with Bulma"
            width="163"
            height="31"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      linkItems: [
        // { url: '#', icon: ['fab', 'twitter'], class: 'fa-2x', label: 'Twitter' },
        {
          url: 'https://www.linkedin.com/in/takafumikoyama/',
          icon: ['fab', 'linkedin'],
          class: 'fa-2x',
          label: 'Linkedin',
        },
        {
          url: 'https://github.com/fumikoyama',
          icon: ['fab', 'github'],
          class: 'fa-2x',
          label: 'Github',
        },
        {
          url: 'https://qiita.com/t-koyama',
          class: 'icon-qiita fa-2x',
          label: 'Qiita',
        },
        // { url: 'mailto:#', icon: ['far', 'envelope'], class: 'fa-2x', label: 'メール' }
      ],
    }
  },
  computed: {
    year() {
      const now = new Date()
      return now.getFullYear()
    },
  },
}
</script>

<style scoped>
.hero.is-dark .tabs a {
  opacity: 1;
}
.button.is-dark:hover,
.button.is-dark.is-hovered {
  background-color: #363636;
}
.icon-qiita {
  position: relative;
  line-height: 1em;
  padding-bottom: 0.12em;
}
.icon-qiita:before {
  content: '';
  background-image: url('/qiita-favicon.png');
  display: inline-block;
  width: 1em;
  height: 1em;
  background-size: contain;
  vertical-align: middle;
}
</style>
