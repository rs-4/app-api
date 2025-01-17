const typeDefs = `
        type Article {
            id : ID!
            title: String
            description: String
            date: String
        }
        type Response {
            succes : Boolean
            message: String!
        }
        type Query {
            getArticles: [Article]!
            getArticle(id: ID!): Article
        }
    `;

module.exports = typeDefs;