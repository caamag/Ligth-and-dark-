
const mudarTema = document.querySelector('#dark-theme'); 

function darkMode () {

        document.body.classList.toggle('dark'); 

}

mudarTema.addEventListener("click", () => {
      
        darkMode();

}); 



