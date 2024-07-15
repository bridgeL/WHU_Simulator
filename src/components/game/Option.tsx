import { OptionType, Whuer } from "@/components/types";
import { FC } from "react";

interface Props {
    option: OptionType;
    onSelect: (next: number) => void;
    whuer: Whuer;
}

const Option: FC<Props> = ({ option, onSelect, whuer }) => {
    if (option.condition && !option.condition(whuer)) {
        return null;
    }

    return (
        <button
            onClick={() => onSelect(option.next(whuer))}
            style={{ padding: "10px 20px", marginLeft: "20px" }}
        >
            {option.text}
        </button>
    );
};

export default Option;
