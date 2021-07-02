import app from "./app";
import http from "http";
import dotenv from "dotenv";


// Load environment variables
dotenv.config();

// Get port from environment
const port = normalizePort(process.env.PORT || "5000");
app.set("port", port);

// Create HTTP Server
const server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 * @param val Candidate port value
 */
function normalizePort(val: string): number | string | boolean {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    // Named pipe
    return val;
  }

  if (port >= 0) {
    // Port number
    return val;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 * @param error Generated error value
 */
function onError(error: NodeJS.ErrnoException) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const address = server.address();
  const bind =
    typeof address === "string"
      ? `pipe ${address}`
      : `${address?.address}:${address?.port}`;

  console.log("Running in PORT: " + bind);
}