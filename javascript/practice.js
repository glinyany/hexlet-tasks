function checker()  {
  const email = 'info@gmail.com';
  const freeEmailDomen = 'gmail.com';
  if (Object.hasOwn(email, freeEmailDomen)) {
    return 'yes';
  }
  
  return 'no';
}

console.log(checker());