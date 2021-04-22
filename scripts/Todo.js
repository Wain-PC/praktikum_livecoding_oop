// Основной класс, реализующий форму добавления карточки и список карточек.
class Todo extends Renderable {

  // Объект с конфигурацией селекторов, чтобы не хардкодить их в методах.
  static selectors = {
    template: '#todo-form-template',
    form: '.todolist-form',
    formInput: '.todolist-form_input',
  }

  constructor(cards) {
    // В родительском конструкторе создаём элемент из шаблона и кладём его в this._element
    super(Todo.selectors.template);

    // Создаём объект "список карточек" из класса List.
    // На вход проксируются первоначальные карточки, пришедшие снаружи в конструктор Todo.
    this._list = new List(cards);

    // Находим форму и добавляем на неё слушатель `submit`.
    this._element
      .querySelector(Todo.selectors.form)
      .addEventListener('submit', this._handleSubmit);
  }

  render(where) {
    // Перегружаем метод `render`, чтобы перед вставкой на страницу отрендерить список карточек.
    this._list.render(this._element);
    // Когда карточки готовы, можно вставлять сам Todo.
    super.render(where);
  }

  // Слушатель события `submit` на форме.
  // Обратите внимание на форму записи этого метода - стрелочную функцию.
  // Это специальный синтаксис, который позволяет намертво закрепить значение `this` в методе.
  // Здесь это требуется, т.к. метод используется в качестве коллбека в слушателе события.
  _handleSubmit = (event) => {
    // Предотвращаем отправку формы.
    event.preventDefault();
    // Находим в форме поле ввода и берём его значение.
    const name = event.currentTarget.querySelector(Todo.selectors.formInput).value;
    // Создаём новую карточку и добавляем её на страницу.
    this._list.add(name)
  }
}
