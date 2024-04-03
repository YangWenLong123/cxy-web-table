<!--
 * @Author: along
 * @Description: 控件
 * @Date: 2024-04-02 14:53:07
 * @LastEditors: along
 * @LastEditTime: 2024-04-02 17:47:45
 * @FilePath: /cxy-web-table/src/views/table-control/index.vue
-->
<script setup lang="ts">
import { useCssModule } from 'vue';
import { componentsList } from './config';

const css = useCssModule('control');
</script>

<template>
  <div :class="[css.nav]">
    <div v-for="(re, key) in componentsList" :key="key">
      <div>{{ re.title }}</div>

      <div :class="[css.t_box]">1</div>
    </div>
  </div>
</template>

<style lang="scss" module="control" scoped>
@import url('./index.module.css');
</style>
