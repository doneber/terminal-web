import Command from "../Command"

type CommandType = {
  [name: string]: Command
}

export const basicCommandsList: CommandType = {
  "echo": new Command({
    shortDescription: "display a line of text",
    executor: (args?: any) => args.join(" "),
    usage: "[args]"
  }),
  "whoami": new Command({
    shortDescription: "print effective userid",
    executor: () => "doneber"
  }),
  "pwd": new Command({
    shortDescription: "print name of current/working directory",
    executor: () => "/home/doneber"
  }),
  "catsay": new Command({
    shortDescription: "print a cat",
    executor: () => `<pre>&nbsp/&#92_/&#92\n( o.o )\n&nbsp> ^ <</pre>`
  }),
}
