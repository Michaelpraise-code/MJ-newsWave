<template>
  <div class="card h-100">
    <img
      :src="news.image_url || 'https://via.placeholder.com/150'"
      class="card-img-top"
      alt="News Image"
      @error="handleImageError"
    />
    <div class="card-body">
      <h5 class="card-title">{{ news.title || 'No Title' }}</h5>
      <p class="card-text">{{ news.description || 'No Description' }}</p>
      <router-link
        :to="news.uuid ? `/news/${news.uuid}` : '#'"
        class="btn btn-primary"
        :class="{ disabled: !news.uuid }"
      >
        Read More
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  news: {
    type: Object,
    required: true,
    validator: (news) => {
      const requiredProps = ['uuid', 'title', 'description', 'image_url'];
      const hasRequiredProps = requiredProps.every((prop) => prop in news);
      if (!hasRequiredProps) {
        console.warn('News object missing required properties:', news);
      }
      return hasRequiredProps;
    },
  },
});

function handleImageError(event) {
  event.target.src = 'https://via.placeholder.com/150';
  console.warn('Failed to load image:', event.target.src);
}
</script>