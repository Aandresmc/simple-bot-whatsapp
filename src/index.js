import bot from "@bot-whatsapp/bot";
import QRPortalWeb from "@bot-whatsapp/portal";

import { createSetup } from "./config/setup.js";

const main = async () => {
  try {
    const setup = await createSetup();
    await bot.createBot(setup);
    QRPortalWeb();
  } catch (error) {
    console.log(error);
  }
};

main();
