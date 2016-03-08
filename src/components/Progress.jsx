import React from 'react';
import '../scss/progress.scss';

// material-ui components
import CircularProgress from 'material-ui/lib/circular-progress';

const Progress = ({progressData}) => (
  <div className={"progress " + progressData.color}>
     <CircularProgress
       mode="determinate"
       value={progressData.percentComplete}
       size={1.1}
     />
  </div>
);

export default Progress;
