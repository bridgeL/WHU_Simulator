import { FC, useState } from "react";
import { Whuer } from "@/components/types";
import Question from "@/components/game/Question";
import { allQuestions } from "@/components/game/questions";
import FriendsList from "@/components/FriendsList";
import WhuerAttributes from "@/components/WhuerAttributes";

interface Props {
    whuer: Whuer;
    setPage: (page: string) => void;
}

const GamePage: FC<Props> = ({ whuer, setPage }) => {
    const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);

    const currentQuestion = allQuestions.find(
        (q) => q.id === currentQuestionId
    );

    const onSelectOption = (nextQuestionId: number) => {
        setCurrentQuestionId(nextQuestionId);
        if (whuer.time.cnt >= 45) {
            alert("毕业啦！");
            setPage("graduation");
        }
    };

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h2>
                {whuer.time.year}年{whuer.time.month}月
            </h2>
            {currentQuestion && (
                <Question
                    question={currentQuestion}
                    onSelectOption={onSelectOption}
                    whuer={whuer}
                />
            )}
            <FriendsList friends={whuer.friends} />
            <WhuerAttributes whuer={whuer} />
        </div>
    );
};

export default GamePage;
