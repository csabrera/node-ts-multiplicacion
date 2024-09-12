import fs from "fs";

export interface SaveFileUseCase {
  execute: (option: Options) => boolean;
}

export interface Options {
  fileContent: string;
  fileDestination: string;
  fileName: string;
}

export class saveFile implements SaveFileUseCase {
  construtctor() {}

  execute({ fileContent, fileDestination, fileName }: Options): boolean {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
