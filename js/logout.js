const btnLogout = document.getElementById('btnLogout');
btnLogin.addEventListener('click', async()=>{
    localStorage.removeItem('token');
    window.location = '/';
});

