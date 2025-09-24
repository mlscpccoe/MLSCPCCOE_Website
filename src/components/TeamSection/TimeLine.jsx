"use client"
import { Link } from "react-router-dom"
import { Check, Users, ChevronRight } from "lucide-react"

function TimelineItem({ item, index, scrollProgress }) {
  const isActive = scrollProgress > item.threshold

  return (
    <div className="relative">
      <div className="md:hidden flex flex-col">
        <div className="mb-4  ml-[50px] sm:ml-0">
          <h2
            className="text-4xl font-bold text-white transition-all duration-500"
            style={{
              opacity: isActive ? 1 : 0.5,
            }}
          >
            {item.year}
          </h2>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center relative">
            <div
              className="w-8 h-8 rounded-full border-2 bg-black flex items-center justify-center transition-all duration-500 z-10"
              style={{
                borderColor: isActive ? "#3b82f6" : "#4b5563",
                opacity: isActive ? 1 : 0.3,
                boxShadow: isActive ? "0 0 15px rgba(59, 130, 246, 0.6)" : "none",
              }}
            >
              <Check className="w-4 h-4 text-white" />
            </div>
            
           
          </div>

          <div className="flex-1">
            <div
              className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 transition-all duration-500"
              style={{
                opacity: isActive ? 1 : 0.7,
                transform: `translateY(${isActive ? 0 : 20}px)`,
              }}
            >
              <div className="text-sm font-medium mb-4 text-blue-400">
                {item.period}
              </div>

              <div className="flex flex-col items-center gap-4">
                {item.imgs && (
                  <div className="flex items-center -space-x-2">
                    {item.imgs.map((imgSrc, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-800 bg-gray-700"
                      >
                        <img
                          src={imgSrc}
                          alt={`Team member ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  to={item.teamRoute}
                  className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-5 py-2 flex items-center gap-2 text-sm"
                >
                  <Users className="w-4 h-4" />
                  View Team
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop/Laptop Layout */}
      <div className="hidden md:block">
        <div className="flex items-center justify-center gap-64">
          <div className="flex items-center justify-end w-1/2 pr-8">
            <h2
              className="text-6xl font-bold text-white transition-all duration-500"
              style={{
                opacity: isActive ? 1 : 0.5,
              }}
            >
              {item.year}
            </h2>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 z-30">
            <div
              className="w-12 h-12 rounded-full border-2 bg-black flex items-center justify-center transition-all duration-500"
              style={{
                borderColor: isActive ? "#3b82f6" : "#4b5563",
                opacity: isActive ? 1 : 0.3,
                boxShadow: isActive ? "0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)" : "none",
              }}
            >
              <Check className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="flex items-center justify-start w-1/2 pl-8">
            <div
              className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 w-80 border border-gray-800 transition-all duration-500"
              style={{
                opacity: isActive ? 1 : 0.7,
                transform: `translateY(${isActive ? 0 : 20}px)`,
              }}
            >
              <div
                className={"text-sm font-medium mb-6 text-blue-400"}
              >
                {item.period}
              </div>

              <div className="flex flex-col items-center gap-6">

                {item.imgs && (
                  <div className="flex items-center -space-x-3">
                    {item.imgs.map((imgSrc, i) => (
                      <div
                        key={i}
                        className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-800 bg-gray-700"
                      >
                        <img
                          src={imgSrc}
                          alt={`Team member ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <Link
                  to={item.teamRoute}
                  className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-6 py-2 flex items-center gap-2"
                >
                    <Users className="w-4 h-4" />
                      View Team
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimelineItem;