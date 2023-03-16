const spesa = ["Spaghetti" , "Aglio" , "Peperoncino" , "Burro" , "Sale" , "Nutella" , "Kiwi"];
const button = document.getElementById("button");
let i = 0;

button.addEventListener("click" , printSpesa);

function printSpesa()
{
    document.getElementById("spesa").classList.remove("d-none");
    while (i < spesa.length)
    {
        document.getElementById("spesa").innerHTML += ` <h1> ${spesa[i]} </h1>`
        
        i++;
    }
}
