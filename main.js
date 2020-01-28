function valida(){
    var validaAltura = document.getElementById('IDaltura').validity.valid
    var validaPeso= document.getElementById('IDpeso').validity.valid
    if ((validaAltura == true) && (validaPeso == true)){
        console.log('Funcionou')
        document.getElementById('erro').style.opacity ="0"
        calcular()
    }
    else{
        document.getElementById('erroescrito').innerText = 'Por favor, preencha os dados.'
        document.getElementById('erro').style.opacity ="1"
        document.getElementById('result').innerText = ""
        document.getElementById('coment').innerText = ""
    }
}

var imc
function calcular() {
    var alturacm = parseFloat(document.getElementById('IDaltura').value)
    var alturaM = (alturacm / 100)
    var peso = parseFloat(document.getElementById('IDpeso').value)
    imc = peso / (alturaM * alturaM)
    document.getElementById('result').innerText = 'Seu IMC é de: '+imc.toFixed()
    coment()
    return imc
}
function coment(){
    if (imc < 17) {
        document.getElementById('coment').innerText = 'Muito Abaixo do Peso'
    }
    else if (imc > 17 && imc <= 18.49) {
        document.getElementById('coment').innerText = 'Abaixo do Peso'
    }
    else if (imc >= 18.5 && imc <= 24.99) {
        document.getElementById('coment').innerText = 'Peso normal'
    }
    else if (imc >= 15 && imc <= 29.99) {
        document.getElementById('coment').innerText = 'Acima do peso'
    }
    else if (imc >= 30 && imc <= 34.99) {
        document.getElementById('coment').innerText = 'Obesidade I'
    }
    else if (imc => 35 && imc <= 39.99) {
        document.getElementById('coment').innerText = 'Obesidade II (severa)'
    }
    else if (imc => 40) {
        document.getElementById('coment').innerText = 'Obesidade III (mórbida)'
    }
}


// Abaixo de 17	Muito abaixo do peso
// Entre 17 e 18,49	Abaixo do peso
// Entre 18,5 e 24,99	
// Entre 25 e 29,99	
// Entre 30 e 34,99	
// Entre 35 e 39,99	
// Acima de 40	
