const express = require('express');
const { runServer } = require('metro');
const path = require('path');

const app = express();
const PORT = 8081;

// Start Metro bundler programmatically
async function startServer() {
  try {
    const MetroConfig = require('./metro.config');
    const config = await MetroConfig;
    
    await runServer(config, {
      port: PORT,
      secure: false,
    });
    
    console.log(`Metro bundler running on port ${PORT}`);
  } catch (error) {
    console.error('Failed to start Metro bundler:', error);
    process.exit(1);
  }
}

startServer();