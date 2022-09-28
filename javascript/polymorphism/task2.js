/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список тегов, находит среди них теги a, link и img, а затем извлекает ссылки и возвращает список ссылок. Теги подаются на вход в виде массива, где каждый элемент это тег. Тег имеет следующую структуру:

name — имя тега.
href или src — атрибуты. Атрибуты зависят от тега: тег img имеет атрибут src, тег a — href, link — href.
*/

// BEGIN (write your solution here)
const getLinks = (tags) => {
  const result = [];

  const filtered = tags.filter((tag) => tag.name === 'a' || tag.name === 'link' || tag.name === 'img');
  filtered.forEach((tag) => {
    const link = tag.href ?? tag.src;
    result.push(link);
  });
  return result;
};

export default getLinks;
// END

/*
teachers solution

const mapping = {
  a: 'href',
  img: 'src',
  link: 'href',
};

const getLinks = (tags) => {
  const filteredTags = tags.filter((tag) => Object.hasOwn(mapping, tag.name));
  const paths = filteredTags.map((tag) => tag[mapping[tag.name]]);

  return paths;
};

*/