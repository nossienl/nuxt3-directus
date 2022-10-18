<template>
  <div>
    <h2>Blog</h2>
    <div class="grid">
      <ClientOnly>
        <div :key="post.title" v-for="post in posts">
          <p>
            {{ new Date(post.date_created).toLocaleDateString() }}
          </p>
          <NuxtLink :to="`/articles/${post.id}`">
            <p>
              {{ post.title }}
            </p>
          </NuxtLink>
          <p>{{ post.short_content }}</p>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
const { getItems } = useDirectusItems();
const posts = await getItems({ collection: "blog" });
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
</style>
