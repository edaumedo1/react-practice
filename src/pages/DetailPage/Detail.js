import React from 'react';
import { useLocation } from "react-router";

function Detail() {
    const location = useLocation();
    console.log(location);
    return <div>아샷추</div>;
}

export default Detail
