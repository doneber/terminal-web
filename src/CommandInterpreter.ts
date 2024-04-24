export default class CommandInterpreter {
  commands: Map<string, (args: any) => void | string>;
  commandHistory: string[]

  constructor() {
    // atributes
    this.commands = new Map();
    this.commandHistory = [];

    // commands
    this.commands.set("echo", (args) => {
      return args.join(" ");
    });
    this.commands.set("whoami", () => {
      return "doneber";
    });

    this.commands.set("pwd", () => {
      return "/home/doneber";
    });

    this.commands.set("history", () => {
      return this.getHistory()
        .map((command, index) => `${index + 1} ${command}`)
        .join("<br>");
    });

    this.commands.set("catsay", () => {
      return `<pre>
&nbsp;/&#92;_/&#92;  
( o.o ) 
&nbsp;> ^ <
</pre>
      `;
    });

    this.commands.set("help", ()=> {
      let commandsHelp = ""
      this.commands.forEach((_,commandName) => {
        commandsHelp += commandName + "<br>"
      })
      return commandsHelp
    })
  }

  executeCommand(commandName:string, args: any) {
    if (!commandName) return;

    this.addToHistory(commandName, args);

    const commandFunction = this.commands.get(commandName);

    if (commandFunction) {
      return commandFunction(args);
    } else {
      return `Command not found: ${commandName}`;
    }
  }

  addToHistory(commandName:string, args:any) {
    if (args) this.commandHistory.push(`${commandName} ${args.join(" ")}`);
    else this.commandHistory.push(commandName);
  }

  getHistory() {
    return this.commandHistory;
  }
}
