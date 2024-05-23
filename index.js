const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const CCXP = "08 dec 2024"

function countDown(){
    const dataCCXP = new Date(CCXP)
    const hoje = new Date()

    const totSeg = (dataCCXP - hoje)/1000;
    const finalDias = Math.floor(totSeg / 60 / 60 / 24);
    const finalHoras = Math.floor(totSeg / 60 /60) % 24;
    const finalMin = Math.floor(totSeg / 60) % 60;
    const finalSeg = Math.floor(totSeg) % 60;

    dia.innerHTML = finalDias
    hora.innerHTML = formatoTempo(finalHoras)
    minuto.innerHTML = formatoTempo(finalMin)
    segundo.innerHTML = formatoTempo(finalSeg)
}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)