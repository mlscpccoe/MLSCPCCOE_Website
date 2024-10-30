import cat from "../../assets/cat.png"

const Card = ({ color }) => {
	return (
		<div
			className="w-[55rem] h-[25rem] m-2 border-2 border-black bg-white shadow-custom-negative hover:shadow-custom-positive transition-all duration-200 hover:-translate-x-5 hover:-translate-y-5 max-md:scale-50 max-md:m-0"
			style={{ backgroundColor: `${color}` }}
		>
			<div className="flex flex-row justify-center items-center">
				<img src={cat} alt="" className="w-1/3 h-[25rem] pl-2 pb-3 pt-2 " />
				<img src={cat} alt="" className="w-1/3 h-[25rem] pl-2 pb-3 pt-2" />
				<img src={cat} alt="" className="w-1/3 h-[25rem] pl-2 pb-3 pt-2 pr-2" />
			</div>
		</div>
	)
}

export default Card
