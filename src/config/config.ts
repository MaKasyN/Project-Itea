export const config: any = {
    app: {
        port: process.env.APP_PORT || 5000,
    },
    morgan: {
        format: process.env.MORGAN_FORMAT || 'tiny',
    },
    cookieParser: {
        secret: process.env.COOKIE_PARSER_SECRET,
        options: process.env.COOKIE_PARSER_OPTIONS,
    },
    mongo: {
        host: process.env.MONGO_HOST || 'localhost',
        port: process.env.MONGO_PORT || 27017,
        reconnectIntervalMs: 5000,
        useBluebird: process.env.MONGO_USE_BLUEBIRD || true,
        connectOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    servio: {
        url: 'http://demo.servio.support:29000',
        cardCode: '53777',
        termID: '9e86aa5af7a86775',
    }
};
