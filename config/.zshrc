# Path to your oh-my-zsh installation.
  export ZSH=/home/fernando/.oh-my-zsh

# Set name of the theme to load.
# Look in ~/.oh-my-zsh/themes/
# Optionally, if you set this to "random", it'll load a random theme each
# time that oh-my-zsh is loaded.
ZSH_THEME="avit-da2k"

# Uncomment the following line to display red dots whilst waiting for completion.
COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
DISABLE_UNTRACKED_FILES_DIRTY="true"

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git zsh-wakatime)

# User configuration

  export PATH="/home/fernando/.nvm/versions/node/v5.11.1/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin"
# export MANPATH="/usr/local/man:$MANPATH"

### PERSONAL CONFIGURATIONS
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm

# PATH
export PATH="$NVMDIR:$PATH"
export PATH="/usr/local/heroku/bin:$PATH"
export PATH="node_modules/.bin:$PATH"

# NodeJS
export NODE_ENV='development'

# Autojump
. /usr/share/autojump/autojump.sh

export PROMPT_COMMAND=$PROMPT_COMMAND"; history -a; history -n;"

function pyserver () {
  python -m SimpleHTTPServer 9001
}

function t () {
  npm test
}

function swap () {
  case "$1" in
    "on")
      sudo swapon -a ;;
    "off")
      sudo swapoff -a ;;
  esac
}

# Dar push na branch atual
function push () {
  git push origin $(git branch | grep \* | sed 's/\*\s//')
}

#Ligar/Desligar microfone no headphone
function mic () {
  case "$1" in
    "on")
      pactl load-module module-loopback latency_msec=1 ;;
    "off")
      pactl unload-module module-loopback ;;
  esac
}

### /END PERSONAL CONFIGURATIONS

source $ZSH/oh-my-zsh.sh
