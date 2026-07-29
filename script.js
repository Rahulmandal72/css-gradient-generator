let directionArrow = document.querySelectorAll('.direction');

directionArrow.forEach( (btn) => {
    btn.addEventListener("click" , ()=>{
     directionArrow.forEach((direction)=>{
        direction.classList.remove('activeBtn');

     });
       btn.classList.add('activeBtn');
    });
    
});


