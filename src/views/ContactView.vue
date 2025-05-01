<script setup>

</script>
<template>
  <div class="container mt-4">
    <h1>Contact Us</h1>
    <form action="https://formspree.io/f/xrbqewqy" method="POST">
      <div class="mb-3">
        <label for="name" class="form-label">Your Name</label>
        <input type="text" name="name" class="form-control" id="name" required />
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Your Email</label>
        <input type="email" name="email" class="form-control" id="email" required />
      </div>

      <div class="mb-3">
        <label for="phone" class="form-label">Your Phone Number</label>
        <input type="tel" name="phone" class="form-control" id="phone" />
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">Your Message</label>
        <textarea name="message" class="form-control" id="message" rows="4" required></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
}
</style>
