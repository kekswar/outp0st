#!/usr/bin/env node
import { OutpostCurrentState, OutpostGlobal } from '@outp0st/core';
import { Command } from 'commander';
import 'dotenv/config';
import fs from 'fs';
import * as packgeJSON from '../../package.json';
import { getContracts } from '../contract';
import { generateGlobalState } from '../globalState';
import { log } from '../log';
import { RoverOptions } from '../types';
import { tryReadJson, uploadAndGenerateUrl } from '../utils';

const program = new Command();

const defaultOptions: RoverOptions = {
  contractsPath: './contracts',
  artifactsPath: 'artifacts',
  basePayloadUrl: 'http://localhost:3000',
  web3storageToken: process.env.TOKEN_WEB3STORAGE,
  env: OutpostCurrentState.LOCAL,
  workspace: false,
};

async function main() {
  program
    .version(packgeJSON.version)
    // .command('run')
    .action(run);

  await program.parseAsync(process.argv);
}

const run = async () => {
  log('Generating UI state for contracts');

  const userOptions = tryReadJson(`./rover.config.json`);
  const options: RoverOptions = { ...defaultOptions, ...userOptions };

  if (!validateOptions(options, log)) return;

  const data = await getContracts(options);

  const globalState: OutpostGlobal = generateGlobalState(
    options.env,
    data,
    log,
  );

  const uploadedUrl: string = await uploadAndGenerateUrl(
    globalState,
    options.web3storageToken,
    options.basePayloadUrl,
  );
  log(`${uploadedUrl}`);
  fs.writeFileSync('test.json', JSON.stringify(globalState, null, 2));
  fs.writeFileSync('last.rover.config.json', JSON.stringify(options, null, 2));
  log('DONE!');
};

main();
function validateOptions(options: RoverOptions, log: (msg: any) => void) {
  if (!options.web3storageToken) {
    log(
      'ERROR: no web3.storage token provided - go to https://web3.storage register and obtain one, put it in .env file',
    );
    return false;
  }

  return true;
}
