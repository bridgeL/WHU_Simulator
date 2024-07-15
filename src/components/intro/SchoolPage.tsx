import { FC } from "react";
import { Whuer } from "@/components/types";

interface SchoolPageProps {
    setPage: (page: string) => void;
    whuer: Whuer;
}

const SchoolPage: FC<SchoolPageProps> = ({ setPage, whuer }) => {
    const majorText = `你进入了${whuer.major}学院，请到梅园小操场报道！`;

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <p>{majorText}</p>
            <button
                onClick={() => setPage("game")}
                style={{ padding: "10px 20px" }}
            >
                去报道
            </button>
        </div>
    );
};

export default SchoolPage;
