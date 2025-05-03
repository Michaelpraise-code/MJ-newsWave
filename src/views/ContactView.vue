<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');
const formStatus = ref('idle'); // idle, submitting, success, error
const errorMessage = ref('');

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validateForm = () => {
  if (!name.value.trim()) return 'Name is required';
  if (!email.value.trim()) return 'Email is required';
  if (!validateEmail(email.value)) return 'Please enter a valid email address';
  if (!message.value.trim()) return 'Message is required';
  return '';
};

const submitForm = async (event) => {
  event.preventDefault();
  const validationError = validateForm();
  if (validationError) {
    errorMessage.value = validationError;
    formStatus.value = 'error';
    return;
  }

  formStatus.value = 'submitting';
  errorMessage.value = '';

  try {
    const response = await fetch('https://formspree.io/f/xrbqewqy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
      }),
    });

    if (response.ok) {
      formStatus.value = 'success';
      name.value = '';
      email.value = '';
      phone.value = '';
      message.value = '';
      setTimeout(() => {
        formStatus.value = 'idle';
      }, 5000);
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    formStatus.value = 'error';
    errorMessage.value = 'An error occurred. Please try again later.';
  }
};
</script>

<template>
  <div class="contact-container">
    <div class="contact-card">
      <h1 class="contact-title">Get in Touch</h1>
      <p class="contact-intro">
        Have a question or feedback? Reach out to MJ NewsWave, and we’ll respond as soon as possible. <span class="required-note">* Required fields</span>
      </p>
      <form @submit="submitForm" novalidate>
        <div class="form-group">
          <label for="name" class="form-label">Your Name <span class="required">*</span></label>
          <input
            v-model="name"
            type="text"
            name="name"
            class="form-control"
            id="name"
            placeholder="Enter your full name"
            :aria-invalid="formStatus === 'error' && !name.trim()"
            aria-describedby="name-error"
            required
          />
          <span v-if="formStatus === 'error' && !name.trim()" id="name-error" class="error-text">Name is required</span>
        </div>

        <div class="form-group">
          <label for="email" class="form-label">Your Email <span class="required">*</span></label>
          <input
            v-model="email"
            type="email"
            name="email"
            class="form-control"
            id="email"
            placeholder="Enter your email address"
            :aria-invalid="formStatus === 'error' && (!email.trim() || !validateEmail(email))"
            aria-describedby="email-error"
            required
          />
          <span
            v-if="formStatus === 'error' && (!email.trim() || !validateEmail(email))"
            id="email-error"
            class="error-text"
          >
            {{ !email.trim() ? 'Email is required' : 'Please enter a valid email address' }}
          </span>
        </div>

        <div class="form-group">
          <label for="phone" class="form-label">Your Phone Number</label>
          <input
            v-model="phone"
            type="tel"
            name="phone"
            class="form-control"
            id="phone"
            placeholder="Enter your phone number"
          />
        </div>

        <div class="form-group">
          <label for="message" class="form-label">Your Message <span class="required">*</span></label>
          <textarea
            v-model="message"
            name="message"
            class="form-control"
            id="message"
            rows="5"
            placeholder="Tell us how we can help you"
            :aria-invalid="formStatus === 'error' && !message.trim()"
            aria-describedby="message-error"
            required
          ></textarea>
          <span v-if="formStatus === 'error' && !message.trim()" id="message-error" class="error-text">Message is required</span>
        </div>

        <div class="form-status">
          <p v-if="formStatus === 'success'" class="success-message">Thank you! Your message has been sent successfully.</p>
          <p v-if="formStatus === 'error' && errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          :disabled="formStatus === 'submitting'"
          aria-label="Submit contact form"
        >
          <span v-if="formStatus === 'submitting'" class="spinner"></span>
          {{ formStatus === 'submitting' ? 'Sending...' : 'Submit Your Message' }}
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
:root {
  --primary-color: #007bff;
  --secondary-color: #17a2b8;
  --dark-bg: #1a252f;
  --text-color: #333;
  --light-bg: #f8f9fa;
}

.contact-container {
  max-width: 700px;
  margin: 3rem auto;
  padding: 0 1rem;
}

.contact-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
}

.contact-title {
  font-family: 'Georgia', 'Times New Roman', Times, serif;
  font-size: 2.25rem;
  color: var(--text-color);
  margin-bottom: 1rem;
  text-align: center;
}

.contact-intro {
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
  text-align: center;
}

.required-note {
  color: #d32f2f;
  font-size: 0.9rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-color);
  margin-bottom: 0.5rem;
  display: block;
}

.required {
  color: #d32f2f;
  font-size: 0.9rem;
}

.form-control {
  border: 1px solid #ced4da;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  background: #fff;
}

.form-control:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  outline: none;
}

.form-control[aria-invalid="true"] {
  border-color: #d32f2f;
}

textarea.form-control {
  resize: vertical;
  min-height: 120px;
}

.error-text {
  color: #d32f2f;
  font-size: 0.85rem;
  margin-top: 0.25rem;
  display: block;
}

.form-status {
  min-height: 1.5rem;
  margin-bottom: 1.5rem;
}

.success-message {
  color: #28a745;
  font-size: 0.95rem;
  text-align: center;
  animation: fadeIn 0.3s ease-in;
}

.error-message {
  color: #d32f2f;
  font-size: 0.95rem;
  text-align: center;
}




.spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid #fff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-right: 0.5rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive Adjustments */
@media (max-width: 576px) {
  .contact-container {
    margin: 2rem 0.5rem;
    padding: 0;
  }

  .contact-card {
    padding: 1.5rem;
  }

  .contact-title {
    font-size: 1.75rem;
  }

  .contact-intro {
    font-size: 0.9rem;
  }

  .form-control {
    padding: 0.65rem 0.85rem;
    font-size: 0.9rem;
  }

  .btn-primary {
    padding: 0.65rem 1.25rem;
    font-size: 0.9rem;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .contact-card {
    padding: 2rem;
  }

  .contact-title {
    font-size: 2rem;
  }
}
</style>