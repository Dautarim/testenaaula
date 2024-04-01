

// fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => console.log(data))
// let users = []

const filtrado = async (val) => await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${val}`).then(res => res.json())

let tempo = null
function peq(evn)
{
    clearTimeout(tempo)
    
    tempo = setTimeout(filtrado(evn.target.value).then((dado) => 
    {
        let contain = document.querySelector(".container")
        console.log(contain)
    }),1000)
    
}

document.querySelector("input").addEventListener("keyup", peq)