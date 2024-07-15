import { FC, useState, ChangeEvent } from "react";
import { Whuer } from "@/components/types";

interface UniversitySelectionPageProps {
    setPage: (page: string) => void;
    setWhuer: (whuer: Whuer) => void;
}

const UniversitySelectionPage: FC<UniversitySelectionPageProps> = ({
    setPage,
    setWhuer,
}) => {
    const [university, setUniversity] = useState<string>("");
    const [major, setMajor] = useState<string>("");

    const universities = [
        { name: "北京大学", majors: ["天体物理", "理论与应用力学"] },
        { name: "武汉大学", majors: ["计算机", "电信", "英语", "法学"] },
        { name: "佳丽顿大学", majors: ["睡觉科学", "摆烂学", "糊弄学"] },
    ];

    const handleUniversityChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setUniversity(e.target.value);
        const selectedUniversity = universities.find(
            (u) => u.name === e.target.value
        );
        if (selectedUniversity) {
            setMajor(selectedUniversity.majors[0]);
        }
    };

    const handleSubmit = () => {
        if (university === "北京大学") {
            if (
                window.confirm(
                    "你的分数可能进不了北京大学哦，真的不考虑看看平替吗？"
                )
            ) {
                alert("很遗憾，你落榜了！");
                setPage("welcome");
            } else {
                setPage("university");
            }
        } else if (university === "佳丽顿大学") {
            if (
                window.confirm("你的水平完全可以去更好的学校啊，真的不后悔吗？")
            ) {
                alert("恭喜你，被录取进佳丽顿大学！");
                alert("去上学的时候发现学校倒闭了");
                setPage("welcome");
            } else {
                setPage("university");
            }
        } else {
            const newWhuer = new Whuer();
            setWhuer(newWhuer);
            setPage("school");
        }
    };

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <p>请选择你的大学和专业</p>
            <select onChange={handleUniversityChange} value={university}>
                {universities.map((u) => (
                    <option key={u.name} value={u.name}>
                        {u.name}
                    </option>
                ))}
            </select>
            <select onChange={(e) => setMajor(e.target.value)} value={major}>
                {university &&
                    universities
                        .find((u) => u.name === university)
                        ?.majors.map((m) => (
                            <option key={m} value={m}>
                                {m}
                            </option>
                        ))}
            </select>
            <button
                onClick={handleSubmit}
                style={{ padding: "10px 20px", marginTop: "20px" }}
            >
                确定
            </button>
        </div>
    );
};

export default UniversitySelectionPage;
