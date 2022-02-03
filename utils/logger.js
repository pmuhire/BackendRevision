const {createLogger,transports,format }= require('winston');
const { MongoDB } = require('winston/lib/winston/transports');
require('winston-mongodb');
require('dotenv').config();

const logger=createLogger(
    {
        transports:[
            new transports.File({
                filename:'info.log',
                format:format.combine(format.timestamp(),format.json())
            }),
            new transports.MongoDB({
                level:'error',
                db:process.env.DATABASE,
                options:{useUnifiedTopology: true },
                collection:'logging',
                format:format.combine(format.timestamp(),format.json())
            })
        ]
    }
);
module.exports=logger;