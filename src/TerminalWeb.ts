import TerminalView from "./TerminalView"
import CommandInterpreter from "./CommandInterpreter"

export default class TerminalWeb extends HTMLElement {
  constructor() {
    super();
    
    this.attachShadow({ mode: "open" })

    // add styles
    const $style = document.createElement("style");
    $style.innerHTML = `${TerminalWeb.style}`
    this.shadowRoot?.append($style)

    // add form (terminal)
    const $formTerminal = document.createElement("form");
    const $history = document.createElement("div");
    $history.classList.add("history");
    const $input = document.createElement("div");
    $history.innerHTML = /*html*/`
      <slot name="text-line"></slot>
    `
    $input.classList.add("input");
    $formTerminal.append($history);
    $formTerminal.append($input);

    this.append($formTerminal);

    // add functionality
    
    const username = this.getAttribute("username") ?? "doneber"
    const hostname = this.getAttribute("hostname") ?? "pc"

    const terminalView = new TerminalView($history, $input, {
      username: username,
      servername: hostname,
    });
    terminalView.render();
    const commandInterpreter = new CommandInterpreter();

    $formTerminal.addEventListener("submit", (event: Event) => {
      event.preventDefault();

      const eventTarget = event.target as HTMLFormElement;
      const formData = new FormData(eventTarget);
      const text = formData.get("text") as string;

      // extract the comman of the input text field
      const [textCommand, ...args] = text.trim().split(" ");

      terminalView.addToHistory(text);
      const res = commandInterpreter.executeCommand(textCommand, args);

      if (res) terminalView.addToOutputWithHTMLString(res);

      eventTarget.reset();
    });

    let historyIndex: number = -1;
    let inputSaved: string = "";

    $formTerminal.addEventListener("keyup", (event) => {
      const $inputText = $formTerminal.querySelector("input") as HTMLInputElement;
      let history = commandInterpreter.getHistory();

      if (event.key !== "ArrowUp" && event.key !== "ArrowDown") {
        historyIndex = history.length;
        inputSaved = $inputText.value;
        return;
      }

      if (event.key === "ArrowUp") historyIndex = Math.max(historyIndex - 1, 0);
      if (event.key === "ArrowDown")
        historyIndex = Math.min(historyIndex + 1, history.length);

      if (historyIndex === history.length) {
        $inputText.value = inputSaved;
      } else {
        $inputText.value = history[historyIndex];
      }
    });

    // only to UX
    $formTerminal.addEventListener("click", () => {
      const $inputText = $formTerminal.querySelector("input") as HTMLInputElement;
      $inputText.focus();
    });

    this.shadowRoot?.append($formTerminal)
  }
  
  static get style() {
    
    return /*css*/`
    * {
      font-family: monospace, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      margin: 0;  
      padding: 0;  
      box-sizing: border-box;
      font-size: 1rem;
      color: white;
    }
    
    form {
      background-color: #222;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow-y: auto;
      padding: 5px;
    
      & .line {
        display: flex;
        height: fit-content;
        gap: .35em;
    
        & input {
          width: 100%;
          outline: none;
          border: none;
          background-color: transparent;
        }
      }
    }
    
    .indicator {
      display: flex;
      & .username, .at-symbol, .hostname{
        color: green;
      }
      & .colon{
    
      }
      & .current-directory{
        color: blue;
      }
      & .prompt-symbol{
    
      }
    }
    
    .history {
      display: flex;
      flex-direction: column;
      text-align: start;
    }
    
    `
    
  }
}
customElements.define("terminal-web", TerminalWeb);
