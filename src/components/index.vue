<template>
  <div>
    <page-vertical v-if="direction === 'vertical'" key="vertical"></page-vertical>
    <page-horizontal v-else-if="direction === 'horizontal'" key="horizontal"></page-horizontal>
  </div>
</template>

<script>
  import pageVertical from './page-vertical.vue'
  import pageHorizontal from './page-horizontal.vue'

  export default {
    components: {
      pageVertical,
      pageHorizontal
    },
    data() {
      return {
        direction: window.orientation==180||window.orientation==0 ? 'vertical' : 'horizontal',
      }
    },
    created() {
       window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", () => {
         this.direction = window.orientation==180||window.orientation==0 ? 'vertical' : 'horizontal'
       }, true);
    },
  }
</script>
