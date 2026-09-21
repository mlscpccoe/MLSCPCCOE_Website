type TeamMember = {
  name: string;
  role?: string;
  src: string;
  github?: string;
  linkedin?: string;
};

type Props = {
  items: TeamMember[];
  cardHeight?: number;
};

export default function MobileTeamList({ items, cardHeight = 280 }: Props) {
  return (
    <div className="lg:hidden mx-auto max-w-md px-4 py-6 space-y-6">
      {items.map((member, idx) => (
        <div
          key={member.name + idx}
          className="bg-zinc-900 rounded-xl shadow-md overflow-hidden flex flex-col items-center"
        >
          <div className="w-full" style={{ height: cardHeight, overflow: "hidden" }}>
            <img
              src={member.src}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="w-full p-4 text-center">
            <h3 className="text-white text-lg font-semibold">{member.name}</h3>
            {member.role && <p className="text-sm text-zinc-300 mt-1">{member.role}</p>}
            <div className="mt-2 flex justify-center gap-4 text-xs text-zinc-200">
              {member.github && (
                <a href={member.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
