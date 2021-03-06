import { Compiler, Stats } from 'webpack';

export interface Options {
  verbose?: boolean;
}

export default class WebpackPluginBoilerPlatePlugin {
  private readonly PLUGIN_NAME = 'WebpackPluginBoilerPlatePlugin';

  constructor(private options: Options = { verbose: false }) {}

  apply(compiler: Compiler) {
    compiler.hooks.done.tap(this.PLUGIN_NAME, (stats: Stats) => {
      console.log(`${this.PLUGIN_NAME}\n`);
    });
  }
}
