/**
 * A book is a thing that can be read
 */
export interface Book {
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
