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
          <div class="column is-one-third-desktop is-half-tablet is-12-mobile">
            <figure class="image is-3by2 portfolio">
              <img src="~/assets/images/my-page.png" alt="My website" />
              <div class="overlay">
                <span>Nuxt.js と Bulma を使って作成しました。</span>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
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
  color: #4ebf58;
  font-size: 14px;
}
</style>
