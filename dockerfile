# Imagen base
FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Se copia el package.json y package-lock.json
COPY package*.json ./

# Instalacion dependencias
RUN npm install

# Copia del proyecto
COPY src ./src

# Puerto expuesto
EXPOSE 8080

# Comando de inicio
CMD ["npm", "start"]