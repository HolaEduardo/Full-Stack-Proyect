export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
if [ $? -eq 0 ]; then
        nvm install 18
        nvm use 18
        echo "Instalando el paquetes"
        npm install -g @angular/cli
        npm install
        ng serve -o
    else
        echo "Error al instalar Node.js 18."
    fi
else
    echo "Error al instalar NVM."
fi
