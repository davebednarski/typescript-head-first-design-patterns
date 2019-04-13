export default abstract class Beverage {
    private description: string;

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}