Leff = 0;
If = 0;
Pcr = 0;

document.getElementById("Eeff").addEventListener('change', (event) => {
    Eeff = parseFloat(document.getElementById("Eeff").value);
    calcular_pcr(Eeff,If,Leff)
})
document.getElementById("If").addEventListener('change', (event) => {
    If = parseFloat(document.getElementById("If").value);
    calcular_pcr(Eeff,If,Leff)
})
document.getElementById("Leff").addEventListener('change', (event) => {
    Leff = parseFloat(document.getElementById("Leff").value);
    calcular_pcr(Eeff,If,Leff)
})

function calcular_pcr(E,I,L)
{
    let pcr=0;
    L = L/100;
    I = I/10**8
    E = E*10**6
    if(L!=0)
    {
        pcr = Math.PI**2*E*I/L**2
        pcr = pcr/1000
    }
    atualizar_texto("pcrf",pcr)
}