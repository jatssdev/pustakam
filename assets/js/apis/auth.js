
let checkLogin = () => {

    let loginuser = JSON.parse(localStorage.getItem('loggedadmin') || false) || false
    console.log(loginuser);

    if (!loginuser || !loginuser.isAuth) {
        location.href = '/login.html'
    }

}
checkLogin()