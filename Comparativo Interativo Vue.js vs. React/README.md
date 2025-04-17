# 📊 Comparação entre Vue.js e React - Contador Interativo

Este projeto tem como objetivo comparar **Vue.js** e **React** em termos de:

- Sintaxe
- Estrutura de código
- Facilidade de uso

Para isso, foram criadas duas páginas HTML simples, cada uma implementando a mesma funcionalidade com um dos frameworks.

---

## 🔧 Funcionalidade implementada

As duas versões apresentam:

- Um **contador** com botões de incrementar, decrementar e zerar.
- Um **campo de texto** que permite alterar o título da página dinamicamente.
- Um **contador automático** que incrementa a cada segundo.
- Um campo para **adicionar notas**, exibidas em uma lista, com opção de remoção.
- Cores diferentes no valor do contador dependendo se for positivo, negativo ou zero.
- Exibição do **dobro** do valor do contador.

---

## 🧠 O que comparar

| Aspecto             | Vue.js                              | React                                   |
|---------------------|--------------------------------------|------------------------------------------|
| **Sintaxe reativa** | `v-model`, `@click`, `:class`        | `useState`, `onClick`, `className`       |
| **Estrutura**       | Separação em `data`, `methods`, etc. | Tudo dentro da função do componente com hooks |
| **Lógica reativa**  | `computed`                           | Variáveis derivadas                      |
| **Ciclo de vida**   | `mounted()`                          | `useEffect()`                            |
| **Curva de aprendizado** | Geralmente mais acessível       | Requer bom conhecimento de JS moderno    |

---

## 📁 Como usar

1. Clone ou baixe este repositório.
2. Abra os arquivos `vue-interativo.html` e `react-interativo.html` no navegador.
   - 💡 Dica: use a extensão **Live Server** no VS Code para facilitar.
3. Compare o comportamento visual e, principalmente, o código de cada versão.

---

## ✅ Conclusão

A comparação prática ajuda a visualizar como **os frameworks resolvem os mesmos problemas de formas diferentes**, destacando vantagens e estilos distintos de desenvolvimento.

Este projeto é ideal para quem está começando com frameworks JavaScript e quer entender as diferenças entre Vue.js e React de forma leve e prática.
