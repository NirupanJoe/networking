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
    },
    Mutation: {
        addBook: (parent, args) => {
            const newBook = { ...args, id: data.books.length + 1 };
            data.books.push(newBook)

            return newBook;
        }
    }
}