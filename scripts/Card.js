// Класс "Карточка"
class Card extends Renderable {

  // Объект с конфигурацией селекторов, чтобы не хардкодить их в методах.
  static selectors = {
    template: "#todo-card-template",
    text: '.todolist-item__text',
    copyButton: '.todolist-item__copy',
    removeButton: '.todolist-item__remove'
  }

  constructor(name, addCard) {
    // В родительском конструкторе создаём элемент из шаблона и кладём его в this._element
    super(Card.selectors.template);

    // В созданном элементе заменяем имя на пришедшее в конструктор.
    this._element.querySelector(Card.selectors.text).textContent = name;
    // Устанавливаем слушатели на кнопки "Клонировать" и "Удалить"
    this._element.querySelector(Card.selectors.copyButton).addEventListener('click', () => addCard(name))
    this._element.querySelector(Card.selectors.removeButton).addEventListener('click', () => this._element.remove())
  }

  // Обратите внимание, что метода `render` здесь нет!
  // В этом классе его перегружать не нужно, поэтому он будет просто взят из класса-родителя.
}
