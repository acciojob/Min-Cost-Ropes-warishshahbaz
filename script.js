class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[index] < this.heap[parentIndex]) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyDown() {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let smallestChildIndex = leftChildIndex;
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
                smallestChildIndex = rightChildIndex;
            }
            if (this.heap[index] < this.heap[smallestChildIndex]) {
                break;
            }
            this.swap(index, smallestChildIndex);
            index = smallestChildIndex;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function mincost(arr) {
    const minHeap = new MinHeap();
    arr.forEach(length => minHeap.insert(length));

    let cost = 0;
    while (!minHeap.isEmpty()) {
        const first = minHeap.extractMin();
        const second = minHeap.extractMin();
        const combinedLength = first + second;
        cost += combinedLength;
        if (!minHeap.isEmpty()) {
            minHeap.insert(combinedLength);
        }
    }
    return cost;
}

// Test cases
console.log(mincost([4, 3, 2, 6])); // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33
