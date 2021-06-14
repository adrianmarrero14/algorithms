class ArrayClass 
{
    constructor()
    {
        this.length = 0
        this.data = {}
    }

    get(index)
    {
        return this.data[index]
    }

    push(item)
    {
        this.data[this.length] = item
        this.length++
        return this.data
    }

    pop()
    {
        let last_value = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return last_value
    }

    deleteIndex(index)
    {
        let element = this.data[index]
        this.shiftIndex(index)
        return element
    }

    shiftIndex(index)
    {
        for(let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
    }

    // unShift(){  }
    // deleteFirst(){ }
    // addFirst(){ }
}

const my_array = new ArrayClass()