import * as _ from './index.js';
declare global {
    type ProcessPromise = _.ProcessPromise;
    type ProcessOutput = _.ProcessOutput;
    var ProcessPromise: typeof _.ProcessPromise;
    var ProcessOutput: typeof _.ProcessOutput;
    var $: typeof _.$;
    var argv: typeof _.argv;
    var cd: typeof _.cd;
    var chalk: typeof _.chalk;
    var defaults: typeof _.defaults;
    var dotenv: typeof _.dotenv;
    var echo: typeof _.echo;
    var expBackoff: typeof _.expBackoff;
    var fs: typeof _.fs;
    var glob: typeof _.glob;
    var globby: typeof _.globby;
    var kill: typeof _.kill;
    var log: typeof _.log;
    var minimist: typeof _.minimist;
    var nothrow: typeof _.nothrow;
    var os: typeof _.os;
    var parseArgv: typeof _.parseArgv;
    var path: typeof _.path;
    var ps: typeof _.ps;
    var question: typeof _.question;
    var quiet: typeof _.quiet;
    var quote: typeof _.quote;
    var quotePowerShell: typeof _.quotePowerShell;
    var resolveDefaults: typeof _.resolveDefaults;
    var retry: typeof _.retry;
    var sleep: typeof _.sleep;
    var spinner: typeof _.spinner;
    var stdin: typeof _.stdin;
    var syncProcessCwd: typeof _.syncProcessCwd;
    var tempdir: typeof _.tempdir;
    var tempfile: typeof _.tempfile;
    var tmpdir: typeof _.tempdir;
    var tmpfile: typeof _.tempfile;
    var updateArgv: typeof _.updateArgv;
    var usePowerShell: typeof _.usePowerShell;
    var usePwsh: typeof _.usePwsh;
    var useBash: typeof _.useBash;
    var version: typeof _.version;
    var VERSION: typeof _.VERSION;
    var which: typeof _.which;
    var within: typeof _.within;
    var YAML: typeof _.YAML;
}
