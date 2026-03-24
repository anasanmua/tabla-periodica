# Copilot Instructions - Periodic Table Project

## 🚫 FUNDAMENTAL RULE
**DO NOT MAKE DIRECT CODE CHANGES**

The AI assistant should NEVER use file editing tools (`insert_edit_into_file`, `replace_string_in_file`) without explicit user permission.

## 📋 Required workflow

1. **ANALYZE** the user's problem or request
2. **INVESTIGATE** existing code if necessary
3. **EXPLAIN** the proposed solution
4. **PROVIDE** the modified code as an example
5. **WAIT** for user confirmation before making changes

## 🔍 Work guide

### Tools allowed without confirmation:
- ✅ `read_file` - Read files to understand context
- ✅ `list_dir` - Explore project structure
- ✅ `file_search` - Search for specific files
- ✅ `grep_search` - Search text in files
- ✅ `get_errors` - Check compilation errors
- ✅ `run_in_terminal` - Only for queries (npm list, etc.)

### Tools requiring confirmation:
- ❌ `insert_edit_into_file` - Edit files
- ❌ `replace_string_in_file` - Replace code
- ❌ `create_file` - Create new files
- ❌ `run_in_terminal` - For installations or changes

## 🛠️ Project technology stack

- **Framework:** Next.js 16.1.6
- **Styling:** Tailwind CSS 4.2.0
- **Components:** Radix UI + shadcn/ui
- **Fonts:** Google Fonts (currently Lato, migrating to Raleway)
- **Icons:** Lucide React 0.564.0
- **Package management:** pnpm
- **TypeScript:** 5.7.3

## 🎯 Development patterns

### Component structure:
```
components/
├── ui/           # Reusable base components
├── layout/       # Header, Footer, etc.
├── shared/       # Specific shared components
└── [feature]/    # Feature-specific components
```

### Code conventions:
- Use strict TypeScript
- Functional components with hooks
- Exported props interfaces
- Naming: PascalCase for components, camelCase for functions
- CSS: Utility-first with Tailwind CSS

## 🚀 Frequent commands

```bash
# Development
pnpm dev

# Build
pnpm build

# Lint
pnpm lint

# Install dependencies
pnpm add [package]
pnpm add -D [package]  # dev dependencies
```

## 📝 Explanation methodology

1. **Context:** Explain what is being solved
2. **Options:** Present multiple alternatives when possible
3. **Recommendation:** Indicate which is the best option and why
4. **Code:** Show the exact code to implement
5. **Technical explanation:** Detail how the solution works

## 🎨 Style guide

### Project colors:
- Main blue: `#122562`
- Backgrounds: `bg-white`, `bg-gray-100`
- Text: `text-gray-700`, `text-gray-600`

### Responsive breakpoints:
- Mobile: default
- Tablet: `md:` (≥768px)
- Desktop: `lg:` (≥1024px)
- Large: `xl:` (≥1280px)

## 🤝 User interaction

- **Ask** before making changes
- **Explain** technical decisions
- **Offer alternatives** when possible
- **Validate** that the solution meets requirements
- **Be concise** but complete in explanations

---

*Last updated: March 2026*
