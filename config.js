const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "WRIUSZTC#wabviGv5-MgQguM-MdI2QXYbATmf372Pow37bSEb9sY",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/DPd51BK7/2c47d62ecc68.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*🐍 HELLO SASA X MD IS ALIVE NOW! 🐍*",
BOT_OWNER: '94784167385',  // Replace with the owner's phone number



};

