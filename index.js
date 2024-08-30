const core = require('@actions/core');
const cache = require('@actions/cache');

const paths = [
    'node_modules'
]
const key = core.getInput('cache-key');
const cacheId = async () => {
    try {
      await cache.saveCache(paths, key);
      core.info('cached successfully');
    } catch (error) {
      core.warning(`Failed to save cache: ${error}`);
    }
}
