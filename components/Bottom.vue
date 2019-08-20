<template>
  <footer class="section hero is-dark">
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
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      const now = new Date()
      return now.getFullYear()
    }
  }
}
</script>
