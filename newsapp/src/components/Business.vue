<template>
  <div class="business">
    <div class="row">
      <div class="col">
        <div class="main-content">
          <h1 class="content-headline">Most viewed</h1>

          <ul class="list-unstyled">
            <li class="media my-3" v-for="article in articles">
              <a v-bind:href="article.url" target="_blank">
                <img class="media-object d-flex mr-3" v-bind:src="article.urlToImage">
              </a>

              <div class="media-body">
                <h5 class="media-heading" itemprop="headline">
                  <a v-bind:href="article.url" target="_blank">{{article.title}}</a>
                </h5>
                <h5><i>by {{article.author}}</i></h5>
                <p>{{article.description}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div> <!-- end row -->
  </div>
</template>

<script>
export default {
  name: 'business',
  props: ['source'],
  data () {
    return {
      articles: []
    }
  },
  methods: {
    updateSource: function (source) {
      this.$http.get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=451e64a91bcd42b9b3abc03a855eb354')
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

<style lang="sass">

</style>