import React from 'react';

class FoodBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: props.selectedFood ? props.selectedFood.quantity : 0,
            totalCalories: 0,};
        }

    handleInputChange = (e) => {
            const quantity = e.target.value;
            this.setState({ quantity });
    };

    handleAdd = () => {
        const { food, onAddFood } = this.props;
        const { quantity } = this.state;
        const totalCalories = quantity * food.cal;
        this.setState({ totalCalories });
        onAddFood(food.id, parseInt(quantity, 10));

    };
    
    handleReset = () => {
        const { food, onResetFood } = this.props;
        onResetFood(food.id);
        this.setState({ quantity: 0, totalCalories: 0 });
    };

    render() {
        const { food } = this.props;
        const { quantity,totalCalories } = this.state;
        

        return (
        <div className="food-box-container">
        <div className="food-box">
            <div className="food-content">
                <figure className="image is-64x64">
                <img className="food-img" src={food.img} alt={food.name} />
                </figure>
            </div>
            <div className="food-details">
                <p>
                    <strong>{food.name}</strong> <br />
                    <small>{food.cal}</small>
                </p>
            </div>
            <div className="food-controls">
                <input
                    className="input"
                    type="number"
                    value={quantity}
                    onChange={this.handleInputChange}
                    />
                <button className="button is-info" onClick={this.handleAdd}>
                    +
                </button>
            </div>
            </div>
            <div className='calorie-display'>
                <div className="selected-details">
                <p>
                    {quantity} {food.name} = {totalCalories} cal
                </p>
                <button className="buttonis-danger" onClick={this.handleReset}>
                    Reset
                </button>
                </div>
            </div>
        
        </div>
        );
    }
    }

export default FoodBox;
