var URL = require('url');
var config = {};
config.connectionString = process.env.MONGODB_URL || process.env.MONGOLAB_URI || 'mongodb://user:123qwe@ds017544.mlab.com:17544/nodeunirriter';
config.oplogConnectionString = process.env.MONGODB_OPLOG_URL || 'mongodb://user:123qwe@ds017544.mlab.com:17544/nodeunirriter';
config.port = process.env.PORT || 2426;
config.baseUri = process.env.BASE_URI || 'http://localhost:' + config.port;
module.exports = config;
