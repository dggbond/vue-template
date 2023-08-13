<script setup lang="ts">
import SidebarMenu from "~/components/SidebarMenu.vue"
import { useAppStore } from "~/store/app"

import { ref } from "vue"
import { NLayout, NLayoutSider, NConfigProvider, NLayoutHeader, NButton, NIcon } from "naive-ui"
import { Moon, Sunny } from "@vicons/ionicons5"
import { RouterView } from "vue-router"

const collapsed = ref(false)
const appStore = useAppStore()
</script>

<template>
  <n-config-provider :theme="appStore.theme">
    <main>
      <n-layout position="absolute">
        <n-layout-header class="header" bordered>
          <div class="actions">
            <n-button @click="appStore.toggleTheme()">
              <n-icon>
                <moon v-if="appStore.isDarkTheme" />
                <sunny v-else />
              </n-icon>
            </n-button>
          </div>
        </n-layout-header>
        <n-layout
          has-sider
          position="absolute"
          class="sider"
        >
          <n-layout-sider
            bordered
            collapse-mode="width"
            :native-scrollbar="false"
            :collapsed-width="64"
            :width="240"
            :collapsed="collapsed"
            show-trigger
            @collapse="collapsed = true"
            @expand="collapsed = false"
          >
            <sidebar-menu />
          </n-layout-sider>
          <n-layout
            content-style="padding: 16px; height: 100%;"
            :native-scrollbar="false"
          >
            <router-view />
          </n-layout>
        </n-layout>
      </n-layout>
    </main>
  </n-config-provider>
</template>

<style scoped>
.header {
  height: 64px;
  padding: 0px 16px;
  display: flex;
  align-items: center;
}

.actions {
  justify-self: flex-end;
  margin-left: auto;
}

.sider {
  top: 64px;
}
</style>
