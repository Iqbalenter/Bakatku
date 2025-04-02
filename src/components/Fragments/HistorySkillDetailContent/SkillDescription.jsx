const SkillDescription = () => {
    const skills = [
        {
            name: "Backend Development",
            description: "Dengan dasar yang kuat dalam pemrograman sisi server dan manajemen basis data, kamu unggul dalam menciptakan aplikasi yang efisien dan skalabel. Keterampilan saya dalam memecahkan masalah dan perhatian terhadap detail membuat saya sangat cocok untuk pengembangan backend."
        }
    ];
    
    return (
        <div className="skill-description-container">
            <h3>{skills.map((skill) => skill.name)}</h3>
            <div className="description-skill">
                <h5>Deskripsi Singkat</h5>
                <p>{skills.map((skill) => skill.description)}</p>
            </div>
        </div>
    )
}

export default SkillDescription;