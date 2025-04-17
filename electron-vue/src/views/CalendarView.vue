<template>
  <div class="header">
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
  </div>
  <div class="content">
    <FullCalendar :options="calendarOptions" />
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
        events: [] // this will be filled from the database
      }
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
        start: e.date
      }));
    }
  }
}
</script>


<style>
.logo {
  width: 50px; /* Adjust size as needed */
  height: auto;
  margin-right: 10px; /* Space between logo and text */
}
</style>