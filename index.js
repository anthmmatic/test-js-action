import * as core from '@actions/core'
import * as cache from '@actions/cache'

async function run(): Promise<void> {
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
