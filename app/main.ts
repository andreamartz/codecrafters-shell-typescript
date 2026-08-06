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
  } else if (input.startsWith('echo ')) {
    console.log(input.slice(5));
  } else {
    console.log(`${input}: command not found`);
  }
  rl.prompt();
});
