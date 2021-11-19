import React from "react";
import { Button } from "./element";

const ScrollButton = ({ visible, onClick }) => {
    return (
        <Button visible={visible} onClick={onClick}>
            &#10162;
        </Button>
    );
};

export default ScrollButton;
