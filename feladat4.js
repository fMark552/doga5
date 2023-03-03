function naptar()
{
    var napocska=document.getElementById("napocska")
    var nap=document.getElementById("nap").value

    if(nap==1)
    {
        napocska.innerHTML="Hétfő"
    }
    if(nap==2)
    {
        napocska.innerHTML="Kedd"
    }
    if(nap==3)
    {
        napocska.innerHTML="Szerda"
    }
    if(nap==4)
    {
        napocska.innerHTML="Csütörtök"
    }
    if(nap==5)
    {
        napocska.innerHTML="Péntek"
    }
    if(nap==6)
    {
        napocska.innerHTML="Szombat"
    }
    if(nap==7)
    {
        napocska.innerHTML="Vasárnap"
    }

    if(nap<1 || nap>7)
    {
        napocska.innerHTML="Nem megfelelő számot adott meg"
    }
}