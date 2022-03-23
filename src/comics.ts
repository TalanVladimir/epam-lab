import { Item } from './item';
import { Pages } from './pages';

export class Comics extends Item {
    title: string;
    artist: string;
    author: string;
    pages: Pages;

    constructor(title: string, artist: string, author: string, pages: Pages) {
        super();
        this.title = title;
        this.artist = artist;
        this.author = author;
        this.pages = pages;
    }

    toString(): string {
        return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages}`;
    }
}
