
import { hubCategories } from "./categories";


export type Category = typeof hubCategories[number]['id'];

export type Board = {
    name: string;
    description: string;
    link: string;
    category: Category[];
    tags?: string[];
};

export const boards: Board[] = [
    {
        name: "We Work Remotely",
        description: "The largest remote work community in the world",
        link: "https://weworkremotely.com",
        category: ["remote", "popular"],
        tags: ["full-time", "contract", "freelance"]
    },
    {
        name: "Remote OK",
        description: "Find remote jobs for digital nomads and remote workers",
        link: "https://remoteok.com",
        category: ["remote", "popular"],
        tags: ["digital-nomad", "full-time", "contract"]
    },
    {
        name: "FlexJobs",
        description: "Hand-screened remote and flexible jobs",
        link: "https://www.flexjobs.com",
        category: ["remote", "popular"],
        tags: ["flexible", "part-time", "full-time"]
    },
    {
        name: "Remotive",
        description: "Remote tech jobs and resources for remote workers",
        link: "https://remotive.com",
        category: ["remote"],
        tags: ["tech", "engineering", "design"]
    },
    {
        name: "JustRemote",
        description: "Remote jobs in tech, marketing, and design",
        link: "https://justremote.co",
        category: ["remote"],
        tags: ["tech", "marketing", "design"]
    },
    {
        name: "Himalayas",
        description: "Find remote jobs at top remote companies",
        link: "https://himalayas.app",
        category: ["remote", "popular"],
        tags: ["curated", "tech", "startup"]
    },
    {
        name: "Working Nomads",
        description: "Remote jobs for digital workers",
        link: "https://www.workingnomads.com/jobs",
        category: ["remote"],
        tags: ["digital-nomad", "freelance", "contract"]
    },
    {
        name: "Remote.co",
        description: "Remote-only jobs (telecommute excluded) founded by Sara Sutton. Browse by role or tags like high-paying, entry-level, international",
        link: "https://remote.co",
        category: ["remote", "popular"],
        tags: ["high-paying", "entry-level", "international"]
    },
    {
        name: "DailyRemote",
        description: "Daily updated remote job listings across multiple categories",
        link: "https://dailyremote.com",
        category: ["remote"],
        tags: ["daily-updated", "curated"]
    },
    {
        name: "Jobspresso",
        description: "Hand-picked remote jobs across multiple industries with 1,000+ listings. Post a resume feature for employers to find you",
        link: "https://jobspresso.co",
        category: ["remote"],
        tags: ["curated", "hand-picked", "resume"]
    },
    {
        name: "Skip the Drive",
        description: "Remote job board aggregating work-from-home opportunities across multiple industries and job types",
        link: "https://skipthedrive.com",
        category: ["remote"],
        tags: ["work-from-home", "aggregator"]
    },
    {
        name: "RemoteYeah",
        description: "Remote job board with focus on tech roles including DevOps and SRE positions. Curated listings from reputable companies",
        link: "https://remoteyeah.com",
        category: ["remote"],
        tags: ["tech", "curated"]
    },
    {
        name: "NoDesk",
        description: "Remote work toolkit and job board with 100,000+ talented candidates. Guides and best practices for remote work",
        link: "https://nodesk.co",
        category: ["remote"],
        tags: ["toolkit", "guides", "resources"]
    },
    {
        name: "Power to Fly",
        description: "Remote job board connecting women with flexible tech and startup jobs. Focuses on diversity and inclusion",
        link: "https://powertofly.com",
        category: ["remote"],
        tags: ["diversity", "women-in-tech", "inclusive"]
    },
    {
        name: "Virtual Vocations",
        description: "Remote job board with focus on legitimate work-from-home opportunities across various industries",
        link: "https://virtualvocations.com",
        category: ["remote"],
        tags: ["work-from-home", "verified", "legitimate"]
    },
    {
        name: "Outsourcely",
        description: "Remote job board dedicated to outsourcing. Companies hiring worldwide. Browse or create profile for employers to find you",
        link: "https://outsourcely.com",
        category: ["remote"],
        tags: ["outsourcing", "worldwide", "profile"]
    },
    {
        name: "Workaline",
        description: "Remote job board for tech professionals",
        link: "https://workaline.com",
        category: ["remote"],
        tags: ["tech", "professional"]
    },
    {
        name: "Remote4Me",
        description: "Curated remote job opportunities",
        link: "https://remote4me.com",
        category: ["remote"],
        tags: ["curated"]
    },
    {
        name: "Workew",
        description: "Remote jobs worldwide",
        link: "https://workew.com/remote-jobs",
        category: ["remote"],
        tags: ["worldwide"]
    },
    {
        name: "Pangian",
        description: "Remote jobs with travel opportunities",
        link: "https://pangian.com/remote/",
        category: ["remote"],
        tags: ["travel", "digital-nomad"]
    },
    {
        name: "DynamiteJobs",
        description: "Remote executive assistant and operations roles",
        link: "https://www.dynamitejobs.com",
        category: ["remote"],
        tags: ["executive", "operations", "assistant"]
    },
    {
        name: "Remote Index",
        description: "Index of remote job opportunities",
        link: "https://remoteindex.co",
        category: ["remote"],
        tags: ["index", "directory"]
    },
    {
        name: "Devremote",
        description: "Remote developer jobs",
        link: "https://devremote.io",
        category: ["remote"],
        tags: ["developer", "engineering"]
    },
    {
        name: "Remoters",
        description: "Remote job opportunities for professionals",
        link: "https://remoters.net/jobs",
        category: ["remote"],
        tags: ["professional"]
    },
    {
        name: "Remotify",
        description: "Remote job listings",
        link: "https://remotify.me",
        category: ["remote"],
        tags: ["curated"]
    },
    {
        name: "Remote Rocketship",
        description: "Search 1000+ remote jobs by role (DevRel, DevOps, etc). Focused on genuinely remote companies. Developer relations positions",
        link: "https://remoterocketship.com",
        category: ["remote", "devrel"],
        tags: ["developer-relations", "devops"]
    },
    {
        name: "Jobmote",
        description: "Remote job board",
        link: "https://jobmote.com",
        category: ["remote"],
        tags: ["general"]
    },
    {
        name: "FlatWorld",
        description: "Remote jobs at global companies",
        link: "https://flatworld.co/jobs",
        category: ["remote"],
        tags: ["global", "international"]
    },
    {
        name: "Meerkad",
        description: "Remote jobs for developers",
        link: "https://meerkad.com",
        category: ["remote"],
        tags: ["developer", "engineering"]
    },
    {
        name: "Remote Developer Jobs",
        description: "Jobs for remote software developers",
        link: "https://www.remote-developer-jobs.com",
        category: ["remote"],
        tags: ["developer", "software", "engineering"]
    },
    {
        name: "I Love Remote",
        description: "High paid remote jobs",
        link: "https://iloveremote.io",
        category: ["remote"],
        tags: ["high-paying", "premium"]
    },
    {
        name: "Euro Top Tech Jobs",
        description: "High-Paying ($100-600k) Fully-Remote Tech Jobs in Europe",
        link: "https://eurotoptechjobs.com",
        category: ["remote"],
        tags: ["high-paying", "europe", "premium", "senior"]
    },
    {
        name: "Remote100K",
        description: "Remote jobs paying $100k+",
        link: "https://remote100k.com",
        category: ["remote"],
        tags: ["high-paying", "senior", "100k+"]
    },
    {
        name: "Wellpaid.io",
        description: "High-paying remote tech jobs",
        link: "https://wellpaid.io",
        category: ["remote"],
        tags: ["high-paying", "tech", "premium"]
    },
    {
        name: "RemoteScout",
        description: "Remote job search platform",
        link: "https://remotescout24.com/en",
        category: ["remote"],
        tags: ["search", "platform"]
    },

    // Open Source
    {
        name: "FOSS Jobs",
        description: "Free and Open Source Software job opportunities",
        link: "https://www.fossjobs.net",
        category: ["opensource"],
        tags: ["foss", "open-source"]
    },
    {
        name: "Open Source Design Jobs",
        description: "Design roles in open source projects",
        link: "https://opensourcedesign.net/jobs",
        category: ["opensource", "design"],
        tags: ["design", "ui", "ux"]
    },
    {
        name: "Fossfox",
        description: "Open source job opportunities",
        link: "https://fossfox.com",
        category: ["opensource"],
        tags: ["foss", "open-source"]
    },
    {
        name: "GitHub Jobs",
        description: "Job board for software developers, engineers, and open source contributors. GitHub-integrated job postings",
        link: "https://github.careers",
        category: ["remote", "opensource"],
        tags: ["github", "developer", "engineering"]
    },
    {
        name: "Open Collective",
        description: "Funding platform for open source projects. Fiscal sponsorship for 3,000+ projects. Transparent financial management",
        link: "https://opencollective.com/opensource",
        category: ["opensource"],
        tags: ["funding", "sponsorship", "fiscal"]
    },

    // DevOps
    {
        name: "Kube Careers",
        description: "Kubernetes and cloud-native job board",
        link: "https://kube.careers",
        category: ["devops", "popular"],
        tags: ["kubernetes", "cloud-native", "k8s"]
    },
    {
        name: "GitJobs",
        description: "Job board for open source and Git-based projects",
        link: "https://gitjobs.dev",
        category: ["opensource", "devops"],
        tags: ["git", "version-control"]
    },
    {
        name: "DevOps Freelancer",
        description: "Dedicated platform for DevOps, SRE, and DevSecOps experts to find niche-specific projects",
        link: "https://devopsfreelancer.com",
        category: ["devops"],
        tags: ["sre", "devsecops", "freelance"]
    },
    {
        name: "CodementorX",
        description: "Platform for freelancers who can mentor or consult on DevOps practices, SRE, or DevSecOps strategies",
        link: "https://codementor.io",
        category: ["devops"],
        tags: ["mentoring", "consulting", "sre"]
    },
    {
        name: "CNCF Job Board",
        description: "Cloud Native Computing Foundation job board",
        link: "https://jobs.cncf.io",
        category: ["devops"],
        tags: ["cloud-native", "cncf", "kubernetes"]
    },

    // DevRel
    {
        name: "Developer Avocados",
        description: "Developer advocacy job board and community",
        link: "https://developeravocados.net",
        category: ["devrel"],
        tags: ["advocacy", "community"]
    },
    {
        name: "DevRel Careers",
        description: "Developer Relations and advocacy positions",
        link: "https://devrelcareers.com",
        category: ["devrel"],
        tags: ["advocacy", "community", "relations"]
    },
    {
        name: "CryptoJobs DevRel",
        description: "Specialized job board for developer relations roles at blockchain/crypto startups. DevRel, Dev Advocate positions",
        link: "https://cryptocurrencyjobs.co/developer-relations",
        category: ["devrel"],
        tags: ["blockchain", "crypto", "advocacy"]
    },

    // Tech Writing
    {
        name: "Write the Docs Job Board",
        description: "Documentation and technical writing opportunities",
        link: "https://jobs.writethedocs.org",
        category: ["techwriting", "popular"],
        tags: ["documentation", "docs", "writing"]
    },
    {
        name: "ProBlogger Job Board",
        description: "Writing and blogging job opportunities",
        link: "https://problogger.com/jobs",
        category: ["techwriting"],
        tags: ["blogging", "content", "writing"]
    },
    {
        name: "WriterAccess",
        description: "Tiered system for categorizing writers' expertise. Content planning tools for technical writing projects",
        link: "https://writeraccess.com",
        category: ["techwriting"],
        tags: ["content", "technical", "planning"]
    },
    {
        name: "WriterHire",
        description: "Platform for hiring skilled technical writers for documentation and complex technical information",
        link: "https://writerhire.com",
        category: ["techwriting"],
        tags: ["documentation", "technical", "complex"]
    },

    // Popular/General
    {
        name: "Wellfound",
        description: "Platform for finding jobs at 30,000+ startups. Apply to 130,000+ tech & startup jobs with one application. Shows salary and equity upfront",
        link: "https://wellfound.com",
        category: ["remote", "popular"],
        tags: ["startup", "equity", "salary-transparent"]
    },
    {
        name: "Y Combinator Jobs",
        description: "Official jobs board for top Y Combinator startups. Find remote, engineering, product, and startup opportunities",
        link: "https://ycombinator.com/jobs",
        category: ["remote", "popular"],
        tags: ["yc", "startup", "engineering"]
    },
    {
        name: "LinkedIn Jobs",
        description: "Professional networking job board with 91,000+ remote tech jobs worldwide. Advanced filtering by role, location, and company",
        link: "https://linkedin.com/jobs",
        category: ["remote", "popular"],
        tags: ["professional", "networking", "enterprise"]
    },
    {
        name: "Indeed",
        description: "Large general job board with remote job filter. Good for finding technical writing, support, and various tech roles",
        link: "https://indeed.com",
        category: ["remote", "popular"],
        tags: ["general", "aggregator", "large"]
    },
    {
        name: "Glassdoor",
        description: "Job search with company reviews and salary information",
        link: "https://www.glassdoor.com",
        category: ["remote", "popular"],
        tags: ["reviews", "salary-info", "transparency"]
    },
    {
        name: "Stack Overflow Jobs",
        description: "Job board for software developers and engineers. Remote positions across different tech stacks and experience levels",
        link: "https://stackoverflow.com/jobs",
        category: ["remote", "popular"],
        tags: ["developer", "engineering", "tech-stack"]
    },
    {
        name: "HackerNews Who is Hiring",
        description: "Monthly 'Who is Hiring' thread on HN with direct job postings from companies and startups. Real-time opportunities",
        link: "https://news.ycombinator.com/jobs",
        category: ["remote", "popular", "startup"],
        tags: ["startup", "real-time", "community"]
    },
    {
        name: "HNHIRING",
        description: "Index and search engine for all HackerNews 'Who is Hiring?' posts since 2018. 57,000+ job ads searchable",
        link: "https://hnhiring.com",
        category: ["remote", "popular"],
        tags: ["hackernews", "search", "index", "startup"]
    },
    {
        name: "The Muse",
        description: "Job board with detailed company profiles. Remote filter available. Strong company culture and benefits information",
        link: "https://themuse.com",
        category: ["remote"],
        tags: ["company-culture", "benefits", "profiles"]
    },
    {
        name: "Dribbble",
        description: "#1 job board for remote graphic design jobs. Largest independent community for designers and creative professionals",
        link: "https://dribbble.com/remote-design-jobs",
        category: ["design", "popular"],
        tags: ["design", "graphic-design", "creative", "ui", "ux"]
    },
    {
        name: "Authentic Jobs",
        description: "Job board for designers, developers, and creative professionals",
        link: "https://authenticjobs.com",
        category: ["design", "development", "popular"],
        tags: ["design", "developer", "creative"]
    },
    {
        name: "Behance",
        description: "Adobe's creative job board",
        link: "https://www.behance.net/joblist",
        category: ["design", "popular"],
        tags: ["design", "creative", "adobe", "ui", "ux"]
    },
    {
        name: "Designer Jobs",
        description: "Job board specifically for designers",
        link: "https://designerjobs.co/jobs",
        category: ["design", "popular"],
        tags: ["design", "ui", "ux"]
    },
    {
        name: "UI & UX Designer Jobs",
        description: "Hand-picked UI, UX & UXR Jobs",
        link: "https://uiuxdesignerjobs.com",
        category: ["design", "popular"],
        tags: ["ui", "ux", "research", "hand-picked"]
    },
    {
        name: "UX Jobs Board",
        description: "User experience design job board",
        link: "https://www.uxjobsboard.com",
        category: ["design", "popular"],
        tags: ["ux", "user-experience", "design"]
    },

    // Freelance Platforms
    {
        name: "Arc.dev",
        description: "Curated marketplace for vetted remote developers. Requires vetting (communication + technical tests). Covers 60+ specialties",
        link: "https://arc.dev",
        category: ["remote", "popular", "devops"],
        tags: ["vetted", "marketplace", "freelance"]
    },
    {
        name: "Toptal",
        description: "Elite network for top 3% of freelancers. Rigorous screening process. High-quality, vetted clients and developers",
        link: "https://toptal.com",
        category: ["remote", "popular", "devops"],
        tags: ["elite", "freelance", "vetted", "top-tier"]
    },
    {
        name: "Upwork",
        description: "World's largest freelance platform. Vast range of projects including DevOps, technical writing, and cloud engineering",
        link: "https://upwork.com",
        category: ["remote", "popular"],
        tags: ["freelance", "contract", "platform"]
    },
    {
        name: "Freelancer",
        description: "Global marketplace with CI/CD, cloud architecture, and automation projects. Competitive bidding environment",
        link: "https://freelancer.com",
        category: ["remote", "popular"],
        tags: ["freelance", "bidding", "global"]
    },
    {
        name: "Guru",
        description: "Flexible platform for DevOps, SRE, and specialized technical projects. Bid on global opportunities",
        link: "https://guru.com",
        category: ["remote"],
        tags: ["freelance", "technical", "global"]
    },
    {
        name: "Fiverr",
        description: "Popular platform for short-term DevOps tasks like containerization, CI/CD setup, and cloud deployments",
        link: "https://fiverr.com",
        category: ["remote"],
        tags: ["freelance", "gigs", "short-term"]
    },
    {
        name: "PeoplePerHour",
        description: "UK-first, globally open. Hand-reviewed freelancers. Connects professionals for technical tasks and DevOps automation",
        link: "https://peopleperhour.com",
        category: ["remote"],
        tags: ["freelance", "uk", "vetted"]
    },
    {
        name: "Gun.io",
        description: "Freelance developer marketplace",
        link: "https://www.gun.io",
        category: ["remote"],
        tags: ["freelance", "developer", "marketplace"]
    },
    {
        name: "Hubstaff Talent",
        description: "Free freelance marketplace",
        link: "https://talent.hubstaff.com",
        category: ["remote"],
        tags: ["freelance", "free", "marketplace"]
    },

    // Specialized Tech
    {
        name: "Ruby on Rails Jobs",
        description: "Job board for Ruby on Rails developers",
        link: "https://www.ruby-on-rails-jobs.com",
        category: ["development"],
        tags: ["ruby", "rails", "backend"]
    },
    {
        name: "React Job Board",
        description: "Jobs for React developers",
        link: "https://www.reactjobboard.com",
        category: ["development", "popular"],
        tags: ["react", "frontend", "javascript"]
    },
    {
        name: "Vue Jobs",
        description: "Job board for Vue.js developers",
        link: "https://vuejobs.com",
        category: ["development", "popular"],
        tags: ["vue", "vuejs", "frontend", "javascript"]
    },
    {
        name: "Angular Jobs",
        description: "Job board for Angular developers",
        link: "https://angularjobs.com",
        category: ["development", "popular"],
        tags: ["angular", "frontend", "javascript"]
    },
    {
        name: "Python Job Board",
        description: "Official Python.org job board",
        link: "https://www.python.org/jobs",
        category: ["development", "popular"],
        tags: ["python", "backend", "data"]
    },
    {
        name: "Django Jobs",
        description: "Job board for Django developers",
        link: "https://djangojobs.net/jobs",
        category: ["development"],
        tags: ["django", "python", "backend"]
    },
    {
        name: "Golang Cafe",
        description: "Job board for Go developers",
        link: "https://golang.cafe",
        category: ["development"],
        tags: ["golang", "go", "backend"]
    },
    {
        name: "Rust Jobs",
        description: "Rust Programming Language Jobs",
        link: "http://rust-jobs.com",
        category: ["development"],
        tags: ["rust", "systems", "backend"]
    },
    {
        name: "iOS Dev Jobs",
        description: "Job board for iOS developers",
        link: "https://iosdevjobs.com",
        category: ["development", "popular"],
        tags: ["ios", "mobile", "swift"]
    },
    {
        name: "Android Dev Careers",
        description: "Job board for Android developers",
        link: "https://androiddev.careers",
        category: ["development", "popular"],
        tags: ["android", "mobile", "kotlin"]
    },
    {
        name: "React Native Jobs",
        description: "The #1 job board for React Native developers",
        link: "https://reactnative-jobs.com",
        category: ["development", "popular"],
        tags: ["react-native", "mobile", "javascript"]
    },
    {
        name: "LaraJobs",
        description: "Job board for Laravel developers",
        link: "https://larajobs.com",
        category: ["development"],
        tags: ["laravel", "php", "backend"]
    },
    {
        name: "Elixir Jobs",
        description: "Job board for Elixir developers",
        link: "https://elixirjobs.net",
        category: ["development"],
        tags: ["elixir", "functional", "backend"]
    },

    // Developer Platforms
    {
        name: "Strider",
        description: "Vetted remote developer hiring platform. Focuses on full-time remote talent from Latin America with US time zone alignment",
        link: "https://www.onstrider.com/jobs",
        category: ["remote"],
        tags: ["vetted", "latam", "full-time"]
    },
    {
        name: "Turing",
        description: "1 million+ developer marketplace using AI matching. Vets developers thoroughly. Covers full-time and project-based work",
        link: "https://turing.com",
        category: ["remote"],
        tags: ["ai-matching", "vetted", "marketplace"]
    },
    {
        name: "Andela",
        description: "Connects startups with skilled engineers from Africa and Latin America. 12-month contracts with experienced developers",
        link: "https://andela.com",
        category: ["remote"],
        tags: ["africa", "latam", "vetted", "startup"]
    },
    {
        name: "DistantJob",
        description: "IT staffing partner recruiting senior remote developers. Handles contracts, payroll, and global compliance. Multi-step vetting",
        link: "https://distantjob.com/apply",
        category: ["remote"],
        tags: ["senior", "staffing", "vetted"]
    },
    {
        name: "ReactSquad",
        description: "Marketplace of vetted React developers. Each developer goes through 3 interviews and 4 weeks paid test project. $75/hr rate",
        link: "https://reactsquad.io",
        category: ["remote"],
        tags: ["react", "vetted", "frontend"]
    },
    {
        name: "Geekhunter",
        description: "Platform for hiring tech talent. Known for fast hiring process. Developers at various experience levels",
        link: "https://geekhunter.io",
        category: ["remote"],
        tags: ["tech", "fast-hiring", "developer"]
    },

    // Data & AI
    {
        name: "AI Jobs",
        description: "Find a job at a cutting-edge AI company",
        link: "https://www.moaijobs.com",
        category: ["remote", "devops"],
        tags: ["ai", "machine-learning", "data", "startup"]
    },
    {
        name: "AI/ML Jobs",
        description: "Jobs at Top AI Companies and Startups, Updated Daily",
        link: "https://aimljobs.fyi",
        category: ["remote", "devops"],
        tags: ["ai", "ml", "machine-learning", "startup"]
    },
    {
        name: "DataJobs",
        description: "Job board for data professionals",
        link: "https://datajobs.com",
        category: ["remote", "devops"],
        tags: ["data", "analytics", "data-science"]
    },
    {
        name: "iCrunchData",
        description: "Data science and analytics jobs",
        link: "https://icrunchdata.com",
        category: ["remote", "devops"],
        tags: ["data-science", "analytics", "data"]
    },
    {
        name: "DataScienceJobs",
        description: "Discover the latest and greatest data science jobs",
        link: "https://datasciencejobs.com",
        category: ["remote", "devops"],
        tags: ["data-science", "analytics", "ml"]
    },
    {
        name: "CryptoJobs List",
        description: "Crypto and blockchain job board",
        link: "https://cryptojobslist.com",
        category: ["remote", "devops"],
        tags: ["blockchain", "crypto", "web3", "startup"]
    },
    {
        name: "Web3 Jobs",
        description: "Web3 career opportunities",
        link: "https://web3.career",
        category: ["remote", "devops"],
        tags: ["web3", "blockchain", "crypto", "startup"]
    },
    {
        name: "Crypto.jobs",
        description: "Cryptocurrency job board",
        link: "https://crypto.jobs",
        category: ["remote", "devops"],
        tags: ["crypto", "blockchain", "startup"]
    },

    // InfoSec
    {
        name: "NinjaJobs",
        description: "Information security job board",
        link: "https://ninjajobs.org",
        category: ["remote", "devops"],
        tags: ["security", "infosec", "cybersecurity"]
    },
    {
        name: "InfoSec Jobs",
        description: "Information security careers",
        link: "https://infosec-jobs.com",
        category: ["remote", "devops"],
        tags: ["infosec", "security", "cybersecurity"]
    },
    {
        name: "CyberSecurity Jobs",
        description: "Cybersecurity job opportunities",
        link: "https://www.cybersecurityjobs.net",
        category: ["remote", "devops"],
        tags: ["cybersecurity", "security", "infosec"]
    },

    // Specialized
    {
        name: "findwork.dev",
        description: "Tech job aggregator for developers",
        link: "https://findwork.dev",
        category: ["remote"],
        tags: ["aggregator", "developer", "tech"]
    },
    {
        name: "Relocate.me",
        description: "Jobs with relocation assistance",
        link: "https://relocate.me",
        category: ["remote"],
        tags: ["relocation", "visa", "international"]
    },
    {
        name: "TechMeAbroad",
        description: "Tech jobs with relocation abroad",
        link: "https://techmeabroad.com",
        category: ["remote"],
        tags: ["relocation", "international", "tech"]
    },
    {
        name: "ClimateTechList",
        description: "Climate tech / green energy jobs for software engineers",
        link: "https://www.climatetechlist.com",
        category: ["remote"],
        tags: ["climate", "green-energy", "sustainability"]
    },
    {
        name: "Tech Jobs for Good",
        description: "Tech jobs at mission-driven companies",
        link: "https://techjobsforgood.com",
        category: ["remote"],
        tags: ["social-impact", "mission-driven", "good"]
    },
    {
        name: "Diversify Tech",
        description: "Job board for underrepresented people in tech",
        link: "https://www.diversifytech.co/job-board",
        category: ["remote"],
        tags: ["diversity", "inclusive", "underrepresented"]
    },
    {
        name: "4 Day Week",
        description: "Jobs with 4-day work weeks",
        link: "https://4dayweek.io",
        category: ["remote"],
        tags: ["4-day-week", "work-life-balance", "flexible"]
    },
    {
        name: "Workatastartup",
        description: "Y Combinator's startup job board",
        link: "https://www.workatastartup.com/job_list",
        category: ["remote", "popular"],
        tags: ["yc", "startup", "early-stage"]
    },
];

export function getBoardsByCategory(category: Category) {
    return boards.filter(b => b.category.includes(category));
}