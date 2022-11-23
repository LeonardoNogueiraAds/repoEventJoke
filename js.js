const buscarBtn= document.getElementById("piada");
const resposta = document.getElementById("resposta");
const formu= document.getElementById("formulario");


buscarBtn.addEventListener('click',(event)=>{
    event.preventDefault();
   console.log("event");
    fetch('https://api.chucknorris.io/jokes/random').then(response=>
    response.json()).then(joke=>{
        console.log(joke.value)


    })
});