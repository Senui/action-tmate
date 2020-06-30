const shell = require('shelljs');

export const execShellCommand = (cmd) => {
  return new Promise((resolve, reject) => {
    shell.exec(cmd, (error, stdout, stderr) => {
      if (error) console.warn(error);
      resolve(stdout ? stdout : stderr);
    });
  });
}
