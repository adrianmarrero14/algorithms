class DoublyLinkedListNode {
    constructor(value, next = null, previous = null){
        this.value = value
        this.next = next
        this.previous = previous
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

class DoublyLinkedList {
    /**
     * @param {Function} comparatorFunction 
     */
    constructor(comparatorFunction){
        this.head = null
        this.tail = null
        this.compare = new Comparator(comparatorFunction)
    }

    /**
     * @param {*} value
     * @return {DoublyLinkedList}
     */
    prepend(value){
        const newNode = new DoublyLinkedListNode(value, this.head)

        if(this.head){
            this.head.previous = newNode
        }

        this.head = newNode

        if(!this.tail){
            this.tail = newNode
        }
        return this
    }

    /**
     * @param {*} value
     * @return {DoublyLinkedList}
     */
    append(){
        const newNode = new DoublyLinkedListNode(value)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
            
            return this
        }

        this.tail.next = newNode

        newNode.previous = this.tail

        this.tail = newNode
        
        return this
    }

    /**
     * @param {*} value
     * @return {DoublyLinkedListNode}
     */
    delete(){

    }

    /**
     * @param {Object} findParams
     * @param {*} findParams.value
     * @param {Function} [findParams.callback]
     * @return {DoublyLinkedListNode}
     */
    find(){

    }

    /**
     * @return {DoublyLinkedListNode}
     */
    deleteTail(){

    }

    /**
     * @return {DoublyLinkedListNode}
     */
    deleteHead(){

    }

    /**
     * @return {DoublyLinkedListNode[]}
     */
    toArray(){

    }

    /**
     * @param {*[]} values
     * @return {DoublyLinkedList}
     */
    fromArray(){

    }

    /**
     * @param {Function} [callback]
     * @return {string}
     */
    toString(){

    }

    /**
     * @return {DoublyLinkedList}
     */
    reverse(){

    }
}