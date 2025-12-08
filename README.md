# Nexus Studium

O Nexus Studium é uma plataforma de e-learning que oferece uma experiência de aprendizado interativa e completa. A plataforma permite que os usuários acessem **cursos, artigos, vídeos, exercícios** e participem de uma comunidade de aprendizado. O design modular e os componentes reutilizáveis facilitam a manutenção e a escalabilidade do projeto.

## Funcionalidades

  * **Dashboard Intuitivo:** Painel de controle para acompanhar o progresso dos cursos, metas diárias, tópicos estudados e exercícios recentes.
  * **Cursos e Trilhas:** Seção dedicada para cursos em andamento, próximos e finalizados.
  * **Artigos e Vídeos:** Conteúdo complementar para aprimorar o aprendizado.
  * **Comunidade:** Interaja com outros usuários e instrutores.
  * **Gamificação:** Acompanhe seu progresso com métricas e gráficos.
  * **Perfil de Usuário:** Gerencie suas informações e acompanhe seu desenvolvimento.

## Tecnologias Utilizadas

  * **Angular:** Framework principal para o desenvolvimento da aplicação.
  * **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
  * **Chart.js e ng2-charts:** Para a criação de gráficos e visualização de dados.
  * **RxJS:** Para programação reativa e gerenciamento de eventos.
  * **CSS com Variáveis:** Para um design consistente e de fácil manutenção.

## Começando

Para executar o projeto localmente, siga os passos abaixo.

### Pré-requisitos

  * Node.js (versão \>= 14.17)
  * Angular CLI (versão 20.3.3)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/standbytheboy/nexusstudiumrefatored.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd nexusstudiumrefatored
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Instale a CLI do Angular:
    ```bash
    npm install -g @angular/cli
    ```

### Servidor de Desenvolvimento

Execute o comando abaixo para iniciar o servidor de desenvolvimento:

```bash
ng serve
```

Acesse a aplicação em `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

## Scripts Disponíveis

  * `ng serve`: Inicia o servidor de desenvolvimento.
  * `ng build`: Compila o projeto. Os artefatos da compilação são armazenados no diretório `dist/`.
  * `ng test`: Executa os testes unitários via [Karma](https://karma-runner.github.io).
  * `ng watch`: Compila o projeto em modo de desenvolvimento e observa as alterações nos arquivos.

## Estrutura do Projeto

```
nexus/
├── src/
│   ├── app/
│   │   ├── layout/ (Header, Sidebar, etc.)
│   │   ├── pages/ (Dashboard, Your Contributions)
│   │   ├── shared/ (Componentes reutilizáveis)
│   │   ├── app.config.ts
│   │   ├── app.html
│   │   ├── app.routes.ts
│   │   └── app.ts
│   ├── public/ (Recursos estáticos)
│   ├── styles.css
│   └── main.ts
├── angular.json
├── package.json
└── ...
```

## Contribuindo

Contribuições são bem-vindas\! Se você tiver alguma ideia, sugestão ou encontrar algum problema, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

---
