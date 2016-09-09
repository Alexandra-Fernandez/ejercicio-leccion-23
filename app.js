window.addEventListener("load", function() {
    var boton = document.getElementById("iniciar");
    
    boton.addEventListener("click", function() {
        var miNombre = document.getElementById("nombre").value;
        var miEdad = document.getElementById("edad").value;
        var miSexo = document.getElementById("sexo").value;
        
        var nuevoNombre = new Persona (miNombre, miEdad, miSexo);
        document.getElementById("resultado").innerHTML = nuevoNombre.presentacion();
    });
    function Persona (nombre,edad,sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.mayorDeEdad = (this.edad >= 18) ? "mayor" : "menor";
        this.presentacion = function (){
                
            return "Hola, mi nombre es " + this.nombre + "," + " tengo " + this.edad + " años y soy " + this.mayorDeEdad + " de edad.";
        };
    };
});
        
    
       



