import React from 'react';

import Header from './Header';

import ContestList from './ContestList';

import axios from 'axios';

const pushState = (obj, url) => {
    window.history.pushState(obj, '', url);
}
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

    fetchContest(id) {
        pushState({currentContestId: id}, `/contest/${id}`);
    }

    render() {
        return (
            <div className="App">
                <Header message = {this.state.pageHeader} />
                <ContestList
                    onContestClick={this.fetchContest}
                    contests={this.state.contests}
                />
            </div>
        )
    }
}

export default App;
