src/
│
├── main.js                # Entry point
│
├── core/                  # Core app logic (no DOM here)
│   ├── store.js           # Global state management
│   ├── notes.js           # Note CRUD logic
│   ├── tabs.js            # Tab management logic
│   ├── commands.js        # Command registry system
│
├── services/              # External integrations
│   ├── storage.js         # localStorage abstraction
│   ├── markdown.js        # markdown parser setup
│
├── ui/                    # DOM rendering & UI logic
│   ├── layout.js          # Layout rendering
│   ├── sidebar.js         # Note list UI
│   ├── editor.js          # Markdown editor logic
│   ├── preview.js         # Read mode renderer
│   ├── tabsUI.js          # Tabs rendering
│   ├── commandPalette.js  # Ctrl+K UI
│
├── features/              # Feature-specific behaviors
│   ├── search.js
│   ├── slashCommands.js
│   ├── keyboard.js
│
├── utils/
│   ├── helpers.js
│   ├── constants.js
│   ├── uuid.js
│
├── styles/
│   └── main.css
│
index.html
