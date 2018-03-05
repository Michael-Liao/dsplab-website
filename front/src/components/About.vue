<template>
  <div>
    <v-container>
      <h1 class="text-md-left display-2">About Us</h1>
      <v-divider></v-divider>
      <p class="text-md-left headline">
        We are a bunch of enthusiastic engineers who are trying to make cool
        things~ [populate more stuff]
      </p>
      <v-layout row wrap>
        <v-flex
          xs12
          v-for="member in members"
          :key="member.uname">
          <v-card style="margin: 10px">
            <v-card-title>
              <v-layout align-center row wrap>
                <v-flex xs12 md6>
                  <v-avatar size="200px">
                    <img :src="member.avatar" alt="avatar" />
                  </v-avatar>
                </v-flex>
                <v-flex xs12 md6>
                  <v-list two-line>
                    <v-list-tile avatar v-for="field in member.fields" :key="field.name">
                      <v-list-tile-content>
                        <v-list-tile-title>{{field.name}}</v-list-tile-title>
                          <v-list-tile-sub-title>{{field.value}}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="cyan" @click="register">read full bio</v-btn>
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
      members: [
        { uname: 'michael',
          avatar: '/static/avatar.png',
          fields: [
            { name: 'Name', value: 'Michael Liao' },
            { name: 'Birthday', value: '1993-11-12' },
            { name: 'status', value: 'graduate student' },
          ],
        },
        { uname: 'grace',
          avatar: '/static/avatar.png',
          fields: [
            { name: 'Name', value: 'Grace Lee' },
            { name: 'Birthday', value: '1993-??-??' },
            { name: 'status', value: 'graduate student' },
          ],
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
