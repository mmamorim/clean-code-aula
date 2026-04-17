# 📐 Capítulo 5 — Formatação

## 🎯 Objetivo da Aula

Aprender como a formatação do código influencia diretamente na legibilidade e compreensão, aplicando boas práticas de organização visual.

---

## 🧠 Regra Principal

> **Código bem formatado é mais fácil de ler, entender e manter.**

---

## 💡 O objetivo da formatação

A formatação não é estética.

Ela existe para:

- facilitar leitura
- organizar ideias
- destacar estrutura
- reduzir esforço cognitivo

👉 Código mal formatado aumenta o esforço de entendimento.

---

## 📰 A metáfora do jornal

O código deve ser organizado como um jornal:

- título → funções principais
- subtítulo → funções auxiliares
- detalhes → implementação

👉 O leitor deve entender o geral antes dos detalhes.

---

## 🔍 Exemplo real

### ❌ Código mal formatado

~~~javascript
function processar(p){let t=0;for(let i=0;i<p.i.length;i++){t+=p.i[i].p*p.i[i].q;}if(t>100){t=t*0.9;}return t;}
~~~

---

### 🤯 Problemas:

- impossível de ler rapidamente
- estrutura escondida
- difícil manutenção

---

## ✅ Código bem formatado

~~~javascript
function calcularTotal(pedido){
    let total = 0;

    for(let i = 0; i < pedido.itens.length; i++){
        total += pedido.itens[i].preco * pedido.itens[i].quantidade;
    }

    if(total > 100){
        total = total * 0.9;
    }

    return total;
}
~~~

---

### 💡 Melhorias:

- separação visual clara
- blocos bem definidos
- leitura natural

---

## 📏 Formatação vertical

---

### ✔️ Separe conceitos com linhas em branco

---

### ❌ Exemplo

~~~javascript
function validar(u){
    if(!u.nome){return false;}
    if(!u.email){return false;}
    return true;
}
function salvar(u){
    banco.salvar(u);
}
~~~

---

### ✅ Melhor

~~~javascript
function validar(usuario){
    if(!usuario.nome){
        return false;
    }

    if(!usuario.email){
        return false;
    }

    return true;
}

function salvar(usuario){
    banco.salvar(usuario);
}
~~~

---

👉 Espaço em branco separa ideias.

---

## 📐 Distância vertical

Elementos relacionados devem ficar próximos.

---

### ❌ Exemplo

~~~javascript
function calcularTotal(pedido){
    return pedido.itens.length;
}

// ... muitas linhas depois

let pedido = obterPedido();
~~~

---

👉 dificulta leitura

---

## 📊 Ordenação vertical

Funções devem seguir fluxo de leitura:

- funções mais importantes no topo
- detalhes abaixo

---

### 🧠 Exemplo

~~~javascript
function processarPedido(pedido){
    validarPedido(pedido);
    let total = calcularTotal(pedido);
    cobrarPagamento(total);
}

function validarPedido(pedido){
    // ...
}

function calcularTotal(pedido){
    // ...
}
~~~

---

👉 leitura de cima para baixo

---

## 📏 Formatação horizontal

---

### ✔️ Use espaços para clareza

---

### ❌ Exemplo

~~~javascript
let total=preco*quantidade;
~~~

---

### ✅ Melhor

~~~javascript
let total = preco * quantidade;
~~~

---

👉 espaços ajudam leitura

---

## ⚖️ Alinhamento horizontal

Evite alinhamentos exagerados.

---

### ❌ Exemplo

~~~javascript
let nome        = "João";
let idade       = 30;
let salario     = 5000;
~~~

---

### 🤯 Problema:

- difícil manter
- quebra fácil

---

### ✅ Melhor

~~~javascript
let nome = "João";
let idade = 30;
let salario = 5000;
~~~

---

## 📦 Indentação

Indentação mostra estrutura do código.

---

### ❌ Exemplo

~~~javascript
function verificar(lista){
for(let i=0;i<lista.length;i++){
if(lista[i].ativo){
console.log(lista[i]);
}
}
}
~~~

---

### ✅ Melhor

~~~javascript
function verificar(lista){
    for(let i = 0; i < lista.length; i++){
        if(lista[i].ativo){
            console.log(lista[i]);
        }
    }
}
~~~

---

## 🎓 Erros clássicos de alunos

---

### 1. Código “compactado”

~~~javascript
if(x>10){y=x+1;}
~~~

👉 difícil leitura

---

### 2. Falta de padrão

~~~javascript
function a(){
    let x=10;
  let y =20;
}
~~~

👉 inconsistência visual

---

### 3. Mistura de estilos

- espaços aleatórios
- indentação irregular
- quebra de linha inconsistente

---

## 🧠 Escopos pequenos

Funções curtas evitam:

- excesso de indentação
- complexidade visual
- perda de contexto

---

## 👥 Regra de equipe

> **Uma equipe deve seguir um padrão único de formatação.**

---

### 💡 Solução prática

- usar ESLint / Prettier
- definir padrão no projeto
- evitar discussões subjetivas

---

## 🧪 Exercícios

### Exercício 1

Refatore:

~~~javascript id="f1k8n3"
function f(a){let t=0;for(let i=0;i<a.length;i++){t+=a[i];}return t;}
~~~

---

### Exercício 2

Melhore a legibilidade:

~~~javascript id="q8p2mz"
function p(x){
if(x>10){
return true;
}else{
return false;
}}
~~~

---

### Exercício 3

Organize o código:

~~~javascript id="t9z4qx"
function salvar(u){
if(u.nome){
banco.salvar(u);
}}
function validar(u){
if(!u.nome){return false;}
return true;}
~~~

---

## 🚀 Conclusão

Formatação não é detalhe — é comunicação.

> **Código bem formatado reduz esforço mental e melhora produtividade.**

Pequenas melhorias visuais geram grande impacto na leitura.

---

## 📚 Próximo Capítulo

👉 Objetos e Estruturas de Dados — como organizar dados e comportamento corretamente