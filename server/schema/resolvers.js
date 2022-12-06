const { AuthenticationError } = require('apollo-server-express');
const { Profile } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        profile: async () => {
            return Profile.find();
        },

        profile: async (parent, { profileID }) => {
            return Profile.findOne({ _id: profileID });
        },

        me: async (parent, args, context) => {
            if (context.user) {
                return Profile.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('Login please!');
        },
    },

    Mutation: {
        addProfile: async (parent, { name, email, password }) => {
            const profile = await Profile.create({ name, email, password });
            const token = signToken(profile);

            return { token, profile };
        },
        login: async (parent, { username, password }) => {
            const profile = await Profile.findOne({ username });

            if(!profile) {
                throw new AuthenticationError('No profile with this username found!');
            }

            const correctPw = await profile.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(profile);
            return { token, profile };
        },
    }
}