<!--
 * @Author: along
 * @Description: 布局
 * @Date: 2024-04-02 13:59:29
 * @LastEditors: along
 * @LastEditTime: 2024-04-02 16:11:36
 * @FilePath: /cxy-web-table/src/views/index.vue
-->
<script setup lang="ts">
import TableExcel from './table-excel/index.vue';
import TableControl from './table-control/index.vue';
import TableNav from './table-nav/index.vue';
import { useCssModule } from 'vue';

const css = useCssModule('app');
</script>

<template>
  <div :class="[css.box]">
    <TableNav />
    <div :class="[css.main]">
      <TableControl />
      <div :class="[css.fmWrap]">
        <TableExcel />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module="app" scoped>
@import url('./index.module.css');
</style>
