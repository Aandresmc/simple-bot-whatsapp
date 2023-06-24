import bot from "@bot-whatsapp/bot";

const { addKeyword } = bot;

import {
  flowDocs,
  flowGracias,
  flowTuto,
  flowDiscord,
} from "./example.flow.js";

import { flowJokes } from "./jokes.flow.js";
import { flowFormulario } from "./other.flow.js";

const flowMain = addKeyword(["hello", "ole", "alo"])
  .addAnswer("🙌 Hola bienvenido a este *Chatbot*")
  .addAnswer(
    [
      "te comparto los siguientes links de interes sobre el proyecto",
      "👉 *doc* para ver la documentación",
      "👉 *gracias*  para ver la lista de videos",
      "👉 *discord* unirte al discord",
    ],
    null,
    null,
    [flowJokes, flowDocs, flowGracias, flowTuto, flowDiscord]
  );

export { flowMain, flowFormulario };
