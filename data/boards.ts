export type Category = "remote" | "opensource" | "devops" | "devrel" | "techwriting";

export type Board = {
    name: string;
    description: string;
    link: string;
    category: Category[];

};

export const boards: Board[] = [
    // Remote Jobs
    {
        name: "We Work Remotely",
        description: "The largest remote work community in the world",
        link: "https://weworkremotely.com",
        category: ["remote"],
    },
    {
        name: "Remote OK",
        description: "Find remote jobs for digital nomads and remote workers",
        link: "https://remoteok.com",
        category: ["remote"],
    },
    {
        name: "FlexJobs",
        description: "Hand-screened remote and flexible jobs",
        link: "https://www.flexjobs.com",
        category: ["remote"],
    },
    {
        name: "Remotive",
        description: "Remote tech jobs and resources for remote workers",
        link: "https://remotive.com",
        category: ["remote"],
    },
    {
        name: "JustRemote",
        description: "Remote jobs in tech, marketing, and design",
        link: "https://justremote.co",
        category: ["remote"],
    },
    {
        name: "Himalayas",
        description: "Find remote jobs at top remote companies",
        link: "https://himalayas.app",
        category: ["remote"],
    },
    {
        name: "Working Nomads",
        description: "Remote jobs for digital workers",
        link: "https://www.workingnomads.com/jobs",
        category: ["remote"],
    },

    // Open Source Jobs
    {
        name: "FOSS Jobs",
        description: "Free and Open Source Software job opportunities",
        link: "https://www.fossjobs.net",
        category: ["opensource"],
    },
    {
        name: "Open Source Design Jobs",
        description: "Design roles in open source projects",
        link: "https://opensourcedesign.net/jobs",
        category: ["opensource"],
    },
    {
        name: "GitJobs",
        description: "Job board for open source and Git-based projects",
        link: "https://gitjobs.dev",
        category: ["opensource", "devops"],
    },

    // DevOps Jobs
    {
        name: "Kube Careers",
        description: "Kubernetes and cloud-native job board",
        link: "https://kube.careers",
        category: ["devops"],
    },

    // DevRel Jobs
    {
        name: "Developer Avocados",
        description: "Developer advocacy job board and community",
        link: "https://developeravocados.net",
        category: ["devrel"],
    },
    {
        name: "DevRel Careers",
        description: "Developer Relations and advocacy positions",
        link: "https://devrelcareers.com",
        category: ["devrel"],
    },

    // Tech Writing Jobs
    {
        name: "Write the Docs Job Board",
        description: "Documentation and technical writing opportunities",
        link: "https://jobs.writethedocs.org",
        category: ["techwriting"],
    },
    {
        name: "ProBlogger Job Board",
        description: "Writing and blogging job opportunities",
        link: "https://problogger.com/jobs",
        category: ["techwriting"],
    },
];

export function getBoardsByCategory(category: Category) {
    return boards.filter(b => b.category.includes(category));
}
