// let isVisible = false;
// const message = 'This is the hidden message';
// const onToggle = () => {
//     isVisible = ! isVisible;
//     render();
// }

// const btnStyle = "pure-button pure-button-primary";

// function render() {   
//     const app = (
// <div className='row'>
//     <h1> Toggle app. </h1>
//     <button className={btnStyle} onClick={onToggle}> {isVisible ? 'Hide' : 'Show'} </button>
//     {isVisible && (<p> {message} </p>)}
// </div>
//     );
//     ReactDOM.render(app, document.querySelector('#app'));
// }

// render();

// VisibilityToggle
// constructor - bind, default state
// render
// handleToggleVisibility

// const autoBind = require('auto-bind');

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = { isVisible: false, message: 'Hello React!' };
    }

    handleToggleVisibility() {
        this.setState(prevState => ({ isVisible: !prevState.isVisible }));
    }

    render() {
        return (
            <div className='row'>
                <h1> Toggle app. </h1>
                <button className='pure-button' onClick={this.handleToggleVisibility}> {this.state.isVisible ? 'Hide' : 'Show'} </button>
                {this.state.isVisible && (<p> {this.state.message} </p>)}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.querySelector('#app'));