## 1. `map`

A função `map` cria um novo array com os resultados da chamada de uma função fornecida em cada elemento do array original.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8]
```

## 2. `filter`

A função `filter` cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

```javascript
const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

## 3. `find`

A função `find` retorna o valor do primeiro elemento no array que satisfaz a função de teste fornecida. Caso contrário, `undefined` é retornado.

```javascript
const numbers = [1, 2, 3, 4];
const found = numbers.find((number) => number > 2);
console.log(found); // 3
```

## 4. `reduce`

A função `reduce` aplica uma função a um acumulador e a cada valor do array (da esquerda para a direita) para reduzi-lo a um único valor.

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // 10
```

## 5. `forEach`

A função `forEach` executa uma função fornecida uma vez para cada elemento do array.

```javascript
const numbers = [1, 2, 3, 4];
numbers.forEach((number) => console.log(number * 2));
// Saída:
// 2
// 4
// 6
// 8
```

## 6. `some`

A função `some` testa se ao menos um dos elementos no array passa no teste implementado pela função fornecida. Retorna um valor booleano.

```javascript
const numbers = [1, 2, 3, 4];
const hasEvenNumber = numbers.some((number) => number % 2 === 0);
console.log(hasEvenNumber); // true
```

## 7. `every`

A função `every` testa se todos os elementos no array passam no teste implementado pela função fornecida. Retorna um valor booleano.

```javascript
const numbers = [1, 2, 3, 4];
const allEven = numbers.every((number) => number % 2 === 0);
console.log(allEven); // false
```

## 8. `concat`

A função `concat` é usada para mesclar dois ou mais arrays. Este método não altera os arrays existentes, mas retorna um novo array.

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2);
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]
```

## 9. `slice`

A função `slice` retorna uma cópia rasa de uma parte do array dentro de um novo array, começando pelo início até o fim (não incluindo o fim) onde início e fim representam o índice de itens no array.

```javascript
const numbers = [1, 2, 3, 4, 5];
const slicedArray = numbers.slice(1, 4);
console.log(slicedArray); // [2, 3, 4]
```

## 10. `splice`

A função `splice` altera o conteúdo de um array removendo elementos existentes e/ou adicionando novos elementos.

```javascript
const numbers = [1, 2, 3, 4, 5];
const removedElements = numbers.splice(2, 1, 99);
console.log(numbers); // [1, 2, 99, 4, 5]
console.log(removedElements); // [3]
```

## 11. `push`

A função `push` adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.

```javascript
const numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]
```

## 12. `pop`

A função `pop` remove o último elemento de um array e o retorna. Este método altera o comprimento do array.

```javascript
const numbers = [1, 2, 3, 4];
const lastElement = numbers.pop();
console.log(numbers); // [1, 2, 3]
console.log(lastElement); // 4
```

## 13. `shift`

A função `shift` remove o primeiro elemento de um array e o retorna. Este método altera o comprimento do array.

```javascript
const numbers = [1, 2, 3, 4];
const firstElement = numbers.shift();
console.log(numbers); // [2, 3, 4]
console.log(firstElement); // 1
```

## 14. `unshift`

A função `unshift` adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.

```javascript
const numbers = [2, 3, 4];
numbers.unshift(1);
console.log(numbers); // [1, 2, 3, 4]
```

## 15. `delete`

O operador `delete` remove um elemento de um array, mas não altera o comprimento do array. Isso resulta em um índice "vazio".

```javascript
const numbers = [1, 2, 3, 4];
delete numbers[2];
console.log(numbers); // [1, 2, empty, 4]
```

## 16. Acessar Elementos (Get)

Você pode acessar elementos de um array usando a notação de colchetes `[]` com o índice do elemento.

```javascript
const numbers = [1, 2, 3, 4];
const firstElement = numbers[0];
const thirdElement = numbers[2];
console.log(firstElement); // 1
console.log(thirdElement); // 3
```

## 17. `length`

A propriedade `length` retorna ou define o número de elementos em um array.

```javascript
const numbers = [1, 2, 3, 4];
console.log(numbers.length); // 4

numbers.length = 2;
console.log(numbers); // [1, 2]
```

## 18. `indexOf`

A função `indexOf` retorna o primeiro índice em que um determinado elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente.

```javascript
const numbers = [1, 2, 3, 4];
const index = numbers.indexOf(3);
console.log(index); // 2
```

## 19. `includes`

A função `includes` determina se um array contém um determinado elemento, retornando `true` ou `false` conforme apropriado.

```javascript
const numbers = [1, 2, 3, 4];
const hasThree = numbers.includes(3);
console.log(hasThree); // true
```

## 20. `join`

A função `join` junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.

```javascript
const numbers = [1, 2, 3, 4];
const joinedString = numbers.join("-");
console.log(joinedString); // "1-2-3-4"
```
