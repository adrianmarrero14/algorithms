class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    peek(){
        if(this.length === 0){
            return 'The Queue is Empty'
        } else {
            return this.first
        }
    }

    enqueue(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.first = newNode
            this.last = newNode
        }
        else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }

    dequeue(){
        if(this.length === 0){
            return 'The Queue is Empty'
        }
        this.first = this.first.next
        this.length--
    }
}

const myQueue = new Queue()