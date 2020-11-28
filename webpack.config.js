const path = require('path');

module.exports = {
    entry: './src/client/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: true
};