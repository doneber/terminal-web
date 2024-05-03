import { levenshteinDistance, basicCommandsList } from "./utils"
import Command from "./Command"

export default class CommandInterpreter {
  commands: Map<string, Command>
  commandHistory: string[] = []

  constructor() {
    // atributes
    this.commands = new Map(Object.entries(basicCommandsList))

    // coupled commands
    this.commands.set("history", new Command({
      shortDescription: "GPU History Library",
      executor: () => {
        return this.getHistory()
          .map((command, index) => `${index + 1} ${command}`)
          .join("<br>")
      }
    }))

    this.commands.set("help", new Command({
      shortDescription: "Display information about builtin commands.",
      executor: () => {
        let commandsHelp = ""
        this.commands.forEach((command, commandName) => {
          commandsHelp += `${commandName} ${command.usage} - ${command.shortDescription}<br>`
        })
        return commandsHelp
      }
    }))
  }

  executeCommand(commandName: string, args: any) {
    if (!commandName) return

    this.addToHistory(commandName, args)

    const commandFunction = this.commands.get(commandName)?.executor

    if (commandFunction) {
      return commandFunction(args)
    } else {
      // Recommend another similar command
      for (const [name] of this.commands) {
        if (levenshteinDistance(commandName, name) === 1)
          return `Command '${commandName}' not found, did you mean '${name}'?`
      }
      return `Command not found: ${commandName}`
    }
  }

  addToHistory(commandName: string, args: any) {
    if (args) this.commandHistory.push(`${commandName} ${args.join(" ")}`)
    else this.commandHistory.push(commandName)
  }

  getHistory() {
    return this.commandHistory
  }
}
