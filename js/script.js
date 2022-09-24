const menu = document.querySelector('.menu-itens')
const hmbg = document.querySelector('.btn-aberto')
const list = document.querySelector('.menu-itens')

hmbg.addEventListener('click', abrir_fechar_menu, false)


function abrir_fechar_menu(){
   if(hmbg.classList.contains('btn-aberto'))
   {
        hmbg.classList.remove('btn-aberto')
        hmbg.classList.add('btn-fechado')

        menu.classList.remove('menu-itens')
        menu.classList.add('menu-itens-abrir')

        


   }else{

    hmbg.classList.add('btn-aberto')
    hmbg.classList.remove('btn-fechado')


    
    menu.classList.add('menu-itens')
    menu.classList.remove('menu-itens-abrir')

   }

      
  
}