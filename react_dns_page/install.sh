export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
if [ $? -eq 0 ]; then
        nvm install 16
        nvm use 16
        echo "Instalando el paquetes"
        npm install
        echo "Iniciando la aplicación"
        npm  start
    else
        echo "Error al instalar Node.js 16."
    fi
else
    echo "Error al instalar NVM."
fi
