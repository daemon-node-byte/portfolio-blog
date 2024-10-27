<script setup>
import { useAsyncData } from 'nuxt/app';


const { data: docs } = await useAsyncData('content', () =>
  queryContent().find()
);
</script>

<template>
  <main class="pt-14 h-full">
    <h1>Content List</h1>
    <ul>
      <li v-for="doc in docs" :key="doc._path">
        <NuxtLink :to="`${doc._path}`">{{ doc.title }}</NuxtLink>
      </li>
    </ul>
  </main>
</template>

