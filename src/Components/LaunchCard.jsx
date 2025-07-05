import React from 'react';

const LaunchCard = ({ launch, onClick }) => (
  <div className="launch-card" onClick={() => onClick(launch)}>
    <h3>{launch.mission_name}</h3>
    <p>{new Date(launch.launch_date_utc).toLocaleString()}</p>
    <p className={launch.launch_success ? 'success' : 'failure'}>
      {launch.launch_success ? 'Success' : 'Failure'}
    </p>
  </div>
);

export default LaunchCard;
