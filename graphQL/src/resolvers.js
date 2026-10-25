import { data } from "./data.js";

export const resolvers = {
    Book: {
        author: (parent) => {
            return data.authors.find((author) => author.id === parent.authorId)
        }
    },
    Author: {
        books: (parent, ...rest) => {
            console.log(parent, {...rest})
            return data.books.filter((book) => parent.bookIds.includes(book.id))
        }
    },
    Query: {
        authors: () => data.authors,
        books: () => data.books
    }
}