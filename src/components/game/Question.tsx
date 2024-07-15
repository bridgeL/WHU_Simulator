import { QuestionType, Whuer } from "@/components/types";
import Option from "@/components/game/Option";
import { FC } from "react";

interface Props {
    question: QuestionType;
    onSelectOption: (nextQuestionId: number) => void;
    whuer: Whuer;
}

const Question: FC<Props> = ({ question, onSelectOption, whuer }) => {
    return (
        <div>
            <h3>{question.text}</h3>
            {question.options.map((option) => (
                <Option
                    key={option.text}
                    option={option}
                    onSelect={onSelectOption}
                    whuer={whuer}
                />
            ))}
        </div>
    );
};

export default Question;
