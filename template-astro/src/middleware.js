
import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  
    // const { url } = context;
    context.locals.title = 'Nuevo title';
    // console.log("Middleware ejecutado en:", url.pathname); // ✅ para verificar en terminal


    //console.log("PASA por middleware");

    return next();
});

