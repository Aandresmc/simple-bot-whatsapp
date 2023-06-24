import bot from "@bot-whatsapp/bot";

const { addKeyword } = bot;

const flowJokes = addKeyword(["chiste", "meme"])
  // .addAnswer(["Hola, bienvenido a mi tienda", "¿Como puedo ayudarte?"])
  // .addAnswer(["Tengo:", "Zapatos", "Bolsos", "etc ..."])
  .addAnswer("Este mensaje envia tres botones", {
    buttons: [{ body: "Boton 1" }, { body: "Boton 2" }, { body: "Boton 3" }],
  })
  .addAnswer(
    ["También necesito tus dos apellidos"],
    { capture: true, buttons: [{ body: "❌ Cancelar solicitud" }] }

    // async (ctx, { flowDynamic, endFlow }) => {
    //   if (ctx.body == "❌ Cancelar solicitud")
    //     return endFlow({
    //       body: "❌ Su solicitud ha sido cancelada ❌",
    //       buttons: [{ body: "⬅️ Volver al Inicio" }],
    //     });
    //   apellidos = ctx.body;
    //   return flowDynamic(`Perfecto *${nombre}*, por último...`);
    // }
  )
  .addAnswer(
    "selecciona uno: ",
    { capture: true, buttons: [{ body: "❌ Cancelar solicitud" }] },
    (context, { fallBack, flowDynamic }) => {
      console.log("context.body", context.body);
      if (context.body.includes("si")) {
        return flowDynamic([
          {
            body: "https://i.pinimg.com/originals/2e/fc/4a/2efc4abf026166b36a01d64a5956284f.gif",
          },
        ]);
      }
      return fallBack();
    }
  );

export { flowJokes };
