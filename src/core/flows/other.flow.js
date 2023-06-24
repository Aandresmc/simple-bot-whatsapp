import bot from "@bot-whatsapp/bot";

const { addKeyword } = bot;

let nombre;
let apellidos;
let telefono;

const flowFormulario = addKeyword(["bot", "⬅️ Volver al Inicio"])
  .addAnswer(
    [
      "Hola!",
      "Para enviar el formulario necesito unos datos...",
      "Escriba su *Nombre*",
    ],
    { capture: true, buttons: [{ body: "❌ Cancelar solicitud" }] },

    async (ctx, { flowDynamic, endFlow }) => {
      if (ctx.body == "❌ Cancelar solicitud")
        return endFlow({
          body: "❌ Su solicitud ha sido cancelada ❌", // Aquí terminamos el flow si la condicion se comple
          buttons: [{ body: "⬅️ Volver al Inicio" }], // Y además, añadimos un botón por si necesitas derivarlo a otro flow
        });
      nombre = ctx.body;
      return flowDynamic(`Encantado *${nombre}*, continuamos...`);
    }
  )
  .addAnswer(
    ["También necesito tus dos apellidos"],
    { capture: true, buttons: [{ body: "❌ Cancelar solicitud" }] },

    async (ctx, { flowDynamic, endFlow }) => {
      if (ctx.body == "❌ Cancelar solicitud")
        return endFlow({
          body: "❌ Su solicitud ha sido cancelada ❌",
          buttons: [{ body: "⬅️ Volver al Inicio" }],
        });
      apellidos = ctx.body;
      return flowDynamic(`Perfecto *${nombre}*, por último...`);
    }
  )
  .addAnswer(
    ["Dejeme su número de teléfono y le llamaré lo antes posible."],
    { capture: true, buttons: [{ body: "❌ Cancelar solicitud" }] },

    async (ctx, { flowDynamic, endFlow }) => {
      if (ctx.body == "❌ Cancelar solicitud")
        return endFlow({
          body: "❌ Su solicitud ha sido cancelada ❌",
          buttons: [{ body: "⬅️ Volver al Inicio" }],
        });

      telefono = ctx.body;
      await delay(2000);
      return flowDynamic(`Estupendo *${nombre}*! te dejo el resumen de tu formulario
                \n- Nombre y apellidos: *${nombre} ${apellidos}*
                \n- Telefono: *${telefono}*`);
    }
  );

export { flowFormulario };
