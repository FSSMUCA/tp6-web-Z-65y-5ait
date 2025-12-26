document.getElementById("butn").addEventListener("click", function (event) {
event.preventDefault();

document.getElementById("error").innerHTML = "";
document.getElementById("resultat").innerHTML = "";

let a = Number(document.getElementById("n_A").value);
let b = Number(document.getElementById("n_B").value);
let op = document.getElementById("operation").value;

let res

switch(op)
{
    case "+":
        res = a + b;
        document.getElementById("resultat").innerHTML = "Resultat: " + res;
        break;
    case "-":
        res = a - b;
        document.getElementById("resultat").innerHTML = "Resultat: " + res;
        break;
    case "*":
        res = a * b;
        document.getElementById("resultat").innerHTML = "Resultat: " + res;
        break;
    case "/":
        if (b !== 0)
        {
            res = a / b;
            document.getElementById("resultat").innerHTML = "Resultat: " + res;
            break;
        }
        else
        {   
            document.getElementById("error").innerHTML = "Erreur: division par 0";
            return;
        }
}

const item = document.createElement("p");
item.textContent = a + " " + op + " " + b + " = " + res;
document.querySelector(".historique .card-body").appendChild(item);

});