class immigrate {
    public year: number;
    public country: string;
    public city: string;
    constructor(year: number, country: string, city: string) {
        this.year = year;
        this.country = country;
        this.city = city;
    }
}

const abroad = new immigrate(2021, "Philippines", "Metro Manila");

const sayGo = (abroad: immigrate): string => {
    return `i will prepare to move to ${abroad.city} in the ${abroad.country} in ${abroad.year}!`;
};

console.log(sayGo(abroad));

export {};