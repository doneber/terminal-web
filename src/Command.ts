type ExecutorType = (args?: string[]) => string | undefined

export default class Command {
  usage: string
  shortDescription: string
  executor: ExecutorType

  constructor({ shortDescription, usage = "", executor }: { shortDescription: string, usage?: string, executor: ExecutorType }) {
    this.shortDescription = shortDescription
    this.usage = usage
    this.executor = executor
  }
}