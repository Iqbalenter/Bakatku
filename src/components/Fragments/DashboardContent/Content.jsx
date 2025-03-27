import { useState } from 'react';

import HistoryIcon from '../../../assets/history-time.png';

const Content = () => {
    const [completed, setCompleted] = useState([""]);

    const progressList = [
        "Introduction Backend Development",
        "How to use GCP",
        "Gimana proses express JS",
    ];

    const handleItemClick = (item) => {
        if (completed.includes(item)) {
          // Jika sudah selesai, hapus dari daftar selesai
          setCompleted(completed.filter((c) => c !== item));
        } else {
          // Jika belum selesai, tambahkan ke daftar selesai
          setCompleted([...completed, item]);
        }
    };

    return (
        <div>
            <div className="dashboard-choice">
                <h1>Backend Development</h1>
                <div className="dashboard-choice-content">
                    <h2>Deskripsi singkat</h2>
                    <p>Dengan dasar yang kuat dalam pemrograman sisi server dan manajemen basis data, kamu unggul dalam menciptakan aplikasi yang efisien dan skalabel. Keterampilan saya dalam memecahkan masalah dan perhatian terhadap detail membuat saya sangat cocok untuk pengembangan backend.</p>
                </div>
            </div>

            <div className="dashboard-progress-track">
                <h1>Progress Tracker</h1>
                <div className="dashboard-progress-track-lists">
                    <div className="list">
                        {progressList.map((item) => (
                            <p
                                key={item}
                                onClick={() => handleItemClick(item)}
                                className={completed.includes(item) ? "completed" : ""}
                            >
                                {item} {completed.includes(item) && "✔"}
                            </p>
                        ))}
                    </div>

                    <div className="dashboard-progress-track-button">
                        <button className='btn'>See Full Progress</button>
                    </div>
                </div>

            </div>

            <div className="dashboard-history">
                <button className='btn'><img src={HistoryIcon} width={25}/> History</button>
            </div>
        </div>
    )
}

export default Content;