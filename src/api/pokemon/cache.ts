async function getCacheIfExistByUrl(url: string, name: string) {
    if (await caches.has(name)) {
        console.info(
            'Cache exist for this name: ',
            name,
            'Resolved in url: ',
            url
        )
    } else {
        return
    }

    const cache = await caches.match(url)

    try {
        return cache?.json().then((response) => {
            return response
        })
    } catch (error) {
        console.error('Error has been occured in cache: ', error)
    }
}

async function createCache(url: string, name: string) {
    console.log('create cache')
    const newCache = await caches.open(name)
    newCache.add(url)
}

async function getAllCacheKey() {
    return await caches.keys()
}

export default {
    getCacheIfExistByUrl,
    createCache,
    getAllCacheKey,
}
