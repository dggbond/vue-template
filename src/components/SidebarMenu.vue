<script setup lang="ts">
import router, { routes } from '~/router'

import { NMenu } from 'naive-ui'

import type { MenuOption } from 'naive-ui'
import type { RouteRecordRaw } from 'vue-router'

const routeToMenuOption = (r: RouteRecordRaw, ancestorPath: string): MenuOption => {
  const menuOption: MenuOption = {
    key: ancestorPath ? `${ancestorPath}/${r.path}` : r.path,
    label: r.meta?.label,
    show: !r.meta?.draft,
  }

  if (r.children) {
    menuOption.type = 'group'
    menuOption.children = r.children.map((item) => routeToMenuOption(item, ancestorPath + r.path))
  }

  return menuOption
}

const menuOptions: MenuOption[] = routes.map((item) => routeToMenuOption(item, ''))

const handleUpdateValue = (key: string) => {
  router.push(key)
}
</script>

<template>
  <n-menu
    :options="menuOptions"
    @update:value="handleUpdateValue"
  />
</template>

<style scoped></style>
