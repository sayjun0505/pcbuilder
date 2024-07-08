import Record from "./record"
import React, { useEffect, useState } from 'react';
export default function Infotable(props) {
    const [dataState, setDataState] = useState(props.datas);
    // console.log(props.datas)
    useEffect(() => {
        setDataState(props.datas);
    }, [props]);
    return (
        <div className="grid grid-cols-4 gap-12 text-gray-600 max-h-[1080px] overflow-y-auto">
            {dataState.map((item, index) => (
                <Record datainfo={item} key={index} />
            ))}
        </div>
    )
}
