import React from 'react';

import ContestPreview from './ContestPreview';

function ContestList({contests, onContestClick}) {
    return (
        <div className="ContestList">
            {contests.map(contest =>
                <ContestPreview
                    onCLick={onContestClick}
                    key={contest.id}
                    {...contest}
                />
            )}
        </div>
    );
}

ContestList.propTypes = {
    contests: React.PropTypes.array.isRequired,
    onContestClick: React.PropTypes.func.isRequired
}

export default ContestList;
