import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'João',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'John Doe',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },

    ],
    products: [
        {
            name: 'Chocolate Icecream',
            category: 'Icecream',
            image: '/images/choc_1.png',
            price: 15,
            countInStock: 10,
            brand: 'Nestlé',
            rating: 4.5,
            numReviews: 10,
            description: 'Best icecream.'
        }, {
            name: 'Strawberry Icecream',
            category: 'Icecream',
            image: '/images/straw_1.png',
            price: 5,
            countInStock: 0,
            brand: 'Olá',
            rating: 3.5,
            numReviews: 5,
            description: 'Kinda good icecream.'
        }, {
            name: 'Vanilla Icecream',
            category: 'Icecream',
            image: '/images/vani_1.png',
            price: 2,
            countInStock: 5,
            brand: 'Ben&Jerry',
            rating: 1,
            numReviews: 2,
            description: 'Meh icecream.'
        }
    ]
}

export default data;