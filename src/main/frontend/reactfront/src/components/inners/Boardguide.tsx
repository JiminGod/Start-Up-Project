import React from "react";
import "./Boardguide.css";
import boardimg from "../../img/board.png"
const Boardguide = () => {
    return(
        <div className="guidemain">
            <div className="boardpic">
                <img className="boardimg" src={boardimg}/>
            </div>
            <div className="guidetitle">
                ☺︎ 문의 게시판 안내
            </div>
            <div className="guidecontent">
                MAF에서 제공하는 기본 캐릭터들 말고도 보고싶은 캐릭터가 있다면, <br/>
                문의 게시판을 통해 여러분들이 대화하고 싶은 캐릭터를 알려주세요! <br/>
                문의 게시판에 보고 싶은 캐릭터를 남겨주시면 <br/>
                검토 후 추후에 추가할 수 있도록 하겠습니다! <br/>
            </div>
        </div>
    )
}

export default Boardguide