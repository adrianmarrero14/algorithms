class Heap {

    /**
     * @constructs Heap
     * @param {Function} [comparatorFunction]
     */
    constructor(comparatorFunction){
        if(new.target === Heap){
            throw new TypeError('Cannot construct Heap instance directly')
        }

        this.heapContainer = []
        this.compare = new Comparator(comparatorFunction)
    }

    /**
     * @param {number} parentIndex 
     * @return {number}
     */
    getLeftChildIndex(parentIndex){
        return (2 * parentIndex) + 1
    }

    /**
     * @param {number} parentIndex 
     * @return {number}
     */
    getRightChildIndex(parentIndex){
        return (2 * parentIndex) + 2
    }

    /**
     * @param {number} childIndex 
     * @return {number}
     */
    getParentIndex(parentIndex){
        return Math.floor((childIndex - 1) / 2)
    }

    /**
     * @param {number} childIndex
     * @return {boolean}
     */
    hasParent(childIndex){
        return this.getParentIndex(childIndex) >= 0
    }

    /**
     * @param {number} parentIndex
     * @return {boolean}
     */
    hasLeftChild(parentIndex){
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length
    }

    /**
     * @param {number} parentIndex
     * @return {boolean}
     */
    hasRightChild(parentIndex){
        return this.getRightChildIndex(parentIndex) < this.heapContainer.length
    }

    /**
     * @param {number} parentIndex
     * @return {*}
     */
    leftChild(parentIndex){
        return this.heapContainer[this.getLeftChildIndex(parentIndex)]
    }

    /**
     * @param {number} parentIndex
     * @return {*}
     */
    rightChild(parentIndex){
        return this.heapContainer[this.getRightChildIndex(parentIndex)]
    }

    /**
     * @param {number} childIndex
     * @return {*}
     */
    parent(childIndex){
        return this.heapContainer[this.getParentIndex(childIndex)]
    }

    /**
     * @param {number} indexOne
     * @param {number} indexTwo
     */
    swap(indexOne, indexTwo){
        const temp = this.heapContainer[indexTwo]
        this.heapContainer[indexTwo] = this.heapContainer[indexOne]
        this.heapContainer[indexOne] = temp
    }

    /**
     * @return {*}
     */
    peek(){
        if(this.heapContainer.length === 0){
            return null
        }
        return this.heapContainer[0]
    }

    /**
     * @return {*}
     */
    poll(){
        if(this.heapContainer.length === 0){
            return null
        }

        if(this.heapContainer.length === 1){
            return this.heapContainer.pop()
        }
        const item = this.heapContainer[0]

        this.heapContainer[0] = this.heapContainer.pop()
        this.heapifyDown()
        return item
    }

    /**
     * @param {*} item
     * @return {Heap}
     */
    add(item){
        this.heapContainer.push(item)
        this.heapifyUp()
        return this
    }

    /**
     * @param {*} item 
     * @param {Comparator} [comparator]
     */
    find(item, comparator = this.compare){
        const foundItemIndices = []

        for(let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1){
            if(comparator.equal(item, this.heapContainer[itemIndex])) {
                foundItemIndices.push(itemIndex)
            }
        }
        return foundItemIndices
    }

    /**
     * @param {*} item 
     * @param {Comparator} [comparator]
     * @return {Heap}
     */
    remove(item, comparator = this.compare){
        const numberOfItemsToRemove = this.find(item, comparator).length

        for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1){
            const indexToRemove = this.find(item, comparator).pop()

            if(indexToRemove === (this.heapContainer.length - 1)){
                this.heapContainer.pop()
            } else {
                this.heapContainer[indexToRemove] = this.heapContainer.pop()

                const parentItem = this.parent(indexToRemove)

                if(
                    this.hasLeftChild(indexToRemove)
                    && (
                        !parentItem
                        || this.pairIsIncorrectOrder(parentItem, this.heapContainer[indexToRemove])
                    )
                ){
                    this.heapifyDown(indexToRemove)
                } else {
                    this.heapifyUp(indexToRemove)
                }
            }
        }
        return this
    }

    /**
     * @param {number} [customStartIndex]
     */
    heapifyDown(customStartIndex = 0){
        let currentIndex = customStartIndex
        let nextIndex = null

        while(this.hasLeftChild(currentIndex)){
            if(
                this.hasRightChild(currentIndex)
                && this.pairIsIncorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))
            ){
                nextIndex = this.getRightChildIndex(currentIndex)
            } else {
                nextIndex = this.getLeftChildIndex(currentIndex)
            }

            if(this.pairIsIncorrectOrder(
                this.heapContainer[currentIndex],
                this.heapContainer[nextIndex]
            )){
                break
            }

            this.swap(currentIndex, nextIndex)
            currentIndex = nextIndex
        }
    }

    /**
     * @param {number} [customStartIndex]
     */
    heapifyUp(customStartIndex){
        let currentIndex = customStartIndex ||  this.heapContainer.length - 1

        while(
            this.hasParent(currentIndex)
            && !this.pairIsIncorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])
        ){
            this.swap(currentIndex, this.getParentIndex(currentIndex))
            currentIndex = this.getParentIndex(currentIndex)
        }
    }

    /**
     * @param {*} firstElement
     * @param {*} secondElement
     * @return {boolean}
     */
    pairIsIncorrectOrder(firstElement, secondElement){
        throw new Error(`
            You have to implement heap pair comparision method
            for ${firstElement} and ${secondElement} values.
            `)
    }

    /**
     * @return {boolean}
     */
    isEmpty(){
        return !this.heapContainer.length
    }

    /**
     * @return {string}
     */
    toString(){
        return this.heapContainer.toString()
    }
}

class MinHeap extends Heap {

    /**
     * @param {*} firstElement
     * @param {*} secondElement
     * @return {boolean}
     */
    pairIsIncorrectOrder(firstElement, secondElement){
        return this.compare.lessThanOrEqual(firstElement, secondElement)
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

class PriorityQueue extends MinHeap {
    constructor(){
        // Call MinHeap constructor first.
        super()

        // Setup priorities map.
        this.priorities = new Map()

        // Use custom comparator for heap elements
        this.compare = new Comparator(this.comparePriority.bind(this))
    }

    /**
     * @param {*} item
     * @param {number} [priority] 
     * @return {PriorityQueue}
     */
    add(item, priority = 0){
        this.priorities.set(item, priority)
        super.add(item)
        return this
    }

    /**
     * @param {*} item
     * @param {Comparator} [customFindingComparator]
     * @return {PriorityQueue}
     */
    remove(item, customFindingComparator){
        super.remove(item, customFindingComparator)
        this.priorities.delete(item)
        return this
    }

}