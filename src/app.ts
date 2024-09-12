import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

//Funciones anonimas autoinvocadas
(async () => {
  await main();
})();

async function main() {
  const { b: base, l: limit, s: showTable, d: destination, n: name } = yarg;
  ServerApp.run({ base, limit, showTable, destination, name });
}
