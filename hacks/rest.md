# Endpoints e Operações

### 1. Listar todos os recursos

- **Endpoint:** `/{recurso}`
- **Método:** `GET`
- **Resposta:**
  ```json
  [
    { "id": 1, "atributo1": "valor1", "atributo2": "valor2" },
    { "id": 2, "atributo1": "valor1", "atributo2": "valor2" }
  ]
  ```

### 2. Obter um recurso específico

- **Endpoint:** `/{recurso}/{id}`
- **Método:** `GET`
- **Exemplo:** `/{recurso}/1`
- **Resposta:**
  ```json
  { "id": 1, "atributo1": "valor1", "atributo2": "valor2" }
  ```

### 3. Criar um novo recurso

- **Endpoint:** `/{recurso}`
- **Método:** `POST`
- **Corpo da Requisição:**
  ```json
  { "atributo1": "valor1", "atributo2": "valor2" }
  ```
- **Resposta:**
  ```json
  { "id": 3, "atributo1": "valor1", "atributo2": "valor2" }
  ```

### 4. Atualizar um recurso existente

- **Endpoint:** `/{recurso}/{id}`
- **Método:** `PUT`
- **Exemplo:** `/{recurso}/1`
- **Corpo da Requisição:**
  ```json
  { "atributo1": "valor1", "atributo2": "valor2" }
  ```
- **Resposta:**
  ```json
  { "id": 1, "atributo1": "valor1", "atributo2": "valor2" }
  ```

### 5. Deletar um recurso

- **Endpoint:** `/{recurso}/{id}`
- **Método:** `DELETE`
- **Exemplo:** `/{recurso}/1`
- **Resposta:** `204 No Content`

## Resumo dos Métodos HTTP

- **GET**: Recuperar dados (ex.: listar recursos, obter detalhes de um recurso específico).
- **POST**: Criar novos dados (ex.: adicionar um novo recurso).
- **PUT**: Atualizar dados existentes (ex.: modificar um recurso).
- **DELETE**: Deletar dados (ex.: remover um recurso).
