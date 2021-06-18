import Comparator from "../utils/Comparator"
import LinkedListNode from "./LinkedListNode"

export default class LinkedList {

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
}

const myLinkedList = new LinkedList()