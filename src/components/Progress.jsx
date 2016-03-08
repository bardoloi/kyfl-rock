import React from 'react';
import '../scss/progress.scss';

// material-ui components
import CircularProgress from 'material-ui/lib/circular-progress';

const Progress = ({progressData}) => (
  <div className="progress">
     <CircularProgress
       mode="determinate"
       value={progressData.percentComplete}
       size={1.1}
       color={progressData.color}
       style={{WebkitTransform: 'rotate(-90deg)', transform: 'rotate(-90deg)'}}
     />
  </div>
);

export default Progress;
