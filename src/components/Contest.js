import React, {Component, PropTypes} from 'react';

class Contest extends Component {
    render() {
        return (
            <div>
                <div>{this.props.id}</div>
                <div>{this.props.description}</div>
            </div>
        );
    }
}

Contest.propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
}

export default Contest;
