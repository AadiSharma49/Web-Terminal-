export const executeCommand = (input: string): string => {
  const args = input.toLowerCase().trim().split(" ");
  const command = args[0];

  switch (command) {
    case "help":
      return `
Available commands:
- help: Show available commands
- clear: Clear the terminal
- about: Info about this terminal
- time: Show current time
- date: Show today's date
- whoami: Show user info
- echo [message]: Print message
- ascii: Show ASCII art
- uptime: Show system uptime
- random: Generate a random number
- reverse [text]: Reverse a string
- calc [expression]: Calculate basic math expressions
- weather: Show simulated weather info`;

    case "clear":
      return "\u001b[H\u001b[2J"; // Clears terminal

    case "about":
      return "This is a web-based terminal built with Next.js!";

    case "time":
      return `Current time: ${new Date().toLocaleTimeString()}`;

    case "date":
      return `Today's date: ${new Date().toLocaleDateString()}`;

    case "whoami":
      return "User: Web Terminal User";

    case "echo":
      return args.length > 1 ? args.slice(1).join(" ") : "Usage: echo [message]";

    case "ascii":
      return `
  _____                   _            
 |_   _|   _ _ __  _ __  (_) ___  ___  
   | || | | | '_ \\| '_ \\ | |/ _ \\/ __| 
   | || |_| | |_) | |_) || |  __/\\__ \\ 
   |_| \\__, | .__/| .__/ |_|\\___||___/ 
       |___/|_|   |_|                   `;

    case "uptime":
      return `System uptime: ${Math.floor(process.uptime())} seconds`;

    case "random":
      return `Random number: ${Math.floor(Math.random() * 1000)}`;

    case "reverse":
      return args.length > 1
        ? args.slice(1).join(" ").split("").reverse().join("")
        : "Usage: reverse [text]";

    case "calc":
      try {
        if (args.length > 1) {
          const expression = args.slice(1).join(" ");
          return `Result: ${eval(expression)}`;
        }
        return "Usage: calc [expression]";
      } catch {
        return "Invalid calculation.";
      }

    case "weather":
      return "Weather: ☀️ Sunny, 25°C";

    default:
      return `Command not found: ${command}`;
  }
};
