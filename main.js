$(document).ready(function() {
    let classError = "border-b-red-500 focus:border-b-red-500";
    function validateName() {
        var nombre = $("#name").val();
        if (nombre === "") {
            $("#name").addClass(classError);
            return false;
        } else {
            $("#name").removeClass(classError);
            return true;
        }
    }

    function validateEmail() {
        var email = $("#email").val();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $("#email").addClass(classError);
            return false;
        } else {
            $("#email").removeClass(classError);
            return true;
        }
    }

    function validateMessage() {
        var mensaje = $("#message").val();
        if (mensaje === "") {
            $("#message").addClass(classError);
            return false;
        } else {
            $("#message").removeClass(classError);
            return true;
        }
    }

    $("#contactForm").submit(function(event) {
        if (validateName() && validateEmail() && validateMessage()) {
            alert("Formulario enviado correctamente");
        } else {
            event.preventDefault();
            alert("Por favor, complete correctamente todos los campos");
        }
    });

    // Validar campos en tiempo real mientras se escriben
    $("#name").blur(validateName);
    $("#email").blur(validateEmail);
    $("#message").blur(validateMessage);
});
