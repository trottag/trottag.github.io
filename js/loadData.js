const token =localStorage.getItem('token');

const navbarSupportedcontent=document.getElementById('navbarSupportedContent');

if(!token){
    //muestro el navbar
    navbarSupportedcontent.className='show';
}else{
    //oculto el navbar
    window.location = 'home.html';
}