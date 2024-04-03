<!--
 * @Author: along
 * @Description: 
 * @Date: 2024-04-02 16:10:56
 * @LastEditors: along
 * @LastEditTime: 2024-04-02 16:25:57
 * @FilePath: /cxy-web-table/src/views/table-nav/index.vue
-->
<script setup lang="ts">
import { useCssModule } from 'vue';

const css = useCssModule('nav');
</script>

<template>
  <div :class="[css.header]">
    <div :class="[css.h_box]">
      <img :class="[css.h_img]" src="http://www.alongweb.top/image/logo.svg" />
      <div :class="[css.h_title]">Web Box</div>
    </div>

    <div :class="[css.h_box]">
      <div :class="[css.h_text]">盒子首页</div>
      <div :class="[css.h_line]"></div>
      <img src="@/assets/github.png" :class="[css.h_git]" />
    </div>
  </div>
</template>

<style lang="scss" module="nav" scoped>
@import url('./index.module.css');
</style>
