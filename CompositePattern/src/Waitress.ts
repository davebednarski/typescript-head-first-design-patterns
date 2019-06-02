import MenuComponent from "./MenuComponent";

export default class Waitress {
    public allMenus: MenuComponent;

    constructor(allMenus:MenuComponent) {
        this.allMenus = allMenus;
    }

    public printMenu(): void {
        this.allMenus.print();
    }
}