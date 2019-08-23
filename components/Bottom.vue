<template>
  <footer class="section hero is-dark">
    <!-- Links -->
    <div class="hero-body">
      <nav class="tabs is-centered">
        <div class="container">
          <ul>
            <li v-for="(item, index) in linkItems" :key="index">
              <a class="button is-large is-dark" :href="item.url">
                <span class="icon is-medium">
                  <i :class="item.icon"></i>
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
            src="https://bulma.io/images/made-with-bulma--white.png"
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
        // { url: '#', icon: 'fab fa-twitter fa-2x' },
        { url: 'https://github.com/fumikoyama', icon: 'fab fa-github fa-2x' },
        { url: 'https://qiita.com/t-koyama', icon: 'icon-qiita fa-2x' }
        // { url: 'mailto:#', icon: 'far fa-envelope fa-2x' }
      ]
    }
  },
  computed: {
    year() {
      const now = new Date()
      return now.getFullYear()
    }
  }
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
  background-image: url('~assets/images/qiita-favicon.png');
  display: inline-block;
  width: 1em;
  height: 1em;
  background-size: contain;
  vertical-align: middle;
}
</style>
