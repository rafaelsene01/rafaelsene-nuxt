<template>
  <!-- <sn-doc /> -->
  <div>
    <ul class="pages">
      <li class="chat page">
        <div class="chatArea">
          <ul ref="messages" class="messages">
            <li v-for="(msg, index) in messages" :key="index" class="message">
              {{ msg }}
            </li>
          </ul>
        </div>
        <input
          v-model="message"
          class="inputMessage"
          type="text"
          placeholder="Type here..."
          @keyup.enter="socket.emit('message', message)"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { socketWeb } from '~/plugins/socket.io.js'

// https://www.npmjs.com/package/vue2-ace-editor
// https://medium.com/front-end-weekly/how-to-build-your-own-codepen-app-a8a7140d52d7
// https://github.com/PanJiaChen/vue-split-pane

export default Vue.extend({
  data() {
    return {
      socket: null,
      messages: [],
      message: '',
    }
  },
  head: {
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.4/socket.io.js',
      },
    ],
  },
  mounted() {
    this.$axios.$get('/socket/api').then((resp) => {
      this.socket = io()
      this.socket.on('message', (msg) => this.messages.push(msg))
    })
  },
})
</script>

<style></style>
