
function muggle(nombre){

    let magos = prompt("Hola " +nombre+ ", escribe 'mago' si eres mago o 'muggle' si eres muggle");

    if(( magos==="mago") || ( magos==="Mago")){
        alert("Bienvenido a aventurarte a la página de Harry Potter")
        console.log("eres mago :p ")
    }else{
        alert("NO puedes ingresar, solo para magos")
    }

}
muggle(prompt("escribe tu nombre"))

setTimeout(()=>{
    console.log("muy bien")
    alert("recorda completar los campos obligatoriamente")
}, 500)


const switchButton = document.getElementById('switch');
switchButton.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active')
})



