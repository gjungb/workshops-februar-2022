/**
 * A book is a thing that can be read
 */
export interface Book {
    /**
     * The ...
     * 
     * @link {https://de.wikipedia.org/wiki/Internationale_Standardbuchnummer}
     */
    isbn?: string;
    /**
     * The title
     */
    title: string;
    /**
     * The person who wrote the book
     * 
     * @example Herman Melville
     */
    author: string;
    /**
     * A short description of the content
     */
    abstract?: string;

    numPages?: number;
}
