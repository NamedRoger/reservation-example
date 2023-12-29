export type Room = {
    cardImage: string,
    name: string,
    people: {
        min: number,
        max: number,
    },
    time: {
        min: 2,
        max: number,
    },
    price: number
};

const rooms: Room[] = [
    {
        name: "Ichi",
        cardImage: "https://daisukekaraoke.com/wp-content/uploads/2021/10/DSC5441-copia-scaled.jpg",
        people: {
            min: 6,
            max: 10
        },
        price: 200,
        time: {
            max: 2,
            min: 2
        }
    },
    {
        name: "Ni",
        cardImage: "https://daisukekaraoke.com/wp-content/uploads/2021/10/DSC5355-copia-scaled.jpg",
        people: {
            min: 8,
            max: 12
        },
        price: 200,
        time: {
            max: 6,
            min: 2
        }
    },
    {
        name: "San",
        cardImage: "https://daisukekaraoke.com/wp-content/uploads/2021/10/DSC5319-copia-scaled.jpg",
        people: {
            min: 4,
            max: 10
        },
        price: 200,
        time: {
            max: 12,
            min: 2
        }
    },
    {
        name: "Yon",
        cardImage: "https://daisukekaraoke.com/wp-content/uploads/2021/10/DSC5105-copia-scaled.jpg",
        people: {
            min: 2,
            max: 6
        },
        price: 200,
        time: {
            max: 10,
            min: 2
        }
    },
    {
        name: "Go",
        cardImage: "https://daisukekaraoke.com/wp-content/uploads/2021/10/DSC5183-copia-scaled.jpg",
        people: {
            min: 6,
            max: 10
        },
        price: 200,
        time: {
            max: 8,
            min: 2
        }
    },
    {
        name: "Roku",
        cardImage: "https://daisukekaraoke.com/wp-content/uploads/2021/10/DSC5239-copia-scaled.jpg",
        people: {
            min: 12,
            max: 18
        },
        price: 200,
        time: {
            max: 10,
            min: 2
        }
    },
];

export default rooms;