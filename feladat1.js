var lista=[]

function hozzaad()
{
    var szam=document.getElementById("szam").value
    lista.push(szam)
    console.log(lista);
}

function kiir()
{
    var ide=document.getElementById("ide")
    const vissza = lista.reverse()
    ide.innerHTML=vissza
}