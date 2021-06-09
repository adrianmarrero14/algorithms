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
        $hash = 0;
        foreach ($key as $k) {
            $hash = ($hash + $key->charCodeAt($k) * $k) % $this->data->length();
        }
        return $hash;
    }

    /**
     * Set the key and the value.
     * 
     * @return array
     */
    public function set($key, $value)
    {
        $address = $this->hashMethod($key);
        if (!$this->data[$address]) {
            $this->data[$address] = [];
        }
        $this->data[$address]->push([$key, $value]);
        return $this->data;
    }

    /**
     * Get the key.
     * 
     * @return array
     */
    public function get($key)
    {
        $address = $this->hashMethod($key);
        $currentBucket = $this->data[$address];
        if ($currentBucket) {
            foreach ($currentBucket as $k) {
                // IMCOMPLETE
            }
        }
    }
}

// THE 99% OF THIS CODE DON'T FORGET. PLEASE DON'T COPY THIS.
