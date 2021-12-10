import React, { useState } from "react";

const SimpleShowHide = () => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        if (show) {
            setShow(false);
        } else {
            setShow(true);
        }
    };

    return (
        <div>
            <p>Saya sedang {show ? "muncul" : "sembunyi"}</p>
            <button data-testid="button-fireEvent" onClick={toggleShow}>
                {show ? "Sembunyikan" : "Munculkan"}
            </button>
        </div>
    );
};

export default SimpleShowHide;
