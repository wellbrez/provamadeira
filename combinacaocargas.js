carga=[0,0,0,0,0,0,0,0,0];
gamma=[0,0,0,0,0,0,0,0,0];
Fi=[1,1,1,1,0,0,0,0,0];


document.getElementById("carga1").addEventListener('change', (event) => {
    carga[0] = parseFloat(document.getElementById("carga1").value);
    calcular_combinacao()
})
document.getElementById("carga2").addEventListener('change', (event) => {
    carga[1] = parseFloat(document.getElementById("carga2").value);
    calcular_combinacao()
})
document.getElementById("carga3").addEventListener('change', (event) => {
    carga[2] = parseFloat(document.getElementById("carga3").value);
    calcular_combinacao()
})
document.getElementById("carga4").addEventListener('change', (event) => {
    carga[3] = parseFloat(document.getElementById("carga4").value);
    calcular_combinacao()
})
document.getElementById("carga5").addEventListener('change', (event) => {
    carga[4] = parseFloat(document.getElementById("carga5").value);
    calcular_combinacao()
})
document.getElementById("carga6").addEventListener('change', (event) => {
    carga[5] = parseFloat(document.getElementById("carga6").value);
    calcular_combinacao()
})
document.getElementById("carga7").addEventListener('change', (event) => {
    carga[6] = parseFloat(document.getElementById("carga7").value);
    calcular_combinacao()
})
document.getElementById("carga8").addEventListener('change', (event) => {
    carga[7] = parseFloat(document.getElementById("carga8").value);
    calcular_combinacao()
})
document.getElementById("carga9").addEventListener('change', (event) => {
    carga[8] = parseFloat(document.getElementById("carga9").value);
    calcular_combinacao()
})
document.getElementById("gamma1").addEventListener('change', (event) => {
    gamma[0] = parseFloat(document.getElementById("gamma1").value);
    calcular_combinacao()
})
document.getElementById("gamma2").addEventListener('change', (event) => {
    gamma[1] = parseFloat(document.getElementById("gamma2").value);
    calcular_combinacao()
})
document.getElementById("gamma3").addEventListener('change', (event) => {
    gamma[2] = parseFloat(document.getElementById("gamma3").value);
    calcular_combinacao()
})
document.getElementById("gamma4").addEventListener('change', (event) => {
    gamma[3] = parseFloat(document.getElementById("gamma4").value);
    calcular_combinacao()
})
document.getElementById("gamma5").addEventListener('change', (event) => {
    gamma[4] = parseFloat(document.getElementById("gamma5").value);
    calcular_combinacao()
})
document.getElementById("gamma6").addEventListener('change', (event) => {
    gamma[5] = parseFloat(document.getElementById("gamma6").value);
    calcular_combinacao()
})
document.getElementById("gamma7").addEventListener('change', (event) => {
    gamma[6] = parseFloat(document.getElementById("gamma7").value);
    calcular_combinacao()
})
document.getElementById("gamma8").addEventListener('change', (event) => {
    gamma[7] = parseFloat(document.getElementById("gamma8").value);
    calcular_combinacao()
})
document.getElementById("gamma9").addEventListener('change', (event) => {
    gamma[8] = parseFloat(document.getElementById("gamma9").value);
    calcular_combinacao()
})
document.getElementById("Fi1").addEventListener('change', (event) => {
    Fi[0] = parseFloat(document.getElementById("Fi1").value);
    calcular_combinacao()
})
document.getElementById("Fi2").addEventListener('change', (event) => {
    Fi[1] = parseFloat(document.getElementById("Fi2").value);
    calcular_combinacao()
})
document.getElementById("Fi3").addEventListener('change', (event) => {
    Fi[2] = parseFloat(document.getElementById("Fi3").value);
    calcular_combinacao()
})
document.getElementById("Fi4").addEventListener('change', (event) => {
    Fi[3] = parseFloat(document.getElementById("Fi4").value);
    calcular_combinacao()
})
document.getElementById("Fi5").addEventListener('change', (event) => {
    Fi[4] = parseFloat(document.getElementById("Fi5").value);
    calcular_combinacao()
})
document.getElementById("Fi6").addEventListener('change', (event) => {
    Fi[5] = parseFloat(document.getElementById("Fi6").value);
    calcular_combinacao()
})
document.getElementById("Fi7").addEventListener('change', (event) => {
    Fi[6] = parseFloat(document.getElementById("Fi7").value);
    calcular_combinacao()
})
document.getElementById("Fi8").addEventListener('change', (event) => {
    Fi[7] = parseFloat(document.getElementById("Fi8").value);
    calcular_combinacao()
})
document.getElementById("Fi9").addEventListener('change', (event) => {
    Fi[8] = parseFloat(document.getElementById("Fi9").value);
    calcular_combinacao()
})
function calcular_combinacao()
{
    let carga_total = 0;
    for(j=0;j<9;j++)
    {
        carga_total+=carga[j]*gamma[j]*Fi[j]
    }
    atualizar_texto("cargatotal",carga_total)
}