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
        <div class="col-lg-4 col-md-6 mb-3">
          <h3 class="footer-brand">MJ NewsWave</h3>
          <p class="footer-text">
            Delivering truth with clarity and integrity. Join us in building an informed, empowered global community.
          </p>
          <div class="social-links">
            <a href="https://facebook.com/mjnewswave" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Facebook">
              <font-awesome-icon :icon="['fab', 'facebook']" aria-hidden="true" />
            </a>
            <a href="https://twitter.com/mjnewswave" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Twitter">
              <font-awesome-icon :icon="['fab', 'twitter']" aria-hidden="true" />
            </a>
            <a href="https://instagram.com/mjnewswave" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram">
              <font-awesome-icon :icon="['fab', 'instagram']" aria-hidden="true" />
            </a>
            <a href="https://linkedin.com/company/mjnewswave" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn">
              <font-awesome-icon :icon="['fab', 'linkedin']" aria-hidden="true" />
            </a>
            <a href="https://youtube.com/mjnewswave" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="YouTube">
              <font-awesome-icon :icon="['fab', 'youtube']" aria-hidden="true" />
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="col-lg-2 col-md-6 mb-3">
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
        <div class="col-lg-3 col-md-6 mb-3">
          <h4 class="footer-title">Contact Us</h4>
          <ul class="footer-links">
            <li>
              <font-awesome-icon icon="envelope" class="contact-icon" aria-hidden="true" />
              <a href="mailto:okohmick24@gmail.com" class="footer-link">info@mjnewswave.com</a>
            </li>
            <li>
              <font-awesome-icon icon="phone" class="contact-icon" aria-hidden="true" />
              <a href="tel:+234-8169-559-351" class="footer-link">+234-8169-559-351</a>
            </li>
            <li>
              <font-awesome-icon icon="location-pin" class="contact-icon" aria-hidden="true" />
              <span class="footer-text">1 Ambasador Ajonye Ave, Otukpo, Benue State.</span>
            </li>
          </ul>
        </div>

        <!-- Newsletter Signup -->
        <div class="col-lg-3 col-md-6 mb-3">
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
  padding: 2.5rem 0 1.5rem; /* Reduced padding */
  margin-top: 2rem; /* Slightly reduced */
}

.footer-brand {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-size: 1.8rem; /* Reduced from 2rem */
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 0.75rem; /* Reduced from 1rem */
}

.footer-title {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-size: 1.3rem; /* Reduced from 1.5rem */
  color: var(--text-color);
  margin-bottom: 1rem; /* Reduced from 1.5rem */
}

.footer-text {
  font-size: 0.9rem; /* Reduced from 0.95rem */
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4; /* Reduced from 1.6 */
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem; /* Reduced from 0.95rem */
  display: block;
  margin-bottom: 0.5rem; /* Reduced from 0.75rem */
  transition: color 0.3s ease, transform 0.3s ease;
}

.footer-link:hover {
  color: var(--primary-color);
  transform: translateX(5px);
}

.social-links {
  display: flex;
  gap: 1rem; /* Reduced from 1.5rem */
  margin-top: 0.75rem; /* Reduced from 1rem */
}

.social-icon {
  color: var(--text-color);
  font-size: 1.4rem; /* Reduced from 1.5rem */
  transition: all 0.3s ease;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.2rem; /* Reduced from 2.5rem */
  height: 2.2rem;
}

.social-icon:hover {
  color: var(--secondary-color);
  transform: scale(1.1);
}

.social-icon:hover::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  z-index: -1;
}

.social-icon:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.contact-icon {
  color: var(--primary-color);
  font-size: 0.9rem; /* Reduced from 1rem */
  margin-right: 0.5rem; /* Reduced from 0.75rem */
  transition: all 0.3s ease;
}

.footer-links li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem; /* Reduced from 0.75rem */
}

.footer-links li:hover .contact-icon {
  color: var(--secondary-color);
  transform: scale(1.1);
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
  padding: 0.4rem 0.8rem; /* Reduced from 0.5rem 1rem */
  font-size: 0.85rem; /* Reduced from 0.9rem */
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
  padding: 0.4rem 1.2rem; /* Reduced from 0.5rem 1.5rem */
  background: var(--primary-color);
  border: none;
  color: #fff;
  font-size: 0.85rem; /* Reduced from 0.9rem */
  transition: background 0.3s ease, transform 0.3s ease;
}

.newsletter-btn:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
}

.footer-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 1rem 0; /* Reduced from 2rem 0 */
}

.footer-bottom p {
  font-size: 0.85rem; /* Reduced from 0.9rem */
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .footer {
    padding: 1.5rem 0 1rem; /* Further reduced */
  }

  .footer-brand {
    font-size: 1.6rem; /* Reduced from 1.8rem */
  }

  .footer-title {
    font-size: 1.2rem; /* Reduced from 1.3rem */
  }

  .footer-text,
  .footer-link {
    font-size: 0.85rem; /* Reduced from 0.9rem */
  }

  .social-icon {
    font-size: 1.2rem; /* Reduced from 1.3rem */
    width: 1.8rem; /* Reduced from 2rem */
    height: 1.8rem;
  }

  .social-links {
    gap: 0.8rem; /* Reduced from 1rem */
    justify-content: center;
  }

  .contact-icon {
    font-size: 0.85rem; /* Reduced from 0.9rem */
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-input,
  .newsletter-btn {
    width: 100%;
    padding: 0.35rem 0.75rem; /* Further reduced */
  }

  .col-lg-4,
  .col-lg-3,
  .col-md-6 {
    text-align: center;
    margin-bottom: 1.5rem; /* Reduced from 2rem */
  }

  .footer-links li {
    justify-content: center;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .footer {
    padding: 2rem 0 1.2rem; /* Adjusted */
  }

  .footer-brand {
    font-size: 1.7rem; /* Reduced from 1.9rem */
  }

  .footer-title {
    font-size: 1.25rem; /* Reduced from 1.4rem */
  }

  .social-icon {
    font-size: 1.3rem; /* Reduced from 1.4rem */
    width: 2rem; /* Reduced from 2.2rem */
    height: 2rem;
  }

  .contact-icon {
    font-size: 0.9rem; /* Reduced from 0.95rem */
  }
}
</style>