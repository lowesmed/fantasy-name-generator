# The Fantasy Name Generator 🧌

This Next.js app transforms any first name into a fantasy inspired title using a prefix/suffix function.

## Overview

Rule the game night by creating an legendary hero name for your character based on your real name.

This application is simple; Enter your first name in the field and hit "Generate" to create a fantasy style title for your character.

Not happy with the result? Generate again.

## 🌟 Features

- Easy name generation
- Different name (most of the time)
- Disabled button on < 3 letters
- Handles hyphenated or seperated names

## Getting Started

### Prerequisites

- Node.js 18+

### Installation

1. Clone repo or unzip project folder
2. Run:

```bash
 npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit.

## Project structure

Breakdown of some important files and folders in the project.

```
fantasy-name-generator
├─ actions                            
│  └─ actions.ts                      # Server actions
├─ app                                # Pages & layouts
├─ components                         # Reusable components
├─ lib
│  └─ generate-fantasy-name.ts        # Function for creating a fantasy name
```

## Resources

- [Next.js docs](https://nextjs.org/docs)
- [React reference](https://react.dev/reference/react)
- [TypeScript docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS docs](https://tailwindcss.com/docs/installation/using-vite)
