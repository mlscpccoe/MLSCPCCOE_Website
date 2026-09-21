import TimelineItem from "./TimeLine"
import { useState, useEffect } from "react"
export default function TeamMainPage() {
	const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
  let animationFrameId;
  const handleScroll = () => {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
    cancelAnimationFrame(animationFrameId);
  };
}, []);

	const timeline = [
		{
			year: "2024",
			period: "2024-2025",
			role: "Team Members",
			teamRoute: "/team/2024",
			imgs: [
				"https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741799812/h69gjvfu01syxtnydxdz.jpg",
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741327155/Payal_Pawar_-_Payal_Pawar_ovwjnd.jpg",
				"https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741699114/revati.png",
				"https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741012879/mlscteam/sarthak.jpg",
				"https://res.cloudinary.com/dvclc1dpd/image/upload/v1741374983/IMG_9540_-_ADINATH_YADAV_vandt9.jpg",
				"https://res.cloudinary.com/dcgb5c6y8/image/upload/v1741699115/tushar.jpg",
			],
			threshold: 0.4,
		},
		{
			year: "2025",
			period: "2025-2026",
			role: "Team Members",
			teamRoute: "/team/2025",
			imgs: [
				"https://res.cloudinary.com/dyricwenw/image/upload/v1757430602/1000102853-Picsart-AiImageEnhancer_ohkzcp.jpg",
				"https://res.cloudinary.com/dyricwenw/image/upload/v1757440857/IMG_20250128_153519_-_122_AADITYA_DESHPANDE_1_lp4nti.jpg",
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756493010/IMG-20250730-WA0117_3_-_TYETC175-BHUMIKA_NEHETE_rmxjip.jpg",
				"https://res.cloudinary.com/dyricwenw/image/upload/v1757440993/Picsart_25-08-28_23-25-02-491_1_acrc0j_1_1_pug9wk.jpg",
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756493013/IMG-20250828-WA0005_-_134-Rouchi_Mahajan_yodxd4.jpg",
				"https://res.cloudinary.com/dyricwenw/image/upload/v1756578629/WhatsApp_Image_2025-08-30_at_20.08.47_27add7a5_-_TYETC167_Kshitij_Hedau_uyut85.jpg",
			],
			threshold: 0.4,
		},
	]

	return (
		<div
			className="pb-[183px] bg-black text-white relative overflow-hidden"
			id="Team"
		>
			<div
				className="absolute inset-0 opacity-20"
				style={{
					backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
					backgroundSize: "50px 50px",
				}}
			/>

			<div className="relative pt-32 px-8">
        <div className="text-center mb-16">
			<h1 className="text-6xl md:text-6xl font-bold text-white">
				Team
			</h1>
		</div>
				<div className="absolute top-50 w-0.5 h-[calc(100%-8rem)] bg-gray-700 z-0 left-12 md:left-1/2 md:transform md:-translate-x-1/2">
					<div
						className="absolute top-0 left-0 w-full bg-blue-500 z-0"
						style={{
							height: `${scrollProgress * 70 * 1.2}%`,
							opacity: scrollProgress > 0.05 ? 1 : 0,
							transition: "height 0.7s ease-out, opacity 0.7s ease-out",
						}}
					/>
				</div>

				<div className="flex flex-col gap-32">
					{timeline.map((item, index) => (
						<TimelineItem
							key={index}
							item={item}
							index={index}
							scrollProgress={scrollProgress}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
