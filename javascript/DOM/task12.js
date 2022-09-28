/*
После клика на кнопку, в контейнер с классом alerts добавляется алерт, с названием Alert 1:
Последующий клик добавляет новый алерт сверху:
Каждый клик добавляет новый алерт, меняя число в его имени.
*/
export default () => {
  // BEGIN (write your solution here)
  const button = document.getElementById('alert-generator');
  let alertCount = 1;
  button.addEventListener('click', () => {
    generateAlert(alertCount);
    alertCount += 1;
  });

  const generateAlert = (alertNumber) => {
    const alertsContainer = document.querySelector('.alerts');
    const textNode = document.createTextNode(`Alert ${alertNumber}`);
    const div = document.createElement('div');
    div.append(textNode);
    div.classList.add('alert', 'alert-primary');

    alertsContainer.prepend(div);
  }
  // END
};