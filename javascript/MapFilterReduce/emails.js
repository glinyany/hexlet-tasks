function getFreeDomainsCount(emails, keys) {
  const domains = emails.map((email) => { // лист разделенных адресов без префикса
    const [, domain] = email.split('@');
    return domain;
  })
  // отсекаю лишние адреса из первоначального списка emails
  const filteredDomains = domains.filter((domain) => keys.some(key => domain.includes(key)));
  console.log(filteredDomains, '-----ALL DOMAINS LIST-----');''
  const handler = (acc, domain) => { // counter
    if (!Object.hasOwn(acc, domain)) {
      acc[domain] = 0;
    }
    acc[domain] += 1;

    return acc;
  };
  const getCount = filteredDomains.reduce(handler, {});
  return getCount;
}

const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
  
];

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

console.log(getFreeDomainsCount(emails, freeEmailDomains));
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };

/*
// Teacher solution

const getFreeDomainsCount = (emails) => emails
  .map((email) => {
    const [, domain] = email.split('@');
    return domain;
  })
  .filter((domain) => freeEmailDomains.includes(domain))
  .reduce((acc, domain) => {
    const count = get(acc, domain, 0) + 1;
    return { ...acc, [domain]: count };
  }, {});

export default getFreeDomainsCount;

// END

*/