Реализуйте компонент, эмулирующий работу слайдера. Компонент принимает на вход свойство images, в котором находится список путей до картинок. Компонент отображает их и позволяет с помощью стрелок "вперёд" и "назад" осуществлять переход по ним. Сам переход зациклен. Картинки (пути до них) могут повторятся.

Ниже описано поведение:

Если выбрана последняя картинка, то next ведёт на первую. То же самое происходит и prev, но в обратную сторону.
Первая картинка становится активной. Порядок картинок и их отображение должны сохраняться.
Начальная вёрстка с данными, которые прогружаются в файле src/index.jsx:
```
<div id="carousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img alt="" class="d-block w-100" src="/images/first.jpeg">
    </div>
    <div class="carousel-item">
      <img alt="" class="d-block w-100" src="/images/second.jpeg">
    </div>
    <div class="carousel-item">
      <img alt="" class="d-block w-100" src="/images/third.jpeg">
    </div>
  </div>
  <button class="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
```
Хотя вёрстка и не тривиальная, единственное, что меняется в ней — класс active.