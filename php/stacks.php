<?php

class Node
{
    function __construct($value)
    {
        $this->value = $value;
        $this->next = null;
    }
}

class Stack
{
    function __construct()
    {
        $this->top = null;
        $this->bottom = null;
        $this->length = 0;
    }

    public function peek()
    {
        if($this->length === 0)
        {
            return 'The Stack is Empty';
        } 
        else 
        {
            return $this->top;
        }
    }

    public function takeLast()
    {
        if($this->length === 0)
        {
            return 'The Stack is Empty';
        } 
        else 
        {
            $top = $this->top;
            $this->pop();
            return $top;
        }
    }

    public function push($value)
    {
        $newNode = new Node($value);
        if($this->length === 0)
        {
            $this->top = $newNode;
            $this->bottom = $newNode;
        }
        else
        {
            $holdingPointer = $this->top;
            $this->top = $newNode;
            $this->top->next = $holdingPointer;
        }
        $this->length++;
        return $this;
    }


    public function pop()
    {
        if($this->length === 0)
        {
            return 'The Stack is Empty';
        }
        if($this->length === 1)
        {
            $this->top = null;
            $this->bottom = null;
            $this->length = 0;
        }
        else
        {
            $this->top = $this->top->next;
            $this->length--;
        }
    }
}

$myStack = new Stack;