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
				"",
			name: "Mohit Patil",
			role: "President",
			github: "",
			linkedin: "",
			color: "#f34f1c",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"",
			name: "Aditya Deshpande",
			role: "Event Management Head",
			github: "",
			linkedin: "",
			color: "#f34f1c",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756493010/IMG-20250730-WA0117_3_-_TYETC175-BHUMIKA_NEHETE_rmxjip.jpg",
			name: "Bhumika Nehete",
			role: "Sponsorship and Marketing Head",
			github: "",
			linkedin: "https://www.linkedin.com/in/bhumikanehete/",
			color: "#ffba01",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756493005/arpita_-_ARPITA_PATKI_01_q2jjtt.jpg",
			name: "Arpita Patki",
			role: "Sponsorship and Marketing Lead",
			github: "https://github.com/arpitapatki",
			linkedin: "https://www.linkedin.com/in/arpita-r-patki-3821b2312",
			color: "#ffba01",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756302874/Nandkishor_Vasi_b3o3no.jpg",
			name: "Nandkishor Vasi",
			role: "Web Development Head",
			github: "https://github.com/nandkishor-vasi",
			linkedin: "https://www.linkedin.com/in/nandkishor-vasi/",
			color: "#f34f1c",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756492564/Aditya_Gavali_-_ADITYA_GAVALI_gxrz8e.jpg",
			name: "Aditya Gavali",
			role: "Web Development Lead",
			github: "https://github.com/Aditya2860",
			linkedin: "http://linkedin.com/in/aditya2860c",
			color: "#f34f1c",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"",
			name: "",
			role: "Competitive Programming Head",
			github: "",
			linkedin: "",
			color: "#f34f1c",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"",
			name: "Rushikesh Nakhale",
			role: "Competitive Programming Lead",
			github: "",
			linkedin: "",
			color: "#7fbc00",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756493013/IMG-20250828-WA0005_-_134-Rouchi_Mahajan_yodxd4.jpg",
			name: "Rouchi Mahajan",
			role: "AI/DS Head",
			github: "https://github.com/rouchi-11",
			linkedin: "https://www.linkedin.com/in/rouchi-mahajan-94a4a7292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			color: "#f34f1c",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"",
			name: "",
			role: "AI/DS Lead",
			github: "",
			linkedin: "",
			color: "#7fbc00",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"",
			name: "",
			role: "Media Lead",
			github: "",
			linkedin: "",
			color: "#ffba01",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756493005/Yasharj_Rajapure_-_YASHRAJ_RAJAPURE_iv4g61.jpg",
			name: "Yashraj Rajapure",
			role: "Videography and Photography Head",
			github: "https://github.com/YASHRAJ-81",
			linkedin: "https://www.linkedin.com/in/yashraj-rajapure-2929a0293/",
			color: "#ffba01",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756493004/Tanvi_Jadhav_Photo_-_TANVI_JADHAV_krppgq.jpg",
			name: "Tanvi Jadhav",
			role: "Event Management Executive",
			github: "https://github.com/Tanvi-J-24",
			linkedin: "http://www.linkedin.com/in/tanvi-jadhav",
			color: "#7fbc00",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756493013/Untitled_design_20250829_113826_0000_-_Apoorv_Arora_f9l1ks.png",
			name: "Apoorv Arora",
			role: "Event Management Executive",
			github: "https://github.com/Apoorv0770",
			linkedin:
				"https://www.linkedin.com/in/apoorv-arora01?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			color: "#ffba01",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"",
			name: "",
			role: "Event Management Team",
			github: "",
			linkedin:
				"",
			color: "#01a6f0",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},

		{
			imageSrc:
				"",
			name: "",
			role: "Event Management Team",
			github: "",
			linkedin:
				"",
			color: "#f34f1c",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756493011/Narayan_Ratnaparkhe_-_172-NARAYAN_RATNAPARKHE_blenxw.jpg",
			name: "Narayan Ratnaparkhe",
			role: "Competitive Programming Executive",
			github: "https://github.com/Narayan-A-R",
			linkedin:
				"https://www.linkedin.com/in/narayan-ratnaparkhe-12a93b30a/",
			color: "#ffba01",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"",
			name: "",
			role: "Competitive Programming Team",
			github: "",
			linkedin: "",
			color: "#01a6f0",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},

		{
			imageSrc:
				"https://res.cloudinary.com/dhqohpgir/image/upload/v1758042126/samarth_whiteformal_e1ey5b.jpg",
			name: "Samarth Waghrulkar",
			role: "Web Development Executive",
			github: "https://github.com/Samarth-06",
			linkedin: "www.linkedin.com/in/samarth-waghrulkar-46b854323",
			color: "#ffba01",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		// {
		// 	// imageSrc:
		// 	// 	"https://res.cloudinary.com/dweebldig/image/upload/v1741865684/WhatsApp_Image_2025-03-13_at_15.20.02_4acf2b8d_mpanxu.jpg",
		// 	// name: "Mohit Patil",
		// 	// role: "Web Development Team",
		// 	// github: "",
		// 	// linkedin:
		// 	// 	"https://www.linkedin.com/in/mohit-patil-632061289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
		// 	// color: "#01a6f0",
		// 	// rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		// },
		{
			imageSrc:
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756493008/Candid_-_Veerbhadra_Mahant_t3kd2n.jpg",
			name: "Veerbhadra Mahant",
			role: "AI/DS Executive",
			github: "https://github.com/VeerbhadraMahant",
			linkedin: "https://www.linkedin.com/in/veerbhadra-mahant-9550672b1/",
			color: "#01a6f0",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756493004/e3a0cf65-fe35-4ee2-9276-6b432cfe4c11_-_187_TRIJAL_KHADE_qrgehz.jpg",
			name: "Trijal Khade",
			role: "AI/DS Executive",
			github: "https://github.com/Trijalkhade",
			linkedin: "https://www.linkedin.com/in/trijalkhade",
			color: "#ffba01",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},

		{
			imageSrc:
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756493013/ved_-_VED_JADHAV_ra7l1v.jpg",
			name: "Ved Jadhav",
			role: "Design and Media Executive",
			github: "https://github.com/ved-jadhav-10",
			linkedin:
				"https://www.linkedin.com/in/vedjadhav",
			color: "#7fbc00",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"",
			name: "",
			role: "Design Team",
			github: "",
			linkedin: "",
			color: "#ffba01",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"",
			name: "",
			role: "Design Team",
			github: "",
			linkedin:
				"",
			color: "#01a6f0",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"",
			name: "",
			role: "Design and media Team",
			github: "",
			linkedin: "",
			color: "#f34f1c",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756493008/IMG_4286_-_351_Ninad_l2ox4j.jpg",
			name: "Ninad Ashok Mande",
			role: "Management and Logistics Executive",
			github: "https://github.com/ninad-byte",
			linkedin: "http://www.linkedin.com/in/ninad-mande-36737b251",
			color: "#7fbc00",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},

		{
			imageSrc:
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756493009/WhatsApp_Image_2025-08-27_at_17.47.39_56f047be_-_OMKAR_NIKAM_q5vt8e.jpg",
			name: "Omkar Nikam",
			role: "Sponsorship and Marketing Executive",
			github: "https://github.com/OMKAR-PSN",
			linkedin:
				"https://www.linkedin.com/in/omkar-nikam-436b27370/",
			color: "#01a6f0",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756493004/WhatsApp_Image_2025-08-29_at_22.25.55_c68b6402_-_SHARVIL_PATIL_gzkmed.jpg",
			name: "Sharvil Patil",
			role: "Sponsorship and Marketing Executive",
			github: "https://github.com/sharv18",
			linkedin: "http://www.linkedin.com/in/sharvil-patil-337ab1316",
			color: "#7fbc00",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"",
			name: "",
			role: "Sponsorship and Marketing Team",
			github: "",
			linkedin: "",
			color: "#7fbc00",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756493003/20250624_134738_1_4_-_ARYAN_PATEL_qar9td.jpg",
			name: "Aryan Patel",
			role: "Accounts & Finance Executive",
			github: "https://github.com/aryan051106",
			linkedin:
				"https://www.linkedin.com/in/aryan-patel-a26a0632a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			color: "#01a6f0",
			rotation: Math.floor(Math.random() * (8 + 8 + 1)) - 8,
		},
		{
			imageSrc:
				"",
			name: "",
			role: "Video editing and photography Team ",
			github: "",
			linkedin:
				"",
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
		<section className="relative h-[400vh] bg-neutral-900" ref={target} id="TeamOld">
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
