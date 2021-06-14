<?php

class HashTable 
{
    private function __construct($size)
    {
        $this->data = [$size];
    }

    /**
     * This is the hash function, like a blackbox.
     * 
     * @return integer
     */
    public function hashMethod($key)
    {
        
    }

    /**
     * Set the key and the value.
     * 
     * @return array
     */
    public function set($key, $value)
    {
        
    }

    /**
     * Get the key.
     * 
     * @return array
     */
    public function get($key)
    {
        
    }
}
