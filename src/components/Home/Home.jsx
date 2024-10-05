import mlsclogo from "../../../public/MLSC-logo.png";
import instagramicon from "../../../public/instagram-grey-outline-22754.png";
import facebookicon from "../../../public/183973_facebook_social network_logo_icon.png";
import twittericon from "../../../public/twitter-512.png";
import linkedinicon from "../../../public/linkedin-3-512.png";
import githubicon from "../../../public/github-grey-icon.png";

const Home = () => {
	return (
		<div className="w-screen h-screen flex bg-slate-900">
			<div className="w-2/5 h-screen flex flex-col justify-between py-16 ml-16">
				<a href="#" className="text-4xl font-semibold poppins-semibold flex items-center space-x-4 text-white hover:text-[#7fbc00] transition-colors duration-300">
					<i className="fas fa-home"></i>
					<span className="protest-strike-regular text-[3.5rem]">Home</span>
				</a>
				<a href="#" className="text-4xl font-semibold poppins-semibold flex items-center space-x-4 text-white hover:text-[#f34f1c] transition-colors duration-300">
					<i className="fas fa-calendar-alt"></i>
					<span className="protest-strike-regular text-[3.5rem]">Events</span>
				</a>
				<a href="#" className="text-4xl font-semibold poppins-semibold flex items-center space-x-4 text-white hover:text-[#01a6f0] transition-colors duration-300">
					<i className="fas fa-trophy"></i>
					<span className="protest-strike-regular text-[3.5rem]">Achievements</span>
				</a>
				<a href="#" className="text-4xl font-semibold poppins-semibold flex items-center space-x-4 text-white hover:text-[#ffba01] transition-colors duration-300">
					<i className="fas fa-users"></i>
					<span className="protest-strike-regular text-[3.5rem]">Team</span>
				</a>
				<a href="#" className="text-4xl font-semibold poppins-semibold flex items-center space-x-4 text-white hover:text-[#f34f1c] transition-colors duration-300">
					<i className="fas fa-envelope"></i>
					<span className="protest-strike-regular text-[3.5rem]">Contact Us</span>
				</a>
			</div>

			<div className="w-1/2 h-screen mt-8 mr-20">
				<div className="flex justify-center">
					{/* <div className="text-7xl mr-4 self-start mt-6 poppins-semibold text-[#f34f1c]">
						WE ARE
					</div> */}
					<img src={mlsclogo} className="w-5/11 self-start justify-center hover:opacity-80 transition-opacity duration-300 ml-36"></img>
				</div>
				<div className="mt-16">
					<p className="text-2xl mt-8 ml-36 flex text-right text-white">
						Lorem ipsum odor amet, consectetuer adipiscing elit. Ac sodales purus, ac tempus magna dolor. Molestie consequat nulla nisi pretium amet lobortis. Venenatis inceptos habitasse eget;
					</p>
					<p className="text-2xl mt-4 ml-36 flex text-right text-white">
						mus vestibulum nullam etiam. Vulputate interdum eu dapibus volutpat porttitor habitasse rhoncus senectus. Eros orci consequat dictum;
					</p>
					<div className="flex space-x-6 mt-8 justify-end">
						<a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
							<img src={instagramicon} alt="instagram icon" className="w-12"/>
						</a>
						<a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
							<img src={facebookicon} alt="facebook icon" className="w-12"/>
						</a>
						<a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
							<img src={twittericon} alt="twitter icon" className="w-12"/>
						</a>
						<a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
							<img src={linkedinicon} alt="linkedin icon" className="w-12"/>
						</a>
						<a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
							<img src={githubicon} alt="github icon" className="w-12"/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
