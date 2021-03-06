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
    servio: {
        url: 'http://demo.servio.support:29000',
        cardCode: '53777',
        termID: '9e86aa5af7a86775',
    }
};
