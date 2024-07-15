import { useState } from "react";
import WelcomePage from "@/components/intro/WelcomePage";
import CityPage from "@/components/intro/CityPage";
import UniversitySelectionPage from "@/components/intro/UniversitySelectionPage";
import SchoolPage from "@/components/intro/SchoolPage";
import GraduationPage from "@/components/GraduationPage";
import GamePage from "./components/game/GamePage";
import { Whuer } from "@/components/types";

const App = () => {
    const [page, setPage] = useState("game");
    const [city, setCity] = useState("");
    const [whuer, setWhuer] = useState(new Whuer());
    whuer.setWhuer = setWhuer;

    const renderPage = () => {
        switch (page) {
            case "welcome":
                return <WelcomePage setPage={setPage} />;
            case "city":
                return <CityPage setPage={setPage} setCity={setCity} />;
            case "university":
                return (
                    <UniversitySelectionPage
                        setPage={setPage}
                        setWhuer={setWhuer}
                    />
                );
            case "school":
                return <SchoolPage setPage={setPage} whuer={whuer} />;
            case "game":
                return <GamePage whuer={whuer} setPage={setPage} />;
            case "graduation":
                return <GraduationPage setPage={setPage} whuer={whuer} />;
            default:
                return <WelcomePage setPage={setPage} />;
        }
    };

    return <div>{renderPage()}</div>;
};

export default App;
