import Record from "./record"
import React, { useEffect, useState } from 'react';
export default function Infotable(props) {
    const [dataState, setDataState] = useState(props.datas);
    useEffect(() => {
        setDataState(props.datas);
    }, [props.datas]);
    return (
        <div className="flex flex-col text-gray-600 gap-2 max-h-[1080px] overflow-y-auto">
            {dataState.map((item, index) => (
                <Record datainfo={item} key={index} />
            ))}
        </div>
    )
}
