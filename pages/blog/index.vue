<script setup>
import { useAsyncData } from 'nuxt/app';


const { data: docs } = await useAsyncData('content', () =>
  queryContent().find()
);
</script>

<template>
  <main class="pt-14 h-full">
    <h1>Content List</h1>
    
      <div class="flex">

        
        <NuxtLink v-for="doc in docs" :to="`${doc._path}`" :key="doc._path">
          <div class="border w-[300px] h-[200px]">
            
            <h3>
              {{ doc.title }}
            </h3>
            <p>{{ doc.de }}</p>

          </div>
        </NuxtLink>
        
      </div>
    
  </main>
</template>

<style scoped>
  ul {
    list-style: none;
  }
</style>

