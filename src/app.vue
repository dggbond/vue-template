<template lang="pug">
#app.app
  router-link(to="/home") home
  router-link(to="/me") me
  router-view
</template>

<script>
export default {
  mounted() {
  },
}
</script>
