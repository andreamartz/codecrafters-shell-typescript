import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

const BUILTINS = new Set(["echo", "exit", "type"]);

rl.prompt();

rl.on('line', (input: string): void => {
  if (input === 'exit') {
    rl.close();
    return;
  } else if (input.startsWith('echo ')) {
    console.log(input.slice(5));
  } else if (input.startsWith("type ")) {
    const restOfInputAfterType = input.slice(5);
    if (BUILTINS.has(restOfInputAfterType)) {
      console.log(`${restOfInputAfterType} is a shell builtin`);
    } else {
      console.log(`${restOfInputAfterType}: not found`);
    }
  } else {
    console.log(`${input}: command not found`);
  }
  rl.prompt();
});
