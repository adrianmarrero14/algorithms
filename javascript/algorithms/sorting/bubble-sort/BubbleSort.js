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

class Sort {
   constructor(originalCallbacks){
       this.callbacks = Sort.initSortingCallbacks(originalCallbacks)
       this.comparator = new Comparator(this.callbacks.compareCallback)
   } 

   /**
    * @param {SorterCallbacks} originalCallbacks
    * @returns {SorterCallbacks}
    */
   static initSortingCallbacks(originalCallbacks){
       const callbacks = originalCallbacks || {}
       const stupCallback = () => {}

       callbacks.compareCallback = callbacks.compareCallback || undefined
       callbacks.visitingCallback = callbacks.visitingCallback || stupCallback

       return callbacks
   }

   sort(){
       throw new Error('Sort Method must be implemented')
   }
}

class BubbleSort extends Sort {
    sort(originalArray){
        // Flag that holds info about wether the swap has occur or not.
        let swapper = false

        // Clone original array to prevent its modification.
        const array = [...originalArray]

        for(let i = 1; i < array.length; i += 1){
            swapped = false

            // Call visiting callback.
            this.callbacks.visitingCallback(array[i])

            for(let j = 0; j < array.length - i; j += 1){
                // Call visiting callback.
                this.callbacks.visitingCallback(array[j])

                // Swap elements if they are in wrong order.
                if(this.comparator.lessThan(array[j + 1], array[j])){
                    [array[j], array[j + 1]] = [array[j + 1], array[j]]

                    // Register the swap.
                    swapped = true
                }
            }

            // If there were no swaps then array is already sorted and there is no need to proceed.
            if(!swapped){
                return array
            }
        }
        return array
    }
}