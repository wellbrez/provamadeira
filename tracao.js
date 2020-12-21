indicetracao=0;
Ndtracao=0;
btracao=0;
htracao=0;
ntracao=0;
ptracao=0;
parametrotracao=0;
Dtracao=0;
dtracao=0;
ttracao=0;
t1tracao=0;
t2tracao=0;
ntracao=0;
dfurotracao=0;
Antracao=0;
solicitantetracao=0;


document.getElementById("Ndtracao").addEventListener('change', (event) => {
    Ndtracao = parseFloat(document.getElementById("Ndtracao").value);
    calcularsolicitantetracao(Ndtracao,Antracao);
})
document.getElementById("btracao").addEventListener('change', (event) => {
    btracao = parseFloat(document.getElementById("btracao").value);
    calcularAntracao(btracao,htracao,ptracao,dfurotracao,Dtracao,dtracao,ttracao,t1tracao,t2tracao,ntracao)
})
document.getElementById("htracao").addEventListener('change', (event) => {
    htracao = parseFloat(document.getElementById("htracao").value);
    calcularAntracao(btracao,htracao,ptracao,dfurotracao,Dtracao,dtracao,ttracao,t1tracao,t2tracao,ntracao)
})
document.getElementById("ptracao").addEventListener('change', (event) => {
    ptracao = parseFloat(document.getElementById("ptracao").value);
    dfurotracao = calculardfurotracao(ptracao,parametrotracao)
})
document.getElementById("parametrotracao").addEventListener('change', (event) => {
    parametrotracao = parseFloat(document.getElementById("parametrotracao").value);
    dfurotracao = calculardfurotracao(ptracao,parametrotracao)

})
document.getElementById("Dtracao").addEventListener('change', (event) => {
    Dtracao = parseFloat(document.getElementById("Dtracao").value);
    calcularAntracao(btracao,htracao,ptracao,dfurotracao,Dtracao,dtracao,ttracao,t1tracao,t2tracao,ntracao)
})
document.getElementById("dtracao").addEventListener('change', (event) => {
    dtracao = parseFloat(document.getElementById("dtracao").value);
    calcularAntracao(btracao,htracao,ptracao,dfurotracao,Dtracao,dtracao,ttracao,t1tracao,t2tracao,ntracao)
})
document.getElementById("ttracao").addEventListener('change', (event) => {
    ttracao = parseFloat(document.getElementById("ttracao").value);
    calcularAntracao(btracao,htracao,ptracao,dfurotracao,Dtracao,dtracao,ttracao,t1tracao,t2tracao,ntracao)
})
document.getElementById("t1tracao").addEventListener('change', (event) => {
    t1tracao = parseFloat(document.getElementById("t1tracao").value);
    calcularAntracao(btracao,htracao,ptracao,dfurotracao,Dtracao,dtracao,ttracao,t1tracao,t2tracao,ntracao)
})
document.getElementById("t2tracao").addEventListener('change', (event) => {
    t2tracao = parseFloat(document.getElementById("t2tracao").value);
    calcularAntracao(btracao,htracao,ptracao,dfurotracao,Dtracao,dtracao,ttracao,t1tracao,t2tracao,ntracao)
})
document.getElementById("ntracao").addEventListener('change', (event) => {
    ntracao = parseFloat(document.getElementById("ntracao").value);
    calcularAntracao(btracao,htracao,ptracao,dfurotracao,Dtracao,dtracao,ttracao,t1tracao,t2tracao,ntracao)
})







function calculardfurotracao(indice,parametro)
{
    let dfuro;
    if(indice==0)
    {
        dfuro = 0;
        if (parametro>6)
        {
            dfuro = 2*parametro;
        }
    }
    else if(indice==1)
    {
        dfuro = parametro+0.5;
    }
    else if(indice==2)
    {
        dfuro = parametro;
    }
    else
    {
        dfuro=0;
    }
    atualizar_texto("dfurotracao",dfuro.toFixed(2))
    calcularAntracao(btracao,htracao,ptracao,dfuro,Dtracao,dtracao,ttracao,t1tracao,t2tracao,ntracao)
    return dfuro;
}
function calcularAntracao(b,h,indice,dfuro,D,d,t,t1,t2,n)
{
    let An;
    console.log(n)
    dfuro = dfuro/10;
    D = D/10;
    d = d/10;
    t = t/10;
    t1 = t1/10;
    t2 = t2/10;
    if(indice==0)
    {
        An = b*h-n*b*dfuro;
    }
    else if(indice==1)
    {
        An = b*h-n*b*dfuro; 
    }
    else if(indice==2)
    {
        An = b*h-n*b*dfuro; 
    }
    else if(indice==3)
    {
        An = b*h-n*t*D-n*b*d
    }
    else if(indice==4)
    {
        An = b*h-(t1+t2)*b
    }
    atualizar_texto("Antracao",An.toFixed(2))
    calcularsolicitantetracao(Ndtracao,An);
    return An;
}
function calcularsolicitantetracao(Nd,An)
{
    let solicitante;
    Nd = Nd*1000;
    An = An/10**4;
    if(An!=0)
    {
        solicitante = Nd/An/10**6
    }
    else
    {
        solicitante=0;
    }
    atualizar_texto("solicitantetracao",solicitante.toFixed(4))
    
    return Nd*An;
}