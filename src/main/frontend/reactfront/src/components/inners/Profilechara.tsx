import React, {useState} from "react";
import "./Profilechara.css"
import paimon from "../../img/paimon.png"
import human2 from "../../img/human2.png"
import human3 from "../../img/human3.png"
import human4 from "../../img/human4.png"
import Modal from "../../hooks/modal";
const Profilechara = () => {

    const [modalOpen1, setModalOpen1] = useState(false);

    const openModal1 = () => {
        setModalOpen1(true);
    };
    const closeModal1 = () => {
        setModalOpen1(false);
    };

    const [modalOpen2, setModalOpen2] = useState(false);

    const openModal2 = () => {
        setModalOpen2(true);
    };
    const closeModal2 = () => {
        setModalOpen2(false);
    };

    const [modalOpen3, setModalOpen3] = useState(false);

    const openModal3 = () => {
        setModalOpen3(true);
    };
    const closeModal3 = () => {
        setModalOpen3(false);
    };

    const [modalOpen4, setModalOpen4] = useState(false);

    const openModal4 = () => {
        setModalOpen4(true);
    };
    const closeModal4 = () => {
        setModalOpen4(false);
    };

    return(
        <div className="profile">
            <div className="intro">
                ♠︎캐릭터 프로필
            </div>
            <div className="pro1">
                <button className="probutton" onClick={openModal1}><img className="paimon" src={paimon}/></button>
            </div>
            <div className="pro2">
                <b>이름 : 페이몬</b><br/>
                게임 [원신]
            </div>
            <div className="pro3">
                <button className="probutton" onClick={openModal2}><img className="human2" src={human2}/></button>
            </div>
            <div className="pro4">
                대충 설명2
            </div>
            <div className="pro5">
                <button className="probutton" onClick={openModal3}><img className="human3" src={human3}/></button>
            </div>
            <div className="pro6">
                대충 설명3
            </div>
            <div className="pro7">
                <button className="probutton" onClick={openModal4}><img className="human4" src={human4}/></button>
            </div>
            <div className="pro8">
                대충 설명4
            </div>
            <Modal open={modalOpen1} close={closeModal1} header="페이몬">
                테스트
            </Modal>
            <Modal open={modalOpen2} close={closeModal2} header="인간2">
                테스트2
            </Modal>
            <Modal open={modalOpen3} close={closeModal3} header="인간3">
                테스트3
            </Modal>
            <Modal open={modalOpen4} close={closeModal4} header="인간4">
                테스트4
            </Modal>
        </div>
    )
}

export default Profilechara