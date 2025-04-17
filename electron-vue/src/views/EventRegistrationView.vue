<template>
  <div class="event-form">
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
    <h2>Register a Campus Event</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label>Event Name:</label>
        <input v-model="eventName" type="text" />
        <span v-if="errors.eventName">{{ errors.eventName }}</span>
      </div>

      <div>
        <label>Organizer:</label>
        <input v-model="organizer" type="text" />
        <span v-if="errors.organizer">{{ errors.organizer }}</span>
      </div>

      <div>
        <label>Date:</label>
        <input v-model="date" type="date" />
        <span v-if="errors.date">{{ errors.date }}</span>
      </div>

      <div>
        <label>Time:</label>
        <input v-model="time" type="time" />
        <span v-if="errors.time">{{ errors.time }}</span>
      </div>

      <div>
        <label>Location:</label>
        <input v-model="location" type="text" />
        <span v-if="errors.location">{{ errors.location }}</span>
      </div>

      <div>
        <label>Description:</label>
        <textarea v-model="description"></textarea>
      </div>

      <div>
        <label>Contact Email:</label>
        <input v-model="email" type="email" />
        <span v-if="errors.email">{{ errors.email }}</span>
      </div>

      <button type="submit">Submit Event</button>
    </form>

    <div v-if="submitted">
      <h3>Event Submitted!</h3>
      <p><strong>Name:</strong> {{ eventName }}</p>
      <p><strong>Organizer:</strong> {{ organizer }}</p>
      <p><strong>Date:</strong> {{ date }}</p>
      <p><strong>Time:</strong> {{ time }}</p>
      <p><strong>Location:</strong> {{ location }}</p>
      <p><strong>Description:</strong> {{ description }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const eventName = ref('')
    const organizer = ref('')
    const date = ref('')
    const time = ref('')
    const location = ref('')
    const description = ref('')
    const email = ref('')
    const submitted = ref(false)

    const errors = ref({})

    const validate = () => {
      errors.value = {}

      if (!eventName.value) errors.value.eventName = 'Event name is required.'
      if (!organizer.value) errors.value.organizer = 'Organizer is required.'
      if (!date.value) errors.value.date = 'Date is required.'
      if (!time.value) errors.value.time = 'Time is required.'
      if (!location.value) errors.value.location = 'Location is required.'
      if (!email.value) {
        errors.value.email = 'Email is required.'
      } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        errors.value.email = 'Invalid email format.'
      }

      return Object.keys(errors.value).length === 0
    }

    const submitForm = () => {
      if (validate()) {
        submitted.value = true
        console.log({
          eventName: eventName.value,
          organizer: organizer.value,
          date: date.value,
          time: time.value,
          location: location.value,
          description: description.value,
          email: email.value
        })
      }
    }

    return {
      eventName,
      organizer,
      date,
      time,
      location,
      description,
      email,
      submitted,
      errors,
      submitForm
    }
  }
}
</script>

<style scoped>
.event-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

form > div {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.25rem;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  resize: vertical;
}

span {
  color: red;
  font-size: 0.9em;
  margin-top: 0.25rem;
  display: block;
}

button {
  background-color: #007bff;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

h2, h3 {
  text-align: center;
}
.logo {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 50px; /* Adjust size as needed */
  height: auto;
}
</style>
