#!/usr/bin/env node

import { Command } from 'commander';
import { execute } from '@arbz/execute';
import fse from 'fs-extra';

const program = new Command();

async function main() {
  program
    .requiredOption('-i, --input <input>', 'Input css file')
    .requiredOption('-o, --output <output>', 'Output json file')
    .option('-c, --config <config>', 'config file')
    .option('--content, --content <content>', 'content')
    .parse(process.argv);

  const options = program.opts();

  const tempFilePath = '../node_modules/.tmp/temp1.txt';

  await execute(
    [
      'npx tailwindcss-candidates',
      `-i ${options.input}`,
      `-o ${tempFilePath}`,
      options.content && `--content ${options.content}`,
      options.config && `-c ${options.config}`,
      '--no-autoprefixer',
    ]
      .filter(Boolean)
      .join(' '),
  );

  const classNames = fse.readFileSync(tempFilePath, 'utf-8').split('\n');

  fse.outputFileSync(options.output, JSON.stringify(Array.from(classNames)));
}

main();
