import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

rl.prompt();

rl.on('line', (input: string): void => {
  if (input === 'exit') {
    rl.close();
    return;
  }
  if (input.slice(0, 5) === "echo ") {
    const textToEcho = input.slice(5);
    console.log(`${textToEcho}`);
    rl.prompt();
    return;
  }
  console.log(`${input}: command not found`);
  rl.prompt();
});
