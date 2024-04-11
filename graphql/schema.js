import { buildSchema } from 'graphql';
export default buildSchema(`

    type User {
        id: ID!
        name: String!
        email: String!
        password: String
        status: String!
    }

    type Contact {
        id: ID!
        email: String!
        name: String!
        password: String!
    }

    type AuthData {
        token: String!
        userId: String!
    }

    type ContactsInputData {
        name: String!
        tel: String!
        email: String!
    }

    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    type RootQuery {
        login(email: String!, password: String!): AuthData!
        getAllPosts(page: Int): PostsData!
        getPost(postId: String): Post!
        user: User!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
        createContact(contactInput: ContactsInputData): Contact!
        updatePost(contactId: ID!, contactInput: ContactsInputData): Contact!
        deletePost(contactId: ID!): Boolean
        updateStatus(status: String!): User!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
