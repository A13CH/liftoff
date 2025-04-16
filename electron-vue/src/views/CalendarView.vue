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
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        eventClick: this.handleEventClick,
        events: [
          { title: 'event 1', date: '2025-04-01' },
          { title: 'event 2', date: '2025-04-23' }
        ]
      }
    }
  },
  methods: {
    handleDateClick: function(arg) {
      const date = arg.date
      const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
      alert(`date click!\nDate: ${formattedDate}`)
    },
    handleEventClick(info) {
      const date = info.event.start
      const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
      alert(`event click!\nTitle: ${info.event.title}\nDate: ${formattedDate}`)
    }
  }
}
</script>
<template>
  <FullCalendar :options="calendarOptions" />
</template>