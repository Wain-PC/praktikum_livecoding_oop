// Общий класс, позволяющий рендерить произвольный шаблон, селектор которого передаётся в конструктор,
// в произвольный элемент-контейнер.
class Renderable {
  constructor(templateSelector) {
    // Находим шаблон, клонируем его и сохраняем эту копию его для последующего использования.
    this._element = document.querySelector(templateSelector).content.children[0].cloneNode(true);
  }

  // Метод для вставки элемента в произвольный контейнер. Используется и перегружается в классах-наследниках.
  render(where) {
    where.appendChild(this._element);
  }
}
