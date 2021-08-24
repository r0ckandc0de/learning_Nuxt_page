<template>
  <div>
    <h1>test</h1>
    <span class="flag-icon-us"></span>
    <span class="flag-icon flag-icon-ar"></span>
     <i class="flag-icon flag-icon-jp"></i>
        <i class="flag-icon flag-icon-us"></i>

        <hr />
        <i class="flag-icon flag-icon-jp flag-icon-squared"></i>
        <i class="flag-icon flag-icon-us flag-icon-squared"></i>
  </div>
  <!-- <p>{{ posts }}</p> -->
</template>

<script>

export default {
  data () {
    return {
      posts: [],
    }
  },
  async asyncData ({ $axios }) {
    const posts = await $axios.$get('https://jsonplaceholder.typicode.com/posts')
    return { posts }
  },
}

</script>

<style lang="scss" scoped>

h1{
  color: $colorDarkPink;
}

</style>