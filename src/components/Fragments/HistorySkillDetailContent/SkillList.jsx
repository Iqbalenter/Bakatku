import { useState, useEffect } from "react";

const SkillList = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        // Simulasi Fetch dari Database
        const fetchedSkills = [
          { name: "Backend Development", percentage: 90 },
          { name: "UX Designer", percentage: 60 },
          { name: "Front end Development", percentage: 70 },
          { name: "UI Design", percentage: 40 }
        ];
    
        // Urutkan berdasarkan persentase tertinggi ke terendah
        const sortedSkills = fetchedSkills.sort((a, b) => b.percentage - a.percentage);
        setSkills(sortedSkills);
      }, []);

    const getLabel = (percentage) => {
        if (percentage >= 80) return "Sangat cocok";
        if (percentage >= 60) return "Menengah";
        return "Kurang cocok";
    };

    const getColor = (percentage) => {
        const opacity = 0.6 + (percentage / 100) * 0.4;
        return `rgba(0, 80, 200, ${opacity})`;
      };

    return (
        <div className="skill-list-container">
            {skills.map((skill, index) => (
                <div key={index} className="skill-list">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage" style={{ backgroundColor: getColor(skill.percentage) }} >
                        {getLabel(skill.percentage)}
                    </span>
                </div>
            ))}
        </div>
    );
};


export default SkillList;