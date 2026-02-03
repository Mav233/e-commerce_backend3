# 📦 Proyecto Final – Backend 3

## 🧠 Descripción general

Este proyecto corresponde a la **Pre-entrega y entrega final del curso Backend 3**, donde se implementan mejoras sobre una **API REST en Node.js**, incluyendo:

- **Mocking de datos**
- **Arquitectura por capas** (Repository → Service → Controller)
- **DTOs**
- **Documentación con Swagger**
- **Tests funcionales** (Mocha + Chai + Supertest)
- **Dockerización completa del proyecto**

La aplicación gestiona **usuarios**, **mascotas** y **adopciones**, conectándose a **MongoDB** y exponiendo endpoints documentados y testeados.


## 🚀 Tecnologías utilizadas

Node.js ✅
Express ✅
MongoDB + Mongoose ✅
Passport (JWT / Local) ✅
Swagger (OpenAPI) ✅
Mocha + Chai + Supertest ✅
Docker & Docker Compose ✅
dotenv ✅
bcrypt ✅

---

## 📁 Estructura del proyecto

src/
├── config/
│ ├── mongo.js
│ ├── passport.config.js
│ └── swagger.js
├── controllers/
│ └── adoption.controller.js 
├── dao/
├── dto/
│ ├── pet.dto.js 
│ └── adoption.dto.js 
├── middlewares/
├── models/
│ ├── user.model.js
│ ├── pet.model.js 
│ └── adoption.model.js 
├── repositories/
│ └── adoption.repository.js 
├── routes/
│ ├── users.router.js
│ ├── pets.router.js
│ ├── adoptions.router.js 
│ └── mocks.router.js 
├── services/
├── tests/
│ └── adoption.test.js  (3/3 PASSED)
├── utils/

├── server.js
└── app.js

---

## 🧪 Mocking de datos

### 📌 Router `/api/mocks`

Se creó el router `mocks.router.js` bajo la ruta base: **`/api/mocks`**

#### Endpoints disponibles:

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/mocks/mockingpets` | Genera mascotas mockeadas |
| `GET` | `/api/mocks/mockingusers` | Genera 50 usuarios mock |
| `POST` | `/api/mocks/generateData` | Inserta datos en MongoDB |

#### 🔹 **POST /api/mocks/generateData**
**📥 Body de ejemplo:**
```json
{
  "users": 10,
  "pets": 20
}
Verificar datos insertados:

GET /api/users
GET /api/pets

📄 Documentación con Swagger

Se documentó el módulo Users utilizando Swagger.

📍 Acceso: http://localhost:8080/api/docs

Incluye:

 Esquemas

Rutas

Métodos

Respuestas esperadas

🧪 Tests funcionales 100% PASSED
Tests completos para el router /api/adoptions:

  Adoption Router - Tests funcionales
    ✔ GET /api/adoptions → debe devolver un array (69ms)
    ✔ POST /api/adoptions/:uid/:pid → debe crear una adopción (209ms)
    ✔ GET /api/adoptions/:aid → debe obtener la adopción (105ms)

  3 passing (1s) 


# Frameworks utilizados: 

Mocha      
Chai       
Supertest  

Ejecutar tests:

bash
npx mocha tests/adoption.test.js

# 🐳 Dockerización del proyecto

Dockerizado utilizando:

Dockerfile
docker-compose.yml


🔹 Servicios incluidos:



Backend (Node.js) 
MongoDB

📦 Imagen publicada en Docker Hub

Disponible públicamente:
👉 (https://hub.docker.com/repository/docker/maick23/proyecto_final_backend_3)


Descargar imagen:

bash

docker pull maick23/proyecto_final_backend_3:latest

▶️ Levantar el proyecto con Docker:

bash

docker compose up --build

🌐 Disponible en: http://localhost:8080

⚙️ Variables de entorno
Archivo .env requerido - ejemplo:

PORT=8080
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret

