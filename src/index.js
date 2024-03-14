import { v4 as uuidv4 } from 'uuid'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import db from './data/_db.js'

//types
import { typeDefs } from './schema.js'

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        authors() {
            return db.authors
        },
        reviews() {
            return db.reviews
        },

        game(_, args) {
            return db.games.find(game => game.id === args.id)
        },
        author(_, args) {
            return db.authors.find(author => author.id === args.id)
        },
        review(_, args) {
            return db.reviews.find(review => review.id === args.id)
        },
    },

    Game: {
        reviews(parent) {
            return db.reviews.filter(r => r.game_id === parent.id)
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter(r => r.author_id === parent.id)
        }
    },
    Review: {
        author(parent) {
            return db.authors.find(a => a.id === parent.author_id)
        },
        game(parent) {
            return db.games.find(g => g.id === parent.game_id)
        }
    },

    Mutation: {
        deleteGame(_, args) {
            db.games = db.games.filter(g => g.id !== args.id)

            return db.games
        },
        addGame(_, args) {
            let game = {
                ...args.game,
                id: uuidv4()
            }

            db.games.push(game)

            return game
        },
        updateGame(_, args) {
            db.games = db.games.map(game => {
                if (game.id === args.id) {
                    return { ...game, ...args.edits }
                }

                return game
            })

            return db.games.find(g => g.id === args.id)
        }
    }
}

// server setup (I really don't know where he got this code from...)
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server ready at port', 4000)