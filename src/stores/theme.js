import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
    state: () => ({darkMode: true}),
    getters: {
        isDark: state => state.darkMode,
    },
    actions: {
        toggleTheme() {
            this.darkMode = !this.darkMode
        },
    },
    persist: true,
})