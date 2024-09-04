# Desafio LuizaLabs

Este projeto foi desenvolvido para o desafio da empresa LuizaLabs. A documentação dos requisitos do desafio está dentro das releases do repositório.

## Requisitos para rodar o projeto

- Node.js v20.16.0 ou superior;
- Gerenciador de pacotes Pnpm v9.7.0 ou superior;
- Inserir as seguintes variáveis de ambiente em um arquivo `.env.local` na raiz do projeto:

  ```
  VITE_PUBLIC_KEY='***********************'
  VITE_PRIVATE_KEY='***********************'
  VITE_MARVEL_API='http://gateway.marvel.com/v1/public'
  ```

  **IMPORTANTE:** O valor das variáveis `VITE_PUBLIC_KEY` e `VITE_PRIVATE_KEY` devem ser obtidos no [site da Marvel Developer](https://developer.marvel.com). No site, clique em 'Get a Key' e crie uma conta, caso ainda não possua uma. Após isso, suas chaves estarão disponíveis na aba "My Developer Account" com os nomes "Your public key" e "Your private key". O valor da chave "Your public key" deve ser inserido na variável `VITE_PUBLIC_KEY` e o valor da chave "Your private key" deve ser inserido na variável `VITE_PRIVATE_KEY`.

## Configuração do Front-end

O Front-end foi desenvolvido utilizando Vite, React e TypeScript, além de outras bibliotecas listadas no `package.json`. Para configurar o Front-end, siga os passos abaixo:

- Instale as dependências necessárias executando o seguinte comando no diretório raiz do projeto:

  ```
  pnpm install
  ```

- Inicie o projeto executando o comando:

  ```
  pnpm run dev
  ```

Agora, para acessar a aplicação, basta abrir o endereço `http://localhost:3000` no seu navegador.
