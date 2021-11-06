<template>
  <div class="home">
    <v-container>
    <v-row>
      <v-col align="center">
        <p class="text-h1">OpenBrain</p>
        <p class="text-h6">A brainstorming app</p>
        <v-col md="8">
          <v-btn @click="join()" color="primary">Join</v-btn>
          <v-btn @click="create()" color="secondary">Create</v-btn>
          </v-col>
      </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  methods: {
    join() {
      this.$router.push("Join")
    },
    create() {
      this.$router.push("Editor")
    }
  }
}
</script>
