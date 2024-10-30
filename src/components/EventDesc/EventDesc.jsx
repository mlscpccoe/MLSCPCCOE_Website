const EventDesc = ({ color }) => {
	return (
		<div className="max-md:scale-[0.8]">
			<h2 className="hover:tracking-widest italic transition-all duration-300 text-center font-semibold text-3xl mt-8 mb-4 max-md:scale-50 max-md:mt-[-120px] max-md:mb-[-20px]">
				Event name
			</h2>
			<div
				className="w-full h-32 bg-white border-2 border-black shadow-custom-negative hover:shadow-custom-positive transition-all duration-200 p-2 hover:-translate-x-5 hover:-translate-y-5 mt-8 max-md:scale-50 max-md:mt-0"
				style={{ backgroundColor: `${color}` }}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
				officia! Harum iure quis, minus id aut ab eos enim quos, tenetur ea
				eligendi inventore qui commodi adipisci perspiciatis recusandae veniam.
				Sed officiis excepturi, error magni distinctio dolore porro nisi placeat
				ad blanditiis! Voluptates quod facere illum cumque saepe ea iusto
				voluptatum. Sapiente consectetur ex nobis, provident voluptatibus
				architecto. Nam, unde.
			</div>
		</div>
	)
}

export default EventDesc
