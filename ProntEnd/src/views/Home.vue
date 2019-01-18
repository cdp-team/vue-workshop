<template>
  <div class="home">
    
    <HomePage msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
//Home Page
import HomePage from '@/components/home/homepage.ts';
@Component({
  components: {
    HomePage,
  },
})
export default class Home extends Vue {}
</script>
