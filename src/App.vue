<template>
  <el-config-provider :locale="locale" :size="size">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import { useAppStore } from '@/store/modules/app.js';

const { locale, size } = useAppStore();

defineOptions({
  name: 'App',
});
</script>
