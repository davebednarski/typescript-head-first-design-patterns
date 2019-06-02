import FlyBehavior from "./FlyBehavior";

export default class FlyRocketPowered implements FlyBehavior {

    fly(): string {
        return "I'm flying with a rocket!";
    }
}