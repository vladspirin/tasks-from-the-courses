$(document).ready(function(){
  $("#myform").validate({
    rules: {
      money: { 
        required: true,
        minlength: 2 
      },
      month: {
        required: true
      },
      button: {
        
      },
      messages: {
        money: "Вы не ввели сумму вклада!",
        month: "Вы не выбрали необходимый срок вклада!"
      }
    }
  });
  // 
});