# Unhandled 'ENOENT' error in Node.js HTTP server

This repository demonstrates a common error in Node.js where an unhandled 'ENOENT' error causes a server crash.  The server attempts to read a large file, and if the file doesn't exist, the process crashes without any graceful error handling.  The solution demonstrates proper error handling using try...catch blocks and sending appropriate HTTP error responses.

## Bug

The `bug.js` file contains the erroneous code. The server fails to handle the case where the file specified in `fs.readFile` does not exist, causing the process to crash.

## Solution

The `bugSolution.js` file shows the corrected implementation. The solution includes proper error handling using a try...catch block, ensuring that the server doesn't crash when encountering an 'ENOENT' error. It returns a 404 response to the client, signaling a 'File Not Found' error.