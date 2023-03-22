export type Address = {
    city: string;
    country: string;
    state: string;
    street: string;
    zip: string;
};

export type Education = {
    school: string;
    degree: string;
    description: string;
};

export type Social = {
    name: string;
    url: string;
};

export type Project = {
    title: string;
    image: string;
    details: string;
    github: string;
    url: string;
};

export type Work = {
    company: string;
    description: string;
    title: string;
    years: string;
};

export type MainProps = {
    address: Address;
    bio: string;
    contactmessage: string;
    title: string;
    email: string;
    github: string;
    image: string;
    name: string;
    phone: string;
    project: string;
    resumedownload: string;
    social: Social[];
    website: string;
};

export type ResumeProps = {
    education: Education[];
    skillmessage: string;
    skills: { name: string }[];
    work: Work[];
};
