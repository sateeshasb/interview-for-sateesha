import React, { useEffect, useState } from 'react';
import './App.css';
import LaunchCard from  './Components/LaunchCard'
import LaunchModal from './Components/LaunchModal'
import FilterButtons from  './Components/FilterButtons'

const App = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLaunch, setSelectedLaunch] = useState(null);

  const fetchLaunches = async (type = 'all') => {
    setLoading(true);
    let endpoint = 'https://api.spacexdata.com/v3/launches';
    if (type === 'upcoming') endpoint += '/upcoming';
    if (type === 'past') endpoint += '/past';
    const res = await fetch(endpoint);
    const data = await res.json();
    setLaunches(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchLaunches();
  }, []);

  return (
    <>
      <header>
        <h1>🚀 SpaceX Launch Dashboard</h1>
        <FilterButtons onFilter={fetchLaunches} />
      </header>
      <main className="main">
        {loading ? (
          <p>Loading...</p>
        ) : launches.length ? (
          launches.map((launch) => (
            <LaunchCard key={launch.flight_number} launch={launch} onClick={setSelectedLaunch} />
          ))
        ) : (
          <p>No launches found.</p>
        )}
      </main>
      {selectedLaunch && <LaunchModal launch={selectedLaunch} onClose={() => setSelectedLaunch(null)} />}
    </>
  );
};

export default App;
