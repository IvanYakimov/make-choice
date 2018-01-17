'use strict';

const cssClassButton = "pure-button pure-button-primary";

const model = {
    title: 'Выбирай легко',
    subtitle: 'Доверь комьютеру выбор дел!',
    options: []
};

const onFormSubmit = (event) => {
    event.preventDefault();
    let option = event.target.querySelector('input[name="option"]');
    if (option.value) {
        model.options.push(option.value);
        option.value = '';
        Rerender();
    }
};

const onMakeDecision = (event) => {
    const idx = Math.floor(Math.random() * model.options.length);
    const option = model.options[idx];
    option && alert(option);
}

const onClear = (event) => {
    model.options = []; Rerender();
}

let freshId = 0;

function Rerender() {
    const templateMain = (
        <div className="row">
            <h1> {model.title} </h1>
            <p> {model.subtitle} </p>
            <p> {model.options.length ? 'Список дел' : 'Нет вариантов'} </p>
            <button className={cssClassButton} disabled={!model.options.length} onClick={onMakeDecision}>
                Чем мне заняться?
            </button>
            <ol>
                {model.options.map(option => <li key={freshId++}> {option} </li>)}
            </ol>
            <form className="pure-form" onSubmit={onFormSubmit}>
                <legend> Введи свои дела </legend>
                <input type="text" name="option" />
                <button className={cssClassButton} >
                    Добавить
                </button>
            </form>
            <button className={cssClassButton} onClick={onClear}>
                Очистить все
            </button>
        </div>
    );

    ReactDOM.render(templateMain, document.querySelector('#app'));
}

Rerender();