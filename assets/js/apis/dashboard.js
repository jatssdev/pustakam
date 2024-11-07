const getAuthers = async () => {
    let response = await fetch('https://pustakam.pythonanywhere.com/author/')
    let data = await response.json()
    let lengthofauth = data.data.length

    dashboardAuthersTotal.innerHTML = lengthofauth

}
getAuthers()