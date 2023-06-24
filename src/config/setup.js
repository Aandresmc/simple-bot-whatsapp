import bot from "@bot-whatsapp/bot";

const { createProvider, createFlow } = bot

import BaileysProvider from "@bot-whatsapp/provider/baileys";
import MySQLAdapter from "@bot-whatsapp/database/mysql";

import { flowFormulario, flowMain } from "../core/flows/main.flow.js";
import { db } from "./db.js";

const _setup = () => {
  try {
    console.log("starting setup 🤟 ...");
    console.log("db", db);

    const adapterDB = new MySQLAdapter(db);
    console.log("✅ db");
    const adapterFlow = createFlow([flowMain, flowFormulario]);
    console.log("✅ flows");
    const adapterProvider = createProvider(BaileysProvider);
    console.log("✅ provider wpp");

    return {
      flow: adapterFlow,
      provider: adapterProvider,
      database: adapterDB,
    };
  } catch (error) {
    throw error;
  }
};

const createSetup = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(_setup());
    } catch (error) {
      console.log("error in create setup", error);
      reject(error);
    }
  });
};

export { createSetup };
