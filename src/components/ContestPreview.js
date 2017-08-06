import React from 'react';

const ContestPreview = ({categoryName, contestName}) => (
    <div className="ContestPreview">
        <div className="category-name">
            {categoryName}
        </div>
        <div className="contest-name">
            {contestName}
        </div>
    </div>
);

export default ContestPreview;
