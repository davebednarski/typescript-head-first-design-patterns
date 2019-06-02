import MenuComponent from "./MenuComponent";

export default class Menu extends MenuComponent {
    menuComponents:Array<MenuComponent> = new Array<MenuComponent>();
    public name: string;
    public description: string;

    constructor(name:string, description:string) {
        super();

        this.name = name;
        this.description = description;
    }
    
    public add(menuComponent:MenuComponent):void {
        this.menuComponents.push(menuComponent);
    }
    
    public remove(menuComponent:MenuComponent):void {
        let index: number = this.menuComponents.indexOf(menuComponent);
        this.menuComponents.splice(index, 1);
    }
    
    public getChild(i:number):MenuComponent {
        return this.menuComponents[i];
    }

    public getName(): string {
        return this.name;
    }
    
    public getDescription():string {
        return this.description;
    }
    
    public print():void {
        console.log("\n" + this.getName());
        console.log(", " + this.getDescription());
        console.log("---------------------");

        let i: number = 0;

        while (this.menuComponents[i]) {
            let menuComponent: MenuComponent = this.menuComponents[i];
            menuComponent.print();
            i++;
        }
    }
}