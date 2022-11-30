const { freelancers, clients } = require('../sampleData.js')

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');

// Freelancer Type
const FreelancerType = new GraphQLObjectType({
    name: 'Freelancer',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        portfolio: { type: GraphQLString },
        developer: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve(parent, args) {
                return clients.find(client => client.id === parent.clientId);
            }
        }
    }),
});

// Client Type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone:  { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        freelancers: {
            type: new GraphQLList(FreelancerType),
            resolve(parent, args) {
                return freelancers;
            },
        },
        freelancer: {
            type: FreelancerType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return freelancers.find(freelancer => freelancer.id === args.id);
            },
        },
        clients: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                return clients;
            }
        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return clients.find(client => client.id === args.id);
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
});