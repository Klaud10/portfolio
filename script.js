


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

//___Animacion tywriter___
(function() {
  let TxtType = function(el, toRotate, period) {
          this.toRotate = toRotate;
          this.el = el;
          this.loopNum = 0;
          this.period = parseInt(period, 10) || 2000;
          this.txt = '';
          this.tick();
          this.isDeleting = false;
      };
  
      TxtType.prototype.tick = function() {
          let i = this.loopNum % this.toRotate.length;
          let fullTxt = this.toRotate[i];
  
          if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
          }
  
          this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
          let that = this;
          let delta = 200 - Math.random() * 100;
  
          if (this.isDeleting) { delta /= 2; }
  
          if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
          } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
          }
  
          setTimeout(function() {
          that.tick();
          }, delta);
      };
  
      window.onload = function() {
          let elements = document.getElementsByClassName('typewrite');
          for (let i=0; i<elements.length; i++) {
              let toRotate = elements[i].getAttribute('data-type');
              let period = elements[i].getAttribute('data-period');
              if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
              }
          }
          // INJECT CSS
          let css = document.createElement("style");
          css.type = "text/css";
          css.innerHTML = ".typewrite > .wrap { border-right: 0.35rem solid #093864}";
          document.body.appendChild(css);
      };
  })();


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

// =====================================================================

