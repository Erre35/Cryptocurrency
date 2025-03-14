# Cryptocurrency

Aplicación móvil para visualizar información detallada de criptomonedas en tiempo real.


## Tecnologías

- React Native
- TypeScript
- Arquitectura: Clean Architecture
- Enfoque/Metodología: Programación Orientada a Objetos (OOP)


## Versiones y herramientas

- React Native: 0.77.0
- React: 18.3.1
- Node.js: v22.13.1
- npm: 10.9.2
- Java: OpenJDK 17.0.14
- Android SDK y Android Studio (para ejecutar en Android)
- Xcode (solo en macOS para ejecutar en iOS)


## Configuración de entorno:

## macOS

- Luego de instalar java, configura las variables de entorno agragando las siguientes líneas al archivo ~/.zshrc o ~/.bashrc:

export JAVA_HOME=$(/usr/libexec/java_home -v 17)

export ANDROID_HOME=$HOME/Library/Android/sdk

export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$PATH


- Aplica los cambios:

source ~/.zshrc

## Windows

- Luego de instalar java, configura las variables de entorno en el Panel de Control > Sistema > Configuración Avanzada del Sistema > Opciones avanzadas > Variables de Entorno:

JAVA_HOME: C:\Program Files\Eclipse Adoptium\jdk-17.x.x.x-hotspot

ANDROID_HOME: C:\Users\TU_USUARIO\AppData\Local\Android\sdk

- Buscar la variable Path, editar y agregar:

%ANDROID_HOME%\emulator

%ANDROID_HOME%\platform-tools

%ANDROID_HOME%\tools

%ANDROID_HOME%\tools\bin

## Linux

- Luego de instalar java, configura las variables de entorno agragando las siguientes líneas al ~/.bashrc o ~/.zshrc:

export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64

export ANDROID_HOME=$HOME/Android/Sdk

export PATH=$ANDROID_HOME/emulator:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$PATH

- Aplica los cambios:

source ~/.bashrc


## Cómo ejecutar la aplicación

## Paso 1. Clona el repositorio:

git clone https://github.com/Erre35/Cryptocurrency.git

## Paso2. Instala las dependencias:

npm install

## Paso3. Instala los pods de iOS (Si aplica):

cd ios

pod install

cd .. 

## Paso4. Inicia el servidor de desarrollo:

npm start

## Paso 5. Ejecuta la aplicación en Android:

npm run android

## Paso6. Ejecuta la aplicación en iOS:

npm run ios


## Plataformas: 

- iOS (Versión mínima de iOS): 15.1
- Android (Versión mínima de Android): API 24 (Android 7.0)


## Preview de la app:

| iOS | Android |
|---|---|
| <img src="./src/utils/assets/iOS.gif" alt="Funcionamiento en iOS" width="300"> | <img src="./src/utils/assets/Android.gif" alt="Funcionamiento en Android" width="300"> |


