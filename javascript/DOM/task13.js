export default () => {
  // BEGIN (write your solution here)
  const links = document.querySelectorAll('[data-bs-toggle]');

  links.forEach((link) => {
    link.addEventListener('click', () => {
      // closest находит ближайшего родителя по нужному селектору
      // Наше меню имеет класс .nav
      const nav = link.closest('.nav');
      // Находим активный элемент внутри меню
      const activeElement = nav.querySelector('.active');
      activeElement.classList.remove('active');
      link.classList.add('active');
      // changing content tabs
      const oldContentTabId = activeElement.dataset.bsTarget;
      const oldActiveContentTab = document.querySelector(oldContentTabId);
      oldActiveContentTab.classList.remove('active');
      const newActiveContentTabId = link.dataset.bsTarget;
      const newActiveContentTab = document.querySelector(newActiveContentTabId);
      newActiveContentTab.classList.add('active');
    });
  });
  // END
};

/*
Реализуйте логику переключения табов.
Постройте свою логику так, чтобы она позволила использовать на одной странице любое количество компонентов nav. 
*/

/** Teachers solution
  // BEGIN
  const handle = (e, container) => {
    const targetTab = e.target;
    if (targetTab.classList.contains('active')) {
      return;
    }

    const targetTabContentId = targetTab.dataset.bsTarget;
    const targetTabContent = document.querySelector(targetTabContentId);

    const activeTab = container.querySelector('.active');
    const activeTabContentId = activeTab.dataset.bsTarget;
    const activeTabContent = document.querySelector(activeTabContentId);

    targetTab.classList.add('active');
    targetTabContent.classList.add('active');

    activeTab.classList.remove('active');
    activeTabContent.classList.remove('active');
  };

  const navs = document.querySelectorAll('.nav');
  navs.forEach((nav) => {
    const tabs = nav.querySelectorAll('[data-bs-toggle]');
    tabs.forEach((tab) => {
      tab.addEventListener('click', (event) => handle(event, nav));
    });
  });
  // END
*/