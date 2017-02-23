var newman = require('newman'); // postman CLI
 
newman.run({
    collection: 'https://www.getpostman.com/collections/4e721636f4efdddc611f',
    environment: require('./postman_env.json'),
    reporters: 'cli',
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});