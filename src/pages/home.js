
import Infotable from "../components/infotable"
import Filters from "../components/filters"

import React, { useEffect, useState, useMemo } from 'react';



export default function Home() {
    const [filtervalue, setFiltervalue] = useState("")
    const [showdata, setShowdata] = useState([]);
    const all = useMemo(() => [
        {
            id: "asdfe3f",
            img: "https://pc-builder.io/images/cpu/1692871336_61345.jpg",
            review: "4.9",
            title: "AMD Ryzen 7 7800X3D 4.2 GHz 8-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "awffe3f",
            img: "https://pc-builder.io/images/cpu/1665830715_12916.jpg",
            review: "4.9",
            title: "AMD Ryzen 5 7600X 4.7 GHz 6-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "w5dfe3f",
            img: "https://pc-builder.io/images/cpu/1665744483_37542.jpg",
            review: "4.9",
            title: "AMD Ryzen 5 5600X 3.7 GHz 6-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "h6dfe3f",
            img: "https://pc-builder.io/images/cpu/1678083279_73348.jpg",
            review: "4.9",
            title: "AMD Ryzen 5 7600 3.8 GHz 6-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "7fdfe3f",
            img: "https://pc-builder.io/images/cpu/1703142812_13444.jpg",
            review: "4.9",
            title: "Intel Core i7-14700K 3.4 GHz 20-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "35dfe3f",
            img: "https://pc-builder.io/images/cpu/1692871336_61345.jpg",
            review: "4.9",
            title: "Intel Core i9-14900K 3.2 GHz 24-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "7udfe3f",
            img: "https://pc-builder.io/images/cpu/1692871336_61345.jpg",
            review: "4.9",
            title: "Intel Core i5-12400F 2.5 GHz 6-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "sydfe3f",
            img: "https://pc-builder.io/images/cpu/1692871336_61345.jpg",
            review: "4.9",
            title: "AMD Ryzen 5 3600 3.6 GHz 6-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "53dfe3f",
            img: "https://pc-builder.io/images/cpu/1665830725_46370.jpg",
            review: "4.9",
            title: "AMD Ryzen 7 7700X 4.5 GHz 8-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "7ddfe3f",
            img: "	https://pc-builder.io/images/cpu/1665830691_2741.jpg",
            review: "4.9",
            title: "AMD Ryzen 9 7950X3D 4.2 GHz 16-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "94dfe3f",
            img: "https://pc-builder.io/images/cpu/1692871336_61345.jpg",
            review: "4.9",
            title: "AMD Ryzen 5 5600 3.5 GHz 6-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "85dfe3f",
            img: "https://pc-builder.io/images/cpu/1692871336_61345.jpg",
            review: "4.9",
            title: "AMD Ryzen 7 5800X 3.8 GHz 8-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "9kdfe3f",
            img: "https://pc-builder.io/images/cpu/1692871336_61345.jpg",
            review: "4.9",
            title: "AMD Ryzen 5 5500 3.6 GHz 6-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "9gdfe3f",
            img: "https://pc-builder.io/images/cpu/1692871336_61345.jpg",
            review: "4.9",
            title: "Intel Core i5-12600KF 3.7 GHz 10-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "12dfe3f",
            img: "https://pc-builder.io/images/cpu/1692871336_61345.jpg",
            review: "4.9",
            title: "Intel Core i7-12700K 3.6 GHz 12-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "7gdfe3f",
            img: "https://pc-builder.io/images/cpu/1692871336_61345.jpg",
            review: "4.9",
            title: "AMD Ryzen 7 5700X 3.4 GHz 8-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "h3dfe3f",
            img: "https://pc-builder.io/images/cpu/1692871336_61345.jpg",
            review: "4.9",
            title: "Intel Core i7-13700K 3.4 GHz 16-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "g7dfe3f",
            img: "https://pc-builder.io/images/cpu/1665830708_3354.jpg",
            review: "4.9",
            title: "Intel Core i5-12600K 3.7 GHz 10-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "c7dfe3f",
            img: "https://pc-builder.io/images/cpu/1665830708_3354.jpg",
            review: "4.9",
            title: "AMD Ryzen 7 5800X3D 3.4 GHz 8-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        },
        {
            id: "8jdfe3f",
            img: "https://pc-builder.io/images/cpu/1665830716_81633.jpg",
            review: "4.9",
            title: "AMD Ryzen 9 7900X 4.7 GHz 12-Core Processor",
            cores: 8,
            bclock: "5GHZ",
            graphics: "Radeon",
            cclock: "4.2GHz",
            TDP: "120",
            multithread: "Yes",
            price: "384.00",
            shop: "https://www.amazon.com/dp/B0BTZB7F88?tag=pc-builder-us-20",
            shopicon: "https://pc-builder.io/img/amazon-icon.svg"
        }
    ], []);
    useEffect(() => {
        setShowdata(all)
    }, [all])


    useEffect(() => {
        const filterData = (value, list) => {
            if (value === "") {
                return list;
            } else {
                const filtered = list.filter(item => item.title.toLowerCase().includes(filtervalue.toLowerCase()));
                return filtered;
            }
        }
        let x = filterData(filtervalue, all);
        setShowdata(x)
    }, [filtervalue, all])

    return (
        <div className="md:mt-60 w-full flex flex-row justify-between">
            <div className="hidden md:flex w-1/4 h-screen">
                <Filters condition={filtervalue} />
            </div>
            <div className="p-2 sm:p-8 w-full md:w-2/3 rounded-xl border-2 border-gray-500 flex flex-col gap-4 ">
                <div className='border-2 border-gray-200 w-full sm:w-1/2 h-12 rounded-xl px-4 flex justify-center items-center' >
                    <input type="text" className='w-full outline-none bg-[#dae2e5]' onChange={(event) => setFiltervalue(event.target.value)} />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 15.5L19 19" stroke="#818895" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z" stroke="#818895" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
                {showdata && <Infotable datas={showdata} />}
            </div>
        </div>
    )
}