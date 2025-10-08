module.exports = {
    plugins: {
        'posthtml-expressions': {
            locals: {
                movies: require('./src/data/movies.json')
            }
        }
    }
};