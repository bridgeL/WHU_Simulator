import { FC } from "react";
import { Whuer } from "@/components/types";

interface GraduationPageProps {
    setPage: (page: string) => void;
    whuer: Whuer;
}

const GraduationPage: FC<GraduationPageProps> = ({ setPage, whuer }) => {
    const results: string[] = [];
    if (whuer.attrs["学识"] > 24) {
        results.push("获得优秀学生奖学金");
    }
    if (whuer.attrs["体魄"] > 24) {
        results.push("运动健将");
    }

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h2>恭喜你，毕业了</h2>
            <p>你的毕业总结：</p>
            {results.map((result) => (
                <p key={result}>{result}</p>
            ))}
            <button
                onClick={() => setPage("welcome")}
                style={{ padding: "10px 20px" }}
            >
                确定
            </button>
        </div>
    );
};

export default GraduationPage;
