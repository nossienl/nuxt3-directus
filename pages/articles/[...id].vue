<template>
  <div>
    <h1>
      {{ post.title }}
    </h1>
    <hr />
    <div v-html="post.content"></div>

    <div
      v-if="post.editorjs"
      v-for="block in post.editorjs.blocks"
      :key="block.id"
    >
      <img
        v-if="block.type === 'image'"
        :src="`https://directus.nossie.nl${block.data.file.url}`"
        alt=""
      />
      {{ block.type }}
    </div>
  </div>
</template>
<script setup>
const { getItemById } = useDirectusItems();
const route = useRoute();
const post = await getItemById({ collection: "blog", id: route.params.id });
if (!post) throwError("No article found, 404");
</script>
