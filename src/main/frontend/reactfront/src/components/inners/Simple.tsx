import React, {useState} from "react";
import "./Simple.css"
import {Link} from "react-router-dom";
import useInterval from "../../hooks/useInterval";
import Paimon from "../../chatting/Paimon"
const Simple = () => {
    const completedTitle = "다양한 미디어의 캐릭터들과 대화해 보세요!";
    const [landingTitle, setLandingTtile] = useState("");
    const [count, setCount] =useState(0);

    useInterval(() => {
        if(count >= completedTitle.length) {
            return;
        }

        setCount((prev) => prev + 1);
        // @ts-ignore
        setLandingTtile((prev) => {
            let result = prev ? prev + completedTitle[count] : completedTitle[0];


            return result;
        });

    }, 150);

    return (
            <div>
                <div className="simple bg-1">
                    <div className="simpletext">
                        {landingTitle}
                        <br/><br/><br/>
                        <button className="w-btn-neon2" type="button">
                            <Link to="/Paimon">대화하러가기</Link>
                        </button>
                    </div>
                </div>
            </div>
        );
}

export default Simple