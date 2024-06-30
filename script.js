const buttons = document.querySelectorAll('button');
const gallery = document.querySelectorAll('img');

buttons.forEach((button)=>{
button.addEventListener('click',()=>{

    for(let img of gallery){
        img.style.display = 'none';
        
        const imgs = img.getAttribute('data-filter');
        if(button.textContent === imgs || button.textContent === 'All'){
            img.style.display = 'block';
            img.classList.add('show');
        }else{
            img.classList.remove('hide');
        }
        
    }
})

})