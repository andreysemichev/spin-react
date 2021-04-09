import paths from "../paths";

const _items = [
    {
        itemName: "Новинки",
        link: "/",
        bottomButton: {
            name: "Сдать на комиссию",
            link: "/"
        },
        items: [
            {
                name: "Новинки этой недели",
                items: [
                    {
                        name: "Посмотреть все",
                        link: "/"
                    },
                    {
                        name: "На текущий сезон",
                        link: "/"
                    },
                ]                
            },
            {
                name: "По категориям",
                items: [
                    {
                        name: "Женское",
                        link: "/"
                    },
                    {
                        name: "Мужское",
                        link: "/"
                    },
                ],
            },
            {
                name: "По брендам",
                items: [
                    {
                        name: "Rick Owens",
                        link: "/"
                    },
                    {
                        name: "Belenciaga",
                        link: "/"
                    },
                    {
                        name: "Balmain",
                        link: "/"
                    },
                    {
                        name: "424 On Fairfax",
                        link: "/"
                    },
                    {
                        name: "Walter Van Beirendonck",
                        link: "/"
                    },
                    {
                        name: "Comme Des Garcons",
                        link: "/"
                    },
                    {
                        name: "Saint Laurent Paris",
                        link: "/"
                    },
                    {
                        name: "Enfants Riches Deprimes",
                        link: "/"
                    },
                ],
            },
            {
                name: "По размерам",
                items: [
                    {
                        name: "XS",
                        link: "/"
                    },
                    {
                        name: "S",
                        link: "/"
                    },
                    {
                        name: "M",
                        link: "/"
                    },
                    {
                        name: "L",
                        link: "/"
                    },
                    {
                        name: "XL",
                        link: "/"
                    },
                    {
                        name: "XXL",
                        link: "/"
                    },
                    {
                        name: "Uni",
                        link: "/"
                    }
                ],
            },
        ]
    },
    {
        itemName: "Дизайнеры",
        link: "/",
        bottomButton: {
            name: "Посмотреть все",
            link: "/"
        },
        items: [
            {
                name: "Стрит",
                items: [
                    {
                        name: "Balenciaga",
                        link: "/"
                    },
                    {
                        name: "Vetements",
                        link: "/"
                    },
                    {
                        name: "Amiri",
                        link: "/"
                    },
                    {
                        name: "Enfants Riches Deprimes",
                        link: "/"
                    },
                    {
                        name: "Undercover",
                        link: "/"
                    },
                    {
                        name: "Yeeze Season",
                        link: "/"
                    },
                    {
                        name: "READYMADE",
                        link: "/"
                    },
                ]                
            },
            {
                name: "Авангард",
                items: [
                    {
                        name: "Carol Christian Poell",
                        link: "/"
                    },
                    {
                        name: "Boris Bidjan Saberi",
                        link: "/"
                    },
                    {
                        name: "MA+",
                        link: "/"
                    },
                    {
                        name: "Greg Lauren",
                        link: "/"
                    },
                    {
                        name: "Attachment",
                        link: "/"
                    },
                    {
                        name: "Devoa",
                        link: "/"
                    },
                ],
            },
            {
                name: "Люкс",
                items: [
                    {
                        name: "Saint Laurent Paris",
                        link: "/"
                    },
                    {
                        name: "Amiri",
                        link: "/"
                    },
                    {
                        name: "Haider Ackermann",
                        link: "/"
                    },
                    {
                        name: "Thom Browne",
                        link: "/"
                    },
                    {
                        name: "Gucci",
                        link: "/"
                    },
                    {
                        name: "Balmain",
                        link: "/"
                    },
                    {
                        name: "Tom Ford",
                        link: "/"
                    },
                ],
            },
            {
                name: "Архив",
                items: [
                    {
                        name: "Dior",
                        link: "/"
                    },
                    {
                        name: "Mainson Margiela",
                        link: "/"
                    },
                    {
                        name: "Raf Simons",
                        link: "/"
                    },
                    {
                        name: "Yohji Yamamoto",
                        link: "/"
                    },
                    {
                        name: "Number (N)ine",
                        link: "/"
                    },
                    {
                        name: "A Bathing Ape",
                        link: "/"
                    },
                    {
                        name: "Guilty Parties (Wacko Maria)",
                        link: "/"
                    }
                ],
            },
        ]
    },
    {
        itemName: "Мужское",
        link: "/",
        bottomButton: {
            name: "Re-продажа",
            link: "/"
        },
        items: [
            {
                name: "Дизайнеры",
                items: [
                    {
                        name: "Saint Laurent Paric",
                        link: "/"
                    },
                    {
                        name: "Yohji Yamamoto",
                        link: "/"
                    },
                    {
                        name: "Haider Ackerman",
                        link: "/"
                    },
                    {
                        name: "Comme Des Garcons Homme+",
                        link: "/"
                    },
                    {
                        name: "Maison Margiela",
                        link: "/"
                    },
                    {
                        name: "Greg Lauren",
                        link: "/"
                    },
                    {
                        name: "Rick Owens",
                        link: "/"
                    },
                ]                
            },
            {
                name: "Категории",
                items: [
                    {
                        name: "Верх",
                        link: "/"
                    },
                    {
                        name: "Верхняя одежда",
                        link: "/"
                    },
                    {
                        name: "Обувь",
                        link: "/"
                    },
                    {
                        name: "Низ",
                        link: "/"
                    },
                    {
                        name: "Другое",
                        link: "/"
                    },
                ],
            },
            {
                name: "Аксессуары",
                items: [
                    {
                        name: "Украшения и другое",
                        link: "/"
                    },
                    {
                        name: "Сумки и кошельки",
                        link: "/"
                    },
                    {
                        name: "Ремни",
                        link: "/"
                    },
                    {
                        name: "Галстуки, запонки, носки",
                        link: "/"
                    },
                    {
                        name: "Очки",
                        link: "/"
                    },
                    {
                        name: "Головные уборы",
                        link: "/"
                    },
                    {
                        name: "Шарфы, платки, перчатки",
                        link: "/"
                    },
                ],
            },
            {
                name: "Особенное",
                items: [
                    {
                        name: "Новое с тегами",
                        link: "/"
                    },
                    {
                        name: "Sale",
                        link: "/"
                    },
                ],
            },
        ]
    },
    {
        itemName: "Sale",
        link: "/",
        bottomButton: null,
        items: [
            {
                name: "Категории",
                items: [
                    {
                        name: "Женское",
                        link: "/"
                    },
                    {
                        name: "Мужское",
                        link: "/"
                    },
                ]                
            },
            {
                name: "Категории",
                items: [
                    {
                        name: "Верх",
                        link: "/"
                    },
                    {
                        name: "Верхняя одежда",
                        link: "/"
                    },
                    {
                        name: "Обувь",
                        link: "/"
                    },
                    {
                        name: "Низ",
                        link: "/"
                    },
                    {
                        name: "Другое",
                        link: "/"
                    },
                ],
            },
        ]
    },
    {
        itemName: "Медиа",
        link: "/",
        items: null
    },
    {
        itemName: "Продать",
        link: "/",
        items: null
    }, 
];

const actions = {
    setItems: items => ({
        type: paths.menu.setItems,
        payload: items
    }),

    fetchItems: () => dispatch => {
        // загрузка с сервера
        dispatch(actions.setItems(_items));
    },

    setIsLoading: flag => ({
        type: paths.menu.setIsLoading,
        payload: flag
    }),
};

export default actions;