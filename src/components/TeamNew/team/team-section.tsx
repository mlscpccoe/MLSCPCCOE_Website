import React from "react"
import { VerticalRoll } from "./vertical-roll"
import MobileFocusRoll from "./MobileFocusRoll";

function shuffleArray(array) {
	const a = array.slice()
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[a[i], a[j]] = [a[j], a[i]]
	}
	return a
}


const TEAM = [
	{
		name: "Mohit Patil",
		role: "President",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1757430602/1000102853-Picsart-AiImageEnhancer_ohkzcp.jpg",
	},
	{
		name: "Aaditya Deshpande",
		role: "Event Management Head",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1757440857/IMG_20250128_153519_-_122_AADITYA_DESHPANDE_1_lp4nti.jpg",
	},
	{
		name: "Smit Sawarkar",
		role: "Event Management Lead",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756578630/WhatsApp_Image_2025-08-30_at_11.08.16_AM_-_F089_SMIT_SAWARKAR_fsbnjq.jpg",
	},
	{
		name: "Bhumika Nehete",
		role: "Sponsorship and Marketing Head",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756493010/IMG-20250730-WA0117_3_-_TYETC175-BHUMIKA_NEHETE_rmxjip.jpg",
	},
	{
		name: "Arpita Patki",
		role: "Sponsorship and Marketing Lead",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756493005/arpita_-_ARPITA_PATKI_01_q2jjtt.jpg",
	},
	{
		name: "Sarthak Bagde",
		role: "Sponsorship and Marketing Lead",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756578630/formal_pic_-_SARTHAK_BAGDE_ab46yk.jpg",
	},
	{
		name: "Nandkishor Vasi",
		role: "Web Development Head",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1757440993/Picsart_25-08-28_23-25-02-491_1_acrc0j_1_1_pug9wk.jpg",
		github: "https://github.com/nandkishor-vasi",
		linkedin: "https://linkedin.com/in/nandkishor-vasi",
	},
	{
		name: "Aditya Gavali",
		role: "Web Development Lead",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756492564/Aditya_Gavali_-_ADITYA_GAVALI_gxrz8e.jpg",
	},
	{
		name: "Rouchi Mahajan",
		role: "AI/DS Head",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756493013/IMG-20250828-WA0005_-_134-Rouchi_Mahajan_yodxd4.jpg",
	},
	{
		name: "Adway Aghor",
		role: "AI/DS Lead",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756578631/Screenshot_20250727_001504_Gallery_-_038_Adway_Aghor_lgsjft.jpg",
	},
	{
		name: "Prithviraj Desale",
		role: "Competitive programming Head",
		src: "",
	},
	{
		name: "Rushikesh Nakhale",
		role: "Competitive programming Lead",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756578631/Linkedin_-_115-Rushikesh_Nakhale_bnfdvj.jpg",
	},
	{
		name: "Kshitij Hedau",
		role: "Design and Media Head",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756578629/WhatsApp_Image_2025-08-30_at_20.08.47_27add7a5_-_TYETC167_Kshitij_Hedau_uyut85.jpg",
	},
	{
		name: "Yashraj Rajapure",
		role: "Videography and Photography Head",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756493005/Yasharj_Rajapure_-_YASHRAJ_RAJAPURE_iv4g61.jpg",
	},
	{
		name: "Indranil kenekar",
		role: "Videography Head",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756578630/IMG-20231117-WA0080_-_A059_INDRANIL_KENEKAR_adqrfd.jpg",
	},
	{
		name: "Rachana Dixit",
		role: "Design and media Lead",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756578631/1000185675_-_138_RACHANA_DIXIT_vtmpq4.jpg",
	},
	{
		name: "Samarth Waghrulkar",
		role: "Web Development Executive",
		src: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	},
	{
		name: "Tanvi Jadhav",
		role: "Event Management Executive",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756493004/Tanvi_Jadhav_Photo_-_TANVI_JADHAV_krppgq.jpg",
	},
	{
		name: "Apoorv Arora",
		role: "Event Management Executive",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756493013/Untitled_design_20250829_113826_0000_-_Apoorv_Arora_f9l1ks.png",
	},
	{
		name: "Narayan Ratnaparkhe",
		role: "Competitive Programming Executive",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756493011/Narayan_Ratnaparkhe_-_172-NARAYAN_RATNAPARKHE_blenxw.jpg",
	},
	{
		name: "Sanjana Biyani",
		role: "Competitive Programming Executive",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756578631/Sanjana_Biyani_-_C042_Sanjana_Biyani_pn9hly.jpg",
	},
	{
		name: "Veerbhadra Mahant",
		role: "AI/DS Executive",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756493008/Candid_-_Veerbhadra_Mahant_t3kd2n.jpg",
	},
	{
		name: "Trijal Khade",
		role: "AI/DS Executive",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756493004/e3a0cf65-fe35-4ee2-9276-6b432cfe4c11_-_187_TRIJAL_KHADE_qrgehz.jpg",
	},
	{
		name: "Ved Jadhav",
		role: "Design and Media Executive",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756493013/ved_-_VED_JADHAV_ra7l1v.jpg",
	},
	{
		name: "Sumaira Mulla",
		role: "Design Executive",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756578631/Sumaira_Mulla_-_Sumaira_Mulla_lzkypn.png",
	},
	{
		name: "Ninad Ashok Mande",
		role: "Management and Logistics Executive",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756493008/IMG_4286_-_351_Ninad_l2ox4j.jpg",
	},
	{
		name: "Omkar Nikam",
		role: "Sponsorship and Marketing Executive",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756493009/WhatsApp_Image_2025-08-27_at_17.47.39_56f047be_-_OMKAR_NIKAM_q5vt8e.jpg",
	},
	{
		name: "Sharvil Patil",
		role: "Sponsorship and Marketing Executive",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756493004/WhatsApp_Image_2025-08-29_at_22.25.55_c68b6402_-_SHARVIL_PATIL_gzkmed.jpg",
	},
	{
		name: "Madhav Khobare",
		role: "Sponsorship and Marketing Executive",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756578630/IMG_20250830_18032182_-_Madhav_Khobare_svdyqd.jpg",
	},
	{
		name: "Aryan Patel",
		role: "Accounts & Finance Executive",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756493003/20250624_134738_1_4_-_ARYAN_PATEL_qar9td.jpg",
	},
	{
		name: "Tejal Jadhav",
		role: "Accounts and Finance Executive",
		src: "https://res.cloudinary.com/dyricwenw/image/upload/v1756578632/Tejal_Jadhav_-_Tejal_Jadhav_orqmkw.jpg",
	},
]

export default function TeamSection() {
	const shuffledTeam = React.useMemo(() => shuffleArray(TEAM), [])
	return (
		<div className="relative isolate bg-black text-white" id="Team">
			<div className="mx-auto grid grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:py-24 lg:gap-16">
				<div className="md:sticky md:top-[22rem] md:self-start pl-2">
					<h1 className="text-pretty text-5xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
						Together,
						<br />
						we create
					</h1>
					<p className="mt-6 max-w-prose text-base leading-6 text-zinc-300">
						The MLSC crew - curious, driven, and full of energy always up to
						something awesome. From brainstorming wild ideas to making them
						a reality, they push boundaries, experiment boldly, and bring a
						spark to everything they do.
					</p>
				</div>

				{(() => {
					const directions: Array<"down" | "up"> = ["down", "up", "down"]
					return (
						<>
							<div className="hidden lg:flex lg:justify-end lg:gap-6 lg:items-start">
								{directions.map((colItems, idx) => (
									<div key={colItems} className="w-full lg:w-[300px]">
										<VerticalRoll
											items={idx === 2 ? shuffledTeam : TEAM}
											cardHeight={320}
											gap={16}
											direction={directions[idx]}
											className="mx-auto max-w-[600px]"
										/>
									</div>
								))}
								
							</div>

							<div className="lg:hidden">
								{/* <VerticalRoll
									items={TEAM}
									cardHeight={280}
									gap={14}
									direction="down"
									className="mx-auto max-w-md"
								/> */}
								<MobileFocusRoll items={TEAM} cardHeight={280} />
							</div>
						</>
					)
				})()}
			</div>
		</div>
	)
}
