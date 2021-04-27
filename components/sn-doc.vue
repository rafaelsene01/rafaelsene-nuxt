<template>
  <div class="h-full w-full flex flex-col">
    <client-only class="ace_editor">
      <AceEditor
        ref="ace"
        v-model="content"
        lang="css"
        theme="dracula"
        width="100%"
        height="100%"
        :options="{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          fontSize: 18,
          tabSize: 4,
        }"
        @init="editorInit"
      />

      <footer>
        <span>aa</span>
      </footer>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DocComponent',

  data: (): any => {
    return {
      content: '',
      socket: null,
      live: false,
    }
  },

  watch: {
    content() {
      if (!this.live) {
        this.socket.emit('text', this.content)
      }
    },
  },

  mounted() {
    const { doc } = this.$route.params

    this.socket = this.$nuxtSocket({
      name: 'main',
      query: {
        doc,
      },
    })

    this.socket.on('text', (data: any) => {
      if (this.socket.id !== data.id) {
        this.live = true
        this.content = data.msg
      }
    })
  },

  // mounted() {
  //   // const editor = (this.$refs.ace as any).editor
  //   // editor.setOptions({
  //   //   fontSize: '18pt',
  //   // })
  // },

  methods: {
    editorInit() {
      require('brace/ext/language_tools') // language extension prerequsite...
      // require('brace/mode/html')
      // require('brace/mode/javascript') // language
      require('brace/mode/css')
      require('brace/theme/dracula')
      // require('brace/snippets/css') // snippet
    },
  },
})
</script>

<style scoped lang="postcss">
.ace_editor,
footer {
  @apply flex w-full;
}

.ace_editor {
  @apply flex-1;
}

footer {
  @apply h-7 items-center bg-gray-900;

  span {
    @apply text-white font-medium;
  }
}
</style>
