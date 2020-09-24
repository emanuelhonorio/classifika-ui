# Classifika UI

**Classifika** é uma aplicação de classificados Web similar ao "olx", nela você pode anunciar produtos, serviços, empregos, etc... Você pode pesquisar um anúncio facilmente, com filtros de categoria e estado.
Com uma interface elegante, construída com tecnologia inovadora que te possibilita fazer uploads de fotos para você conseguir demonstrar o seu produto em alta definição.

## Live Demo

Link : "LINK"

## Back-end Repository

Link: "LINK"

## Project Structure

```
📦src
 ┣ 📂app
 ┃ ┣ 📂core
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┃ ┣ 📜footer.component.html
 ┃ ┃ ┃ ┃ ┣ 📜footer.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜footer.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜footer.component.ts
 ┃ ┃ ┃ ┣ 📂loading-screen
 ┃ ┃ ┃ ┃ ┣ 📜loading-screen.component.html
 ┃ ┃ ┃ ┃ ┣ 📜loading-screen.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜loading-screen.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜loading-screen.component.ts
 ┃ ┃ ┃ ┗ 📂navbar
 ┃ ┃ ┃ ┃ ┣ 📜navbar.component.html
 ┃ ┃ ┃ ┃ ┣ 📜navbar.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜navbar.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜navbar.component.ts
 ┃ ┃ ┣ 📂guards
 ┃ ┃ ┃ ┣ 📜auth.guard.spec.ts
 ┃ ┃ ┃ ┗ 📜auth.guard.ts
 ┃ ┃ ┣ 📂interceptors
 ┃ ┃ ┃ ┗ 📜auth.interceptor.ts
 ┃ ┃ ┣ 📂models
 ┃ ┃ ┃ ┗ 📜classifika-models.ts
 ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┣ 📜api.service.spec.ts
 ┃ ┃ ┃ ┣ 📜api.service.ts
 ┃ ┃ ┃ ┣ 📜loading-screen.service.spec.ts
 ┃ ┃ ┃ ┗ 📜loading-screen.service.ts
 ┃ ┃ ┗ 📜core.module.ts
 ┃ ┣ 📂modules
 ┃ ┃ ┣ 📂account
 ┃ ┃ ┃ ┣ 📂login-page
 ┃ ┃ ┃ ┃ ┣ 📜login-page.component.html
 ┃ ┃ ┃ ┃ ┣ 📜login-page.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜login-page.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜login-page.component.ts
 ┃ ┃ ┃ ┣ 📂minha-conta-page
 ┃ ┃ ┃ ┃ ┣ 📜minha-conta-page.component.html
 ┃ ┃ ┃ ┃ ┣ 📜minha-conta-page.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜minha-conta-page.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜minha-conta-page.component.ts
 ┃ ┃ ┃ ┣ 📂register-page
 ┃ ┃ ┃ ┃ ┣ 📜register-page.component.html
 ┃ ┃ ┃ ┃ ┣ 📜register-page.component.scss
 ┃ ┃ ┃ ┃ ┣ 📜register-page.component.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜register-page.component.ts
 ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┃ ┗ 📜account.service.ts
 ┃ ┃ ┃ ┗ 📜account.module.ts
 ┃ ┃ ┣ 📂anuncio
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📂anuncio-form
 ┃ ┃ ┃ ┃ ┃ ┣ 📜anuncio-form.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜anuncio-form.component.scss
 ┃ ┃ ┃ ┃ ┃ ┗ 📜anuncio-form.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂anuncio-grid
 ┃ ┃ ┃ ┃ ┃ ┣ 📜anuncio-grid.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜anuncio-grid.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜anuncio-grid.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜anuncio-grid.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂meu-anuncio
 ┃ ┃ ┃ ┃ ┃ ┣ 📜meu-anuncio.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜meu-anuncio.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜meu-anuncio.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜meu-anuncio.component.ts
 ┃ ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┃ ┣ 📂anuncio-detalhes-page
 ┃ ┃ ┃ ┃ ┃ ┣ 📜anuncio-detalhes-page.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜anuncio-detalhes-page.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜anuncio-detalhes-page.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜anuncio-detalhes-page.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂anuncios-page
 ┃ ┃ ┃ ┃ ┃ ┣ 📜anuncios-page.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜anuncios-page.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜anuncios-page.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜anuncios-page.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂atualizar-anuncio-page
 ┃ ┃ ┃ ┃ ┃ ┣ 📜atualizar-anuncio-page.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜atualizar-anuncio-page.component.scss
 ┃ ┃ ┃ ┃ ┃ ┗ 📜atualizar-anuncio-page.component.ts
 ┃ ┃ ┃ ┃ ┣ 📂meus-anuncios-page
 ┃ ┃ ┃ ┃ ┃ ┣ 📜meus-anuncios-page.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜meus-anuncios-page.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜meus-anuncios-page.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜meus-anuncios-page.component.ts
 ┃ ┃ ┃ ┃ ┗ 📂publicar-anuncio-page
 ┃ ┃ ┃ ┃ ┃ ┣ 📜publicar-anuncio-page.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜publicar-anuncio-page.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜publicar-anuncio-page.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜publicar-anuncio-page.component.ts
 ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┃ ┣ 📜anuncio.service.spec.ts
 ┃ ┃ ┃ ┃ ┗ 📜anuncio.service.ts
 ┃ ┃ ┃ ┗ 📜anuncio.module.ts
 ┃ ┃ ┣ 📂categoria
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┗ 📂categorias-list
 ┃ ┃ ┃ ┃ ┃ ┣ 📜categorias-list.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜categorias-list.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜categorias-list.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜categorias-list.component.ts
 ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┃ ┗ 📜categoria.service.ts
 ┃ ┃ ┃ ┗ 📜categoria.module.ts
 ┃ ┃ ┗ 📂localizacao
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┗ 📂localizacao-choose-list
 ┃ ┃ ┃ ┃ ┃ ┣ 📜localizacao-choose-list.component.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜localizacao-choose-list.component.scss
 ┃ ┃ ┃ ┃ ┃ ┣ 📜localizacao-choose-list.component.spec.ts
 ┃ ┃ ┃ ┃ ┃ ┗ 📜localizacao-choose-list.component.ts
 ┃ ┃ ┃ ┣ 📂services
 ┃ ┃ ┃ ┃ ┗ 📜localizacao.service.ts
 ┃ ┃ ┃ ┗ 📜localizacao.module.ts
 ┃ ┣ 📜app-routing.module.ts
 ┃ ┣ 📜app.component.html
 ┃ ┣ 📜app.component.scss
 ┃ ┣ 📜app.component.spec.ts
 ┃ ┣ 📜app.component.ts
 ┃ ┗ 📜app.module.ts
 ┣ 📂assets
 ┃ ┣ 📜.gitkeep
 ┃ ┗ 📜logo.jpeg
 ┣ 📂environments
 ┃ ┣ 📜environment.prod.ts
 ┃ ┗ 📜environment.ts
 ┣ 📜favicon.ico
 ┣ 📜index.html
 ┣ 📜karma.conf.js
 ┣ 📜main.ts
 ┣ 📜polyfills.ts
 ┣ 📜styles-app-loading.scss
 ┣ 📜styles.scss
 ┣ 📜test.ts
 ┣ 📜tsconfig.app.json
 ┣ 📜tsconfig.spec.json
 ┗ 📜tslint.json
```
