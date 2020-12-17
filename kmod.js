document.getElementById("categoria").addEventListener('change', (event) => {
    index = document.getElementById("categoria").value

    switch (index)
    {
        case "0":
            categoria = 1;
            break;
        case "1":
            categoria = 2;
            break;
    }
    kmod3()

})
document.getElementById("tipo").addEventListener('change', (event) => {
    index = document.getElementById("tipo").value

    switch (index)
    {
        case "0":
            tipo = "ds";
            Em = 0.9*El0
            break;
        case "1":
            tipo = "cs";
            Em = 0.85*El0
            break;
        case "2":
            tipo = "dmlc";
            Em = 0.9*El0
            break;
        case "3":
            tipo = "cmlc";
            Em = 0.85*El0
            break;
    }
    
    atualizar_texto("Em",Em)
    kmod3()


})
document.getElementById("kmod1").addEventListener('change', (event) => {
    index = document.getElementById("kmod1").value

    switch (index)
    {
        case "0":
            kmod1 = 0.6;
            break;
        case "1":
            kmod1 = 0.7;
            break;
        case "2":
            kmod1 = 0.8;
            break;
        case "3":
            kmod1 = 0.9;
            break;
        case "4":
            kmod1 = 1.1;
            break;
    }
    console.log(kmod1)
    atualizar_texto("kmod1",kmod1)
    attkmod()

})
document.getElementById("kmod2").addEventListener('change', (event) => {
    index = document.getElementById("kmod2").value

    switch (index)
    {
        case "0":
            kmod2 = 1;
            break;
        case "1":
            kmod2 = 1;
            break;
        case "2":
            kmod2 = 0.8;
            break;
        case "3":
            kmod2 = 0.8;
            break;
    }
    atualizar_texto("kmod2",kmod2)
    attkmod()

})
function kmod3()
{
    if (tipo=="ds")
    {
        if(categoria==1)
        {
            kmod3txt=1
        }
        if(categoria==2)
        {
            kmod3txt=0.8
        }
    }
    if (tipo=="cs")
    {
        kmod3txt = 0.8
    }
    if (tipo=="dmlc")
    {
        kmod3txt=1
    }
    if (tipo=="cmlc")
    {
        kmod3txt=1
    }
    atualizar_texto("kmod3",kmod3txt)
    attkmod()
}
function attkmod()
{
    kmod = kmod1*kmod2*kmod3txt
    
    calcularfc(kmod)
    atualizar_texto("kmod",kmod.toFixed(3))
}
function calcularfc(kmodtotal)
{
    fc0d=fcm0*0.7*kmodtotal/1.4
    fc90d=fcm90*0.7*kmodtotal/1.4
    ft0d=ftm0*0.7*kmodtotal/1.8
    ft90d=ftm90*0.7*kmodtotal/1.8
    fv0d=fvm0*0.54*kmodtotal/1.8
    E0d=El0*kmodtotal
    E90d=El90*kmodtotal
    Emd=Em*kmodtotal
    atualizar_texto("fc0d",fc0d.toFixed(2))
    atualizar_texto("fc90d",fc90d.toFixed(2))
    atualizar_texto("ft0d",ft0d.toFixed(2))
    atualizar_texto("ft90d",ft90d.toFixed(2))
    atualizar_texto("fv0d",fv0d.toFixed(2))
    atualizar_texto("fv90d",fv90d.toFixed(2))
    atualizar_texto("E0d",E0d.toFixed(2))
    atualizar_texto("E90d",E90d.toFixed(2))
    atualizar_texto("Emd",Emd.toFixed(2))
    console.log("Rodeiwtf")
}