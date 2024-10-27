<script setup>
import { useAsyncData } from 'nuxt/app';

const route = useRoute();
console.log("🚀 ~ route:", route)
const { data: doc } = await useAsyncData('content', () =>
  queryContent('blog/posts').where({ slug: route.params.slug }).findOne()
);
console.log(doc);
</script>

<template>
  <main class="pt-14 h-full">
    <article v-if="doc">
      <h1>{{ doc.title }}</h1>
        <ContentDoc id="content" />
        <!-- <ContentRenderer :value="doc.body">
        <template #default="{ children }">
          <div v-for="child in children" :key="child._key">
             <component :is="child._type" :value="child._value" />
             <div v-html="child._value"></div>
          </div>
        </template>
        </ContentRenderer> -->
      <!-- <div v-html="doc._value.body.children"></div> -->
    </article>
  </main>
</template>

<style lang="css">
article {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}
pre {
  margin: 24px 36px;
  border: 1px solid #eaeaea;
  padding: 16px;
}
h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}
p {
  margin-bottom: 1rem;
}
</style>