export class Page {
    pageNumber: number;
    pageMaterial: string;
    pageType: string;

    constructor(pageNumber: number, pageMaterial: string, pageType: string) {
        this.pageNumber = pageNumber;
        this.pageMaterial = pageMaterial;
        this.pageType = pageType;
    }

    toString(): string {
        return `here is page ${this.pageMaterial} #${this.pageNumber} and it's material is ${this.pageType}`;
    }
}
