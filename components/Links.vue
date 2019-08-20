<template>
  <section class="hero is-dark">
    <div class="hero-body"></div>
    <div class="hero-foot">
      <nav class="tabs is-centered">
        <div class="container">
          <ul>
            <!-- <li>
              <a class="button is-large is-dark" href="#">
                <span class="icon is-medium">
                  <i class="fab fa-twitter fa-2x"></i>
                </span>
              </a>
            </li> -->
            <li>
              <a
                class="button is-large is-dark"
                href="https://github.com/fumikoyama"
              >
                <span class="icon is-medium">
                  <i class="fab fa-github fa-2x"></i>
                </span>
              </a>
            </li>
            <li>
              <a
                class="button is-large is-dark"
                href="https://qiita.com/t-koyama"
              >
                <span class="icon is-medium">
                  <i class="icon-qiita fa-2x"></i>
                </span>
              </a>
            </li>
            <!-- <li>
              <a class="button is-large is-dark" href="mailto:#">
                <span class="icon is-medium">
                  <i class="far fa-envelope fa-2x"></i>
                </span>
              </a>
            </li> -->
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

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
