import { BaseCommand } from '../../base.js';

export default class Branches extends BaseCommand {
  static description = 'List, create and delete branches';

  static examples = [];

  static flags = {};

  static args = [];

  async run(): Promise<void> {
    // const { args, flags } = await this.parse(Branches);

    this.error('To be done');
  }
}
