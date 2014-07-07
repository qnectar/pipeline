readline = require 'readline'
{Pipeline} = require './pipeline'
builtins = require './builtins'
ansi = require('ansi')(process.stdout)
{stringify} = require './helpers'
fs = require 'fs'
_ = require 'underscore'
argv = require('minimist')(process.argv)

# Import default modules

PipelineREPL = (@pipeline) ->
    if !@pipeline
        @pipeline = defaultPipeline()

    # Keep a consistent context for the REPL
    @context = @pipeline.subScope()

    # Add command line arguments as variables
    base_env = _.omit(argv, '_')
    _.forEach base_env, (v, k) =>
        @context.set('vars', k, v)

    # Keep track of last response
    @last_out = null
    return @

defaultPipeline = ->
    new Pipeline()
        .use(require('./modules/mongo').connect())
        .use(require('./modules/redis').connect())
        .use('http')
        .use('html')
        .use('files')
        .use('keywords')

PipelineREPL::writeSuccess = (data) ->
    ansi.fg['green']()
    console.log stringify data
    ansi.reset()

PipelineREPL::writeError = (err) ->
    ansi.fg['red']()
    console.log '[ERROR] ' + err
    ansi.reset()

PipelineREPL::executeScript = (script, cb) ->
    try
        @pipeline.exec script, @last_out, @context, (err, data) =>
            @last_out = data
            # TODO: Some more advanced output handling,
            # trim long lists with some ellipses
            if err?
                @writeError err
            else
                @writeSuccess data
            cb() if cb?

    catch e
        @writeError e
        cb() if cb?

PipelineREPL::startReadline = ->
    repl = @

    # Set up readline prompt
    fn_names = (n for n, f of repl.pipeline.fns).concat (n for n, f of builtins)
    fnCompleter = (line) ->
        to_complete = line.split(' ').slice(-1)[0]
        completions = fn_names.filter ((c) -> c.indexOf(to_complete) == 0)
        return [completions, to_complete]

    rl = readline.createInterface
        input: process.stdin
        output: process.stdout
        completer: fnCompleter
    rl.setPrompt 'Q > '
    rl.prompt()

    rl.on 'line', (script) ->
        script = script.trim()
        script = 'id' if !script.length
        repl.executeScript script, ->
            rl.prompt()

if require.main != module
    # Module mode
    module.exports = PipelineREPL

else
    # Stand-alone mode
    repl = new PipelineREPL

    if script_filename = argv.script || argv.s
        # Execute single script
        script = fs.readFileSync(script_filename).toString()
        setTimeout ->
            repl.executeScript script, ->
                process.exit()
        , 50

    else
        repl.startReadline()

