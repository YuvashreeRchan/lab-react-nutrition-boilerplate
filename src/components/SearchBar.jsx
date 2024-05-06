import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        query: ''
        };
    }

    handleChange = (e) => {
        const query = e.target.value;
        this.setState({ query });
        this.props.onSearch(query);
    };

    render() {
        const { query } = this.state;

        return (
        <div>
            <div className='heading'> Search </div>
            <input
            className="input"
            type="text"
            placeholder="Search for a meal..."
            value={query}
            onChange={this.handleChange}
            />
        </div>
        );
    }
    }

export default SearchBar;

