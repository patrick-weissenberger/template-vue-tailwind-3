<template>
    <Button @click="storeTheme.switchColorMode()">{{ storeTheme.colorMode }}</Button>
</template>





<script lang="ts" setup>
import useStoreTheme from "@/stores/theme"
import { Button } from "@/components/shadcn/button"

const storeTheme = useStoreTheme()
</script>