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
            break;
        case "1":
            tipo = "cs";
            break;
        case "2":
            tipo = "mlc";
            break;
    }
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
    if (tipo=="mlc")
    {
        kmod3txt=1
    }
    atualizar_texto("kmod3",kmod3txt)
    attkmod()
}
function attkmod()
{
    kmod = kmod1*kmod2*kmod3txt
    atualizar_texto("kmod",kmod.toFixed(3))
}