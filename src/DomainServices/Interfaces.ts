export interface User {
    Id:string;
    FirstName:string;
    LastName: string;
    Email:string;
    Pasword: string;
    PhoneNumber:string;
    Role:Number;    
}

export interface Card {
    id?: string;
    productName?:string;
    images?:string;
    brand?:string;
    ram?:number;
    hardisk?: number;
    description?:string;
    firtPrice?: Float32Array;
    failure?:string;
    user?:string;
}

/*export interface Pcs {
    Id:string;
    ProductName:string;
    Images: string;
    Brand: string;
    
    mt-4 grid grid-cols-1 gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3
}*/