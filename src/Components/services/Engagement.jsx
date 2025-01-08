import * as d3 from "d3";
import geojson from "../../data/geojson"
import activeCountries from "../../data/activeCountries"
import { useEffect, useRef } from "react";
import { SlidersVertical } from "lucide-react";
import { Chart, plugins } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";


const Engagement = () => {
  const svgRef= useRef()
  const width= 270;
  const height= 150;
  const projection = d3.geoMercator().fitSize([width, height], geojson).scale(45);


  const geoPathGenerator = d3.geoPath().projection(projection);

  useEffect(()=>{
    const svg= d3.select(svgRef.current);
    const mapGroup= svg.selectAll("path");
    const zoom = d3.zoom().scaleExtent([1,8]).on("zoom", (event)=>{
      mapGroup.attr("transform", event.transform);
    })

    svg.call(zoom)
  },[])

  const socialData= {
    labels:["Facebook", "Youtube", "Google"],
    datasets:[
      {
        label: "Traffic counts",
        data:[118,112,236],
        backgroundColor:[
          "rgba(59,130,246,0.7)",
          "rgba(114,110,235,0.5)",
          "rgba(255,206,86,0.5)"
        ],
        borderWidth:0,
      }
    ]
  }
  const socialChartOptions={
    plugins:{
      display:true,
      position:"left",
      reverse:true,
    }
  }

  return (
    <>
    <div className='py-2'>
        <h1 className='font-bold text-lg mb-2'>Sales By Country</h1>
        <div className='w-fit m-auto'>
            <svg width={width} height={height} ref={svgRef}>
              {
                geojson.features.map((geo)=>{
                  const fillColor= activeCountries.includes(geo.id) ? "rgba(var(--green-300), 0.1)" : "rgba(209 213 219/.5)"
                  return (<path
                    key={geo.id}
                    d={geoPathGenerator(geo)}
                    stroke="#f5f5f5"
                    strokeWidth={1}
                    fill={fillColor}
                    fillOpacity={1}
                    className="hover:fill-purple-300/50 hover:stroke-purple-400/70"/>
                  )
                })
              }
            </svg>
        </div>
    </div>
    <div className="p-4 bg-black rounded-lg">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold text-lg">Lead Source</h3>
          <p className="text-gray-300 text-sm">Total traffic this month</p>
        </div>
        <button className="bg-black p-2 rounded-lg">
          <SlidersVertical/>
        </button>
      </div>
      <div className="bg-black p-4 rounded-lg mt-8">
        <Doughnut data={socialData} options={socialChartOptions}/>
      </div>
      <div className="flex items-center justify-between mt-4">
        <p>Learn more about traffic</p>
        <a href="#" className="py-2 px-4 bg-purple-300 rounded-lg text-white hover:bg-purple-300/10 text-sm hover:text-purple-300 inline-block">
        Learn </a>
      </div>
    </div>
    </>
  )
}

export default Engagement