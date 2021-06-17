import Comparator from "../utils/Comparator"
import LinkedListNode from "./LinkedListNode"

export default class LinkedList {

    constructor(comparatorFunction){
        this.head = null
        this.tail = null
        this.compare = new Comparator(comparatorFunction)
    }
}