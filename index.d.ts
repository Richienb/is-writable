declare const isWritable: {
	/**
	Asynchronously check if a directory is writable.
	@param filepath The file or directory to check.
	@example
	```
	const isWritable = require("is-writable");

    (async () => {
    	await isWritable("file.txt");
    	//=> true
    })();
	```
	*/
	(filepath: string): Promise<boolean>

	/**
    Synchronously check if a directory is writable.
    @param filepath The file directory to check.
	@example
	```
	const isWritable = require("is-writable");

	isWritable.sync("directory");
	//=> true
	```
    */
	sync(filepath: string): boolean
}

export = isWritable
