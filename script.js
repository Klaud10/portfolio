
// ___Menu hamburgesa___
(function(){

    // selector
    let menu = document.querySelector('.navegacion__movil');

    // method
    function toggle (event) {
        this.classList.toggle('is-active');
        document.querySelector('.menuppal').classList.toggle('is_active');
        event.preventDefault(event);        
    }
    
    // event
    menu.addEventListener('click', toggle, false);
    
})();

function myFunction(){
    const x = document.querySelector(".menuppal");
    const x1 = document.querySelector(".navegacion__movil");
    
        if (x.className == "menuppal") {
            x.className = "is_active";
        } else {
            x.className = "menuppal";   
        }
    
        if (x1.className == "navegacion__movil") {
            x1.className = "is-active";
        } else {
            x1.className = "navegacion__movil";   
        }
    
}

// ====================================================================

// ___Fecha del copyriright___
(function() {
    let fecha = new Date();
    let year = fecha.getFullYear();
    document.querySelector("#year").innerHTML = year;
})();

// ====================================================================

// ___Boton Subir___
  
   const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }


   let backtotop = document.querySelector('.back-to-top')
   if (backtotop) {
     const toggleBacktotop = () => {
       if (window.scrollY > 100) {
         backtotop.classList.add('active')
       } else {
         backtotop.classList.remove('active')
       }
     }
     window.addEventListener('load', toggleBacktotop)
     onscroll(document, toggleBacktotop)
   }
