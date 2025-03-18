
const skills = [
    { name: "UI Design", level: 100 },
    { name: "Backend Development", level: 85 },
    { name: "UX Designer", level: 60 },
    { name: "Front end Development", level: 75 },
  ];

  const skillsName = ["UI Design", "Backend Development", "UX Designer", "Front end Development"];

const SkillProgress = () => {
    return (
        <div className="skill-progress">
            <div className="skill-container">
                <h3>Daftar Level skill</h3>
                {skills.map((skill, index) => (
                    <div key={index} className="skill-bar">
                    <span className="skill-name">{skill.name}</span>
                    <div className="progress">
                        <div
                        className="progress-fill"
                        style={{
                            width: `${skill.level}%`,
                            background: "linear-gradient(90deg, #1e3c72, #2a5298)",
                        }}
                        
                        ></div>
                    </div>
                    </div>
                ))}
            </div>

            <div className="selection-container">
                <h3>Pilih skill yang anda mau</h3>
                {skillsName.map((skill, index) => (
                    <button key={index} className={`skill-button ${index % 2 === 0 ? "white" : "blue"}`}>
                    {skill}
                    </button>
                ))}
            </div>

            <div className="login-button-container">
                <button className="login-button">Selanjutnya</button>
            </div>
        </div>
    )
}

export default SkillProgress;