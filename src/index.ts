// This is the root file for the whole application
// The application is imported and served using submitted arguments

import { argv } from "yargs";
import { Logger } from "./lib/logger";
import { Application } from "./lib/application";

// CLI Arguments
const PORT = argv.port || 1337;
const HOST = argv.host || "0.0.0.0";

// Get instances
const logger = Logger.getInstance();
const app = Application.getInstance();

// Serve application
app.listen(PORT, HOST, _ => logger.info(`Serving application on http://${HOST}:${PORT}`));
