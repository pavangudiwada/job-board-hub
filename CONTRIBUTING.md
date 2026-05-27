# Contributing to Job Resources

Thank you for your interest in contributing to Job Resources! We welcome contributions from the community to help make this the best resource for finding specialized job boards.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Adding New Job Boards](#adding-new-job-boards)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Submission Guidelines](#submission-guidelines)
- [Style Guidelines](#style-guidelines)

## Code of Conduct

This project and everyone participating in it is governed by our commitment to providing a welcoming and inclusive environment. Please be respectful and constructive in all interactions.

## How Can I Contribute?

### Adding New Job Boards

The most common contribution is adding new job boards to our collection. Here's how:

1. **Check if the job board already exists** in `/data/boards.ts`
2. **Ensure the job board is legitimate** and actively maintained
3. **Gather the required information**:
   - Name of the job board
   - A concise description (80-100 characters recommended)
   - Direct link to the job board
   - Appropriate categories (see categories below)
   - Relevant tags

#### Available Categories

- `popular` - Most popular job boards
- `remote` - Work from anywhere opportunities
- `development` - Programming and software development jobs
- `design` - UI/UX and design opportunities
- `opensource` - Open source projects and jobs
- `devops` - DevOps, SRE, and infrastructure roles
- `devrel` - Developer Relations positions
- `techwriting` - Technical writing opportunities
- `startup` - Jobs at startups
- `aiml` - Artificial Intelligence and Machine Learning jobs
- `crypto` - Blockchain, crypto, and Web3 opportunities

#### Example Addition

```typescript
{
    name: "Example Job Board",
    description: "A specialized job board for amazing opportunities in tech",
    link: "https://example.com",
    category: ["development", "remote"],
    tags: ["javascript", "frontend", "backend"]
}
```

### Reporting Bugs

If you find a bug, please create an issue with:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable
- **Environment details** (browser, OS, etc.)

### Suggesting Enhancements

We welcome feature suggestions! Please create an issue with:

- **Clear description** of the enhancement
- **Use case** - why this would be valuable
- **Proposed implementation** if you have ideas
- **Mockups or examples** if relevant

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Getting Started

1. **Fork the repository** on GitHub

2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/job-resources.git
   cd job-resources
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** to `http://localhost:3000`

### Building the Project

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

### Code Quality

Run the linter:

```bash
npm run lint
```

## Project Structure

```
job-resources/
├── app/                    # Next.js app directory
│   ├── [category]/        # Dynamic category pages
│   │   ├── page.tsx       # Category page component
│   │   └── BoardCard.tsx  # Job board card component
│   ├── best/              # Curated SEO collection pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── data/                   # Data files
│   ├── boards.ts          # Job boards data (ADD NEW BOARDS HERE)
│   ├── categories.ts      # Category definitions
│   └── seoCollections.ts  # Curated best-of collection definitions
├── docs/                   # Product strategy, audits, and roadmap notes
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## Submission Guidelines

### Pull Request Process

1. **Create a new branch** for your changes:
   ```bash
   git checkout -b add-new-job-board
   ```

2. **Make your changes** following our style guidelines

3. **Test your changes** locally:
   - Ensure the dev server runs without errors
   - Check that new job boards display correctly
   - Verify all links work
   - Test on different screen sizes

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add [Job Board Name] to [category] category"
   ```

5. **Push to your fork**:
   ```bash
   git push origin add-new-job-board
   ```

6. **Create a Pull Request** on GitHub with:
   - Clear title describing the change
   - Description of what was added/changed
   - Link to the job board you're adding (if applicable)
   - Screenshots if you've made UI changes

### Commit Message Guidelines

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Keep the first line under 72 characters
- Reference issues and pull requests when relevant

Examples:
- `Add Stack Overflow Jobs to development category`
- `Fix broken link for Remote OK job board`
- `Update categories to include Design section`

## Style Guidelines

### TypeScript/JavaScript

- Use TypeScript for type safety
- Follow existing code formatting (we use Prettier defaults)
- Use meaningful variable and function names
- Add comments for complex logic

### Data Entry (boards.ts)

When adding job boards:

1. **Maintain alphabetical order** within each section (if possible)
2. **Use consistent formatting**:
   ```typescript
   {
       name: "Job Board Name",
       description: "Clear, concise description under 100 characters",
       link: "https://exacturl.com",
       category: ["primary-category", "secondary-category"],
       tags: ["tag1", "tag2", "tag3"]
   },
   ```

3. **Description guidelines**:
   - Keep it concise (80-100 characters ideal)
   - Focus on what makes the board unique
   - Use proper capitalization

4. **Link guidelines**:
   - Use the direct link to the jobs page
   - Use HTTPS when available
   - Ensure the link is active and working

5. **Tags guidelines**:
   - Use lowercase, hyphenated tags
   - Be specific and relevant
   - Limit to 3-5 tags per board
   - Reuse existing tags when possible

### CSS/Styling

- Use Tailwind CSS classes
- Follow the existing design patterns
- Ensure responsive design (mobile-first)
- Test on different screen sizes

## Questions?

If you have questions about contributing, feel free to:

- Open an issue with your question
- Reach out to the maintainers
- Check existing issues and pull requests

## Recognition

All contributors will be recognized in our project. Thank you for helping make Job Resources better!

---

**Happy Contributing! 🚀**
