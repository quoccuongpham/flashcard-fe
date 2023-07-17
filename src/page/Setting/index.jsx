import { useState } from "react";
import AlertStyled from "../../styledComponent/AlertStyled";

const Setting = () => {
    const [alert, setAlert] = useState({
        type: "info",
        mess: "Chức năng đang được phát triển",
        isOpen: true,
    });
    return (
        <div>
            <AlertStyled {...alert} setAlert={setAlert} />
        </div>
    );
};

export default Setting;
