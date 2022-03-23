import { Item } from './item';
import { Pages } from './pages';

export class Book extends Item {
    title: string;
    author: string;
    pages: Pages;

    constructor(title: string, author: string, pages: Pages) {
        super();
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getTitle(): string {
        return this.title;
    }

    setAuthor(author: string) {
        this.author = author;
    }

    getAuthor(): string {
        return this.author;
    }

    toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages}`;
    }

    [Symbol.iterator]() {
        return this;
    }

    next() {
        return { value: this.title };
    }
}
