import React, {PropTypes} from 'react';

import ContestPreview from './ContestPreview';

function ContestList({contests, onContestClick}) {
    return (
        <div className="ContestList">
            {contests.map(contest =>
                <ContestPreview
                    onClick={onContestClick}
                    key={contest.id}
                    {...contest}
                />
            )}
        </div>
    );
}

ContestList.propTypes = {
    contests: PropTypes.array.isRequired,
    onContestClick: PropTypes.func.isRequired
}

export default ContestList;
