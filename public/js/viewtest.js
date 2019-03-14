

$("#save").on('click',insertExpense)


    function insertExpense(event) {
        event.preventDefault()
        var expense = {
            category: $("#category").val(),
            enteredby:$("#enteredby").val(),
            type:$("#type").val(),
            amount:$("#amount").val() 
        };
        $.post("/api/expenses", expense, function (dbexpenses) {
            alert('Expense has been added')
            });
      }