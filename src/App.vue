<template>
    <div class="h-dvh flex justify-center items-center">
        <div class="flex flex-col gap-y-4">
            <RouterView />
        </div>
    </div>
</template>





<script lang="ts" setup>
import { useTitle } from "@vueuse/core"

useTitle("template-vue-tailwind-3")
</script>