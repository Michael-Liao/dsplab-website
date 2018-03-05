<template>
  <div>
    <!-- <v-container fluid pa-0 mt-0> -->
    <v-parallax src="/static/banner.jpeg" height="400">
    <!-- this is how you use assets -->
    <!-- <v-parallax :src="require('@/assets/banner.jpeg')" height="400"> -->
      <v-layout column align-center justify-center>
        <h1 class="teal--text text--lighten-1 display-3">DSP&#x2A09RFlab</h1>
        <h4 class="light-green--text text--darken-2 display-1">Getting communication going</h4>
      </v-layout>
    </v-parallax>
    <!-- </v-container> -->
    <v-container>
      <h1 class="text-md-left display-2">Latest News</h1>
      <v-divider></v-divider>
      <p class="text-md-left headline">
        Congrates [populate more stuff]
      </p>
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex
            xs12 md4
            v-for="article in news"
            :key="article.title">
            <v-card>
              <v-card-media
                :src="article.src"
                height="200px"
                contain>
              </v-card-media>
              <v-card-title>
                <h1 class="display-1" v-text="article.title"></h1>
              </v-card-title>
              <v-card-text>
                yeah~
              </v-card-text>
              <v-card-actions>
                <v-btn flat color="cyan" @click="register">see more</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        { title: 'achievements', src: '/static/cup.png' },
        { title: 'second', src: '/static/cup.png' },
        { title: '33', src: '/static/cup.png' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
