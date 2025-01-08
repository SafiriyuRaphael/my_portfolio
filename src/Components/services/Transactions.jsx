import React from "react";
import { Maximize2 } from "lucide-react";
import Checked from "../assets/Checked";


const transactions=[
    {
        status:1,
        name:"Safiriyu Rapheal",
        image:  null,
        product: "PulsePod",
        date: new Date().toLocaleDateString()
    },
    {
        status:2,
        name:"Tosin",
        image:  null,
        product: "GlowLamp",
        date: new Date().toLocaleDateString()
    },
    {
        status:0,
        name:"Oluwatobi Alexis",
        image:  null,
        product: "EcoBottle",
        date: new Date().toLocaleDateString()
    },
    {
        status:4,
        name:"Sauce Kid",
        image:  null,
        product: "WaveLink",
        date: new Date().toLocaleDateString()
    }
]
const Transactions = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Transactions</h1>
        <div>
          Show all <Maximize2 className="size-4" />
        </div>
      </div>
      <div className="mt-4 border-green-300 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left bg-gray-300">
              <th className="p-2">
                <div className="inline-flex">
                  <label className="flex items-center justify-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="w-5 h-5 cursor-pointer appearance-none transition-all border-green-300 shadow hover:shadow-md border checked:bg-purple-200 checked:border-purple-300 peer"
                      id="check1"
                    />
                    <span className="absolute text-black opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Checked/>
                    </span>
                  </label>
                </div>
              </th>
              <th className="p-2">Customer</th>
              <th className="p-2">Product</th>
              <th className="p-2 hidden sm:block">Date</th>
              <th className="p-2">Status</th>
              <th className="p-2 hidden sm:block">Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction,index)=>{
                const status= transaction.status===1 ? "Success": transaction.status===0 ? "Failed": "Processing";
                const statusStyle = status === "Success"
                ? "text-green-500 bg-green-500/20"
                : status === "Failed"
                ? "text-red-500 bg-red-500/20"
                : "text-orange-300 bg-orange-300/20";
              
                return(
                    <tr key={index}>
                        <td className="p-2">
                        <div className="inline-flex">
                  <label className="flex items-center justify-center cursor-pointer relative">
                    <input
                      type="checkbox"
                      className="w-5 h-5 cursor-pointer appearance-none transition-all border-green-300 shadow hover:shadow-md border checked:bg-purple-200 checked:border-purple-300 peer"
                      id="check1"
                    />
                    <span className="absolute text-black opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Checked/>
                    </span>
                  </label>
                </div>
                        </td>
                        <td className="p-2 flex items-center gap-2">
                            <div className="size-5 overflow-hidden rounded-full">
                                <img src={transaction.image} alt="" />
                            </div>
                            <h3 className="font-bold text-sm hidden sm:block">
                                {transaction.name}
                            </h3>
                        </td>
                        <td className="p-2">{transaction.product}</td>
                        <td className="p-2 hidden sm:block">{transaction.date}</td>
                        <td className="p-2">
                            <div className={`py-1 px-2 text-xs text-center rounded-lg ${statusStyle} `}>{status}</div>
                        </td>
                        <td className="p-2 text-center hidden sm:block">
                            <a href="#" className="font-semibold text-sm">View</a>
                        </td>
                        
                    </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
