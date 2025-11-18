(()=>{
    window.addEventListener("load", ()=>{
        "use strict"
    
         const pelota = document.getElementById("pelota");
         const velocidad = 50;
         let top = 0;
         let left = 0;

        document.addEventListener("keydown", (e) =>{
            
            if (e.key == "ArrowLeft"){
                moverIzquierda();
            }

            if (e.key == "ArrowRight"){
                moverDerecha();
            }

            if (e.key == "ArrowUp"){
                moverArriba();
            }
                
            if (e.key == "ArrowDown"){
                moverAbajo();
            }

        });
        function moverIzquierda(){
            left -= velocidad;
            pelota.style.marginLeft = `${left}px`;
        }

        function moverDerecha() {
            left += velocidad;
            pelota.style.marginLeft = `${left}px`;
        }
        
        function moverArriba(){
            top -= velocidad;
            pelota.style.marginTop = `${top}px`;
        }

        function moverAbajo(){
            top += velocidad;
            pelota.style.marginTop = `${top}px`;
        }
    });

})();
