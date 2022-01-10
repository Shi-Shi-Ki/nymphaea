export declare class CreateCatInput {
    name?: string;
    age?: number;
}
export declare abstract class IQuery {
    abstract cats(): Cat[] | Promise<Cat[]>;
    abstract cat(id: string): Cat | Promise<Cat>;
}
export declare abstract class IMutation {
    abstract createCat(createCatInput?: CreateCatInput): Cat | Promise<Cat>;
}
export declare abstract class ISubscription {
    abstract catCreated(): Cat | Promise<Cat>;
}
export declare class Owner {
    id: number;
    name: string;
    age?: number;
    cats?: Cat[];
}
export declare class Cat {
    id?: number;
    name?: string;
    age?: number;
    owner?: Owner;
}
