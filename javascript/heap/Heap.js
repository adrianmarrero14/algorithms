export default class Comparator {

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
        return Math.floor((childIndex -1) / 2)
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
}