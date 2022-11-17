const jsonString = `
 {
    "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;
//console.log('jsonString', jsonString);

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);

const list = data.list;

/* Этап 3. Запись данных в результирующий объект */

const Petr = {
name: list.name,
age: Number(list.age),
prof: list.prof,
};
const Vova = {
name: list.name,
age: Number(list.age),
prof: list.prof,
};
const List = [Petr, Vova];
list.forEach(element => console.log(element));