import React from 'react'

const AmbientBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
    <div className="absolute inset-0 opacity-30 bg-[linear-gradient(40deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px]"></div>
    <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black to-transparent z-10"></div>
    <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-10"></div>
  </div>
  )
}

export default AmbientBackground
