class Queue<T> {
    private queue: Array<T> = [];

    public enqueue(item: T): void {
        this.queue.push(item);
    }

    public dequeue(): T | undefined {
        return this.queue.shift();
    }

    public size(): number {
        return this.queue.length;
    }
}

const numberQueue = new Queue<number>();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
numberQueue.enqueue(3);
console.log(numberQueue.size());
console.log(numberQueue.dequeue());
console.log(numberQueue.size());


const nameQueue = new Queue<string>();
nameQueue.enqueue('Tin Tin');
nameQueue.enqueue('Batman');
nameQueue.enqueue('Ironman');
console.log(nameQueue.size());
console.log(nameQueue.dequeue());
console.log(nameQueue.size());
