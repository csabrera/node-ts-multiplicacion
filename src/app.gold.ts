import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

console.log(yarg);

const { b: base, l: limit, s: showTable } = yarg;

let outMessage = "";

// const base = 5;
const outPath = `outputs`;
const headerMessage = `
======================
    Tabla del ${base}
======================\n
`;

for (let i = 1; i <= limit; i++) {
  outMessage += `${base} x ${i} = ${base * i}\n`;
}

outMessage = headerMessage + outMessage;

if (showTable) {
  console.log(outMessage);
}

fs.mkdirSync(outPath, { recursive: true });

fs.writeFileSync(`${outPath}/tabla-${base}.txt`, outMessage);
