const producers = [
  {
    name: "Стивен Спилберг",
    career: "Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр",
    films:
      "https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0",
    top_rated_film: "Список Шиндлера",
  },
  {
    name: "Кристофер Нолан",
    career:
      "Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор",
    films:
      "https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu",
    top_rated_film: "Начало",
  },
  {
    name: "Мартин МакДона",
    career: "Сценарист, Режиссёр, Продюсер",
    films: "https://www.film.ru/person/martin-makdonah",
    top_rated_film: "Три билборда на границе Эббинга, Миссури",
  },
  {
    name: "Алексей Балабанов",
    career: "Режиссёр, Сценарист, Актёр, Продюсер",
    films: "https://www.film.ru/person/aleksey-balabanov",
    top_rated_film: "Брат",
  },
  {
    name: "Питер Фаррелли",
    career: "Продюсер, Режиссёр, Сценарист, Актёр",
    films: "https://www.film.ru/person/piter-farrelli",
    top_rated_film: "Зелёная книга",
  },
  {
    name: "Юрий Быков",
    career: "Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер",
    films: "https://www.film.ru/person/yuriy-bykov",
    top_rated_film: "Дурак",
  },
  {
    name: "Жан-Марк Валле",
    career: "Режиссер, Продюсер, Монтажёр, Актёр, Сценарист",
    films: "https://www.film.ru/person/zhan-mark-valle",
    top_rated_film: "Далласский клуб покупателей",
  },
];

const cardList = document.querySelector(".card__list");
const topRatedFilmList = document.querySelector(".top_rated_film");

//Функция, которая создает разметку и помещает туда элементы из массива producers
const createPruducerCard = (obj) => {
  //создаем контейнер для информации о режиссерaх
  const block = document.createElement("div");
  block.className = "card__item";
  //создаем контейнер для имени режиссера
  const name = document.createElement("p");
  name.className = "card__name heading";
  name.textContent = obj.name; //берем значение из массива producers строки name
  //создаем контейнер для информации о карьере режиссера
  const career = document.createElement("p");
  career.className = "card__career";
  career.textContent = obj.career; //берем значение из массива producers строки career
  //добавляем гиперссылку на фильмографию
  const films = document.createElement("a");
  films.className = "card__films";
  films.href = obj.films; //берем значение из массива producers строки films
  films.textContent = "Фильмография";
  //создаем контейнер для информации о лучших фильмах режиссера
  const topRatedFilm = document.createElement("p");
  topRatedFilm.className = "card__topRatedFilm";
  topRatedFilm.textContent = obj.top_rated_film; //берем значение из массива producers строки top_rated_film

  //вставляем созданные выше элементы name, career, films в элемент block
  block.append(name);
  block.append(career);
  block.append(films);

  //возвращаем готовый блок с разметкой и заполненный элементами из массива
  return block;
};

//Функция, которая будет добавлять новые блоки к уже созданным
const addProducerCard = (objItem, container) => {
  const item = createPruducerCard(objItem);
  container.append(item);
};

//Событие загрузки DOM элементов
document.addEventListener("DOMContentLoaded", () => {
  producers.forEach((element) => {
    addProducerCard(element, cardList);
  });
});

// Создаем новый массив с названиями лучших фильмов режиссеров
const topFilmsList = producers.map((obj) => {
  return obj.top_rated_film;
});

//Выводим лучшие фильмы режиссеров
document.addEventListener("DOMContentLoaded", () => {
  topRatedFilmList.textContent = topFilmsList.join(", ");
});
