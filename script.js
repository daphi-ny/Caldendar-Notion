function relogio() {
    var agora = new Date()
    var hora = agora.getHours().toString().padStart(2, '0');
    var minuto = agora.getMinutes().toString().padStart(2, '0');

    var display = hora + ':' + minuto
    document.querySelector('.relogio').textContent = display;
}

setInterval(relogio, 1000);

 
    window.onload = relogio;

    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth'
        });
        calendar.render();
      });