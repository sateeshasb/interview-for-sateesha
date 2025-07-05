import React from 'react';

const LaunchModal = ({ launch, onClose }) => {
  if (!launch) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{launch.mission_name}</h2>
        <p><strong>Date:</strong> {new Date(launch.launch_date_utc).toLocaleString()}</p>
        <p><strong>Rocket:</strong> {launch.rocket.rocket_name}</p>
        <p><strong>Site:</strong> {launch.launch_site.site_name_long}</p>
        <p><strong>Details:</strong> {launch.details || 'N/A'}</p>
        {launch.links.article_link && <a href={launch.links.article_link} target="_blank">Article</a>}
        {launch.links.video_link && <a href={launch.links.video_link} target="_blank">Video</a>}
      </div>
    </div>
  );
};

export default LaunchModal;