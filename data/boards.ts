// export type Category = "remote" | "opensource" | "devops" | "devrel" | "techwriting" | "popular" | "startup";

import { hubCategories } from "./categories";


export type Category = typeof hubCategories[number]['id'];

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
        category: ["remote", "popular"],
    },
    {
        name: "Remote OK",
        description: "Find remote jobs for digital nomads and remote workers",
        link: "https://remoteok.com",
        category: ["remote", "popular"],
    },
    {
        name: "FlexJobs",
        description: "Hand-screened remote and flexible jobs",
        link: "https://www.flexjobs.com",
        category: ["remote", "popular"],
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
    {
        name: "Open Source Pledge Jobs",
        description: "Job board for companies supporting open source",
        link: "https://opensourcepledge.com/jobs/",
        category: ["opensource"],
    },

    // DevOps Jobs
    {
        name: "Kube Careers",
        description: "Kubernetes and cloud-native job board",
        link: "https://kube.careers",
        category: ["devops", "popular"],
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
        category: ["techwriting", "popular"],
    },
    {
        name: "ProBlogger Job Board",
        description: "Writing and blogging job opportunities",
        link: "https://problogger.com/jobs",
        category: ["techwriting"],
    },

    {
        "name": "We Work Remotely",
        "description": "The largest remote work community in the world with 6M+ visitors. Strong for software development, marketing, design, and customer support roles",
        "link": "https://weworkremotely.com",
        "category": [
            "remote",
            "popular"
        ]
    },
    {
        "name": "FlexJobs",
        "description": "The most comprehensive remote job board with hand-screened legitimate job postings across industries. Subscription-based service",
        "link": "https://flexjobs.com",
        "category": [
            "remote",
            "popular"
        ]
    },
    {
        "name": "Remote.co",
        "description": "Remote-only jobs (telecommute excluded) founded by Sara Sutton. Browse by role or tags like high-paying, entry-level, international",
        "link": "https://remote.co",
        "category": [
            "remote",
            "popular"
        ]
    },
    {
        "name": "RemoteOK",
        "description": "Remote job board with best search filters by location, salary, and employer benefits. Primarily software engineering focused",
        "link": "https://remoteok.com",
        "category": [
            "remote",
            "popular"
        ]
    },
    {
        "name": "JustRemote",
        "description": "Minimalistic remote-only job board. Filter by job origin, type (full-time/contract/freelance), or role. Weekly subscription newsletter available",
        "link": "https://justremote.co",
        "category": [
            "remote"
        ]
    },
    {
        "name": "Wellfound",
        "description": "Platform for finding jobs at 30,000+ startups. Apply to 130,000+ tech & startup jobs with one application. Shows salary and equity upfront",
        "link": "https://wellfound.com",
        "category": [
            "remote",
            "popular",
            "startup"
        ]
    },
    {
        "name": "Angel List",
        "description": "Y Combinator-backed startup job platform. Access 130,000+ tech & startup jobs privately. See salary and equity information upfront",
        "link": "https://angellist.com/careers",
        "category": [
            "remote",
            "popular",
            "startup"
        ]
    },
    {
        "name": "Y Combinator Jobs",
        "description": "Official jobs board for top Y Combinator startups. Find remote, engineering, product, and startup opportunities",
        "link": "https://ycombinator.com/jobs",
        "category": [
            "remote",
            "popular",
            "startup"
        ]
    },
    {
        "name": "Arc.dev",
        "description": "Curated marketplace for vetted remote developers. Requires vetting (communication + technical tests). Covers 60+ specialties",
        "link": "https://arc.dev",
        "category": [
            "remote",
            "popular",
            "devops"
        ]
    },
    {
        "name": "Toptal",
        "description": "Elite network for top 3% of freelancers. Rigorous screening process. High-quality, vetted clients and developers",
        "link": "https://toptal.com",
        "category": [
            "remote",
            "popular",
            "devops"
        ]
    },
    {
        "name": "Braintrust",
        "description": "Blockchain-based freelance marketplace owned by users. Free job board for remote tech talent. Covers DevOps, cloud, and technical roles",
        "link": "https://usebraintrust.com",
        "category": [
            "remote",
            "devops"
        ]
    },
    {
        "name": "Upwork",
        "description": "World's largest freelance platform. Vast range of projects including DevOps, technical writing, and cloud engineering",
        "link": "https://upwork.com",
        "category": [
            "remote",
            "popular"
        ]
    },
    {
        "name": "Freelancer",
        "description": "Global marketplace with CI/CD, cloud architecture, and automation projects. Competitive bidding environment",
        "link": "https://freelancer.com",
        "category": [
            "remote",
            "popular"
        ]
    },
    {
        "name": "Guru",
        "description": "Flexible platform for DevOps, SRE, and specialized technical projects. Bid on global opportunities",
        "link": "https://guru.com",
        "category": [
            "remote"
        ]
    },
    {
        "name": "Fiverr",
        "description": "Popular platform for short-term DevOps tasks like containerization, CI/CD setup, and cloud deployments",
        "link": "https://fiverr.com",
        "category": [
            "remote"
        ]
    },
    {
        "name": "PeoplePerHour",
        "description": "UK-first, globally open. Hand-reviewed freelancers. Connects professionals for technical tasks and DevOps automation",
        "link": "https://peopleperhour.com",
        "category": [
            "remote"
        ]
    },
    {
        "name": "DevOps Freelancer",
        "description": "Dedicated platform for DevOps, SRE, and DevSecOps experts to find niche-specific projects",
        "link": "https://devopsfreelancer.com",
        "category": [
            "devops"
        ]
    },
    {
        "name": "Hired",
        "description": "Connects highly skilled professionals like DevOps engineers with global companies offering premium remote roles",
        "link": "https://hired.com",
        "category": [
            "remote",
            "devops"
        ]
    },
    {
        "name": "CodementorX",
        "description": "Platform for freelancers who can mentor or consult on DevOps practices, SRE, or DevSecOps strategies",
        "link": "https://codementor.io",
        "category": [
            "devops",
            "remote"
        ]
    },
    {
        "name": "NoDesk",
        "description": "Remote work toolkit and job board with 100,000+ talented candidates. Guides and best practices for remote work",
        "link": "https://nodesk.co",
        "category": [
            "remote"
        ]
    },
    {
        "name": "Jobspresso",
        "description": "Hand-picked remote jobs across multiple industries with 1,000+ listings. Post a resume feature for employers to find you",
        "link": "https://jobspresso.co",
        "category": [
            "remote"
        ]
    },
    {
        "name": "Remote OK",
        "description": "Popular tech-focused job board with clean interface. Wide range of remote tech jobs from around the world",
        "link": "https://remoteok.com",
        "category": [
            "remote"
        ]
    },
    {
        "name": "Outsourcely",
        "description": "Remote job board dedicated to outsourcing. Companies hiring worldwide. Browse or create profile for employers to find you",
        "link": "https://outsourcely.com",
        "category": [
            "remote"
        ]
    },
    {
        "name": "Virtual Vocations",
        "description": "Remote job board with focus on legitimate work-from-home opportunities across various industries",
        "link": "https://virtualvocations.com",
        "category": [
            "remote"
        ]
    },
    {
        "name": "Skip the Drive",
        "description": "Remote job board aggregating work-from-home opportunities across multiple industries and job types",
        "link": "https://skipthedrive.com",
        "category": [
            "remote"
        ]
    },
    {
        "name": "Power to Fly",
        "description": "Remote job board connecting women with flexible tech and startup jobs. Focuses on diversity and inclusion",
        "link": "https://powertofly.com",
        "category": [
            "remote"
        ]
    },
    {
        "name": "LinkedIn Jobs",
        "description": "Professional networking job board with 91,000+ remote tech jobs worldwide. Advanced filtering by role, location, and company",
        "link": "https://linkedin.com/jobs",
        "category": [
            "remote",
            "popular"
        ]
    },
    {
        "name": "Indeed",
        "description": "Large general job board with remote job filter. Good for finding technical writing, support, and various tech roles",
        "link": "https://indeed.com",
        "category": [
            "remote",
            "popular"
        ]
    },
    {
        "name": "Stack Overflow Jobs",
        "description": "Job board for software developers and engineers. Remote positions across different tech stacks and experience levels",
        "link": "https://stackoverflow.com/jobs",
        "category": [
            "remote"
        ]
    },
    {
        "name": "GitHub Jobs",
        "description": "Job board for software developers, engineers, and open source contributors. GitHub-integrated job postings",
        "link": "https://github.careers",
        "category": [
            "remote",
            "opensource"
        ]
    },
    {
        "name": "HackerNews Who is Hiring",
        "description": "Monthly 'Who is Hiring' thread on HN with direct job postings from companies and startups. Real-time opportunities",
        "link": "https://news.ycombinator.com/jobs",
        "category": [
            "remote",
            "startup"
        ]
    },
    {
        "name": "HNHIRING",
        "description": "Index and search engine for all HackerNews 'Who is Hiring?' posts since 2018. 57,000+ job ads searchable",
        "link": "https://hnhiring.com",
        "category": [
            "remote",
            "startup"
        ]
    },
    {
        "name": "The Muse",
        "description": "Job board with detailed company profiles. Remote filter available. Strong company culture and benefits information",
        "link": "https://themuse.com",
        "category": [
            "remote"
        ]
    },
    {
        "name": "Dribbble",
        "description": "#1 job board for remote graphic design jobs. Largest independent community for designers and creative professionals",
        "link": "https://dribbble.com/remote-design-jobs",
        "category": [
            "remote"
        ]
    },
    {
        "name": "Remote Rocketship",
        "description": "Search 1000+ remote jobs by role (DevRel, DevOps, etc). Focused on genuinely remote companies. Developer relations positions",
        "link": "https://remoterocketship.com",
        "category": [
            "remote",
            "devrel"
        ]
    },
    {
        "name": "CryptoJobs",
        "description": "Specialized job board for developer relations roles at blockchain/crypto startups. DevRel, Dev Advocate positions",
        "link": "https://cryptocurrencyjobs.co/developer-relations",
        "category": [
            "devrel",
            "startup"
        ]
    },
    {
        "name": "Guru (Technical Writing)",
        "description": "Platform for technical writing freelancers. Find work and manage projects for tech documentation roles",
        "link": "https://guru.com/m/find/freelance-jobs/technical-writing",
        "category": [
            "techwriting"
        ]
    },
    {
        "name": "ProBlogger Job Board",
        "description": "Niche platform for technical writers with strong academic writing background. High-level technical content expertise",
        "link": "https://problogger.com/jobs",
        "category": [
            "techwriting"
        ]
    },
    {
        "name": "WriterAccess",
        "description": "Tiered system for categorizing writers' expertise. Content planning tools for technical writing projects",
        "link": "https://writeraccess.com",
        "category": [
            "techwriting"
        ]
    },
    {
        "name": "WriterHire",
        "description": "Platform for hiring skilled technical writers for documentation and complex technical information",
        "link": "https://writerhire.com",
        "category": [
            "techwriting"
        ]
    },
    {
        "name": "TechWhirl",
        "description": "Community for technical communicators. Job board plus forums, resources, and professional development opportunities",
        "link": "https://techwhirl.com",
        "category": [
            "techwriting"
        ]
    },
    {
        "name": "Open Collective",
        "description": "Funding platform for open source projects. Fiscal sponsorship for 3,000+ projects. Transparent financial management",
        "link": "https://opencollective.com/opensource",
        "category": [
            "opensource"
        ]
    },
    {
        "name": "GitHub Sponsors",
        "description": "Directly support open source developers through GitHub. Fund contributors, maintainers, and open source projects",
        "link": "https://github.com/sponsors",
        "category": [
            "opensource"
        ]
    },
    {
        "name": "Strider",
        "description": "Vetted remote developer hiring platform. Focuses on full-time remote talent from Latin America with US time zone alignment",
        "link": "https://onstrider.com",
        "category": [
            "remote",
            "devops"
        ]
    },
    {
        "name": "Turing",
        "description": "1 million+ developer marketplace using AI matching. Vets developers thoroughly. Covers full-time and project-based work",
        "link": "https://turing.com",
        "category": [
            "remote"
        ]
    },
    {
        "name": "Andela",
        "description": "Connects startups with skilled engineers from Africa and Latin America. 12-month contracts with experienced developers",
        "link": "https://andela.com",
        "category": [
            "remote"
        ]
    },
    {
        "name": "DistantJob",
        "description": "IT staffing partner recruiting senior remote developers. Handles contracts, payroll, and global compliance. Multi-step vetting",
        "link": "https://distantjob.com",
        "category": [
            "remote",
            "devops"
        ]
    },
    {
        "name": "YouTeam",
        "description": "Marketplace of vetted developers with strong UI. Developers set rates ($60-100+/hr including 10% commission)",
        "link": "https://youteam.com",
        "category": [
            "remote"
        ]
    },
    {
        "name": "ReactSquad",
        "description": "Marketplace of vetted React developers. Each developer goes through 3 interviews and 4 weeks paid test project. $75/hr rate",
        "link": "https://reactsquad.io",
        "category": [
            "remote"
        ]
    },
    {
        "name": "Geekhunter",
        "description": "Platform for hiring tech talent. Known for fast hiring process. Developers at various experience levels",
        "link": "https://geekhunter.io",
        "category": [
            "remote"
        ]
    }
];

export function getBoardsByCategory(category: Category) {
    return boards.filter(b => b.category.includes(category));
}