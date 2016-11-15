# Configurações

## Vim

**[Vundle](https://github.com/VundleVim/Vundle.vim) para instalação de plugins**

> Para saber quais plugins estão sendo utilizados, veja o arquivo `.vimrc`, da linha `139` até a linha `169`. Se não quiser utilizar algum, só remover a linha =)

A instalação do Vundle é bem simples:

- Clone o repositório no diretório `~/.vim`:

```console
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/plugins/Vundle.vim
```

- Copie o arquivo [`.vimrc`](https://github.com/da2k/curso-reactjs-ninja/blob/master/config/.vimrc) para o seu diretório`home` (~);
- Execute `vim +PluginInstall +qall` para instalar os plugins e pronto!

> O .vimrc que estou utilizando é o mesmo [desse repositório](https://github.com/alrra/dotfiles/blob/master/src/vim/vimrc), com algumas modificações.

## Terminal

- Para o terminal, estou usando o [**Terminator**](http://gnometerminator.blogspot.com.br/p/introduction.html);
- O arquivo de configuração do **Terminator** é o `terminator-config`, que deve ser renomeado e copiado para `~/.config/terminator/config`.
- O shell é o [ZSH](http://www.zsh.org/) com [`oh-my-zsh`](https://github.com/robbyrussell/oh-my-zsh);
- O tema é [este](https://github.com/fdaciuk/avit-da2k).
- A fonte é a [**Consolas**](http://www.fontpalace.com/font-download/Consolas/), tamanho `13` para os videos e `11` para uso pessoal.
- O arquivo de configuração do `zsh`, você pode [ver aqui](https://github.com/da2k/curso-reactjs-ninja/blob/master/config/.zshrc).

**UPDATE:** Fiz algumas pequenas modificações no uso do terminal, a partir da aula #40 do módulo #02:
- Ao invés do Terminator, estou usando o terminal default do Ubuntu 16.04;
- Agora estou usando o `tmux`, com o [Byobu](http://byobu.co/) - Vou gravar um vídeo falando sobre ele e colo o link aqui =)

### .zshrc

Só estou utilizando dois plugins no ZSH: git e wakatime. O git já vem instalado por padrão. Para o wakatime, basta seguir [essas instruções](https://github.com/wbinglee/zsh-wakatime).

No `.zshrc` tem algumas configurações também para o [heroku toolbelt](https://toolbelt.heroku.com/), [NVM](https://github.com/creationix/nvm) e [autojump](https://github.com/wting/autojump).

## Lint

Vamos utilizar o [`standard`](https://github.com/feross/standard).

Se você prefere utlizar `;`, mas quer utilizar os padrões do `standard`, pode usar o [`semi-standard`](https://github.com/Flet/semistandard).
