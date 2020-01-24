class LRUCache {
    constructor(cacheSize = 5) {
        this.cacheSize = cacheSize
        this.cache = new Map()
    }
    setCache(a, b) {
        const firstItemInCache = (this.cache).keys().next().value
        
        if (this.cache.size < this.cacheSize) {
            this.cache.set(a, b)
            return this.cache
        } else if (this.cache.size === this.cacheSize) {
            this.cache.delete(firstItemInCache)
            this.cache.set(a, b)
            return this.cache
        }
    }
    getCache(a) {
        return this.cache
    }
    getCacheItem(a) {
        return this.cache.get(a)
    }
}

const myCache = new LRUCache(6)

myCache.setCache('a', 1)
myCache.setCache('b', 2)
myCache.setCache('c', 3)
myCache.setCache('d', 4)
myCache.setCache('e', 5)
myCache.setCache('f', 6)

console.log(myCache.getCache())
console.log(myCache.getCacheItem('a'))