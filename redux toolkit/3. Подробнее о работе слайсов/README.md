В этом упражнении нужно доработать приложение имитирующее форум. На данном этапе происходит только отрисовка полученных данных с сервера. В приложении уже добавлено отображение пользователей и постов, осталось доработать работу с комментариями. Вам предстоит создать слайс для комментариев и доработать компоненты, в которых используется этот слайс.

src/slices/commentsSlice.js
Реализуйте слайс для комментариев. Принципиально работа с комментариями ничем не отличается от работы с постами или пользователями. В этом задании достаточно реализовать только добавление комментариев

src/slices/index.js
Подключите редьюсеры слайса комментариев в стор, по аналогии, как это сделано с редьюсерами других слайсов

src/components/App.jsx
Добавьте сохранение данных комментариев в стор, по аналогии, как это сделано с данными о пользователях и постах

src/components/Comment.jsx
Добавьте извлечение комментария и автора комментария. Используйте для этого хук useSelector. Проанализируйте как он используется в других компонентах. Для нахождения комментария используйте переданный в компонент идентификатор комментария. Получите в первую очередь комментарий, а потом, по идентификатору автора, найдите самого автора. Помните, что в хуке доступно состояние из всех слайсов. Сохраните автора и комментарий в переменные author и comment

Пример как выглядят данные:
```
const users = [
  { id: 'user1', username: 'user1', name: 'User 1' },
  { id: 'user2', username: 'user2', name: 'User 2' },
  { id: 'user3', username: 'user3', name: 'User 3' },
];

const posts = [
  {
    id: 'post1',
    author: 'user1',
    body: 'Первый пост',
    comments: ['comment1', 'comment2'],
  },
  {
    id: 'post2',
    author: 'user2',
    body: 'Второй пост',
    comments: [],
  },
];

const comments = [
  {
    id: 'comment1',
    author: 'user2',
    text: 'Первый комментарий',
  },
  {
    id: 'comment2',
    author: 'user3',
    text: 'Второй комментарий',
  },
]; ```