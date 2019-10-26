class Repository {
    constructor(schema) {
        this.schema = schema;
    }

    async insert(data) {
        return this.schema.insert(data);
    };

    async find(query) {
        return await this.schema.find(query);
    }

    async findPage(query, skip, limit) {
        return this.schema
            .find(query)
            .skip(skip)
            .limit(limit)
        ;
    }
}

module.exports = Repository;
