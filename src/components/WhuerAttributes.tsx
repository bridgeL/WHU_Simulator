import { FC } from "react";
import { Whuer } from "@/components/types";

interface Props {
    whuer: Whuer;
}

const WhuerAttributes: FC<Props> = ({ whuer }) => {
    return (
        <div>
            <h3>属性</h3>
            {Object.keys(whuer.attrs).map((key) => (
                <div key={key}>
                    {key}: {whuer.attrs[key as keyof typeof whuer.attrs]}
                </div>
            ))}
        </div>
    );
};

export default WhuerAttributes;
