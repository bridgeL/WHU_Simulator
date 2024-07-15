import { FC, useState } from "react";

interface WelcomePageProps {
    setPage: (page: string) => void;
}

const WelcomePage: FC<WelcomePageProps> = ({ setPage }) => {
    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h1>欢迎来到-武大模拟器demo版，请开启你的2088</h1>
            <button
                onClick={() => setPage("city")}
                style={{ padding: "10px 20px" }}
            >
                开始
            </button>
        </div>
    );
};

export default WelcomePage;
