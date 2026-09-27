export interface TeamMember {
  id: string;
  name: string;
  position: string;
  email: string;
  image: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Jane Doe",
    position: "President",
    email: "jane@wicsucsb.org",
    image: "/images/team/jane-doe.jpg",
  },
  {
    id: "2",
    name: "Alex Smith",
    position: "VP of Events",
    email: "alex@wicsucsb.org",
    image: "/images/team/alex-smith.jpg",
  },
];

export const alumniList: TeamMember[] = [
  
];