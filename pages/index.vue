<template>
  <!-- <sn-doc /> -->
  <div>{{ clientsCount }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

// https://www.npmjs.com/package/vue2-ace-editor
// https://medium.com/front-end-weekly/how-to-build-your-own-codepen-app-a8a7140d52d7
// https://github.com/PanJiaChen/vue-split-pane

export default Vue.extend({
  data(): any {
    return {
      socket: null,
      clientsCount: 'aa',
    }
  },

  mounted() {
    this.socket = this.$nuxtSocket({
      name: 'main',
    })

    this.socket.on('clientsCount', (msg: any) => {
      this.clientsCount = msg
    })
  },
})
</script>

<style lang="postcss"></style>
