
export type TypeCard ={
    id: string;
    productName:string;
    images:string;
    brand:{
        id:string;
        brandName:string;
    };
    ram:number;
    hardisk: number;
    description:string;
    firtPrice: Float32Array;
    failure:string;
    user:{
        id:string;
        firstName:string;
        lastName:string;

    };
}

export type TypeBrand = 
{
    id:string;
    brandName:string;
    imgUrl:string;
}