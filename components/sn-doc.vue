<template>
  <div class="h-full w-full flex flex-col">
    <body>
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
    </body>
    <footer>
      <span>aa</span>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type DataType = {
  content: string
}

export default Vue.extend({
  name: 'DocComponent',

  data: (): DataType => {
    return {
      content: '',
    }
  },

  mounted() {
    // const editor = (this.$refs.ace as any).editor
    // editor.setOptions({
    //   fontSize: '18pt',
    // })
  },

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
body,
footer {
  @apply flex w-full;
}

body {
  @apply flex-1;
}

footer {
  @apply h-7 items-center bg-gray-900;

  span {
    @apply text-white font-medium;
  }
}
</style>
