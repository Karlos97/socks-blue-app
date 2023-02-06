const { buildSchema } = require("graphql");

module.exports = buildSchema(`
   type Comment {
        _id: ID!
        name: String!
        email: String!
        message: String!
        createdAt: String!
        updatedAt: String!
    }

    type CommentData {
        comments: [Comment!]!
        totalComments: Int!
    }

    input CommentInputData {
        name: String!
        email: String!
        message: String!
    }

    type RootQuery {
        comments(page: Int, sort: Int): CommentData!
    }

    type RootMutation {
        createComment(commentInput: CommentInputData): Comment!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
