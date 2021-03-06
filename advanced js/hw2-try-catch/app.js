const books = [
    {
        author: "Скотт Бэккер",
        name: "Тьма, что приходит прежде",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Воин-пророк",
    },
    {
        name: "Тысячекратная мысль",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Нечестивый Консульт",
        price: 70
    },
    {
        author: "Дарья Донцова",
        name: "Детектив на диете",
        price: 40
    },
    {
        author: "Дарья Донцова",
        name: "Дед Снегур и Морозочка",
    },
];

function showList(list) {
    const root = document.getElementById('root');
    const ul = document.createElement('ul');
    root.append(ul);

    function showErrMessage(el, missedProps) {
        throw new ReferenceError(`Book - ${el.name} is invalid, missed properties: ${missedProps.join(', ')}`);
    }

    books.forEach(el => {
        try {
            const {author, name, price} = el;
            if (!name || !author || !price) {
                const requireProperties = ['name', 'author', 'price'];
                const missedProperties = requireProperties.filter(elem => !Object.keys(el).includes(elem))
                showErrMessage(el, missedProperties);
            } else {
                let li = document.createElement('li');
                ul.append(li);
                li.append(`Author - ${author}, Name - ${name}, Price - ${price}`);
            }
        } catch (err) {
            console.error(err.message);
        }
    })
}

showList(books);
