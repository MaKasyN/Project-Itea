import {Logger, LoggerOptions, transports, createLogger} from 'winston';

const options: LoggerOptions = {
    transports: [
        new transports.Console()
    ]
};

const logger: Logger = createLogger(options);

export {logger};
