import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { saveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  destination: string;
  name: string;
}

export class ServerApp {
  static run({ base, limit, showTable, destination, name }: RunOptions) {
    console.log("Server running...!");
    const table = new CreateTable().execute({ base, limit });

    const wasCreated = new saveFile().execute({
      fileContent: table,
      fileDestination: destination,
      fileName: name,
    });

    if (showTable) console.log(table);

    wasCreated
      ? console.log("File created...!!")
      : console.log("File not created...!");
  }
}

//Static -> No queremos iniclizar la clase
