tft=0
bft=0
hwt=0
twt=0
Left=0


document.getElementById("tft").addEventListener('change', (event) => {
    tft = parseFloat(document.getElementById("tft").value);
    calcular_secaot(bft,tft,twt,hwt,Left)
})
document.getElementById("bft").addEventListener('change', (event) => {
    bft = parseFloat(document.getElementById("bft").value);
    calcular_secaot(bft,tft,twt,hwt,Left)
})
document.getElementById("hwt").addEventListener('change', (event) => {
    hwt = parseFloat(document.getElementById("hwt").value);
    calcular_secaot(bft,tft,twt,hwt,Left)
})
document.getElementById("twt").addEventListener('change', (event) => {
    twt = parseFloat(document.getElementById("twt").value);
    calcular_secaot(bft,tft,twt,hwt,Left)
})
document.getElementById("Left").addEventListener('change', (event) => {
    Left = parseFloat(document.getElementById("Left").value);
    calcular_secaot(bft,tft,twt,hwt,Left)
})

function calcular_secaot(bf,tf,tw,hw,Lef)
{
    let A = bf*tf+tw*hw
    let ybarra = (bf*tf*(tf/2)+tw*hw*(tf+hw/2))/(bf*tf+tw*hw)
    let Ix = tw*hw**3/12+tw*hw*(ybarra-(tf+hw/2))+bf*tf**3 + bf*tf*(ybarra-tf/2)
    let Iy = hw*tw**3/12 + tf*bf**3/12 
    let ix = (Ix/A)**.5
    let iy = (Iy/A)**.5
    let rx = Lef/ix
    let ry = Lef/iy
    atualizar_texto("At",A.toFixed(5))
    atualizar_texto("ybarrat",ybarra.toFixed(5))
    atualizar_texto("Ixt",Ix.toFixed(5))
    atualizar_texto("Iyt",Iy.toFixed(5))
    atualizar_texto("ixt",ix.toFixed(5))
    atualizar_texto("iyt",iy.toFixed(5))
    atualizar_texto("rxt",rx.toFixed(5))
    atualizar_texto("ryt",ry.toFixed(5))
}