export default (document) => {
  const nodes = document.body.getElementsByTagName('*');
  Array.from(nodes).map((node) => {
    const handle = (item) => node.classList.replace(item, camelCase(item))
    node.classList.forEach(handle);
  })
};

/* 
Реализуйте и экспортируйте по умолчанию функцию, которая нормализует имена классов для всех элементов на странице. В данном случае это означает, что происходит преобразование всех классов, написанных с использованием kebab нотации, в camelCase нотацию: text-center => textCenter
*/