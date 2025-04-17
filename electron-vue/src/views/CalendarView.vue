<template>
  <div class="header">
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
    <span class="title">Liftoff</span>
  </div>
  <div class="content">
    <button @click="toggleWeekends">toggle weekends</button>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        weekends: false // initial value
      }
    }
  },
  methods: {
    toggleWeekends: function () {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
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