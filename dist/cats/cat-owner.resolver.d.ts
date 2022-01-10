import { Cat, Owner } from '../graphql.schema';
import { OwnersService } from '../owners/owners.service';
export declare class CatOwnerResolver {
    private readonly ownersService;
    constructor(ownersService: OwnersService);
    owner(cat: Cat & {
        ownerId: number;
    }): Promise<Owner>;
}
