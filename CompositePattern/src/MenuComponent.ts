export default abstract class MenuComponent {

    public add(menuComponent: MenuComponent): void {
        throw new Error('UnsupportedOperationException');
    }

    public remove(menuComponent: MenuComponent): void {
        throw new Error('UnsupportedOperationException');
    }

    public getChild(i: number): MenuComponent {
        throw new Error('UnsupportedOperationException');
    }

    public getName(): string {
        throw new Error('UnsupportedOperationException');
    }

    public getDescription(): string {
        throw new Error('UnsupportedOperationException');
    }

    public getPrice(): number {
        throw new Error('UnsupportedOperationException');
    }

    public isVegetarian(): boolean {
        throw new Error('UnsupportedOperationException');
    }

    public print(): void {
        throw new Error('UnsupportedOperationException');
    }
}