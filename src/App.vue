<script setup>
import {ref} from 'vue'
</script>

<template>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
  </div>
  <router-view> </router-view>
</template>
