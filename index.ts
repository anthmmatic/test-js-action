async function run(): Promise<void> {
  const core = require('@actions/core')
  const cache = require('@actions/cache')
  try {
    const paths = [ 'node_modules' ]
    const key = core.getInput('cache-key')
    await cache.saveCache(key, paths)
  } catch (error: any) {
    // Show fail error if there is any error
    core.error(error)
    core.setFailed(error.message)
  }
}

run()
