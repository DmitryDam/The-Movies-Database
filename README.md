To open this App just follow this link:
https://dmitrydam.github.io/The-Movies-Database/build


## The Movie Database (API+LocalStorage) on ReactJS.

* Реализован поиск кинофильмов через API, по имени.
* По прибытию данных от API, по полученой информации, происходит рендер
  карточек в галлерее.
* При первой загрузке страницы автоматически приходит и отображатется
  популярные кинофильмы.
* Добавлена панель **Watchlist**, в которую будут добавляться/удаляться те
  карточки, которые были отмечены пользователем.
* Реализована возможность добавлять карточки в **Watchlist** при помощи кнопки +
  на карточке кинофильма в галлерее. Карточки добавляются в **watchlist**,
  массив карточек "любимых" фильмов.
* В **Watchlist** не попадают дубликаты. Если добавляемый кинофильм уже есть
  в Watchlist, не добавляется.
* Реализована возможность удаления карточки из **Watchlist** при помощи кнопки -
  на карточке в списке **Watchlist**.

* Список карточек **watchlist** сохраняется в **localStorage**, чтобы после
  перезагрузки страницы пользователь все еще видел выбраные карточки.
* Созданы 3 кнопки для поиска кинофильмов по категориям: popular, top rated и
  upcoming.

#### API

* Api Endpoint: https://api.themoviedb.org/3/
* [Документация по поиску кинофильма по имени](https://developers.themoviedb.org/3/search/search-movies)
* [Документация по категориям поиска](https://developers.themoviedb.org/3/tv)
