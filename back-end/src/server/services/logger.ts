import {Logger, LoggerOptions, transports, createLogger, format} from 'winston';

const options: LoggerOptions = {
    transports: [
        new transports.Console(),
        new transports.File({
            filename: 'food-delivery.log',
            format: format.combine(
                format.timestamp({
                    format: 'YYYY-MM-DDTHH:mm:ss.sssZ'
                }),
                format.printf(info =>
                    `${info.timestamp}\t${info.level.toUpperCase()}\t${info.message}`
                ),
            ),
            level: 'silly',
        }),
    ]
};

const logger: Logger = createLogger(options);

export {logger};
