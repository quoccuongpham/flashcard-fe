import { useState } from "react";
import AlertStyled from "../../styledComponent/AlertStyled";

const Docs = () => {
    const [alert, setAlert] = useState({
        type: "error",
        mess: "Thang cong ^^",
        isOpen: true,
    });
    return (
        <div>
            <button
                onClick={() => {
                    setAlert({
                        ...alert,
                        mess: Math.random().toString(),
                        isOpen: true,
                    });
                }}
            >
                open
            </button>
            <AlertStyled {...alert} setAlert={setAlert} />
        </div>
    );
};

export default Docs;
