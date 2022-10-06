Реализуйте компонент, который представляет собой две кнопки и лог событий:

Лог — это список значений, каждое из которых получается после нажатия на одну из двух кнопок. Снизу находятся более старые события, сверху новые.
Левая кнопка + добавляет в лог строчку с новым значением равным: значение "самой новой существующей записи лога" + 1
Правая кнопка - добавляет в лог строчку с новым значением равным: значение "самой новой существующей записи лога" - 1
При клике на запись в логе она удаляется.

Начальный HTML:
```
<div>
  <div class="btn-group font-monospace" role="group">
    <button type="button" class="btn btn-outline-success">+</button>
    <button type="button" class="btn btn-outline-danger">-</button>
  </div>
</div>
```
После нажатия последовательности +, +, -, +:
```
<div>
  <div class="btn-group font-monospace" role="group">
    <button type="button" class="btn btn-outline-success">+</button>
    <button type="button" class="btn btn-outline-danger">-</button>
  </div>
  <div class="list-group">
    <button type="button" class="list-group-item list-group-item-action">2</button>
    <button type="button" class="list-group-item list-group-item-action">1</button>
    <button type="button" class="list-group-item list-group-item-action">2</button>
    <button type="button" class="list-group-item list-group-item-action">1</button>
  </div>
</div>
```
Каждое нажатие кнопки добавляет в лог новую строчку сверху. При удалении всех строчек в логе компонент возвращается к изначальному HTML.