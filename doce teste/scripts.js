

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
        
        contain.innerHTML = ""

        dado.forEach((e) => 
        {
            contain.innerHTML += 
            `
                <div class="box">
                    <i class="ph-bold ph-user"></i>
                    <span>
                        ${e.name}
                    </span>
                </div>
            `
            
        });
    }),1000)
    
}

document.querySelector("input").addEventListener("keyup", peq)