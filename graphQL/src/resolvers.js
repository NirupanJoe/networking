export const resolvers = {
    Query: {
        authors: () => [{
            id: 1,
            name: 'Nirupan'
        }],
        books: () => [{
            id: 1,
            title: 'Become a Developer'
        }]
    }
}