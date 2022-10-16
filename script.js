document.getElementById('button').addEventListener('click', function (e) {

    var text = document.getElementById('button').innerHTML;

    if (text == "Enregistrer") {
        document.getElementById('button').innerHTML = "Enregistrement envoyé"
         confirm("enregistrement envoyé")
    }
    else {

        document.getElementById('button').innerHTML = "Enregistrer"
}
})


function submitForm(e){
    e.preventDefault()
}

var pargrapheeee = document.getElementsByClassName('histoire');
console.log(pargrapheeee)