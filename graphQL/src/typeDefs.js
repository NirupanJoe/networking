export const typeDefs = `#graphql

    type Author {
        id: ID!
        name: String!
    }

    type Book {
        id: ID!
        title: String!
        publishedYear: Int
        author: Author
    }
    
    type Query {
        authors: [Author]
        books: [Book]
    }
`