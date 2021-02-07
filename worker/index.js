const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_strategy: () => 1000
})

const sub = redisClient.duplicate()

function fib(index) {
    if(index < 2) return 1
    return fib(index-1) + fib(index-2)
}

sub.on('mesasge', (channel, message) => {
    redisClient.hset('values', message, fib(parseInt(message)))
})

/**
 * As soon as we see an insert value in redis, we will attempt to calculate the fibonacci value of that
 * and toss that value back to the redis instance
 */
sub.subscribe('insert');