const core = require('@actions/core');
const cache = require('@actions/cache');

async function save() {
    const paths = [
        'node_modules'
    ]
    const key = core.getInput('cache-key');
    
    try {
      await cache.saveCache(paths, key);
      core.info('cached successfully');
    } catch (error) {
      core.warning(`Failed to save cache: ${error}`);
    }
}

save();
