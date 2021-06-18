class LinkedListNode {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }

    toString(callback){
        return callback ? callback(this.value) : `${this.value}`
    }
}
class Comparator {

    constructor(compareFunction){
        this.compare = compareFunction || Comparator.defaultCompareFunction
    }

    /**
     * It just asunes that "a" and "b" are strings or numbers.
     * @returns {number}
     */
    static defaultCompareFunction(a, b){
        if(a === b){
            return 0
        }
    }

    /**
     * Checks if two variables are equal.
     * @returns {boolean}
     */
    equal(a, b){
        return this.compare(a, b) === 0
    }

    /**
     * Checks if variable "a" is less than "b".
     * @returns {boolean}
     */
    lessThan(a, b){
        return this.compare(a, b) < 0
    }

    /**
     * Checks if variable "a" is greater than "b".
     * @returns {boolean}
     */
    greaterThan(a, b){
        return this.compare(a, b) > 0
    }

    /**
     * Checks if variable "a" is less than or equal to "b".
     * @returns {boolean}
     */
    lessThanOrEqual(a, b){
        return this.lessThan(a, b) || this.equal(a, b)
    }

    /**
     * Checks if variable "a" is greater than or equal to "b".
     * @returns {boolean}
     */
    greaterThanOrEqual(a, b){
        return this.greaterThan(a, b) || this.equal(a, b)
    }

    /**
     * Reverses the comparison order.
     * 
     * KEEP MORE ATENTION HERE
     */
    reverse(){
        const compareOriginal = this.compare
        this.compare = (a, b) => compareOriginal(a, b)
    }
}

class LinkedList {

    /**
     * Default body.
     * @param {Function} comparatorFunction 
     */
    constructor(comparatorFunction){
        this.head = null
        this.tail = null
        this.compare = new Comparator(comparatorFunction)
    }

    /**
     * Make new node to be a head.
     * @param {*} value
     * @return {LinkedList}
     */
    prepend(value){
        const newNode = new LinkedListNode(value, this.head)
        this.head = newNode

        // If there is not tail yet, let's make new node a tail.
        if(!this.tail){
            this.tail = newNode
        }
        return this
    }

    /**
     * Make new node to the end of linked list.
     * @param {*} value
     * @return {LinkedList}
     */
    append(value){
        const newNode = new LinkedListNode(value)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return this
        }

        this.tail.next = newNode
        this.tail = newNode
        return this
    }

    /**
     * Delete the Tail Node. 
     * @return {LinkedListNode}
     */
    deleteTail(){
        const deletedTail = this.tail

        // If only there is one Node.
        if(this.head === this.tail){
            this.head = null
            this.tail = null
            return deletedTail
        }

        let currentNode = this.head
        while(currentNode.next){
            if(!currentNode.next.next){
                currentNode.next = null
            } else {
                currentNode = currentNode.next
            }
        }
        this.tail = currentNode
        return deletedTail
    }

    /**
     * Delete the Head Node. 
     * @return {LinkedListNode}
     */
    deleteHead(){
        if(!this.head){
            return null
        }

        const deletedHead = this.head
        if(this.head.next){
            this.head = this.head.next
        } else {
            this.head = null
            this.tail = null
        }
        return deletedHead
    }

    /**
     * Delete a node selected.
     * @param {*} value
     * @return {LinkedListNode}
     */
    delete(value){
        // ...
    }

    /**
     * Find a node selected.
     * @param {Object} findParams 
     * @param {*} findParams.value 
     * @param {function} [findParams.callback] 
     * @return {LinkedListNode}
     */
    find({ value = undefined, callback = undefined }){
        if(!this.head){
            return null
        }
        let currentNode = this.head

        while(currentNode){
            if(callback && callback(currentNode.value)){
                return currentNode
            }

            if(value !== undefined && this.compare.equal(currentNode.value, value)){
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null
    }

    /**
     * Array of values that need to be converted to linked list.
     * @param {*[]} values 
     */
    fromArray(values){
        values.forEach((value) => this.append(value))
        return this
    }

    /**
     * Convert linked list to array.
     * @return {LinkedListNode[]}
     */
    toArray(){
        const nodes = []
        let currentNode = this.head

        while (currentNode){
            nodes.push(currentNode)
            currentNode = currentNode.next
        }
        return nodes
    }

    /**
     * Convert linked list to string.
     * @param {function} [callback]
     * @return {LinkedListNode[]}
     */
    toString(callback){
        return this.toArray().map((node) => node.toString(callback)).toString()
    }

}

const myLinkedList = new LinkedList()