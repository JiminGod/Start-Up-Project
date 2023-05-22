import React from "react";
import "./Detail.css"
import exp from "constants";
// @ts-ignore
import Fade from "react-reveal/Fade"
const detail = () => {
        return (
            <div>
                <div className="detail bg-2">
                    <div className="detailtext">
                        <Fade>
                            평소 컨텐츠를 통해 소비하던 캐릭터들과 직접 대화해 보세요.<br/>
                            (사이트 제목)의 캐릭터들은 여러분들과의 대화를 기다리고 있어요.<br/>
                            어떤 말을 하든 잘 들어주고 대답해줄거에요.<br/>
                        </Fade>
                    </div>
                </div>
            </div>
        );
}

export default detail