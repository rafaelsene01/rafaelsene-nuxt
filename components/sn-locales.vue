<template>
  <div class="group inline-block">
    <button
      class="outline-none focus:outline-none border px-2 py-1 bg-white rounded-sm flex items-center"
    >
      <div class="pr-2 flex-1">
        <img
          id="img-locale"
          :src="require(`@images/locales/${locale}.png`)"
          width="24"
          height="24"
          alt=""
        />
      </div>
      <span>
        <svg
          class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </span>
    </button>
    <ul
      class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top"
    >
      <li
        class="rounded-sm px-1 py-1 hover:bg-gray-100"
        v-for="item in $i18n.locales"
        :key="item.code"
      >
        <nuxt-link :to="switchLocalePath(item.code)" class="block px-2 py-1">
          <img
            :src="require(`@images/locales/${item.code}.png`)"
            width="40"
            height="40"
            class=""
            alt=""
          />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type DataType = {
  locale: string
}

export default Vue.extend({
  name: 'LocaleComponent',

  data: (): DataType => {
    return {
      locale: '',
    }
  },

  created(): void {
    this.locale = (this as any).$i18n.locale
  },

  computed: {
    i18nLocale(): string {
      return (this as any).$i18n.locale
    },
  },

  watch: {
    i18nLocale(): void {
      this.locale = (this as any).$i18n.locale

      const img = <HTMLImageElement>document.getElementById('img-locale')
      if (img) {
        img.src = require(`@images/locales/${this.locale}.png`)
      }
    },
  },
})
</script>

<style scoped lang="postcss">
/* since nested groupes are not supported we have to use
     regular css for the nested dropdowns
  */
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}

/* Below styles fake what can be achieved with the tailwind config
     you need to add the group-hover variant to scale and define your custom
     min width style.
  	 See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
  	 for implementation with config file
  */
.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}
.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg);
}
.scale-0 {
  transform: scale(0);
}
.min-w-32 {
  min-width: 8rem;
}
</style>
