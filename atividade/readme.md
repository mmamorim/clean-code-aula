
# 🎯 Atividade Prática — Refatoração de Código: Jogo da Forca

## Objetivo

Nesta atividade, você deverá realizar a **refatoração de um código existente** que implementa um jogo simples da forca utilizando:

- HTML
- CSS
- JavaScript Vanilla

O código fornecido funciona, mas foi escrito de forma propositalmente ruim, contendo diversos problemas de organização, legibilidade e manutenção.

Seu objetivo será aplicar os conceitos estudados nos capítulos 1 a 5:

- **Capítulo 1 — Código Limpo**
- **Capítulo 2 — Nomes Significativos**
- **Capítulo 3 — Funções**
- **Capítulo 4 — Comentários**
- **Capítulo 5 — Formatação**

---

## Descrição da Atividade

O código abaixo implementa um jogo simples da forca com as seguintes características:

- palavra fixa
- entrada de letras pelo usuário
- exibição da palavra parcialmente descoberta
- contagem de erros
- desenho da forca em ASCII
- mensagem de vitória ou derrota

Porém, o código apresenta vários problemas, como:

- HTML, CSS e JavaScript no mesmo arquivo
- ausência de modularização
- nomes ruins de variáveis
- lógica concentrada em poucos blocos
- repetição de código
- falta de organização visual
- manipulação direta do DOM de forma confusa
- uso inadequado de comentários ou ausência deles quando realmente necessários

---

## Sua tarefa

Você deverá refatorar o código mantendo o mesmo comportamento geral do jogo.


## Código-base para refatoração

> **Importante:** o código abaixo está propositalmente mal escrito.

~~~html
<!DOCTYPE html>
<html>
<head>
  <title>jogo</title>
  <style>
    body{font-family:Arial;text-align:center;background:#f2f2f2}
    #a{font-size:30px;letter-spacing:10px;margin:20px}
    #b{white-space:pre;font-family:monospace;font-size:18px;margin:20px auto;background:#fff;border:1px solid #ccc;padding:10px;width:200px}
    #c{color:red;font-weight:bold}
    button{padding:5px 10px}
    input{padding:5px;text-align:center;width:40px}
  </style>
</head>
<body>
  <h1>Jogo da Forca</h1>
  <div id="b"></div>
  <div id="a"></div>
  <input id="i" maxlength="1">
  <button onclick="j()">Tentar</button>
  <div id="c"></div>
  <div id="d"></div>

  <script>
    var p="JAVASCRIPT";
    var x=[];
    var y=0;
    var z=[];
    var t=document.getElementById("a");
    var u=document.getElementById("b");
    var m=document.getElementById("c");
    var n=document.getElementById("d");

    for(var k=0;k<p.length;k=k+1){
      x.push("_");
    }

    u.innerHTML=" +---+<br> |   |<br>     |<br>     |<br>     |<br>     |<br>=======";
    t.innerHTML=x.join(" ");

    function j(){
      var l=document.getElementById("i").value.toUpperCase();
      document.getElementById("i").value="";

      if(l==""){
        m.innerHTML="digite uma letra";
        return;
      }

      if(z.indexOf(l)>=0){
        m.innerHTML="letra repetida";
        return;
      }

      z.push(l);

      var ok=false;

      for(var q=0;q<p.length;q=q+1){
        if(p[q]==l){
          x[q]=l;
          ok=true;
        }
      }

      if(ok==false){
        y=y+1;
      }

      t.innerHTML=x.join(" ");
      n.innerHTML="Letras usadas: "+z.join(", ");

      if(y==0){
        u.innerHTML=" +---+<br> |   |<br>     |<br>     |<br>     |<br>     |<br>=======";
      }
      if(y==1){
        u.innerHTML=" +---+<br> |   |<br> O   |<br>     |<br>     |<br>     |<br>=======";
      }
      if(y==2){
        u.innerHTML=" +---+<br> |   |<br> O   |<br> |   |<br>     |<br>     |<br>=======";
      }
      if(y==3){
        u.innerHTML=" +---+<br> |   |<br> O   |<br>/|   |<br>     |<br>     |<br>=======";
      }
      if(y==4){
        u.innerHTML=" +---+<br> |   |<br> O   |<br>/|\\  |<br>     |<br>     |<br>=======";
      }
      if(y==5){
        u.innerHTML=" +---+<br> |   |<br> O   |<br>/|\\  |<br>/    |<br>     |<br>=======";
      }
      if(y==6){
        u.innerHTML=" +---+<br> |   |<br> O   |<br>/|\\  |<br>/ \\  |<br>     |<br>=======";
        m.innerHTML="você perdeu! a palavra era "+p;
        document.getElementById("i").disabled=true;
      }

      if(x.join("")==p){
        m.innerHTML="você venceu!";
        document.getElementById("i").disabled=true;
      }
    }
  </script>
</body>
</html>
~~~

---

# Caso queiram adicionar mais palavras (nova funcionalidade)

~~~js
let words = [
  { word: 'GOOGLE', tip: 'Site de buscas e pesquisas' },
  { word: 'ESQUADRO', tip: 'Instrumento Triangular' },
  { word: 'UPDATE', tip: 'Atualização de algum recurso' },
  { word: 'DETERGENTE', tip: 'Você usa na cozinha' },
  { word: 'GITHUB', tip: 'Facebook para programadores' },
  { word: 'PANTERA', tip: 'Felino' },
  { word: 'CARNAVAL', tip: 'Festa brasileira' },
  { word: 'BARATA', tip: 'Inseto' },
  { word: 'SORVETE', tip: 'Sobremesa Refescante' },
  { word: 'SADICO', tip: 'Pessoa que sente prazer no sofrimento' },
  { word: 'HIENA', tip: 'Animal da savana' },
  { word: 'LEGADO', tip: 'Ideal deixado para próxima geração' },
  { word: 'ENFERMEIRA', tip: 'Cuida dos doentes' },
  { word: 'SOBRIO', tip: 'Pessoa que não ingeriu bebida alcoólica' },
  { word: 'BOMBEIRO', tip: 'Presta socorro' },
  { word: 'CARETA', tip: 'Modificar a face de forma espontânea' },
  { word: 'ESPAGUETE', tip: 'Prato Italiano' },
  { word: 'PAGINA', tip: 'Presente em um livro e na internet' },
  { word: 'TERREMOTO', tip: 'Movimento tectônico' },
  { word: 'BICICLETA', tip: 'Meio de transporte' },
  { word: 'SANGUE', tip: 'Tem em seu corpo' },
  { word: 'SAMBA', tip: 'Estilo musical' },
  { word: 'FAVELA', tip: 'Local com péssimas condições de moradia' },
  { word: 'ALMOFADA', tip: 'Decora o sofá' },
  { word: 'SOQUETE', tip: 'Meia curta' },
  { word: 'MANCHA', tip: 'Marca causada por danos superficiais' },
  { word: 'PICASA', tip: 'Programa de edição de imagens' },
  { word: 'BRASIL', tip: 'Tomou 7 gols' },
  { word: 'PROCON', tip: 'Órgão público' },
  { word: 'BACKUP', tip: 'Recurso utilizado para salvar arquivos' },
  { word: 'SUDOKU', tip: 'Jogo de números' },
  { word: 'ROMANTISMO', tip: 'Movimento literário' },
  { word: 'SUSHI', tip: 'Comida japonesa' }
]
~~~

## Entregáveis

Você deverá entregar:

1. **Versão refatorada do código**
2. **Breve explicação** das principais melhorias realizadas
3. **Lista dos problemas encontrados** no código original, relacionando-os aos capítulos estudados



## Critérios de avaliação

A atividade poderá ser avaliada considerando:

- aplicação dos conceitos de código limpo
- qualidade da refatoração
- clareza dos nomes
- uso adequado de funções
- organização visual do código
- preservação do comportamento do jogo

---

## Desafio extra

Se desejar, você pode ir além e implementar melhorias adicionais, como:

- botão de reiniciar
- escolha aleatória de palavras
- exibição do número de erros restantes
- tratamento de entradas inválidas
- separação do CSS e JS em arquivos externos

---

## Observação importante

Refatorar não significa reescrever tudo do zero.

Refatorar significa:

> **melhorar a estrutura interna do código sem alterar o comportamento esperado**

O foco desta atividade está na **qualidade do código**, não na adição de novas funcionalidades.