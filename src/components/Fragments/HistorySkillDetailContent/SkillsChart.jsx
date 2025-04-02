import { PieChart, Pie, Cell } from "recharts";

const data = [
    { name: "Skill 1", value: 30 },
    { name: "Skill 2", value: 55 },
    { name: "Skill 3", value: 15 },
  ];

const COLORS = ["#007BFF", "#1A2B5C"];

const SkillsChart = () => {
    return (
        <div className="skill-chart flex flex-col items-center">
            <p className="text-lg font-bold -mt-10">Skills Chart</p>
            <PieChart width={200} height={200}>
                <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8">
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
};

export default SkillsChart;