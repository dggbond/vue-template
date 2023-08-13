import { defineStore } from "pinia"
import { darkTheme, lightTheme } from "naive-ui"
import type { GlobalTheme } from "naive-ui"

export interface AppState {
  theme: GlobalTheme
}

export const useAppStore = defineStore("app",  {
  state: (): AppState => ({ theme: darkTheme }),
  getters: {
    isDarkTheme: (state) => state.theme.name == "dark",
  },
  actions: {
    toggleTheme() {
      this.theme = this.theme.name == "dark" ? lightTheme : darkTheme
    }
  }
})
