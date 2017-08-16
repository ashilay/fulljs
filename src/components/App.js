import React from 'react';

import Header from './Header';

import ContestList from './ContestList';

import Contest from './Contest';

import {fetchContest, fetchAllContests} from '../api';

const pushState = (obj, url) => {
    window.history.pushState(obj, '', url);
}
class App extends React.Component {
    state = {
        pageHeader: "Naming Contests",
        contests: this.props.initialContests
    }

    componentDidMount() {
        fetchAllContests()
            .then((contests) => {
                this.setState({
                    contests
                });
            })
            .catch(console.error);
    }

    fetchContest = (contestId) => {
        pushState({currentContestId: contestId}, `/contest/${contestId}`);

        fetchContest(contestId)
            .then((contest) => {
                const contests = [...this.state.contests];
                Object.assign(
                    contests.find(({id}) => id === contestId),
                    contest
                );

                this.setState({
                    pageHeader: contest.contestName,
                    currentContestId: contest.id,
                    contests
                });
            });
    }

    currentContent() {
        if (this.state.currentContestId) {
            return <Contest {...this.state.contests.find(({id}) => id === this.state.currentContestId)}/>
        }
        return (<ContestList
                    onContestClick={this.fetchContest}
                    contests={this.state.contests}
                />);
    }

    render() {
        return (
            <div className="App">
                <Header message = {this.state.pageHeader} />
                {this.currentContent()}
            </div>
        )
    }
}

export default App;
