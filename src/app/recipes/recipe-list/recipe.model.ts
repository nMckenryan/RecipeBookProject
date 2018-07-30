// Basic model for the Recipe Object.
export class Recipe {
    name: string;
    description: string;
    imgPath: string;

    constructor(n: string, d: string, img: string) {
        this.name = n;
        this.description = d;
        this.imgPath = img;
    }
}
