<template>
  <aside class="sidebar col-md-3">
    <div class="row">
      <div class="col">
        <div class="content-headline mb-4 pt-3">
          <h4>Most popular</h4>
        </div>

        <ul class="list-unstyled">
          <li class="media my-3" v-for="article in articles">
            <a v-bind:href="article.url" target="_blank">
              <img class="media-object d-flex mr-2 mb-1" v-bind:src="article.urlToImage">
            </a>

            <div class="media-body">
              <h5 class="media-heading mb-2" itemprop="headline">
                <a v-bind:href="article.url" target="_blank">{{article.title}}</a>
              </h5>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'sidebar',
  props: ['source'],
  data () {
    return {
      articles: []
    }
  },
  methods: {
    updateSource: function (source) {
      this.$http.get('https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=451e64a91bcd42b9b3abc03a855eb354')
        .then(response => {
          this.articles = response.data.articles
        })
    }
  },
  created: function () {
    this.updateSource(this.source)
  },
  watch: {
    source: function (val) {
      this.updateSource(val)
    }
  }
}
</script>

<style scoped>


</style>