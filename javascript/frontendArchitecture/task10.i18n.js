// @ts-nocheck
/* eslint no-param-reassign: ["error", { "props": false }] */

import i18n from 'i18next';
import onChange from 'on-change';
import resources from './locales/index.js';

// BEGIN (write your solution here)
const runApp = async () => {
  const i18nextInstance = i18n.createInstance();
  const { ru, en } = resources;

  await i18nextInstance.init({
    // конфигурация i18next
    lng: 'en',
    debug: true,
    resources: {
      en,
      ru,
    }
  });

  app(i18nextInstance);
};

const app = (i18nextInstance) => {
  const container = document.querySelector('.container');

  const render = (i18nextInstance) => (path, value) => {
    const elements = {
      container: document.querySelector('.container'),
      activeLanguage: document.querySelector('.btn-primary'),
      inactiveLanguage: document.querySelector('.btn-outline-primary'),
      clicksCounterButton: document.querySelector('.btn-info'),
      resetButton: document.querySelector('.btn-warning')
    };

    switch (path) {
      case 'clicksCount': // addition and reset works
        const el = elements.clicksCounterButton;
        (state.currentLanguage === 'english')
          ? el.textContent = i18nextInstance.t('click', { count: value }, { lng: 'en' })
          : el.textContent = i18nextInstance.t('click', { count: value }, { lng: 'ru' })
        break;
      case 'currentLanguage': // language change
        const activeOld = elements.activeLanguage;
        const activeNew = elements.inactiveLanguage;
        const clicksCounterButton = elements.clicksCounterButton;
        const resetButton = elements.resetButton;

        if (state.currentLanguage === 'russian') {
          i18nextInstance.changeLanguage('ru', (err, t) => {
            if (err) return console.log('something went wrong loading', err);
            activeOld.classList.remove('btn-primary');
            activeOld.classList.add('btn-outline-primary');
            activeNew.classList.remove('btn-outline-primary');
            activeNew.classList.add('btn-primary');
            clicksCounterButton.textContent = i18nextInstance.t('click', { count: state.clicksCount }, { lng: 'ru' });
            resetButton.textContent = i18nextInstance.t('reset', { lng: 'ru' });
            return;
          });
        }
        if (state.currentLanguage === 'english') {
          i18nextInstance.changeLanguage('en', (err, t) => {
            if (err) return console.log('something went wrong loading', err);
            activeOld.classList.remove('btn-primary');
            activeOld.classList.add('btn-outline-primary');
            activeNew.classList.remove('btn-outline-primary');
            activeNew.classList.add('btn-primary');
            clicksCounterButton.textContent = i18nextInstance.t('click', { count: state.clicksCount });
            resetButton.textContent = i18nextInstance.t('reset');
            return;
          });
        }
        break;
    } // end of switch
  }; // end of render

  const buildHTML = (state, i18nextInstance) => {
    const russian = i18nextInstance.t('language', { lng: 'ru' });
    const english = i18nextInstance.t('language', { lng: 'en' });

    const div = document.createElement('div'); // class btn-group
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    div.append(button1, button2);
    div.classList.add('btn-group')
    div.setAttribute('role', 'group');
    button1.setAttribute('type', 'button');
    button2.setAttribute('type', 'button');
    button1.textContent = english;
    button2.textContent = russian;

    const clicksCounterButton = document.createElement('button');
    const resetButton = document.createElement('button');
    clicksCounterButton.setAttribute('type', 'button');
    clicksCounterButton.classList.add('btn', 'btn-info', 'mb-3', 'align-self-center');
    resetButton.setAttribute('type', 'button');
    resetButton.classList.add('btn', 'btn-warning');

    if (state.currentLanguage === 'english') {
      button1.classList.add('btn', 'mb-3', 'btn-primary');
      button2.classList.add('btn', 'mb-3', 'btn-outline-primary');
      clicksCounterButton.textContent = i18nextInstance.t('click', { count: state.clicksCount });
      resetButton.textContent = i18nextInstance.t('reset', { lng: 'en' });
    } else {
      button1.classList.add('btn', 'mb-3', 'btn-outline-primary');
      button2.classList.add('btn', 'mb-3', 'btn-primary');
      clicksCounterButton.textContent = i18nextInstance.t('click', { count: state.clicksCount }, { lng: 'ru' });
      resetButton.textContent = i18nextInstance.t('reset', { lng: 'ru' });
    }
    return { div, clicksCounterButton, resetButton };
  };

  const state = onChange({
    currentLanguage: 'english',
    clicksCount: 0,
  }, render(i18nextInstance));

  const els = buildHTML(state, i18nextInstance);
  container.append(els.div, els.clicksCounterButton, els.resetButton);

  const buttons = container.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      if (button.classList.contains('btn-info')) {
        state.clicksCount += 1;
      }
      if (button.classList.contains('btn-warning')) {
        state.clicksCount = 0;
      }
      if (button.classList.contains('btn-outline-primary')) {
        state.currentLanguage === 'english'
          ? state.currentLanguage = 'russian'
          : state.currentLanguage = 'english';
      }
    })
  });

};


export default runApp;
// END

/////////////////////////////////////////////////////////////////////////////////////////////


// BEGIN HEXLET SOLUTION
const languages = ['en', 'ru'];

const handleSwitchLanguage = (state) => (evt) => {
  const { lng } = evt.target.dataset;

  state.lng = lng;
};

const render = (container, watchedState, i18nInstance) => {
  const lngToggler = document.createElement('div');
  lngToggler.classList.add('btn-group');
  lngToggler.setAttribute('role', 'group');

  languages.forEach((lng) => {
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    const className = watchedState.lng === lng ? 'btn-primary' : 'btn-outline-primary';
    btn.classList.add('btn', 'mb-3', className);
    btn.setAttribute('data-lng', lng);
    btn.textContent = i18nInstance.t(`languages.${lng}`);
    btn.addEventListener('click', handleSwitchLanguage(watchedState));
    lngToggler.appendChild(btn);
  });

  const counter = document.createElement('button');
  counter.setAttribute('type', 'button');
  counter.classList.add('btn', 'btn-info', 'btn-lg', 'mb-3', 'align-self-center');
  counter.textContent = i18nInstance.t('buttons.counter.count', { count: watchedState.clicksCount });
  counter.addEventListener('click', () => {
    watchedState.clicksCount += 1;
  });

  const reset = document.createElement('button');
  reset.setAttribute('type', 'button');
  reset.classList.add('btn', 'btn-warning');
  reset.textContent = i18nInstance.t('buttons.reset');
  reset.addEventListener('click', () => {
    watchedState.clicksCount = 0;
  });

  container.innerHTML = '';
  container.append(lngToggler, counter, reset);
};

export default async () => {
  const defaultLanguage = 'en';
  // каждый запуск приложения создаёт свой собственный объект i18n и работает с ним,
  // не меняя глобальный объект.
  const i18nInstance = i18n.createInstance();
  await i18nInstance.init({
    lng: defaultLanguage,
    debug: false,
    resources,
  });

  const state = {
    lng: defaultLanguage,
    clicksCount: 0,
  };

  const container = document.querySelector('.container');

  const watchedState = onChange(state, (path, value) => {
    switch (path) {
      // инициализированный объект i18n прокидывается параметром в рендер, чтобы использовать t.
      case 'lng': i18nInstance.changeLanguage(value).then(() => render(container, watchedState, i18nInstance));
        break;

      case 'clicksCount': render(container, watchedState, i18nInstance);
        break;

      default:
        break;
    }
  });

  render(container, watchedState, i18nInstance);
};
// END