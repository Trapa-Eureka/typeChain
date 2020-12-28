interface immigrate {
    year: number;
    country: string;
    city: string;
}

const abroad = {
    year: 2021,
    country: "philippines",
    city: "metro manila"
};

const sayGo = (abroad: immigrate): string => {
    return `i will prepare to move to ${abroad.city} in the ${abroad.country} in ${abroad.year}!`;
};

console.log(sayGo(abroad));

export {};