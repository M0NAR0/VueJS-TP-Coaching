<template>
  <div class="about">
    <h1>This is an about page</h1>
      <Contact />
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
