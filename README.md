# Nexus Studium

O **Nexus Studium** é uma plataforma de e-learning moderna e responsiva, desenvolvida para oferecer uma experiência imersiva em ensino à distância, com foco em Design e Programação. A aplicação foi construída utilizando as versões mais recentes do Angular, empregando uma arquitetura modular baseada em componentes reutilizáveis.

## 🚀 Funcionalidades

A plataforma está dividida em diversos módulos funcionais:

* **Dashboard Interativo:**
    * Visão geral de **Cursos em Progresso** com barras de progresso.
    * **Metas Diárias** e **Tópicos Estudados** para acompanhamento de produtividade.
    * Lista de **Instrutores Seguidos** e **Exercícios Recentes**.
* **Área de Cursos e Player:**
    * **Catálogo de Cursos:** Paginação de vídeos e carrossel de cursos populares.
    * **Player de Vídeo:** Interface detalhada com vídeo em destaque, abas de informações (Visão Geral, Recursos, Avaliações) e **Trilha do Curso** (estrutura de módulos em accordion).
* **Conteúdo Complementar:**
    * Páginas dedicadas para **Artigos**, **Exercícios** e **Comunidade**.
    * Seções de destaque ("Main Section") para o conteúdo mais relevante do dia.
* **Painel do Usuário (Minhas Contribuições):**
    * Métricas de engajamento visualizadas com **Gráficos (Chart.js)**.
    * Histórico de vídeos assistidos e comentários recebidos.
* **Configurações:**
    * Barra lateral de configurações dedicada e gestão de perfil.

## 🛠 Tecnologias Utilizadas

* **Framework:** [Angular v20](https://angular.dev/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** CSS3 Moderno (CSS Variables, Flexbox, Grid Layout)
* **Gráficos:** [Chart.js](https://www.chartjs.org/) com [ng2-charts](https://valor-software.com/ng2-charts/)
* **Ícones:** [Material Symbols](https://fonts.google.com/icons) e [Akar Icons](https://akaricons.com/)
* **Gerenciamento de Estado/Dados:** RxJS (Observables e Services)

## 📂 Estrutura do Projeto

A arquitetura do projeto segue as melhores práticas de separação de responsabilidades:

```text
src/
├── app/
│   ├── layout/           # Componentes estruturais globais (Header, Sidebar, Nav)
│   │   ├── header/
│   │   ├── navigation/
│   │   ├── sidebar/
│   │   ├── search-bar/
│   │   └── pagination/
│   ├── pages/            # Views principais (Rotas)
│   │   ├── dashboard/
│   │   ├── course/       # Página do player de curso
│   │   ├── courses/      # Catálogo de cursos
│   │   ├── articles/
│   │   ├── exercises/
│   │   ├── community/
│   │   ├── your-contributions/
│   │   └── settings/
│   ├── shared/           # Componentes reutilizáveis (UI Kit)
│   │   ├── card/         # Componente base de card
│   │   ├── course-card/
│   │   ├── metric-card/
│   │   ├── comparison-chart/
│   │   ├── trail/        # Lista de módulos do curso
│   │   └── ... (widgets como daily-goals, user-comment, etc.)
│   ├── services/         # Lógica de dados e API mock
│   └── models/           # Interfaces e Tipos (TypeScript)
└── styles.css            # Variáveis globais e reset CSS
````

## 🏁 Começando

Siga as instruções abaixo para rodar o projeto localmente.

### Pré-requisitos

  * **Node.js**: Versão 18 ou superior.
  * **Angular CLI**: Instalado globalmente (`npm install -g @angular/cli`).

### Instalação

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/standbytheboy/nexusstudiumrefatored.git](https://github.com/standbytheboy/nexusstudiumrefatored.git)
    ```
2.  Entre na pasta do projeto:
    ```bash
    cd nexusstudiumrefatored
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

### Executando a Aplicação

Para iniciar o servidor de desenvolvimento:

```bash
ng serve
```

Acesse `http://localhost:4200/` no seu navegador. A aplicação será recarregada automaticamente se você alterar qualquer arquivo de origem.

## 🧪 Testes

Para executar os testes unitários via [Karma](https://karma-runner.github.io):

```bash
ng test
```

## 🤝 Contribuindo

Contribuições são bem-vindas\! Sinta-se à vontade para abrir uma *issue* para relatar bugs ou enviar um *pull request* com melhorias.

-----
