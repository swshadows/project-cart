# project-cart

> 💡 Projeto criado para desafio técnico

## Inicialização

<div align=center>

### Requisitos

[Node](https://nodejs.org/en/) | [MySQL](https://www.mysql.com)

</div>

- Use os comandos para clonar o repositório

  ```bash
    git clone https://github.com/swshadows/project-cart.git
    cd project-cart
  ```

- Backend
  - Acesse a pasta backend com `cd backend`
  - Instale as dependências com `npm install`
  - Criar arquivo `.env` com uma variável de ambiente `DATABASE_URL`=`"mysql://USER:PASSWORD@localhost:3306/project-cart"` substituindo USER e PASSWORD pelos respectivos usuário e senha do seu banco
  - Crie o banco de dados com `npm run db:migrate`
  - Inicialize o projeto com `npm start`
- Frontend
  - Acesse a pasta frontend com `cd frontend`
  - Instale as dependências com `npm install`
  - Inicialize o projeto com `npm run dev`
