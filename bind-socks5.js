#!/usr/bin/env node

'use strict';

import inquirer from 'inquirer';
import os from 'os';
import { createServer } from './index.js';

const getAllInterfaces = () => Object.entries(os.networkInterfaces())
  .flatMap(([name, adapterInterfaces]) => 
    adapterInterfaces
      .filter((adapterInterface) => adapterInterface.family === 'IPv4' && !adapterInterface.internal)
      .map((adapterInterface) => ({name, ip: adapterInterface.address}))
  );
const argv = process.argv.slice(2);

if (argv[0] === '-h' || argv[0] === '--help') {
  console.log('Socks5 server, default list port at 1080. You can use -p or --port to change listen port.');
  process.exit();
}

let port = 1080;
if (argv[0] === '-p' || argv[0] === '--port') {
  if (argv[1] && parseInt(argv[1]) > 0) {
    port = parseInt(argv[1]);
  }
}

const interfaces = getAllInterfaces();

const interfacePrompt = inquirer.createPromptModule();
interfacePrompt([{
  type: 'list',
  name: 'interface',
  message: 'Please select network interface:',
  choices: interfaces.map(({name, ip}) => ({name: `${name} (${ip})`, value: ip})),
}]).then(({ interface: localAddress }) => {
  const server = createServer({
    localAddress,
    dns: [
      '1.1.1.1',
      '1.0.0.1'
    ]
  });
  server.listen(port, () => {
    console.log(`socks5 server listen at ${port}`);
  });
});
