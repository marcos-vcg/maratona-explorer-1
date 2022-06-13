const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const botaoPergunta = document.querySelector("#botaoPergunta")

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]





// clicar em fazer pergunta
function fazerPergunta() {

  // acessa o atributo valor do elemento HTML
  if(inputPergunta.value == "") {
    alert("Digite sua pergunta!")
    return  //já encerra a função
  }

  //desabilita o botão após clicar
  botaoPergunta.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  //gerar número aleatório
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  console.log(respostas[numeroAleatorio])

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
  elementoResposta.style.opacity = 1;

  //sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    botaoPergunta.removeAttribute("disabled")
  }, 3000)
}