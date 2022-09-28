// BEGIN (write your solution here)
const stringify = (tag) => {
  const tags = {
    pair: (tag) => {
      switch (tag.name) {
        case 'div':
          const usedAttrs = ['name', 'tagType', 'id', 'body'];
          const randomAttr = Object.keys(tag).filter((attr) => !usedAttrs.includes(attr));

          return randomAttr.length !== 0
            ? `<${tag.name} id="${tag.id}" ${randomAttr}="${tag[randomAttr]}">${tag.body}</${tag.name}>`
            : `<${tag.name} id="${tag.id}">${tag.body}</${tag.name}>`;
        case 'p':
          return `<${tag.name}>${tag.body}</${tag.name}>`;
      }
    },
    single: (tag) => {
      return `<${tag.name} class="${tag.class}" id="${tag.id}">`;
    },
  };

  return tags[tag.tagType](tag);
};

// teachers solution

const excludedAttrs = ['name', 'tagType', 'body'];

const buildAttrs = (tag) => (
  Object.keys(tag)
    .filter((attr) => !excludedAttrs.includes(attr))
    .map((attr) => ` ${attr}="${tag[attr]}"`)
    .join('')
);

const mapping = {
  single: (tag) => {
    const attrs = buildAttrs(tag);
    return `<${tag.name}${attrs}>`;
  },
  pair: (tag) => {
    const attrs = buildAttrs(tag);
    return `<${tag.name}${attrs}>${tag.body}</${tag.name}>`;
  },
};

const strnfy = (tag) => {
  const build = mapping[tag.tagType];
  return build(tag);
};

export default strnfy;

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход тег и возвращает его текстовое представление.

Примеры
import stringify from './html.js';
 
const hrTag = {
  name: 'hr',
  class: 'px-3',
  id: 'myid',
  tagType: 'single',
};
const html = stringify(hrTag); // <hr class="px-3" id="myid">
 
const divTag = {
  name: 'div',
  tagType: 'pair',
  body: 'text2',
  id: 'wow',
};
const html = stringify(divTag); // <div id="wow">text2</div>
 
const emptyDivTag = {
  name: 'div',
  tagType: 'pair',
  body: '',
  id: 'empty',
};
const html = stringify(emptyDivTag); // <div id="empty"></div>
Примечания
В структуре тега есть три специальных ключа:

name — имя тега.
tagType — тип тега, определяет его парность (pair) или одиночность (single).
body — тело тега, используется для парных тегов. Если у парного тега нет содержимого, то body равно пустой строке ''.
Всё остальное становится атрибутами тега и не зависит от того, парный он или нет. */