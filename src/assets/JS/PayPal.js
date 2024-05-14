//const { style } = require("@angular/animations");

paypal.Buttons({
    style:{
        color: 'blue',
        shape: 'pill',
        label: 'pay',
        //layout: 'horizontal'
    },
    createOrder:(function(data, actions){
        return actions.order.create({
            purchase_units: [{
                amount:{
                    value: 1700
                }
            }]
        });
    }),

    onApprove: function(data, actions){
        actions.order.capture().then(function( detalles){
            console.log(detalles);
            window.location.href="home/complete-buys"
        });
    },

    onCancel: function(data){
        Swal.fire({
            title: "Error",
            text: "Pago Cancelado",
            icon: "error"
          });
        console.log(data)  
    }
}).render('#paypal-button-container');


const exit = document.getElementById('exit');
//exit.onclick = Finalizar;
exit.addEventListener("click", (_) => {
    // el _ es para indicar la ausencia de parametros
    location.reload();
  });