Основной компонент, который выводит форму для добавления новой записи и выводит список заметок на экран.

Начальный HTML:
```
<div>
  <div class="mb-3">
    <form class="d-flex">
      <div class="me-3">
        <input type="text" value="" required="" class="form-control" placeholder="I am going...">
      </div>
      <button type="submit" class="btn btn-primary">add</button>
    </form>
  </div>
</div>
```
src/Item.jsx
Отрисовывает конкретный элемент списка. Принимает на вход свойства:

task
onRemove
HTML с добавленными заметками:
```
<div>
  <div class="mb-3">
    <form class="d-flex">
      <div class="me-3">
        <input type="text" value="" required="" class="form-control" placeholder="I am going...">
      </div>
      <button type="submit" class="btn btn-primary">add</button>
    </form>
  </div>
  <div>
    <div class="row">
      <div class="col-auto">
        <button type="button" class="btn btn-primary btn-sm">-</button>
      </div>
      <div class="col">second</div>
    </div>
    <hr>
  </div>
  <div>
    <div class="row">
      <div class="col-auto">
        <button type="button" class="btn btn-primary btn-sm">-</button>
      </div>
      <div class="col">first</div>
    </div>
    <hr>
  </div>
</div>
```
Добавление элементов происходит в обратном порядке. Новые всегда сверху.