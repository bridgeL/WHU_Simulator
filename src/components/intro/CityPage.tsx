import { FC } from "react";

interface CityPageProps {
    setPage: (page: string) => void;
    setCity: (city: string) => void;
}

const CityPage: FC<CityPageProps> = ({ setPage, setCity }) => {
    const majorCities = ["北京", "上海", "广州", "深圳", "武汉"];
    const minorCities = [
        "河北",
        "山东",
        "河南",
        "江苏",
        "浙江",
        "福建",
        "湖南",
        "江西",
    ];

    const isMajorCity = Math.random() < 0.4;
    let cityText: string;
    let city: string;

    if (isMajorCity) {
        const randomIndex = Math.floor(Math.random() * majorCities.length);
        city = majorCities[randomIndex];
        cityText = `你出生在${city}，家境优渥，开开心心度过了人生的前18年，要步入大学了，你成绩不错，高考稳定发挥，获得了565分的好成绩！`;
    } else {
        const randomIndex = Math.floor(Math.random() * minorCities.length);
        city = minorCities[randomIndex];
        cityText = `你出生在${city}的一个惬意小城市，从小你便是同辈中最优秀的一个，经历了初高中的勤奋苦读，你终于在高考中获得665分的好成绩！`;
    }

    setCity(city);

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <p>{cityText}</p>
            <button
                onClick={() => setPage("university")}
                style={{ padding: "10px 20px" }}
            >
                报志愿
            </button>
        </div>
    );
};

export default CityPage;
