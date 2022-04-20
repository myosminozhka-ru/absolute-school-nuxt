export const state = () => ({
  
   "orders":[
      {
         "id": "0000000001",
         "status": "Оформлен",
         "data": "27.04.2021",
         "user": "bxu1",
         "basket":[
            {
               "id":3,
               "quantity":2
            },
            {
               "id":4,
               "quantity":1
            }
         ]
      }
   ],
   "products": [
      {
         "id": 3,
         "image": "https://myosminozhka-ru.github.io/absolute-school/dist/img/shirt.png",
         "price": 14500,
         "name": "Название в три слова и максимум 2 строки",
         "description": "белая футболка для занятий спортом (с принтом школы абсолют)белая футболка для занятий спортом (с принтом школы абсолют)"
      }
   ]
})

export const mutations = {}

export const actions = {}

export const getters = {}
