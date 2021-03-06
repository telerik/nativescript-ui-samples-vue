import { TokenModel } from 'nativescript-ui-autocomplete';

// >> autocomplete-custom-token-model-ts-vue
export class CityModel extends TokenModel {
    public id: number;
    public city: string;
    public country: string;
    constructor(id: number, city: string, country: string, image: string) {
        super(city + ", " + country, image);

        this.id = id;
        this.city = city;
        this.country = country;
    }

    toString() {
        return this.id + ": " + this.city + ", " + this.country;
    }
}
// << autocomplete-custom-token-model-ts-vue