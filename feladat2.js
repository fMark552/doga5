const vezeteknev=document.getElementById("vezeteknev")
const ide1=document.getElementById("ide1")
const keresztnev=document.getElementById("keresztnev")
const ide2=document.getElementById("ide2")
const kor=document.getElementById("kor")
const ide3=document.getElementById("ide3")

function kiiratas()
{
    const vez=vezeteknev.value
    ide1.innerHTML=vez
    const ker=keresztnev.value
    ide2.innerHTML=ker
    const ev=kor.value
    ide3.innerHTML=ev
}