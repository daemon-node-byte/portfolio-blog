<script setup lang="ts">
import clsx from 'clsx';
const links = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Blog', url: '/blog' },
  { name: 'Projects', url: '/projects' },
  { name: 'Contact', url: '/contact' },
];
const $route = useRoute();

</script>
<template>
  <nav class="top-0 fixed px-6 font-custom bg-zinc-800 w-full">
    <TransitionGroup tag="ul" name="slide" class="flex space-x-6">
      <li :class="clsx($route.path === link.url ? 'border-b-2 border-indigo-400 transition-colors' : 'border-0', 'py-4')"
        v-for="link in links" :key="link.url">
        <NuxtLink
          :class="clsx('transition-all', $route.path === link.url ? 'text-indigo-400' : 'hover:text-indigo-400')"
          :to="link.url">{{ link.name }}</NuxtLink>
      </li>
    </TransitionGroup>
  </nav>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>