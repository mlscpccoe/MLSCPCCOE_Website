import TeamCard from "../TeamCard/TeamCard"
import { useRef } from "react"
import { motion, useTransform, useScroll } from "framer-motion"

const Team = () => {
	const target = useRef(null)

	const { scrollYProgress } = useScroll({
		target: target,
	})

	const colors = ["#f34f1c", "#ffba01", "#01a6f0", "#7fbc00"]

	const teamMembers = [
		{
			imageSrc:
				"https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741799812/h69gjvfu01syxtnydxdz.jpg",
			name: "Harsh Gulhane",
			role: "President",
			github: "",
			linkedin: "https://www.linkedin.com/in/harsh-gulhane-78a484259/",
			color: "#f34f1c",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741327155/Payal_Pawar_-_Payal_Pawar_ovwjnd.jpg",
			name: "Payal Pawar",
			role: "Event Management Head",
			github: "https://github.com/payalpawar9579/payalpawar9579",
			linkedin: "http://www.linkedin.com/in/payal-pawar-357243288",
			color: "#f34f1c",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741699698/pawan.jpg",
			name: "Pawan Patil",
			role: "Web Development Lead",
			github: "https://github.com/pawanp51",
			linkedin: "https://www.linkedin.com/in/pawan-patil51",
			color: "#f34f1c",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741012879/mlscteam/sarthak.jpg",
			name: "Sarthak Joshi",
			role: "Web Development Head",
			github: "https://github.com/Joshi-Sarthak",
			linkedin: "https://www.linkedin.com/in/sarthak-joshi-a98840259/",
			color: "#f34f1c",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741374983/IMG_9540_-_ADINATH_YADAV_vandt9.jpg",
			name: "Adinath Yadav",
			role: "Competitive Programming Head",
			github: "https://github.com/adinathyadav2002",
			linkedin: "https://www.linkedin.com/in/adinath-yadav-50a294251/",
			color: "#f34f1c",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741699114/siddhesh.jpg",
			name: "Siddhesh Patil",
			role: "Competitive Programming Lead",
			github: "https://github.com/siddhesh-patil",
			linkedin: "https://www.linkedin.com/in/siddhesh-patil",
			color: "#7fbc00",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741699115/tushar.jpg",
			name: "Tushar Badlani",
			role: "AI/DS Head",
			github: "https://github.com/tushar-badlani",
			linkedin: "https://www.linkedin.com/in/tushar-badlanii/",
			color: "#f34f1c",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741371408/Me_Codechef_T-shirt_hands_folded_-_ANISH_PATADE_esysef.jpg",
			name: "Anish Patade",
			role: "AI/DS Lead",
			github: "https://github.com/sensational03",
			linkedin: "https://www.linkedin.com/in/anish-patade-197967242/",
			color: "#7fbc00",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741699114/revati.png",
			name: "Revati Keskar",
			role: "Sponsorship and Marketing Head",
			github: "https://github.com/RevatiKeskar",
			linkedin: "https://www.linkedin.com/in/revatikeskar",
			color: "#ffba01",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741699953/kunal.jpg",
			name: "Kunal Pawara",
			role: "Media Lead",
			github: "https://github.com/KunalPawara",
			linkedin: "https://www.linkedin.com/in/kunal-pawara2004/",
			color: "#ffba01",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741327311/IMG_7039_-_122_AADITYA_DESHPANDE_tahvjt.jpg",
			name: "Aaditya Deshpande",
			role: "Event Management Team",
			github: "",
			linkedin: "https://www.linkedin.com/in/aaditya-deshpande-b90550292",
			color: "#7fbc00",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741367946/IMG-20250125-WA0137_-_Smit_Sawarkar_i0cw9v.jpg",
			name: "Smit Sawarkar ",
			role: "Event Management Team",
			github: "",
			linkedin:
				"https://www.linkedin.com/in/smit-sawarkar-016006324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			color: "#ffba01",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741368105/IMG-20240205-WA0014_-_Apoorv_Arora_zchowg.jpg",
			name: "Apoorv Arora",
			role: "Event Management Team",
			github: "",
			linkedin:
				"https://www.linkedin.com/in/apoorv-arora-77886727b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			color: "#01a6f0",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},

		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741368194/IMG_20250304_211146_-_ANANYA_GAWADE_q6b6gs.jpg",
			name: "Ananya Gawade",
			role: "Event Management Team",
			github: "https://github.com/AnanyaGawade",
			linkedin:
				"https://www.linkedin.com/in/ananya-gawade-613b46292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			color: "#f34f1c",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741371401/IMG_20250302_134101_192_-_NISHAAD_GANGAL_FY23P068_if08wv.jpg",
			name: "Nishaad Gangal",
			role: "Competitive Programming Team",
			github: "https://github.com/NishaadG",
			linkedin:
				"https://www.linkedin.com/in/nishaad-gangal-943210290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			color: "#ffba01",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741369397/1727968652695_-_ROHAN_ADKINE_sbpwgo.jpg",
			name: "Rohan Adkine",
			role: "Competitive Programming Team",
			github: "https://github.com/RohanAdkine",
			linkedin: "https://www.linkedin.com/in/rohan-adkine-401630214/",
			color: "#01a6f0",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},

		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741372977/IMG_20250308_001118_1_si7coy.png",
			name: "Piyush Badgujar",
			role: "Web Development Team",
			github: "https://github.com/piyushbagujar",
			linkedin: "http://www.linkedin.com/in/piyush-badgujar-jalgaon",
			color: "#ffba01",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741371406/IMG-20250301-WA0003_-_Mohit__Patil_FY23P072_ia8isx.jpg",
			name: "Mohit Patil",
			role: "Web Development Team",
			github: "",
			linkedin:
				"https://www.linkedin.com/in/mohit-patil-632061289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			color: "#01a6f0",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741368705/20241018_100141_-_117-Varad_Rane_deeowq.jpg",
			name: "Varad Rane",
			role: "AI/DS Team",
			github: "https://github.com/VaradRane12",
			linkedin: "https://www.linkedin.com/in/varad-rane1244/",
			color: "#ffba01",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},

		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741371407/Screenshot_2025_0306_140805_-_SYETC167_Kshitij_Hedau_fe5c0l.jpg",
			name: "Kshitij Hedau",
			role: "Design Team",
			github: "https://github.com/Herostomo",
			linkedin:
				"https://www.linkedin.com/in/kshitij-hedau-8084aa292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			color: "#7fbc00",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741368271/sparsh_image_-_SPARSH_GANDHI_l5hloq.jpg",
			name: "Sparsh Gandhi",
			role: "Design Team",
			github: "https://github.com/sparsh3104",
			linkedin: "https://www.linkedin.com/in/sparsh-gandhi-224b84312",
			color: "#ffba01",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741368546/1000065909-02_2_-_138_RACHANA_DIXIT_1_rj4qe0.jpg",
			name: "Rachana Dixit",
			role: "Design Team",
			github: "https://github.com/rachanadixit",
			linkedin:
				"https://www.linkedin.com/in/rachana-dixit-a8906b291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			color: "#01a6f0",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741368356/IMG_20250208_235812_-_ANIKET_DAMEDHAR_fyxysn.jpg",
			name: "Aniket Damedhar",
			role: "Design and media Team",
			github: "https://github.com/Aniket93227",
			linkedin: "https://www.linkedin.com/in/aniketd1604/",
			color: "#f34f1c",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741368445/IMG-20231009-WA0209_-_SHUBHANG_GANDHI_gxu4zv.jpg",
			name: "Shubhang Gandhi",
			role: "Design Team",
			github: "",
			linkedin: "https://www.linkedin.com/in/shubhang-gandhi-634553292",
			color: "#7fbc00",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},

		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741371891/IMG_7201_-_SARTHAK_BAGDE_muedyh.png",
			name: "Sarthak Bagde",
			role: "Sponsorship and Marketing Team",
			github: "",
			linkedin:
				"https://www.linkedin.com/in/sarthakbagde?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			color: "#01a6f0",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741371407/original_1d5393ca-f9c4-416c-8c39-6c17073dcc0a_IMG_20241022_105933_-_SYETC175-BHUMIKA_NEHETE_psa4x1.jpg",
			name: "Bhumika Nehete",
			role: "Sponsorship and Marketing Team",
			github: "",
			linkedin: "https://in.linkedin.com/in/bhumika-nehete-8023922bb",
			color: "#7fbc00",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741702573/amrita.jpg",
			name: "Amrita Iyer",
			role: "Sponsorship and Marketing Team",
			github: "",
			linkedin: "",
			color: "#7fbc00",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741371418/IMG-20231117-WA0080_-_A059_INDRANIL_KENEKAR_dej1tf.jpg",
			name: "Indranil Kenekar",
			role: "Video editing and photography Team ",
			github: "",
			linkedin:
				"https://www.linkedin.com/in/indranil-kenekar-490550292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			color: "#01a6f0",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741371422/IMG_7168_-_YASH_SOMWANSHI-F094_a6rmyc.jpg",
			name: "Yash Somwanshi ",
			role: "Video editing and photography Team ",
			github: "https://github.com/YashSomwanshi",
			linkedin:
				"https://www.linkedin.com/in/yash-somwanshi-3670b2292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			color: "#f34f1c",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
	]

	const x = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"])

	const teamMembersWithCycledColors = teamMembers.map((member, index) => ({
		...member,
		color: colors[index % colors.length],
	}))

	return (
		<section className="relative h-[400vh] bg-neutral-900" ref={target} id="Team">
			<div className="absolute inset-0 opacity-[1] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%220 0 2000 1000%22 xmlns=%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter id=%22a%22%3E%3CfeTurbulence type=%22fractalNoise%122 baseFrequency=%221%22 numOctaves=%223%22 stitchTiles=%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23a)%22%2F%3E%3C%2Fsvg%3E')]"></div>
			<div className="w-full sticky top-0 h-screen flex justify-center items-center bg-neutral-100 overflow-hidden">
				<div className="absolute inset-0 bg-grid-neutral-900/[0.03] -z-0"></div>

				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.3)_1px,_transparent_1px)] bg-[length:20px_20px] -z-0"></div>
				<h2 className="text-black text-5xl absolute top-[7rem] z-10 font-bold hover:tracking-wide transition-all duration-300 max-md:text-2xl">
					MLSC TEAM 2024-25
				</h2>
				<motion.div className="flex flex-row" style={{ x }}>
					{teamMembersWithCycledColors.map((member, index) => (
						<div
							key={index}
							className="hover:scale-105 transition-all duration-300 max-md:scale-90"
						>
							<motion.div
								initial={{ y: 400 }}
								whileInView={{
									y: 50,
									transition: {
										type: "linear",
										duration: 0.3,
										delay: 0.2,
									},
								}}
							>
								<TeamCard {...member} />
							</motion.div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default Team
