const core = require('@actions/core');
const cache = require('@actions/cache');

const paths = [
    'node_modules'
]
const key = core.getInput('cache-key');
const cacheId = await cache.saveCache(paths, key)