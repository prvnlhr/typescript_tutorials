// interface TakePhoto {
//     cameraMode: string,
//     filter: string,
//     burstCount: number
// }


// interface ScannerProps {
//     pageSize: string,
//     pagePixelDensity: number
//     scanPage: () => void
// }


// class AdobeScannerApp implements TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burstCount: number) { }
// }

// class OfficeLensApp implements TakePhoto, ScannerProps {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burstCount: number,
//         public pageSize: string,
//         public pagePixelDensity: number
//     ) { }

//     scanPage(): void {

//     }

// }


type Name = { firstName: string; lastName: string };
type Age = { age: number };

type Person = Name & Age;

// let person: Person = { firstName: "John", lastName: "Doe", age: 30 };
let person: Age = { age: 30 };

