# Configurações

## Vim

**[Vundle](https://github.com/VundleVim/Vundle.vim) para instalação de plugins**

> Para saber quais plugins estão sendo utilizados, veja o arquivo `.vimrc`, da linha `139` até a linha `169`. Se não quiser utilizar algum, só remover a linha =)

A instalação do Vundle é bem simples:

- Clone o repositório no diretório `~/.vim`:

```console
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
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
