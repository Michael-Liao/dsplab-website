<template>
  <v-toolbar fixed dark class="cyan">
    <v-toolbar-title class="mr-4">
      <router-link class="home" tag="span" :to="{ name: 'Home' }">
        DSP&#x2A09RFlab
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark to="projects">projects</v-btn>
      <v-btn flat dark to="about">about</v-btn>
      <v-btn flat dark to="blog">blog</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark to="register">sign up</v-btn>
      <v-btn flat dark to="login">login</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
};
</script>

<style scoped>
.home {
  color: inherit;
  cursor: pointer;
}
.home:hover {
  opacity: 0.8
}
</style>
