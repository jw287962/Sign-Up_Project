let form = document.querySelector('form');
let pwrd = document.getElementById('pwrd');
let pwrd2 = document.getElementById('pwrd2');



pwrd.addEventListener('input', e => {

}),false;

window.addEventListener('load',e => {
 
   let formarray = Array.from(form);
   formarray.forEach(element => {
 
    element.className = 'empty';
   });
    
});

form.addEventListener('change' ,e =>{
    e.stopPropagation
    let formarray = Array.from(form);
    formarray.forEach(element => { e.target.className ='';
        if(element.className === 'empty'){

        }
        else if(element.validity.valid){
            element.style.backgroundColor = '#beffb1';
            element.style.borderColor = '#dadada';
        }

     
        // if(e.target ==='pwrd'){

        // }

    })
   
});


form.addEventListener('submit',e =>{
    e.preventDefault();

e.run(); 
});
