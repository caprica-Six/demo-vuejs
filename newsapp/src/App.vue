<template>
  <div id="app" class="app">
    <header class="navbar navbar-dark bg-dark">
      <nav class="container" role="navigation">
        <div class="d-flex justify-content-between hidden-lg-up">
          <router-link class="navbar-brand" href="#" to='/'>newsapp</router-link>
          <router-link class="nav-link" href="#" to='/'>home</router-link>
          <router-link class="nav-link" href="#" to='/business'>business</router-link>
        </div>
      </nav>
    </header>

    <main class="container main" role="main">
      <router-view></router-view>
    </main>

    <footer class="footer small">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="list-group">
              <ul class="list-unstyled d-inline-flex justify-content-md-center">
                <li class="nav-link">Copyright @ 2017 Pepa Domozetska.</li>
                <li class="nav-link">Built with</li>
                <li><a href="https://vuejs.org/" class="nav-link" target="_blank">Vue.js</a></li>
                <li><a href="https://getbootstrap.com/" class="nav-link" target="_blank">Bootstrap 4</a></li>
                <li><a href="http://sass-lang.com/" class="nav-link" target="_blank">SASS</a></li>
                <li><a href="https://github.com/mzabriskie/axios" class="nav-link" target="_blank">Axios</a></li>
                <li><a href="https://webpack.js.org/" class="nav-link" target="_blank">Webpack</a></li>
                <li class="nav-link ml-10">powered by<a href="https://newsapi.org/" target="_blank"> NewsAPI.org</a></li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="sass">
  @import "./scss/app.scss";
</style>
