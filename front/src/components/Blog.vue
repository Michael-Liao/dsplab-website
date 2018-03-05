<template>
  <div>
    <v-container>
      <div class="posts" v-for="post in posts" :key="post.title">
        <h1 class="display-1">{{post.title}} <span class="headline">{{post.author}}</span> </h1>

        <p class="post-body">
          {{post.src}}
        </p>
        <router-link :to="{ name: 'Home' }">see full story</router-link>
        <v-divider></v-divider>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: '1', title: 'New Website', src: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.Lorem ipsum dolor sit amet, brute iriure', author: 'michael' },
        { id: '2', title: 'Marauder', src: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci.', author: 'michael' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.posts {
  text-align: left;
}
.post-body {
  overflow: hidden;
  text-overflow: ellipsis;
  content: "";
  position:relative;
}
.post-body:before {
  content: "";
  width:100%;
  height:100%;
  position:absolute;
  left:0;
  top:0;
  background:linear-gradient(transparent 150px, white);
}
</style>
