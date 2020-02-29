declare const isWritable: {
	/**
	 * Asyncronously check if a directory is writable.
	 * @param filename The directory to check.
	 * @example
	 * ```
	 * const isWritable = require("is-writable");
     *
     * (async () => {
     * 	await isWritable(directory)
     * 	//=> true
     * })()
	 * ```
	 */
	(filename: string): Promise<boolean>

    /**
    * Syncronously check if a directory is writable.
    * @param filename The directory to check.
	 * @example
	 * ```
	 * const isWritable = require("is-writable");
     *
	 * isWritable.sync(directory)
	 * //=> true
	 * ```
    */
	sync(filename: string): boolean
}

export = isWritable
