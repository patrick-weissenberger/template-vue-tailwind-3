<template>
    <RouterView />
</template>





<script lang="ts" setup>
// Import: Components

// Import: Stores
import useStoreTheme from "@/stores/useStoreTheme"

// Import: Other
import { useTitle } from "@vueuse/core"

// ### Component logic

const storeTheme = useStoreTheme()
storeTheme.colorMode

useTitle("template-vue-tailwind-3")
</script>