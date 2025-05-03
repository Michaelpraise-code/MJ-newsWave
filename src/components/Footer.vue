 <script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const email = ref('')
const subscribe = () => {
  if (email.value) {
    console.log('Subscribed with:', email.value)
    alert('Thank you for subscribing to MJ NewsWave!')
    email.value = ''
  }
}
</script>

<template>
  <footer class="footer bg-primary">
    <div class="container">
      <div class="row">
        <!-- Branding & Mission -->
        <div class="col-lg-4 col-md-6 mb-4">
          <h3 class="footer-brand">MJ NewsWave</h3>
          <p class="footer-text">
            Delivering truth with clarity and integrity. Join us in building an informed, empowered global community.
          </p>
          <div class="social-links">
            <a href="https://facebook.com/mjnewswave" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Facebook">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
            <a href="https://twitter.com/mjnewswave" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Twitter">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
            <a href="https://instagram.com/mjnewswave" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            <a href="https://linkedin.com/company/mjnewswave" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
            <a href="https://youtube.com/mjnewswave" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="YouTube">
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="col-lg-2 col-md-6 mb-4">
          <h4 class="footer-title">Explore</h4>
          <ul class="footer-links">
            <li><RouterLink to="/" class="footer-link">Home</RouterLink></li>
            <li><RouterLink to="/about" class="footer-link">About</RouterLink></li>
            <li><RouterLink to="/contact" class="footer-link">Contact</RouterLink></li>
            <li><RouterLink to="/category/business" class="footer-link">Business</RouterLink></li>
            <li><RouterLink to="/category/technology" class="footer-link">Technology</RouterLink></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="col-lg-3 col-md-6 mb-4">
          <h4 class="footer-title">Contact Us</h4>
          <ul class="footer-links">
            <li>
              <font-awesome-icon icon="envelope" class="contact-icon" />
              <a href="mailto:okohmick24@gmail.com" class="footer-link">info@mjnewswave.com</a>
            </li>
            <li>
              <font-awesome-icon icon="phone" class="contact-icon" />
              <a href="tel:+234-8169-559-351" class="footer-link">+234-8169-559-351</a>
            </li>
            <li>
              <font-awesome-icon icon="map-marker-alt" class="contact-icon" />
              <span class="footer-text">1 Ambasador Ajonye Ave, Otukpo, Benue State.</span>
            </li>
          </ul>
        </div>

        <!-- Newsletter Signup -->
        <div class="col-lg-3 col-md-6 mb-4">
          <h4 class="footer-title">Stay Updated</h4>
          <p class="footer-text">Subscribe to our newsletter for the latest news and updates.</p>
          <div class="newsletter-form">
            <input
              v-model="email"
              type="email"
              class="form-control newsletter-input"
              placeholder="Enter your email"
              aria-label="Email for newsletter"
            />
            <button class="btn btn-primary newsletter-btn" @click="subscribe">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div class="footer-divider"></div>
      <div class="footer-bottom text-center">
        <p>© 2025 MJ NewsWave. Built with passion by Okoh Michael Ekene & Anselem Judith.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
:root {
  --primary-color: #007bff;
  --secondary-color: #17a2b8;
  --dark-bg: #1a252f;
  --text-color: #fff;
}

.footer {
  background: linear-gradient(45deg, var(--dark-bg), #2c3e50);
  color: var(--text-color);
  padding: 4rem 0 2rem;
  margin-top: 3rem;
}

.footer-brand {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
}

.footer-title {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
}

.footer-text {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.95rem;
  display: block;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer-link:hover {
  color: var(--primary-color);
  transform: translateX(5px);
}

.social-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

.social-icon {
  color: var(--text-color);
  font-size: 2rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-icon:hover {
  color: var(--secondary-color);
  transform: scale(1.2);
}

.contact-icon {
  color: var(--primary-color);
  margin-right: 0.75rem;
  font-size: 1rem;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
}

.newsletter-input {
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-color);
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.newsletter-input:focus {
  border-color: var(--primary-color);
  background: rgba(255, 255, 255, 0.2);
  outline: none;
}

.newsletter-btn {
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
  background: var(--primary-color);
  border: none;
  color: #fff;
  font-size: 0.9rem;
  transition: background 0.3s ease, transform 0.3s ease;
}

.newsletter-btn:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
}

.footer-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 2rem 0;
}

.footer-bottom p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .footer {
    padding: 2.5rem 0 1.5rem;
  }

  .footer-brand {
    font-size: 1.8rem;
  }

  .footer-title {
    font-size: 1.3rem;
  }

  .footer-text,
  .footer-link {
    font-size: 0.9rem;
  }

  .social-icon {
    font-size: 1.8rem;
  }

  .social-links {
    gap: 1rem;
    justify-content: center;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-input,
  .newsletter-btn {
    width: 100%;
  }

  .col-lg-4,
  .col-lg-3,
  .col-md-6 {
    text-align: center;
    margin-bottom: 2rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .footer {
    padding: 3rem 0 1.5rem;
  }

  .footer-brand {
    font-size: 1.9rem;
  }

  .footer-title {
    font-size: 1.4rem;
  }

  .social-icon {
    font-size: 1.9rem;
  }
}
</style>