export default defineEventHandler(async (event) => {
  const method = event.method;
  const path = event.path;
  const headers = event.headers;
  const timestamp = `[${new Date().toLocaleDateString()}] - ${new Date().toLocaleTimeString()}`
  const incomingReq = `\nmethod: ${method}\npath: ${path}\n`;
  console.log(`\n${timestamp}\n`, `Incoming Request:${incomingReq}`, `headers: ${headers}\n`);
});