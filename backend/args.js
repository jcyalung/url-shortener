import { ArgumentParser } from "argparse";

function parseArgs() {
    const parser = new ArgumentParser({
        description: "Start server!"
    });

    parser.add_argument("-d", "--database", {
        type: 'str',
        help: "Database file name",
        default: "url.db",
    });

    parser.add_argument("-p", "--port", {
        type: 'int',
        help: "Port to listen on",
        default: 3000,
    });

    parser.add_argument("-l", "--logging", {
        help: "Enable logging",
        action: 'store_true',

    });

    if (!process.argv.includes('--database') && !process.argv.includes('-d')) {
      console.warn('⚠️  --database not provided, using default: urls.db');
    }

    if (!process.argv.includes('--port') && !process.argv.includes('-p')) {
      console.warn('⚠️  --port not provided, using default: 3000');
    }

    if (!process.argv.includes('--logging') && !process.argv.includes('-l')) {
      console.warn('⚠️  --logging not provided, defaulting to false');
    }
    return parser.parse_args();
}

export { parseArgs };