function szamol()
{
    var egy=document.getElementById("egy").value
    var ketto=document.getElementById("ketto").value
    var kerulet=document.getElementById("kerulet")
    var terulet=document.getElementById("terulet")

    K=(egy+ketto)*2
    T=(egy*ketto)

    kerulet.innerHTML=K
    terulet.innerHTML=T

    if(egy<=0)
    {
        alert("Ez nem lehet egy téglalap oldala")
    }
    if(ketto<=0)
    {
        alert("Ez nem lehet egy téglalap oldala")
    }
}