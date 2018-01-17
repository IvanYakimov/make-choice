class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        try {
            const count = parseInt(localStorage.count);
            if (count)
                this.setState(() => ({ count }));
        }
        catch (error) {
            console.log(`Error occured: ${error}`);
        }
    }

    componentDidUpdate() {
        localStorage.count = this.state.count;
    }

    handlePlusOne() {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    handleMinusOne() {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    handleReset() {
        this.setState(() => ({ count: 0 }));
    }

    render() {
        return (
            <div className='row'>
                <h1>Счетчик</h1>
                <h2>Сумма: {this.state.count}</h2>
                <button onClick={this.handlePlusOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Очистить</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.querySelector('#app'));