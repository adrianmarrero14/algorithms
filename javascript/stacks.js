class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Stack {
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek(){
        if(this.length === 0){
            return 'The Stack is Empty'
        } else {
            return this.top
        }
    }

    push(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.top = newNode
            this.bottom = newNode
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length++
        return this
    }

    pop(){
        if(this.length === 0){
            return 'The Stack is Empty'
        } 
        if(this.length === 1){
            this.top = null
            this.bottom = null
            this.length = 0
        }
        else {
            this.top =  this.top.next
            this.length--
        }
    }
}

const myStack = new Stack