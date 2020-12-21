var propmec = 
[
[50.5,69.2,3.1,7.1,12876],
[79.5,117.8,3.7,11.8,20827],
[59.8,75.5,3.5,8.8,12912],
[76.7,104.9,4.8,11.3,16694],
[48.1,87.9,3.2,9.8,13481],
[59.1,79.7,3,5.9,14098],
[52,84.9,6.2,11.1,14613],
[56,120.2,4.1,8.2,16224],
[54.8,99.5,7.5,12.8,11105],
[39,58.1,3,6.1,9839],
[31.5,71.4,3,5.6,8058],
[93.2,133.5,2.9,10.7,23002],
[54.4,62.1,3.3,10.4,13627],
[83.8,86.2,3.3,11.1,19426],
[47.3,69.4,4.6,9.5,13409],
[48,78.1,4.6,9,13286],
[63,123.6,3.9,10.7,18421],
[51.8,90.8,4,10.5,13963],
[48.9,139.2,6.9,9.8,18029],
[40.3,70.2,2.6,7,12813],
[63.5,115.6,4.1,10.6,18099],
[48.3,83.7,4.8,10.3,14431],
[54.9,118.6,4.5,10.3,16782],
[72.7,147.4,4.7,12.4,19881],
[51.6,89.1,4.7,9.7,15561],
[78.5,125.6,6,12.9,19360]
]
var propmec2=
[[20,4,3500],
[25,5,8500],
[30,6,14500],
[20,4,9500],
[30,5,14500],
[40,6,19500],
[60,8,24500]
]




document.getElementById("infomadeira").addEventListener('change', (event) => {
    index = document.getElementById("infomadeira").value
    if (index<=25)
    {
    fcm0= propmec[index][0]
    fcm90= fcm0*0.25
    ftm0= propmec[index][1]
    ftm90= propmec[index][2]
    fvm0= propmec[index][3]
    fvm90= 0
    El0= propmec[index][4]
    El90= El0/20
    console.log(ftm0)
    atualizar_texto("fcm0",fcm0)
    atualizar_texto("fcm90",fcm90)
    atualizar_texto("ftm0",ftm0)
    atualizar_texto("ftm90",ftm90)
    atualizar_texto("fvm0",fvm0)
    atualizar_texto("E0",El0)
    atualizar_texto("E90",El90)
    }
    else
    {
        fcm0 = propmec2[index-26][0]
        fcm90= fcm0*0.25
        ftm0 = fcm0/0.77
        ftm90 = "N/A"
        fvm0 = propmec2[index-26][1]
        El0 = propmec2[index-26][2]
        El90= El0/20
        atualizar_texto("fcm0",fcm0)
    atualizar_texto("fcm90",fcm90)
    atualizar_texto("ftm0",ftm0.toFixed(2))
    atualizar_texto("ftm90",ftm90)
    atualizar_texto("fvm0",fvm0)
    atualizar_texto("E0",El0)
    atualizar_texto("E90",El90)
    }

})

function atualizar_texto(classe,valor)
{
    vetorclasses = document.getElementsByClassName(classe)
    for(let i = 0; i < vetorclasses.length; i++ ) {
        document.getElementsByClassName(classe)[i].textContent = valor
    }
}