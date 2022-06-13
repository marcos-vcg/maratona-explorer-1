# HTML -> Estrutura
- HyperText Markup Language

- Hiper-Texto -> Textos Clicáveis p/ Abrir Novas Páginas
- Marcação -> <TAGs>
- Linguagem -> Maneira de Escrever

# CSS -> Beleza
- Cascading Style Sheet
  - Folha de Estilo em Cascata
- Apresentação Visual para o Cliente
- Estilos para o HTML

# Declaração
- Seletor
- Propriedade e Valor

# Conceitos
- Cascata -> Sempre pega o último valor de propriedade
- Especificidade Sobrepões a Cascata -> TAG x ID
- Box Model -> Tudo são Caixas dentro de Caixas
- Display Block x InLine

# JavaScript -> Inteligência
1. Variáveis:
  - var -> Permite que seja declarado novamente
  - let -> Não permite uma nova declaração
  - const -> Não permite a troca de valor

2. Tipos de Dados:
  - String
      ""
      ''

  - Number
      12 -> Integer
      3.2 -> Float

  - Boolean
      true || false
      const rico = false

  - Undefined
      Indefinido -> Dado que não existe

3. Operadores:
  - Atribuição (=)
      Atribuir Valor
      var nome = "eu"

  - Aritméticos (* / + -)
      Cálculos Matemáticos Simples
      console.log(12 / 4)

  - Concatenação de Strings (+)
      var saudacao = "Olá " + "mundo!"

  - Comparação (> < ==)
      1 > 2 => false
      1 == 1 => true

4. Condicional (if ,else)
    if(idade >= 18){
      alert("Maior de Idade!)
    } else {
      alert("Menor de Idade!")
    }

5. Estruturas de Dados (maix complexos)
  - Array, Vetor, Lista Indexada
      const lista = [1, 3.2, "teste", 7]
      console.log(lista[2])   // "teste"
  
  - Object
      const pessoa = {
        nome: "Marcos",
        idade: 23,
        filhos: ["João", "Maria", "Peter Pan"]
      }
      console.log(pessoa.nome)
      console.log(pessoa.filhos[2])

6. Function
  - Criação:
      function nomeDaFuncao() {
        console.log("Código dentro da Função")
      }
  - Execução:
      nomeDaFuncao()
  - Parametros:
      function soma(parametro1, parametro2) {
        console.log(parametro1 + parametro2)
      }
      soma(3, 7)   //10
  - Retorno:
      function soma(parametro1, parametro2) {
        return parametro1 + parametro2
      }
      console.log(soma(3, 7) * 2)   //20

7. Extensões da Linguagem (Math, Date, ...)
    Math.random() -> Retorna um número entre 0 e 1
    Math.floor(1.2) -> Arredonda pra Baixo  // 1
    Math.ceil(1.2) -> Arredonda pra Cima    // 2
    Math.PI
    
    Date.now() -> Data em milissegundos

8. DOM -> Document Object Model
    Trabalha o documento como Objeto

    window -> Janela do Navegador
    window.alert("Alerta")

    document -> P/ manipular os elementos HTML
    document.write("Texto")
    document.documentElement.style.background = "black"
    