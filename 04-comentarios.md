# 💬 Capítulo 4 — Comentários

## 🎯 Objetivo da Aula

Entender quando comentários são úteis e, principalmente, quando eles são um sinal de código ruim.

---

## 🧠 Regra Principal

> **O melhor comentário é aquele que você não precisa escrever.**

---

## 💡 Comentários não compensam código ruim

Muitos desenvolvedores usam comentários para explicar código confuso.

👉 Isso é um erro.

---

### ❌ Exemplo

~~~javascript
// soma dois números
function f(a, b){
    return a + b;
}
~~~

👉 Comentário desnecessário — o código já explica.

---

### ❌ Exemplo pior

~~~javascript
// função que calcula o valor total do pedido com desconto de 10% se for maior que 100
function calc(p){
    let t = 0;

    for(let i = 0; i < p.i.length; i++){
        t += p.i[i].p * p.i[i].q;
    }

    if(t > 100){
        t = t * 0.9;
    }

    return t;
}
~~~

👉 O comentário está fazendo o trabalho que o código deveria fazer.

---

## ✅ Refatoração

~~~javascript
function calcularTotal(pedido){
    let total = pedido.itens.reduce((soma, item) => {
        return soma + item.preco * item.quantidade;
    }, 0);

    if(total > 100){
        total = total * 0.9;
    }

    return total;
}
~~~

👉 Agora o código é autoexplicativo — comentário não é necessário.

---

## 🧠 Regra prática

> **Se você sente vontade de escrever um comentário, tente melhorar o código primeiro.**

---

## 👍 Bons comentários

Comentários são úteis quando:

### ✔️ 1. Explicam intenção (e não o óbvio)

~~~javascript
// regra de negócio: clientes VIP têm desconto fixo de 20%
if(cliente.vip){
    aplicarDesconto(cliente);
}
~~~

---

### ✔️ 2. Alertam sobre consequências

~~~javascript
// cuidado: esta operação pode afetar performance em grandes volumes
processarDadosEmLote(dados);
~~~

---

### ✔️ 3. Explicam decisões não óbvias

~~~javascript
// usamos cache aqui para evitar múltiplas chamadas à API externa
let dados = cache.buscar() || api.buscar();
~~~

---

### ✔️ 4. TODO (quando usado corretamente)

~~~javascript
// TODO: otimizar algoritmo para grande volume de dados
~~~

👉 Deve ser temporário — não permanente.

---

## 🚨 Comentários ruins

---

### ❌ 1. Comentários redundantes

~~~javascript
// incrementa i
i++;
~~~

---

### ❌ 2. Comentários desatualizados

~~~javascript
// soma valores
function subtrair(a, b){
    return a - b;
}
~~~

👉 Comentário virou mentira.

---

### ❌ 3. Comentários que explicam código ruim

~~~javascript
// verifica se usuário está ativo
if(u.a == 1){
~~~

👉 O problema não é a falta de comentário — é o nome ruim.

---

### ❌ Melhor solução

~~~javascript
if(usuario.ativo){
~~~

---

## 🎓 Erros clássicos de alunos

---

### 1. Comentar tudo

~~~javascript
// cria variável
let x = 10;

// loop
for(let i = 0; i < 10; i++){
~~~

👉 Isso não agrega valor.

---

### 2. Usar comentário como “muleta”

~~~javascript
// aqui acontece uma lógica complexa
function f(x){
    // ...
}
~~~

👉 Se é complexo, deve ser refatorado.

---

### 3. Comentários narrativos

~~~javascript
// agora vamos pegar os dados
// depois vamos validar
// depois vamos salvar
~~~

👉 O código deve contar essa história — não o comentário.

---

## 🧩 Substituindo comentários por código

---

### ❌ Antes

~~~javascript
// verifica se o usuário pode acessar
if(u.p == 'A' && u.s == true){
~~~

---

### ✅ Depois

~~~javascript
function usuarioPodeAcessar(usuario){
    return usuario.perfil === 'ADMIN' && usuario.ativo;
}
~~~

---

👉 O nome da função substitui o comentário.

---

## 🧠 Código como documentação

Código bem escrito:

- elimina comentários desnecessários
- reduz ambiguidade
- facilita leitura

---

## ⚠️ Comentários longos

Se um comentário é muito grande, pode indicar:

- código complexo demais
- necessidade de refatoração
- falta de abstração

---

## 🚫 Comentários “mortos” (código comentado)

---

### ❌ Exemplo

~~~javascript
// let total = calcularTotalAntigo(pedido);
let total = calcularTotalNovo(pedido);
~~~

👉 Isso deveria ser removido.

👉 Versionamento (Git) já guarda histórico.

---

## ⚠️ Comentários em HTML (ou logs visuais)

~~~javascript
// <div>...</div>
~~~

👉 Polui o código e não deveria estar ali.

---

## 🧪 Exercícios

### Exercício 1

Refatore removendo comentários desnecessários:

~~~javascript id="3gk8q1"
function calc(a, b){
    // soma os valores
    return a + b;
}
~~~

---

### Exercício 2

Substitua comentário por código melhor:

~~~javascript id="z1p8mv"
// verifica se o cliente pode comprar
if(c.t == 1 && c.s == true){
~~~

---

### Exercício 3

Melhore o código eliminando necessidade de comentário:

~~~javascript id="v7m2kx"
// calcula total do pedido
function f(p){
    let t = 0;
    for(let i = 0; i < p.i.length; i++){
        t += p.i[i].p * p.i[i].q;
    }
    return t;
}
~~~

---

## 🚀 Conclusão

Comentários não são solução para código ruim.

> **Código limpo reduz a necessidade de comentários.**

Use comentários com responsabilidade:
- para explicar intenção
- para alertar
- para registrar decisões

Evite:
- redundância
- desatualização
- “explicar o óbvio”

---

## 📚 Próximo Capítulo

👉 Formatação — como organizar visualmente o código para melhorar leitura