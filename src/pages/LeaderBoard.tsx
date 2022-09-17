import React, { useEffect } from 'react';
import { getLeaderboard } from '../utilities/getLeaderboard';


const LeaderBoard = () => {

  useEffect(() => {
    const leaderboardData = getLeaderboard();
    console.log(leaderboardData);
  }, []);



  return (
    <React.Fragment>
      LeaderBoard
    </React.Fragment>
  );
};

export default LeaderBoard;