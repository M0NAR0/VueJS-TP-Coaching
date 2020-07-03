<template>
  <v-app>
    <v-app-bar
      app
      color="red accent-4"
      dark
    >
    OnlineCoachingFrance
    <v-btn class="mx-4" :to="{name: 'Home'}">Accueil</v-btn>
    <v-spacer></v-spacer>
    <v-btn class="mx-4" :to="{name: 'EspaceCoach'}">Espace coach</v-btn>
    <v-btn class="mx-4" :to="{name: 'EspaceMembre'}">Espace membre</v-btn>
    <v-btn class="mx-4" :to="{name: 'About'}">À propos</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view/>

      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
</style>
