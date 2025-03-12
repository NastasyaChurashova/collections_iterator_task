// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = [
	{
		title: "Living on the edge",
		artist: "Aerosmith",
		year: "1984",
	},
	{
		title: "Monkey",
		artist: "Louis Hay",
		year: "2010",
	},
	{
		title: "Heaven",
		artist: "Bryan Adams",
		year: "1995",
	},
];

console.log(musicCollection);

musicCollection[Symbol.iterator] = function () {
	return {
		current: 0,
		to: this.length,
		next() {
			return this.current < this.to ? { done: false, value: musicCollection[this.current++] } : { done: true };
		},
	};
};

for (let album of musicCollection){
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}

