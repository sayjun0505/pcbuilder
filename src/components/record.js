import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Record(propss) {
    // const [data, setData] = useState(propss.datainfo);
    const navigate = useNavigate();
    const detail = (data) => {
        // console.log("data.id:", data.id)
        navigate('/info', { state: data });
    }
    return (
        <div className="hover:cursor-pointer border-2 border-white hover:border-gray-500 border-white-500 p-2  flex w-full flex-col md:flex-row" onClick={() => detail(propss.datainfo.id)}>
            <div className="broder-2 border-blue-500 w-full sm:w-3/4 flex flex-row items-center gap-4 flex-start">
                <div className="flex flex-col justify-center">
                    <img src={propss.datainfo.img} alt="AMD Ryzen 7 7800X3D 4.2 GHz 8-Core Processor" className="w-16 h-16 sm:w-40 sm:h-32" />
                    <div className="flex flex-row gap-2 items-center justify-center">
                        <img alt="Rating" className="w-4 h-12 " src="https://pc-builder.io/img/star.svg" /> <span>{propss.datainfo.review}</span>
                    </div>
                </div>
                <div className="h-full py-4 flex w-full flex-col justify-between">
                    <a href="https://pc-builder.io/cpu/amd-ryzen-7-7800x3d-p52516" className=" font-black text-bold text-lg sm:text-2xl ">{propss.datainfo.title}</a>
                    <div className="flex flex-row w-full justify-between">
                        <div className="w-1/2 gap-2 flex flex-col justify-start">
                            <div className="col-lg-6 col-md-6 col-12 gy-1 col-12">
                                <span>Core Count:</span><span>{propss.datainfo.cores}</span>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 gy-1 col-12">
                                <span>Boost Clock:</span><span>{propss.datainfo.clock}</span>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 gy-1 col-12">
                                <span>Integrated Graphics:</span><span>{propss.datainfo.graphics}</span>
                            </div>
                        </div>
                        <div className="w-1/2 gap-2 flex flex-col justify-start">
                            <div className="col-lg-6 col-md-6 col-12 gy-1 col-12">
                                <span>Core Clock:</span><span>{propss.datainfo.cclock}</span>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 gy-1 col-12">
                                <span>TDP:</span><span>{propss.datainfo.TDP}W</span>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 gy-1 col-12">
                                <span>Simultaneous Multithreading:</span><span>{propss.datainfo.multithread}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col justify-between py-4 ">
                <div className="flex justify-end w-full font-black text-bold text-xl ">${propss.datainfo.price}</div>
                <div className="flex flex-row w-full items-center  gap-4 ">
                    <svg className="p-2 rounded-md w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M22.8068 21.4152C22.9566 21.3571 23.0864 21.3426 23.1962 21.3717C23.3061 21.4007 23.361 21.4853 23.361 21.6256C23.361 21.7658 23.2861 21.9278 23.1363 22.1116C23.0065 22.2664 22.7869 22.4767 22.4774 22.7427C22.1678 23.0087 21.6911 23.3376 21.0471 23.7294C20.4031 24.1211 19.6991 24.479 18.9353 24.803C18.1715 25.127 17.2329 25.4076 16.1197 25.6445C15.0064 25.8815 13.8606 26 12.6825 26C11.4943 26 10.3061 25.8501 9.11794 25.5502C7.92978 25.2504 6.88638 24.8804 5.98777 24.4403C5.08916 24.0002 4.22798 23.4972 3.40425 22.9314C2.58052 22.3655 1.91904 21.8577 1.41981 21.4079C0.920581 20.9581 0.501227 20.535 0.161751 20.1384C0.0818738 20.0513 0.0319507 19.9715 0.0119815 19.899C-0.00798769 19.8265 -0.00299538 19.7684 0.0269584 19.7249C0.0569123 19.6814 0.0968507 19.6475 0.146774 19.6233C0.196697 19.5991 0.254108 19.5895 0.319008 19.5943C0.383908 19.5991 0.44132 19.6209 0.491243 19.6596C2.40829 20.7913 3.90598 21.5941 4.98432 22.0681C8.86833 23.7705 12.8572 24.2057 16.9509 23.3739C18.8479 22.987 20.7999 22.3341 22.8068 21.4152ZM25.9071 19.7467C26.0169 19.9014 26.0294 20.2375 25.9445 20.755C25.8596 21.2725 25.7174 21.7682 25.5177 22.2422C25.1782 23.045 24.7538 23.6447 24.2446 24.0413C24.0749 24.1767 23.9451 24.2202 23.8552 24.1719C23.7654 24.1235 23.7654 24.0074 23.8552 23.8237C24.0649 23.3884 24.2871 22.8008 24.5217 22.0608C24.7563 21.3209 24.7888 20.8445 24.6191 20.6317C24.5691 20.564 24.4917 20.5084 24.3869 20.4648C24.2821 20.4213 24.1473 20.3923 23.9825 20.3778C23.8178 20.3633 23.6705 20.3512 23.5407 20.3415C23.4109 20.3318 23.2362 20.3318 23.0165 20.3415C22.7969 20.3512 22.6396 20.3609 22.5448 20.3705C22.4499 20.3802 22.2951 20.3947 22.0805 20.4141C21.8658 20.4334 21.7535 20.4431 21.7435 20.4431C21.6836 20.4528 21.6187 20.46 21.5488 20.4648C21.4789 20.4697 21.424 20.4745 21.384 20.4794C21.3441 20.4842 21.3017 20.489 21.2567 20.4939C21.2118 20.4987 21.1769 20.5011 21.1519 20.5011H21.0021L20.9572 20.4939L20.9272 20.4721L20.9048 20.4286C20.8449 20.2738 21.0795 20.0804 21.6087 19.8482C22.1379 19.6161 22.6521 19.471 23.1513 19.4129C23.6106 19.3452 24.1498 19.3404 24.7688 19.3984C25.3879 19.4565 25.7673 19.5725 25.9071 19.7467ZM20.0062 13.3192C20.0062 13.619 20.0736 13.9286 20.2084 14.2478C20.3431 14.567 20.5029 14.8475 20.6876 15.0893C20.8723 15.3311 21.0595 15.5536 21.2492 15.7567C21.439 15.9598 21.6037 16.1146 21.7435 16.221L21.9382 16.3806L18.5384 19.6306C18.139 19.2727 17.7446 18.9076 17.3552 18.5352C16.9658 18.1628 16.6763 17.8798 16.4866 17.6864L16.202 17.3962C16.0922 17.2898 15.9674 17.1302 15.8276 16.9174C15.4482 17.4881 14.9614 17.9838 14.3674 18.4046C13.7733 18.8253 13.1368 19.1324 12.4578 19.3259C11.7788 19.5193 11.0799 19.6306 10.361 19.6596C9.64214 19.6886 8.9557 19.5871 8.3017 19.3549C7.64771 19.1228 7.06112 18.806 6.54192 18.4046C6.02272 18.0032 5.60836 17.4567 5.29883 16.7651C4.98931 16.0735 4.83455 15.2876 4.83455 14.4074C4.83455 13.5949 4.97433 12.8501 5.2539 12.173C5.53347 11.4959 5.89292 10.9325 6.33224 10.4827C6.77156 10.0329 7.30324 9.63151 7.92728 9.27846C8.55132 8.92541 9.16288 8.64974 9.76195 8.45145C10.361 8.25316 11.01 8.08631 11.709 7.95089C12.4079 7.81548 13.0045 7.726 13.4987 7.68248C13.9929 7.63895 14.4897 7.60751 14.9889 7.58817V5.74554C14.9889 5.11682 14.8841 4.64769 14.6744 4.33817C14.3349 3.82552 13.7308 3.5692 12.8622 3.5692C12.8023 3.5692 12.7199 3.57403 12.6151 3.58371C12.5102 3.59338 12.308 3.65141 12.0085 3.75781C11.709 3.86421 11.4294 4.00688 11.1698 4.18583C10.9102 4.36477 10.6306 4.65253 10.3311 5.04911C10.0315 5.44568 9.79191 5.90997 9.61218 6.44196L5.20897 6.05022C5.20897 5.46987 5.3188 4.89435 5.53846 4.32366C5.75812 3.75298 6.09261 3.20647 6.54192 2.68415C6.99122 2.16183 7.53039 1.70238 8.15942 1.3058C8.78845 0.909226 9.54479 0.592448 10.4284 0.355469C11.3121 0.11849 12.2631 0 13.2815 0C14.28 0 15.1836 0.120908 15.9923 0.362723C16.8011 0.604539 17.4476 0.901972 17.9319 1.25502C18.4161 1.60807 18.8205 2.00949 19.145 2.45926C19.4695 2.90904 19.6941 3.32496 19.819 3.70703C19.9438 4.0891 20.0062 4.44457 20.0062 4.77344V13.3192ZM9.94168 13.6239C9.94168 14.4557 10.2911 15.099 10.9901 15.5536C11.649 15.9792 12.343 16.0856 13.0719 15.8728C13.9106 15.631 14.4797 15.0361 14.7792 14.0882C14.919 13.6529 14.9889 13.1644 14.9889 12.6228V10.2723C14.3998 10.2917 13.8457 10.3497 13.3265 10.4464C12.8073 10.5432 12.2756 10.7052 11.7314 10.9325C11.1873 11.1598 10.7529 11.5032 10.4284 11.9626C10.1039 12.4221 9.94168 12.9758 9.94168 13.6239Z" fill="white" />
                    </svg>
                    <div className="py-4 px-12 sm:px-4 md:px-12 rounded-md bg-gradient-to-r from-green-400 to-blue-500">+ Add</div>
                </div>
            </div>
        </div>
    )

}

