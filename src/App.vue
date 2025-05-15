<template>
  <div class="main-wrapper" :class="{ 'index-six': route.path ==='/home/index-6' }">
    <router-view />
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default{
  setup(){
    const route = useRoute();  
    
    return{
      route,
    }
  }
}
</script>