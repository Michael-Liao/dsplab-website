<template>
  <div>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12 md4
          v-for="proj in projects"
          :key="proj.title">
          <v-card>
            <v-card-media
              :src="proj.img"
              height="200px"
              contain>
            </v-card-media>
            <v-card-title>
              <h1 class="headline" v-text="proj.title"></h1>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { title: 'DRLSE', img: '/static/cpu.png' },
        { title: 'AI', img: '/static/cpu.png' },
        { title: 'Marauder\'s map', img: '/static/cpu.png' },
        { title: 'ion reader', img: '/static/banner.jpeg' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
