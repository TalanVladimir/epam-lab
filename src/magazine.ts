import { Item } from './item';
import { Pages } from './pages';

export class Magazine extends Item {
    title: string;
    pages: Pages;

    constructor(title: string, pages: Pages) {
        super();
        this.title = title;
        this.pages = pages;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    toString() {
        return `Magazine: ${this.title} with number of pages: ${this.pages}`;
    }

    [Symbol.iterator]() {
        let step = 0;
        const iterator = {
            next() {
                step++;
                return { value: step, done: true };
            },
        };
        return iterator;
    }
}
