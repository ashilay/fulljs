import React from 'react';

import Header from './Header';

import ContestPreview from './ContestPreview';

import axios from 'axios';

class App extends React.Component {
    state = {
        pageHeader: "Naming Contests",
        contests: this.props.initialContests
    }

    componentDidMount() {
        axios.get('api/contests')
            .then(({data}) => {
                this.setState({
                    contests: data.contests
                });
            })
            .catch(console.error);
    }

    render() {
        return (
            <div className="App">
                <Header message = {this.state.pageHeader} />
                <div>
                    {this.state.contests.map(contest =>
                        <ContestPreview key={contest.id} {...contest} />
                    )}
                </div>
            </div>
        )
    }
}

export default App;
