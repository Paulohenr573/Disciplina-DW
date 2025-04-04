$(function () {
    // Dropdown Menu
    $('#dropdownBtn').click(function () {
      $('#dropdownMenu').slideToggle();
    });
  
    // Lista de Tarefas com LocalStorage
    function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.forEach(task => {
        $('#taskList').append(`<li><span class="task">${task}</span> <span class="delete">❌</span></li>`);
      });
    }
    loadTasks();
  
    $('#addTask').click(function () {
      let task = $('#taskInput').val().trim();
      if (task !== '') {
        $('#taskList').append(`<li><span class="task">${task}</span> <span class="delete">❌</span></li>`);
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        $('#taskInput').val('');
      }
    });
  
    $('#clearTasks').click(function () {
      localStorage.removeItem('tasks');
      $('#taskList').empty();
    });
  
    $('#taskList').on('click', '.delete', function () {
      $(this).parent().remove();
    });
  
    // Carrossel Automático
    let index = 0;
    const $carousel = $('#carousel');
  
    function nextSlide() {
      index = (index + 1) % 3;
      $carousel.css('transform', `translateX(-${index * 300}px)`);
    }
    setInterval(nextSlide, 3000);
  
    // Máscara de telefone
    $('#telefone').on('input', function () {
      let value = $(this).val().replace(/\D/g, '');
      if (value.length > 10) value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
      $(this).val(value);
    });
  });
  