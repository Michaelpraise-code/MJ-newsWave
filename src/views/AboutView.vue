<script setup>
import { ref } from 'vue'

// Placeholder background image (replace with your image in src/assets/images/)
import backgroundImage from '@/assets/images/about.jpg'

const coreValues = ref([
  { title: 'Truth First', description: 'We are committed to delivering honest, fact-based journalism that the public can trust.', icon: 'check-circle' },
  { title: 'Independence', description: 'We report without fear or favor, holding power accountable and protecting journalistic integrity.', icon: 'shield-alt' },
  { title: 'Clarity', description: 'In a world of noise, we value clear, concise reporting that informs without confusion.', icon: 'comment' },
  { title: 'Diversity of Voice', description: 'We believe every community has a story—and every voice deserves to be heard.', icon: 'users' },
  { title: 'Responsibility', description: 'We understand the impact of our words and uphold ethical standards in every piece we publish.', icon: 'balance-scale' },
  { title: 'Innovation', description: 'We embrace new tools and platforms to reach readers wherever they are, making news accessible and engaging for all.', icon: 'rocket' }
])
</script>

<template>
  <div class="container-fluid">
    <!-- Hero Section -->
    <section class="hero-section text-center">
      <div class="hero-overlay">
        <h1 class="welcome-title">About MJ NewsWave</h1>
        <p class="hero-lead">
          Where stories come to life and facts lead the way. Join us in our mission to inform, empower, and connect communities with truth and integrity.
        </p>
      </div>
    </section>

    <!-- Welcome Section -->
    <section class="section container">
      <h2 class="section-title text-center">Our Story</h2>
      <p class="section-text">
        Welcome to MJ NewsWave, where stories come to life and facts lead the way. In a world
        overflowing with information, we stand for clarity, accuracy, and integrity. Our mission is
        simple but powerful: to deliver news that informs, empowers, and connects. Founded on the
        belief that the public deserves truth without distortion, we are an independent news
        platform driven by curiosity, guided by ethics, and fueled by the voices of the people.
        Whether it's breaking news, in-depth features, or community stories, we strive to cover the
        moments that shape our lives and the world around us. Our team is made up of passionate
        journalists, researchers, and editors dedicated to uncovering the facts and giving a voice
        to those who need to be heard. We value transparency, diversity, and accountability in every
        story we tell. From local events to global headlines, MJ NewsWave is your trusted
        source—anytime, anywhere. We’re not just reporting the news. We’re building understanding.
        Thank you for joining us on this journey. Because when you're informed, you're empowered.
      </p>
    </section>

    <!-- Vision & Mission Section -->
    <section class="section container">
      <div class="row">
        <div class="col-md-6">
          <h3 class="section-subtitle">Our Vision</h3>
          <p class="section-text">
            To be the most trusted and influential source of news—championing truth, inspiring
            critical thought, and fostering an informed, empowered global community.
          </p>
        </div>
        <div class="col-md-6">
          <h3 class="section-subtitle">Our Mission</h3>
          <p class="section-text">
            Our mission is to deliver accurate, unbiased, and timely news that informs the public,
            holds power to account, and reflects the voices of diverse communities. We believe in the
            power of information and aim to give you the tools you need to stay ahead in a constantly
            evolving world.
          </p>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="section container">
      <h2 class="section-title text-center">Core Values</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="value in coreValues" :key="value.title">
          <div class="value-card">
            <font-awesome-icon :icon="value.icon" class="value-icon" />
            <h4 class="value-title">{{ value.title }}</h4>
            <p class="value-text">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section container">
      <h2 class="section-title text-center">Our Team</h2>
      <p class="section-text text-center mb-5">
        Meet the visionaries behind MJ NewsWave, driving our mission to amplify truth and spark meaningful conversations.
      </p>
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="team-card text-center">
            <div class="team-avatar">OM</div>
            <h3 class="team-name">Okoh Michael Ekene</h3>
            <p class="team-role">Lead Producer</p>
            <p class="team-bio">
              Michael, our lead producer, is a visionary storyteller whose innovative approach and unwavering integrity shape every story we tell. His leadership drives MJ NewsWave to deliver news that informs and captivates.
            </p>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="team-card text-center">
            <div class="team-avatar">AJ</div>
            <h3 class="team-name">Anselem Judith</h3>
            <p class="team-role">Co-Producer</p>
            <p class="team-bio">
              Judith, our co-producer, brings creative brilliance and a passion for authentic storytelling. Her ability to craft compelling visuals and connect with diverse audiences makes our content resonate deeply.
            </p>
          </div>
        </div>
      </div>
      <p class="section-text text-center">
        Dear readers and supporters, together, Michael and Judith are the heartbeat of MJ NewsWave, united by a shared vision: to amplify voices, uncover truth, and spark meaningful conversations. With integrity and innovation, they’ve built a platform that’s more than news—it’s a movement. Join us in this journey. Engage with our stories, trust in our voice, and let’s make waves that change the world. Thank you, The MJ NewsWave Team
      </p>
    </section>
  </div>
</template>

<style scoped>
:root {
  --primary-color: #007bff;
  --secondary-color: #17a2b8;
  --text-color: #333;
  --light-bg: #f8f9fa;
}

.about-container {
  background-color: #fff;
  padding-bottom: 3rem;
}

.hero-section {
  background-image: url('@/assets/images/about.jpg');
  background-size: cover;
  background-position: center;
  padding: 5rem 2rem;
  position: relative;
  color: #fff;
}

.hero-overlay {
  background: rgba(0, 123, 255, 0.7); /* Blue overlay for readability */
  padding: 2rem;
  border-radius: 10px;
}

.welcome-title {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-lead {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.section {
  padding: 3rem 0;
}

.section-title {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-size: 2rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
}

.section-subtitle {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 1rem;
}

.section-text {
  font-size: 1rem;
  color: var(--text-color);
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

.value-card {
  background: var(--light-bg);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.value-icon {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.value-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.value-text {
  font-size: 0.9rem;
  color: var(--text-color);
}

.team-card {
  background: var(--light-bg);
  padding: 1.5rem;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.team-avatar {
  width: 80px;
  height: 80px;
  background: var(--primary-color);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 auto 1rem;
}

.team-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.team-role {
  font-size: 1rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.team-bio {
  font-size: 0.9rem;
  color: var(--text-color);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .hero-section {
    padding: 3rem 1rem;
  }

  .welcome-title {
    font-size: 2rem;
  }

  .hero-lead {
    font-size: 1rem;
  }

  .section {
    padding: 2rem 0;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .section-subtitle {
    font-size: 1.3rem;
  }

  .section-text {
    font-size: 0.95rem;
  }

  .value-card,
  .team-card {
    padding: 1rem;
  }

  .team-avatar {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .hero-section {
    padding: 4rem 1.5rem;
  }

  .welcome-title {
    font-size: 2.2rem;
  }

  .section-title {
    font-size: 1.9rem;
  }
}
</style>