textImput = document.querySelector('.txtInativo')
search = document.querySelector('#btnBusca')


search.addEventListener('click', functionActive)

function functionActive(){
      
         textImput.classList.toggle('txtAtivo')

}
