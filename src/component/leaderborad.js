import React from 'react';
import './leader.css';

const Leaderboard = () => {
    // Sample data for leaderboard
    const leaderboardData = [
        { rank: 1, accountAddress: '0x123456789...', points: 100 },
        { rank: 2, accountAddress: '0x987654321...', points: 90 },
        { rank: 3, accountAddress: '0xabcdef123...', points: 85 },
        { rank: 4, accountAddress: '0x456789abc...', points: 80 },
        { rank: 5, accountAddress: '0xcdef12345...', points: 75 },
        { rank: 6, accountAddress: '0x789abc456...', points: 70 },
        { rank: 7, accountAddress: '0xdef123456...', points: 65 },
        { rank: 8, accountAddress: '0x89abc4567...', points: 60 },
        { rank: 9, accountAddress: '0xef1234567...', points: 55 },
        { rank: 10, accountAddress: '0x9abc45678...', points: 50 },
        { rank: 11, accountAddress: '0xf12345678...', points: 45 },
        { rank: 12, accountAddress: '0xabc456789...', points: 40 },
        { rank: 13, accountAddress: '0x123456789...', points: 35 },
        { rank: 14, accountAddress: '0xbcdef1234...', points: 30 },
        { rank: 15, accountAddress: '0x23456789a...', points: 25 }
    ];

    return (
        <div className="leaderboard-container">
            <h2 className="leaderboard-title">Leaderboard</h2>
            <div className="leaderboard">
                <div className="leaderboard-header">
                    <div className="leaderboard-column">Rank</div>
                    <div className="leaderboard-column">Account Address</div>
                    <div className="leaderboard-column">Points</div>
                </div>
                <div className="leaderboard-body">
                    {leaderboardData.map((item, index) => (
                        <div className="leaderboard-row" key={index} style={{ color: index < 3 ? (index === 0 ? '#e0b851' : (index === 1 ? '#b0bac2' : '#bf856d')) : '#ffffff' }}>
                            <div className="leaderboard-column">{item.rank}</div>
                            <div className="leaderboard-column">{item.accountAddress}</div>
                            <div className="leaderboard-column">{item.points}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
