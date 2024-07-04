const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_58_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMixcbiAgICAgICAgODcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDUsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDksXG4gICAgICAgIDYsXG4gICAgICAgIDY2LFxuICAgICAgICAzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIzLFxuICAgICAgICA2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxODMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTExLFxuICAgICAgICAwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDc4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA4MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDUxLFxuICAgICAgICA1NixcbiAgICAgICAgMTc4LFxuICAgICAgICA0NixcbiAgICAgICAgMTAzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDgyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTExLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDY4LFxuICAgICAgICA5OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjU1LFxuICAgICAgICA4NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwNndQZnU1dXBCOTlUbHh4SXRiZUtwV3hPQmprcHhHYlFCNGM5TGFWdUtrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxVzFIa192ZFE3NmNqRGluZmlUU19nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgyYTczNzc5LTZmOTAtNGU1ZC1iNWU2LTQ1NjM1NGNiMWNlM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAxOTYsXG4gICAgICAyLFxuICAgICAgMTAxLFxuICAgICAgMTE0LFxuICAgICAgMTgwLFxuICAgICAgNTksXG4gICAgICA3OSxcbiAgICAgIDk4LFxuICAgICAgMjIxLFxuICAgICAgMTQsXG4gICAgICAzMSxcbiAgICAgIDIzLFxuICAgICAgMzQsXG4gICAgICAyMzIsXG4gICAgICAxNTcsXG4gICAgICAxOTYsXG4gICAgICAxMTYsXG4gICAgICAxMDAsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICAxNDcsXG4gICAgICAyMzQsXG4gICAgICAxMzEsXG4gICAgICAxMDIsXG4gICAgICAxMjQsXG4gICAgICA0NSxcbiAgICAgIDIzLFxuICAgICAgNTUsXG4gICAgICAxMzUsXG4gICAgICAxNzksXG4gICAgICAzNCxcbiAgICAgIDU2LFxuICAgICAgMjAxLFxuICAgICAgMTIsXG4gICAgICA0NCxcbiAgICAgIDg4LFxuICAgICAgMTczLFxuICAgICAgMjQ5LFxuICAgICAgOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMNm1wb1FHRUtya21iUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInN4ZVhrbnVaQmJlR09IV0JLTXZaMGw2eVlRZzBMQmtabEs0UVF4eEV1M1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic1dPTGIzREIyZVpBWG1CMms5cXg3Y1Nqdkkxc2pWRDUvUGhrT2l0dXlDOWcrck0yYXRXZzZYU3ltNjIwM2ZRR2hSWGROOE5zcnlqSWZXMEY1NFlaRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibW9uOEd6Y2I2bmJPUzNTTFpaVFhRV2JDTnhFbDFrQXgvWHBVd3R2MlhUaFc0V1FUUmVBeGxPOTg1WEdSWUtEUm5OUFdtSUJweml1VExnbk0wM214alE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDE2MjQ4MzY2OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3Njc2MzY4Mjg0ODk2Mzo3QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxNjI0ODM2Njo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDA4NzA4NlxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
