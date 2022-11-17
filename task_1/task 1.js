/* Этап 1. Подготовка данных */
// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
// XML, который мы будем парсить
const xmlString = `
 <list>
  <student>
   <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
   </name>
   <age>35</age>
   <prof>teacher</prof>
  </student>
  <student>
   <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
   </name>
   <age>58</age>
   <prof>driver</prof>
  </student>
 </list>
`;
/* Этап 2. Получение данных */
// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const students = xmlDOM.querySelectorAll("student");

let listStudent = [];
students.forEach(item => {
  listStudent.push({
      name: 
    `${item.querySelector('first').textContent} 
    ${item.querySelector('second').textContent}`,
      age:
    `${Number(item.querySelector("age").textContent)}`,
      prof:
    `${item.querySelector('prof').textContent}`,
      lang:
      `${item.getAttribute('lang')}`
  })
});
console.log(listStudent);
    
/*{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
}*/
