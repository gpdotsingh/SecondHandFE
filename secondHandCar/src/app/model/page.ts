export interface CarDetails {
    id: number;
    make: string;
    model: string;
    yearModel: number;
    price: number;
    licensed: boolean;
    dateAdded: string;
    latitude: string;
    longitude: string;
    wareHouseId: number;
    wareHouse: string;
}

export interface Page {
    content: CarDetails[];
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}