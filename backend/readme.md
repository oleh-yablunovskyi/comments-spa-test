Project structure:

project_root/
│
├── main.js
├── server.js
│
├── mockup_data/
│   ├── users.json
│   └── comments.json
│
├── migrations/
│   ├── createUsersTable.js
│   └── createCommentsTable.js
│
├── seeders/
│   ├── seedUsers.js
│   └── seedComments.js
│
└── utils/
    ├── db.js
    ├── resetUsersIdSequence.js
    └── resetCommentsIdSequence.js
