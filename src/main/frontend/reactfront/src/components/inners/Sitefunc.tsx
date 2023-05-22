import React from "react";
import "./Sitefunc.css";
import exp from "constants";
import chatting from "../../img/chatting.gif"
// @ts-ignore
import Fade from "react-reveal/Fade"
const sitefunc = () => {
        return (
            <div className="sitefunc bg-3">
                <div className="site1">
                        ⚙︎기능 구현 방법
                </div>
                <div className="site2">
                        <Fade>
                        MAF의 챗 봇들을 구글 Colab을 사용하여 <br/>
                        각 봇들의 데이터를 학습시켜 데이터 모델들을 생성합니다.     <br/>
                        그 후, Hugging Face 플랫폼을 통해      <br/>
                        데이터 모델들을 api로 만듭니다.  <br/>
                        그렇게 챗 봇들을 MAF 사이트로 불러와 <br/>
                        페이지 이용자들과 대화할 수 있도록 하였습니다. <br/>
                        </Fade>
                </div>
                <div className="sitepic">
                        <Fade>
                        <img src={chatting} className="chatpic"/>
                        </Fade>
                </div>
            </div>
        );
}

export default sitefunc