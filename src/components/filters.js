import RangeAccordion from "./rangeaccordion"
import Accordion from "./accordion"
export default function Filters(condition) {
    const series = ["All", "AMD A10", "AMD A12", "AMD A4", "AMD A6", "AMD A8", "AMD Athlon", "AMD Athlon II", "AMD Athlon II X2", "AMD Athlon II X3", "AMD Athlon II X4", "AMD Athlon X2", "AMD Athlon X4", "AMD E-Series", "AMD E2-Series", "AMD FX", "AMD Opteron", "AMD Phenom II X2", "AMD Phenom II X3", "AMD Phenom II X4", "AMD Phenom II X6", "AMD Ryzen 3", "AMD Ryzen 5", "AMD Ryzen 5 PRO", "AMD Ryzen 7", "AMD Ryzen 7 PRO", "AMD Ryzen 9", "AMD Ryzen 9 PRO", "AMD Sempron", "AMD Sempron X2", "AMD Threadripper", "Intel Atom", "Intel Celeron", "Intel Core 2 Duo", "Intel Core 2 Extreme", "Intel Core 2 Quad", "Intel Core i3", "Intel Core i5", "Intel Core i7", "Intel Core i7 Extreme", "Intel Core i9", "Intel Pentium", "Intel Pentium Gold", "Intel Xeon E", "Intel Xeon E3", "Intel Xeon E5"]
    const microarchitecture = ["All", "Alder Lake", "Bobcat", "Broadwell", "Bulldozer", "Cascade Lake", "Coffee Lake"]
    const corefamily = ["All", "Abu Dhabi", "Alder Lake", "Allendale", "Arrandale", "Bloomfield", "Bristol Ridge", "Broadwell", "Broadwell-E", "Broadwell-E", "Broadwell-EP", "Callisto", "Cascade Lake-X", "Castle Peak", "Cedarview-D", "Cezanne", "Clarkdale", "Coffee Lake", "Coffee Lake Refresh", "Colfax", "Comet Lake", "Conroe", "Deneb", "Godavari", "Gulftown", "Haswell", "Haswell Refresh", "Haswell-E", "Haswell-EP", "Heka", "Ivy Bridge", "Ivy Bridge-E", "Ivy Bridge-EN", "Ivy Bridge-EP", "Kabini", "Kaby Lake-S", "Kaby Lake-X", "Kaveri", "Kentsfield", "Llano", "Lynnfield", "Matisse", "Picasso", "Pinnacle Ridge", "Propus", "Rana", "Raphael", "Raptor Lake", "Raven Ridge", "Regor", "Renoir", "Renoir-X", "Richland", "Rocket Lake-S", "Sandy Bridge", "Sandy Bridge-E", "Sandy Bridge-EP", "Sargas", "Seoul", "Skylake-H", "Skylake-S", "Skylake-X", "Summit Ridge", "Thuban", "Trinity", "Vermeer", "Vermeer-X", "Vishera", "Whitehaven", "Wolfdale", "Yorkfield", "Zacate", "Zambezi", "Zosma"]
    const socketfilter = ["All", "AM1", "AM1", "AM2+", "AM3", "AM3+", "AM4", "AM5"]
    const intgraph = ["All", "Intel HD Graphics", "Intel HD Graphics 2500", "Intel HD Graphics 3000", "Intel HD Graphics 4000", "Intel HD Graphics 44000"]
    const multithreadcontent = ["All", "No", "Yes", "Yes: Hyper-Threading"]
    const eccsupport = ["All", "No", "Yes"]
    const incooler = ["All", "No", "Yes"]
    const manufacturers = ["All", "AMD", "Intel"]
    return (
        <div className="w-full border-2 border-gray-500 rounded-xl">
            <div className='m-2 bg-gray-200 rounded-xl p-4 flex flex-row items-start gap-4'>
                <input type="checkbox" className='mt-2' />
                <div className='flex flex-col justify-start'>
                    <div className='text-bold'>Compatibility Filter</div>
                    <div className=''>Selected Parts : 0 Parts</div>
                </div>

            </div>
            <RangeAccordion title="Core Count" />
            <Accordion title="Manufacturers" content={manufacturers} />
            <Accordion title="Series" content={series} />
            <Accordion title="Microarchitecture" content={microarchitecture} />
            <Accordion title="Core Family" content={corefamily} />
            <Accordion title="Socket" content={socketfilter} />
            <Accordion title="Integrated Graphics" content={intgraph} />
            <Accordion title="Simultaneous Multithreading" content={multithreadcontent} />
            <Accordion title="ECC Support" content={eccsupport} />
            <Accordion title="Includes Cooler" content={incooler} />
        </div>
    )
}
