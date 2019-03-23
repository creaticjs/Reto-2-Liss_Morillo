/**
 Ejercicio 1 
 */
function promedio(){

    var num1 = document.getElementById("nota1").value;
    var num2 = document.getElementById("nota2").value;
    var num3 = document.getElementById("nota3").value;
    var num4 = document.getElementById("nota4").value;

    var resul = (parseFloat(num1)+parseFloat(num2)+parseFloat(num3)+parseFloat(num4))/4;
    document.getElementById('resultado').innerHTML = resul + "("+ puntuacion(num1, num2, num3, num4, resul) + ")";    
}

function puntuacion(num1, num2, num3, num4, resul){

    num1=parseFloat(num1);
    num2=parseFloat(num2);
    num3=parseFloat(num3);
    num4=parseFloat(num4);
    resul=parseFloat(resul);
    var nota="";
    if(resul<=59)
    nota="E";
    else if(resul>=60 && resul<=69)
    nota="D";
    else if(resul>=70 && resul<=79)
    nota="C";
    else if(resul>=80 && resul<=89)
    nota="B";
    else if(resul>=90 && resul<=100)
    nota="A";
    
    return nota;
}

/* -------------Ejercicio 2 */
function gravedad(){

    var masa1 = document.getElementById("masa1").value;
    var masa2 = document.getElementById("masa2").value;
    var distancia= document.getElementById("distancia").value;
    var gra = 6.673;
    var pot = gra * Math.pow(10,-8);

    var resultado = (parseFloat(masa1)*parseFloat(masa2))*pot;
    var resultado2 = resultado / Math.pow(parseFloat(distancia),2);
    document.getElementById('resultado').innerHTML = resultado2 + "(cm)exp3/g*seg2";
}


/* -------------Ejercicio 3 E= mc ex 2---- C= 2.997925 * (10)exp10 m/sg  */
function energia(){
    var masa1 = document.getElementById("masa1").value;

    var cantidadEner = 2.997925;
    var cantidadEnergia= cantidadEner * Math.pow(10,10);

    var resultado = (parseFloat(masa1)* Math.pow(parseFloat(cantidadEnergia),2));

    document.getElementById('resultado').innerHTML = resultado + "g/sg";
}


/* ---------Ejercicio 4 Hipotenusa   A2+B2= h2 ----------*/
function hipotenusa(){
    var lado1= document.getElementById("lado1").value;
    var lado2= document.getElementById("lado2").value;

    var lado11 = Math.pow (parseFloat(lado1),2);
    var lado22 = Math.pow (parseFloat(lado2),2);
    var lados = parseFloat(lado11) + parseFloat(lado22);

    var resultado = Math.pow(parseFloat(lados),2);

    document.getElementById('resultado').innerHTML =  resultado;

}

/* ------ Ejercicio 5 area triangulo A= RAIZ (p(p-a)(p-b)(p-c)) ----- p = (a+b+c)/2 */
function area_Triangulo(){
    var lado1= document.getElementById("lado1").value;
    var lado2= document.getElementById("lado2").value;
    var lado3= document.getElementById("lado3").value;

    var p = ((parseFloat(lado1)) + (parseFloat(lado2)) + (parseFloat(lado3)))/2;  
    var a= p -(parseFloat(lado1));     
    var b= p - (parseFloat(lado2));    
    var c= p- (parseFloat(lado3));    

    var af= (a * b * c);    
    var pf= p * af;   

    var resultado = Math.sqrt(pf);
    document.getElementById('resultado').innerHTML = resultado;
}

/*----- Ejercicio 6 Hora */
function hora_Fin(){
    var hora2 = document.getElementById("hora").value;
    document.getElementById('resultado').innerHTML = hora(hora2);

}

function hora(hora2){
    var hora = hora2;
    var hr= hora.substr(0,2);
    var min= hora.substr(3,5);
    var hora_Normal = "";

        /* se puede hacer con un otra condición es decir si es mayor a 12 entonces el numero que se le ingresa
        se le resta 12: ejemplo: 14-12=2*/
    if (hr=="13")
    var hora_Normal = "1";
    else if(hr == "14")
    var hora_Normal ="2";    
    if (hr=="15")
    var hora_Normal = "3";
    else if(hr == "16")
    var hora_Normal ="4";    
    if (hr==17)
    var hora_Normal = "5";
    else if(hr == 18)
    var hora_Normal ="6";
    if (hr==19)
    var hora_Normal = "7";
    else if(hr == 20)
    var hora_Normal ="8";    
    if (hr==21)
    var hora_Normal = "8";
    else if(hr == 22)
    var hora_Normal ="10";    
    if (hr==23)
    var hora_Normal = "11";

    console.log(hora_Normal);

    return hora_Normal + ":" + min;      
}
/* ----- ejercicio 7 --- fecha */

function fecha(){
    var fecha2= document.getElementById("fecha").value;
    fecha2=fecha2.toLowerCase();
    var meses = [
        {mes:"enero",valor:1}, 
        {mes:"febrero", valor:2},
        {mes:"marzo", valor:3},
        {mes:"abril",valor:4}, 
        {mes:"mayo", valor:5},
        {mes:"junio", valor:6},
        {mes:"julio",valor:7}, 
        {mes:"agosto", valor:8},
        {mes:"septiembre", valor:9},
        {mes:"octubre",valor:10}, 
        {mes:"noviembre", valor:11},
        {mes:"diciembre", valor:12}, 
        ];

    meses.forEach(function(mes2){
        fecha2 = fecha2.replace(mes2.mes, mes2.valor );
    });
    document.getElementById('resultado').innerHTML =  fecha2;
}



/*------- Ejercicio 8 --- Número convertir */

function convertir_Numero(){
    var numero = document.getElementById('numero').value;
    var punto = numero[numero.length -1];
    if(punto === '.') {
        convertir(numero);
    }
}

function convertir(numero) {
    var numero2 = numero;
    numero2 = numero2.substring(0, numero2.length - 1);
    var res = numero2.split(' ');
    if (res.length === 1) {
        
        var cien = cientos(numero2);
        if (cien !== 0) {
            document.getElementById('numero2').innerHTML = "el numero es:" + cien;
        } else {
            m.toast('numero invalido', 4000);
        }
    } else if (res.length === 4) {
        var cen = cientos(res[0]);
        cen = cen / 100;
        cent(cen, res);
    } else {
        var cen = cientos(res[0]);
        cen = cen / 100;
        var decen = decenas(res[1]);
        if (decen !== 0) {
            document.getElementById('numero2').innerHTML = '<p>El número es: ' + cen + decen + ' </p>';
        } else {
            var decen2 = unidades(res[1]);
            if (decen2 !== 0) {
                document.getElementById('numero2').innerHTML = '<p>El número es: ' + cen + 0 + decen2 + ' </p>';
            } else {
                var decen3 = valoresDiez(res[1]);
                if (decen3 !== 0) {
                    document.getElementById('numero2').innerHTML = '<p>El número es: ' + cen + decen3 + ' </p>';
                } else {
                    var decen4 = valoresVeinte(res[1]);
                    if (decen4 !== 0) {
                        document.getElementById('numero2').innerHTML = '<p>El número es: ' + cen + decen4 + ' </p>';
                    } else {
                        m.toast('No es posible convertir este número', 4000);
                    }
                }
            }
        }
    }
}

function cent(cien, rest) {

    var diez = decenas(rest[1]);
    diez = diez / 10;
    var numero = unidades(rest[3]);
    if (diez !== 0 && numero !== 0) {
        document.getElementById('numero2').innerHTML = '<p>El número es: ' + cien + diez + numero + ' </p>';
    } else {
        m.toast('No es posible convertir este número', 4000);
    }
}

function cientos(numeror) {
    var numero = 0;
    var num = numeror.toLowerCase();
    switch (num) {
        case 'cien': numero = 100;
            break;
        case 'ciento': numero = 100;
            break;
        case 'doscientos': numero = 200;
            break;
        case 'trescientos': numero = 300;
            break;
        case 'cuatrocientos': numero = 400;
            break;
        case 'quinientos': numero = 500;
            break;
        case 'seiscientos': numero = 600;
            break;
        case 'setecientos': numero = 700;
            break;
        case 'ochocientos': numero = 800;
            break;
        case 'novecientos': numero = 900;
            break;
        default: numero = 0;
            break
    }
    return numero;
}

function decenas(numeror) {
    var numero = 0;
    var num = numeror.toLowerCase();
    switch (num) {
        case 'diez': numero = 10;
            break;
        case 'veinte': numero = 20;
            break;
        case 'treinta': numero = 30;
            break;
        case 'cuarenta': numero = 40;
            break;
        case 'cincuenta': numero = 50;
            break;
        case 'sesenta': numero = 60;
            break;
        case 'setenta': numero = 70;
            break;
        case 'ochenta': numero = 80;
            break;
        case 'noventa': numero = 90;
            break;
        default: numero = 0;
            break
    }
    return numero;
}

function unidades(numeror) {
    var numero = 0;
    var num = numeror.toLowerCase();
    switch (num) {
        case 'uno': numero = 1;
            break;
        case 'dos': numero = 2;
            break;
        case 'tres': numero = 3;
            break;
        case 'cuatro': numero = 4;
            break;
        case 'cinco': numero = 5;
            break;
        case 'seis': numero = 6;
            break;
        case 'siete': numero = 7;
            break;
        case 'ocho': numero = 8;
            break;
        case 'nueve': numero = 9;
            break;
        default: numero = 0;
            break
    }
    return numero;
}

function valoresDiez(numeror) {
    var numero = 0;
    var num = numeror.toLowerCase();
    switch (num) {
        case 'once': numero = 11;
            break;
        case 'doce': numero = 12;
            break;
        case 'trece': numero = 13;
            break;
        case 'catorce': numero = 14;
            break;
        case 'quince': numero = 15;
            break;
        case 'dieciseis': numero = 16;
            break;
        case 'diecisiete': numero = 17;
            break;
        case 'dieciocho': numero = 18;
            break;
        case 'diecinueve': numero = 19;
            break;
        default: numero = 0;
            break
    }
    return numero;
}

function valoresVeinte(numeror) {
    var numero = 0;
    var num = numeror.toLowerCase();
    switch (num) {
        case 'veintiuno': numero = 21;
            break;
        case 'veintidos': numero = 22;
            break;
        case 'veintitres': numero = 23;
            break;
        case 'veinticuatro': numero = 24;
            break;
        case 'veinticinco': numero = 25;
            break;
        case 'veintiseis': numero = 26;
            break;
        case 'veintisiete': numero = 27;
            break;
        case 'veintiocho': numero = 28;
            break;
        case 'veintinueve': numero = 29;
            break;
        default: numero = 0;
            break
    }
    return numero;
}



/* Ejercicio 9 calcular datos del circulo sin dibujarlo se ingresa el radio en un txt 
y se calcula el area de este---- A= PI * RADIO2*/

function circulo(){
    var radio= document.getElementById("radio").value; 
    
    var pi= 3.14;
    var resul=   Math.pow (parseFloat(radio),2);
    var resultado = pi*resul;

    document.getElementById('resultado').innerHTML =  resultado + " mm exp 2";
}


/*  Ejercicio 10 Numeros Romanos----*/
function num_Romanos(){
    var roman = document.getElementById("romano").value;
    document.getElementById('resultado').innerHTML = romanos(roman);

}

function romanos(roman){    
    var roma = roman;  
    if (!+roma)
        return false;
    var digits = String(+roma).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman2 = "",
        i = 3;
    while (i--)
        roman2 = (key[+digits.pop() + (i * 10)] || "") + roman2;
    return Array(+digits.join("") + 1).join("M") + roman2;
}



/* Ejercicio 11 ---  2362=2400 ----- 2342= 2300 ---------*/
function num_Aproximado(){

    var numeroA = document.getElementById("numeroA").value;
    var numeroB = document.getElementById("numeroB").value;
    var numeroC = document.getElementById("numeroC").value;
    var numeroD = document.getElementById("numeroD").value;
        
     document.getElementById('resultado').innerHTML = num_Result(numeroA, numeroB, numeroC, numeroD);        
}

function num_Result(numeroA, numeroB, numeroC, numeroD){
    var numA = parseFloat(numeroA);
    var numB = parseFloat(numeroB);
    var numC = numeroC;
    var numD = numeroD;
    

    var final = numC + numD;
    var numf = parseFloat(final);

    if(numf <= 50 ){
        numC = 0;
        numD = 0;
}
    else if(numf >= 51){
      numB++;
      if (numB>9) {
          numA++;
          numB=0;
      }
      numC = 0;
      numD = 0;
}   

    return numA +"" +numB+ "" + numC + "" + numD;

    }




/* ejercicio 12 -- calcular_Edad---- -----------------substring*/
function calcular_Edad(){
    var fecha = document.getElementById("fechanacimiento").value;
    var resultado = document.getElementById("resultado");
    var fechaActual = new Date();

    if (validarValoresVacios([fecha])) {
        var fechaPersona = new Date(fecha);
        fechaPersona.setDate(fechaPersona.getDate() + 1);
        var tiempoDiferencia = Math.abs(fechaActual.getTime() - fechaPersona.getTime());
        var diasDiferencia = Math.ceil(tiempoDiferencia / (1000 * 3600 * 24));
        if (diasDiferencia < 365) {
            resultado.innerHTML = Math.trunc(diasDiferencia / 30) + " mes(es)";
        } else {
            resultado.innerHTML = Math.trunc(diasDiferencia / 365) + " años."
        }
    }
}

function validarValoresVacios(array) {
    var validacion = array.find(function (item) {
        return item === "";
    });
    if (validacion != "") return true;
    else {
        alert("Faltan valores");
        return false;
    }
}



/*Ejercicio 13 -- ecuaciones lineales    x = (ce - bf) / (ae -bd)     y = (af - cd) / (ae -bd) */
function ecuaciones_Lineales(){

    var a = document.getElementById("numeroA").value;
    var b = document.getElementById("numeroB").value;
    var c = document.getElementById("numeroC").value;
    var d = document.getElementById("numeroD").value;
    var e = document.getElementById("numeroE").value;
    var f = document.getElementById("numeroF").value;

    var parteuna = (parseFloat(c) * parseFloat(e));
    var parteuna2 = (parseFloat(b) * parseFloat(f));
    var parteunaf= parteuna - parteuna2;

    var partedos = (parseFloat(a) * parseFloat(e));
    var partedos2 = (parseFloat(b) * parseFloat(d));  

    var partedosf= partedos - partedos2;
    var resultadoX= parteunaf / partedosf;

    var datosy = (parseFloat(a) * parseFloat(f));
    var datosy2 = (parseFloat(c) * parseFloat(d));
    var resulty = datosy - datosy2;
    var resultadoy = resulty / partedosf;

    document.getElementById('resultado').innerHTML = "x=" + resultadoX + " y=" + resultadoy;
}

/* Ejercicio 14-- Año bisiesto*/
function anio_Bisiesto() {
    var anio = document.getElementById('anio').value;
    var resultado ="";
    var res;
    var res2;
    var resultado;

    var an= parseFloat(anio);

    if((an % 4 == 0) && (an % 100 == 0) && (an % 400 == 0))
        resultado = "el año es bisiesto"
    else    
        resultado = "el año no es bisiesto"
/*
    if (an % 4 == 0)
        res = an;
        console.log("datos res:" + res);
        res = "año bisiestos multiplo de 4";

        if (res % 100 == 0)
        res2 = res;
        res2 = "año bisiesto de 100";

        if(res2 % 400 == 0)
        resultado = "año bisiestos de 400";     */   

    document.getElementById('resultado').innerHTML = resultado;
}

   
/* ejercicio 15--- */

function dias_Mes(){
    var mes = document.getElementById('mes').value;
    var anio = document.getElementById('anio').value;
    resultado;

    meses = parseFloat(mes);
    anios = parseFloat(anio);

    if (meses == 1 || meses == 3 || meses == 5 || meses == 7 || meses == 8 || meses == 10 || meses == 12 ){
    resultado = "Este mes tiene 31 días"
    }

    if (meses == 4 || meses == 6 || meses == 9 || meses == 11 ){
    resultado = "Este mes tiene 30 días"
    }

    if ((meses == 2) && (anios % 4 ==0) ){
    resultado = "tiene 29 días"
    }
    
    if ((meses == 2) && (anios % 4 !=0) ){
         resultado = "tiene 28 días"    
        }
    document.getElementById('resultado').innerHTML =  resultado ;
}

/* ejercicio 16 ---- */


function calcularHoras() {
    var precioHora = document.getElementById('precioHora').value;
    var horasTrabajadas = document.getElementById('horas').value;
    var salarioI = 0;
    var salario = 0;
    precioHora = parseInt(precioHora);
    horasTrabajadas = parseInt(horasTrabajadas);
    if (horasTrabajadas > 0 && horasTrabajadas < 38) {
        salarioI = horasTrabajadas * precioHora;
        salario = calcularImpuesto(salarioI);
    } else {
        var horasExtras = horasTrabajadas - 37;
        var porcenaje = precioHora + (precioHora * 0.5);
        salarioI = (37 * precioHora) + (horasExtras * porcenaje);
        salario = calcularImpuesto(salarioI);
    }
    document.getElementById('resultado').innerHTML = "El salario es: " + salario ;
}

function calcularImpuesto(salarioI) {
    if (salarioI > 50000) {
        return salarioI - (salarioI * 0.1);
    } else {
        return salarioI
    }
}





/* el 16 */

var tarifa = 0;
var impuesto = 0;
var impuestototal = 0;
var horasextras = 0;

function calcularsalario() {

    var horastrab = document.getElementById("horastrab").value;
    var tarifa = parseFloat(document.getElementById("tarifa").value);

    var horast = parseFloat(horastrab);

    if (tarifa > 0 && horast > 0) {
        if (horast < 39) {
            salario = (horastrab * tarifa)
        }

        if (horast > 38) {
            horasextras = (horast - 38);
            salario = (38 * tarifa) + (horasextras * (tarifa + (0.5 * tarifa)))
        }

        if (salario > 50000) {
            impuesto = salario / 100;
            impuestototal = impuesto * 10;
            salario = salario - impuestototal;

        }

        resultadoDieciseis.innerHTML = "el salario es:" + salario + "y el impuesto es" + impuestototal ;
    } else {
        resultadoDieciseis.innerHTML = "los valores deben ser positivos";
    }

}

/**
 * Ejercicio 17
 */

function calcularPesetas() {
    var pesetas = document.getElementById("txtPesetas").value;

    var resultado = document.getElementById("resultado");
    if (validarValoresVacios([pesetas])) {
        var pesos = parseFloat(pesetas) * 21.16;
        var billetes = { cien: 0, cincuenta: 0, veinte: 0, diez: 0, cinco: 0, dos: 0, mil: 0 };
        var monedas = { quinientos: 0, doscientos: 0, cien: 0, cincuenta: 0 };
        if (pesos / 100000 >= 1) pesos = restarDinero(pesos, 100000, billetes, monedas);
        if(pesos / 50000 >=1) pesos = restarDinero(pesos, 50000, billetes, monedas);
        if(pesos / 20000 >=1) pesos = restarDinero(pesos, 20000, billetes, monedas);
        if(pesos / 10000 >=1) pesos = restarDinero(pesos, 10000, billetes, monedas);
        if(pesos / 5000 >=1) pesos = restarDinero(pesos, 5000, billetes, monedas);
        if(pesos / 2000 >=1) pesos = restarDinero(pesos, 2000, billetes, monedas);
        if(pesos / 1000 >=1) pesos = restarDinero(pesos, 1000, billetes, monedas);
        if(pesos / 500 >=1) pesos = restarDinero(pesos, 500, billetes, monedas);
        if(pesos / 200 >=1) pesos = restarDinero(pesos, 200, billetes, monedas);
        if(pesos / 100 >=1) pesos = restarDinero(pesos, 100, billetes, monedas);
        if(pesos / 50 >=1) pesos = restarDinero(pesos, 50, billetes, monedas);
        resultado.innerHTML = '<div>' +'Billetes: '+'Cien mil: '+billetes.cien
                            +', Cincuenta mil :'+billetes.cincuenta+', Veinte mil: '+ billetes.veinte
                            +', Diez mil :'+billetes.diez+' , Cinco mil: '+billetes.cinco
                            +', Dos mil :'+billetes.dos+' , mil: '+billetes.mil+'<br>'+
                            'Monedas: Quinientos: '+ monedas.quinientos+' , Doscientos :'+monedas.doscientos
                            +', cien: '+ monedas.cien+', ciencuenta: '+monedas.cincuenta + '</div>';
    }
}

function restarDinero(dinero, resto, billetes, monedas) {
    var numero = Math.trunc(dinero / resto);
    switch (resto) {
        case 100000:
            billetes.cien = numero;
            break;
        case 50000:
            billetes.cincuenta = numero;
            break;
        case 20000:
            billetes.veinte = numero;
            break;

        case 10000:
            billetes.diez = numero;
            break;
        case 5000:
            billetes.cinco = numero;
            break;
        case 2000:
            billetes.dos = numero;
            break;
        case 1000:
            billetes.mil = numero;
            break;
        case 500:
            monedas.quinientos = numero;
            break;
        case 200:
            monedas.doscientos = numero;
            break;
        case 100:
            monedas.cien = numero;
            break;
        case 50:
            monedas.cincuenta = numero;
            break;
    }
    return dinero % resto;
}

/*ejercicio 18 */
function numero (){
    var num = document.getElementById('numero').value;

    var number = parseFloat(num);
    var resultado ="";

    if (number>0)
    resultado = "el numero es positivo"
    if (number == 0)
    resultado = "el numero es igual a cero"
    if (number<0)
    resultado = "el numero es negativo"

    document.getElementById('resultado').innerHTML =  resultado ;



}


        
  