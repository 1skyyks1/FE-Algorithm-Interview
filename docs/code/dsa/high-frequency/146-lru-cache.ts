class LRUCache {
    capacity: number;
    map: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key: number): number {
        const val = this.map.get(key);
        if (this.map.has(key)) {
            this.map.delete(key);
            this.map.set(key, val);
            return val;
        }
        else {
            return -1;
        }
    }

    put(key: number, value: number): void {
        if(this.map.has(key)){
            this.map.delete(key);
        }
        else if (this.map.size >= this.capacity) {
            this.map.delete(this.map.keys().next().value);
        }
        this.map.set(key, value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */