module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
};