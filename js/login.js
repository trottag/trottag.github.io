//capturo el evento del login

const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', async()=>{
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    //validaciones
    if(!username || !password){
        return;
    }
   /* const responde = await axios.post('https://reqres.in/api/login',{
        'email':username,
        'password':password
    });*/


    const responde =  axios.post('https://reqres.in/api/login',{
        'email':username,
        'password':password
    }).then(function(response){
        //salio todo bien :D
        localStorage.setItem('token',response.data.token);
        window.location='home.html';
    })
    .catch(function(error){
        //Algo se rompió D:
        alert(error);
    });

    //console.log(response);

    return response;
})