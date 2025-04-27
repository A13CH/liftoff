<template>
  <div class="header">
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
  </div>
  
  <div class="content">
    <FullCalendar 
      :options="calendarOptions" 
    />
  </div>

  <!-- Event Details Popup -->
  <div v-if="showEvent" class="event-popup-overlay" @click="closeEvent">
    <div class="event-popup-content" @click.stop>
      <span @click="closeEvent" class="close-button">&times;</span>
      <h2>{{ selectedEvent.title }}</h2>
      <p>{{ formattedDate }}</p>
      <p>{{ selectedEvent.description }}</p>
      <!-- Add more fields if needed -->
    </div>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        weekends: false,
        events: [], // this will be filled from the database
        eventClick: this.onEventClick // Add event click handler
      },
      showEvent: false,  // Renamed from showModal to showEvent
      selectedEvent: {},
      formattedDate: ''
    }
  },
  mounted() {
    this.loadEvents();
  },
  methods: {
    async loadEvents() {
      const events = await window.require('electron').ipcRenderer.invoke('get-events');
      this.calendarOptions.events = events.map(e => ({
        title: e.name,
        start: e.date,
        description: e.description, // Assuming you have a description field
        email: e.email
      }));
    },
    onEventClick(info) {
      this.selectedEvent = {
        title: info.event.title,
        start: info.event.startStr,
        description: info.event.extendedProps.description
      };
      
      // Format the start date to "Month Day, Year"
      const formatted = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric'
      }).format(info.event.start);

      this.formattedDate = formatted;
      this.showEvent = true;  // Show event popup
    },
    closeEvent() {
      this.showEvent = false;  // Hide the event popup
    }
  }
}
</script>

<style scoped>
.logo {
  width: 50px;
  height: auto;
  margin-right: 10px;
}

.event-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);  /* Slightly darker background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;  /* Ensure it's on top */
}

.event-popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);  /* Add shadow */
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}
</style>
