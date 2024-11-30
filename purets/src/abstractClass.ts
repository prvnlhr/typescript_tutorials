/*
|> In TypeScript, an abstract class is a class that cannot be instantiated 
|> on its own and is meant to be subclassed by other classes. 
|> Abstract classes are primarily used as a base class to provide a common 
|> structure or interface for derived classes.
*/

abstract class TakePhoto {

    constructor(
        public cameraMode: string,
        public filter: string,
        public burstCount: number
    ) { }

    abstract getPixelCount(): void;  //|> Abstract method - no implementation in the base class

    getPageRes(): number {     //|> regular method with implementations
        return 152;
    }

}

class CameraApp extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstCount: number
    ) {
        super(cameraMode, filter, burstCount);
    }

    getPixelCount(): void {   //|> Implementation of the abstract method

        console.log("Pixel counts is 441ppi")
    }
}



// - Common Example

abstract class Shape {

    // Abstract method - no implementation in the base class
    abstract calculateArea(): number;

    // Regular method with implementation
    displayArea(): void {
        const area = this.calculateArea();
        console.log(`Area: ${area}`);
    }
}

class Circle extends Shape {

    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    // Implementation of the abstract method
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    // Implementation of the abstract method
    calculateArea(): number {
        return this.width * this.height;
    }
}

// Example usage
const circle = new Circle(5);
circle.displayArea(); // Output: Area: 78.53981633974483

const rectangle = new Rectangle(4, 6);
rectangle.displayArea(); // Output: Area: 24
