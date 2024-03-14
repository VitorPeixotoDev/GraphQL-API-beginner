export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!

        # author_id: String!
        # game_id: String!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]

        avatar: String!
    }

    type Query {
        review(id: ID!): Review
        game(id: ID!): Game
        author(id: ID!): Author

        reviews: [Review]
        games: [Game]
        authors: [Author]
    }

    type Mutation {
        addGame(game: AddGameInput!): Game
        deleteGame(id: ID!): [Game]
        updateGame(id: ID!, edits: EditGameInput!): Game
    }

    input AddGameInput {
        title: String!
        platform: [String!]!
    }

    input EditGameInput {
        title: String
        platform: [String!]
    }
`

/*
    Okay, I confess that I didn't understand everything that was said here, 
    but the important thing was: the Query type is not optional. 
    It is responsible for informing the value of the types of queries
*/