#!/usr/bin/env node

import path from 'path';
import chalk from 'chalk';
import process from 'process';
import program from 'commander';

program
  .command('trade')
  .description('starts the bot trading')
  .option('-m, --mock', 'have the bot trade using mocked data')
  .action((options) => {
    console.log('woo hoo');
  });
