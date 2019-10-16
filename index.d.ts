declare const isWritable: {
    /**
    * Syncronously check if a directory is writable.
    * @param directory The directory to check.
    * @param mode The fs constant directing the mode to use.
    */
    sync(directory: string, mode?: any): boolean

    /**
    * Asyncronously check if a directory is writable.
    * @param directory The directory to check.
    * @param mode The fs constant directing the mode to use.
    */
    async(directory: string, mode?: any): Promise<boolean>
}

export = isWritable;
