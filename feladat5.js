function aha()
{
    var nev=document.getElementById("nev").value
    var telo=document.getElementById("telo").value
    var irszam=document.getElementById("irszam").value
    var varos=document.getElementById("varos").value
    var utca=document.getElementById("utca").value
    var haz=document.getElementById("haz").value

    var pizza1=document.getElementById("pizza1").value
    var pizza2=document.getElementById("pizza2").value

    var blabla=document.getElementById("blabla").value

    const rendeles="név: "+nev+" "+" telefonszám: "+telo+" "+" irszam: "+irszam+" "+" város: "+varos+" "+" utca: "+utca+" "+" haz: "+haz+" "+" alap: "+pizza1+" "+" feltét: "+pizza2+" "+" megjegyzés: "+blabla
       
    console.log(rendeles)
}