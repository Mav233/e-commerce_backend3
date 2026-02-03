import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Backend 3 API",
            version: "1.0.0",
            description: "Documentación API - Proyecto Backend 3"
        }
    },
    apis: ["./src/docs/*.yaml"]
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerSetup = (app) => {
    app.use(
        "/api/docs",
        swaggerUi.serve,
        swaggerUi.setup(swaggerSpec)
    );
};