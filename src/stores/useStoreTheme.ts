import { defineStore } from "pinia"
import { useColorMode } from "@vueuse/core"

const useStoreTheme = defineStore("useStoreTheme", () => {

    // Color mode

    const colorMode = useColorMode()

    const switchColorMode = () => {
        if(colorMode.value !== "auto") {
            colorMode.value === "light" ? colorMode.value = "dark" : colorMode.value = "light"
        }
    }

    return {
        colorMode,
        switchColorMode
    }
})

export default useStoreTheme