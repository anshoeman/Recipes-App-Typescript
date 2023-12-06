//Blueprint of each of the item in a list of the recipes
export class RecipesModel {
    public name: string;
    public imagePath: string;
    public description: string;
    //as it will get instantiated and we need n number of list items we will be difining a constructor
    constructor(name: string, desc: string, imagePath: string) {
        this.name = name
        this.description = desc
        this.imagePath = imagePath
    }
}