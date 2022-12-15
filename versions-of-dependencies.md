# Versões das dependências

As ferramentas de frontend atuais têm uma atualização bastante constante, e isso é muito bom!
Mas ao tentar executar algum código de alguns meses atrás, usando dependências atuais, o seu
código tem uma grande probabilidade de quebrar. E infelizmente isso acontece com os exemplos mostrados no curso.

Para que tudo funcione corretamente, é importante que você instale as versões corretas das dependências
que estamos usando no momento em que o curso foi gravado. Com o decorrer do curso, vamos atualizando, sempre que
possível, todas as dependências utilizadas.

Esse arquivo servirá como base para que você saiba todas as versões das dependências instaladas em cada aula.
Instale as dependências conforme mostrado abaixo.

Se alguma dependência utilizada em aula não estiver listada aqui, significa que você pode instalar exatamente como mostrado na aula.

Qualquer dúvida, abra uma issue aqui no repositório =)

## Versão do Node.js

De preferência, use a versão LTS mais recente.

## Módulo React + Webpack

### Vídeo 2

webpack:

```
npm install --save-dev webpack@1
```

Instale também o `webpack` de forma global, para usar o comando `webpack` no seu terminal:

```
npm install -g webpack@1
```

### Vídeo 3

webpack-dev-server:

```
npm install --save-dev webpack-dev-server@1
```

Instale também o `webpack-dev-server` de forma global, para usar o comando `webpack-dev-server` no seu terminal:

```
npm install -g webpack-dev-server@1
```

### Vídeo 5

react e react-dom:

```
npm install --save react@15.4 react-dom@15.4
```

### Vídeo 6

dependências do babel:

```
npm install --save-dev babel-core@6 babel-loader@6 babel-preset-es2015@6 babel-preset-stage-0@6
```

### Vídeo 7

babel-preset-react:

```
npm install --save-dev babel-preset-react@6
```

### Vídeo 8

react-hot-loader

```
npm install --save-dev react-hot-loader@3.0.0-beta.2
```

### Vídeo 10

standard e standard-loader:

```
npm install --save-dev standard@16 standard-loader@4
```

## Módulo 2

### M2#A04

Instalação do `jest-cli`:

```
npm install --save-dev jest-cli@21
```

### M2#A07

Instalação do `babel-core` e `babel-jest`:

```
npm install --save-dev babel-core@6 babel-jest@21
```

Comando completo (com todas as dependências dessa parte):

```
npm install --save-dev babel-core@6 babel-jest@21 babel-preset-es2015 babel-preset-stage-0
```

**Obs:** Se você estiver tendo algum erro relacionado ao "Handlebars", crie um
arquivo chamado `jest.config.js` na raiz do seu projeto com o conteúdo:

```js
module.exports = {
  coverageReporters: ['json', 'lcovonly', 'text', 'clover']
}
```

### M2#A30 e M3#A43

Instalação do `getstorybook` global:

```
npm i -g getstorybook@1.6.1
```

### M2#A31

```
npm install --save-dev raw-loader@0.5.1 style-loader@0.13.1
```

### M2#A32

Instalação do `html-webpack-plugin`:

```
npm install --save-dev html-webpack-plugin@2
```

### M2#A33

Instalação do `extract-text-webpack-plugin`:

```
npm install --save-dev extract-text-webpack-plugin@1.0.1
```

### M2#A34

Instalação do `css-loader`:

```
npm i --save-dev css-loader@0
```

### M2#A51

Instalação do `gulp`:

```
npm i --save-dev gulp@3.9.1
```

### M2#A78

Instalação do `clean-webpack-plugin`:

```
npm i --save-dev clean-webpack-plugin@0.1.16
```

### M2#A100

Se no momento do build der algum erro, pode ser por causa do `extract-text-webpack-plugin`. Nesse caso, só instale a v2:

```
npm i --save-dev extract-text-webpack-plugin@2
```
