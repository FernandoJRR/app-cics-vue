<template>
  <div>
    
  </div>
</template>
<script lang="ts">
export default {
  emits: ['currentPage'],
  mounted() {
    this.$emit('currentPage', 'Pensums')   
  },
}
</script>
<style lang="scss">
  
</style>