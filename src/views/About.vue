<template>
  <div class="about">
      <Contact />
      <v-divider></v-divider>
      <LegalMentions />
  </div>
</template>

<script>
  import Contact from '@/components/Contact.vue';
  import LegalMentions from '@/components/LegalMentions.vue';

  export default {
    components: {
      Contact,
      LegalMentions,
    },
  }
</script>

<style lang="scss" scoped>

</style>
