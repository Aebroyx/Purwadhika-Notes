Hello, Purwadhika Students!

+ How to Install Typescript?

    1. npm i -g typescript
    2. npm i -g ts-node
    3. Inside Folder "intro-typescript", Type on Terminal: tsc --init
    4. Setup "tsconfig.json" & Uncomment this Code: "outDir": "./bundle", 
    5. Running TS: ts-node filename.ts

+ How to Setup Express Typescript?
    -   npm init --yes
    -   npm install express
    -   npm i -D typescript @types/express @types/node
    -   npx tsc --init
    -   npm i -D concurrently nodemon
    -   Edit "scripts" on "package.json" with this Code:
        "scripts": {
            "build": "npx tsc",
            "start": "node dist/index.js",
            "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
        }

+ How to Setup MySQL server in terminal
    - export PATH="/usr/local/mysql/bin:$PATH"
    - mysql -V
    - SHOW DATABASE
    - USE database_name

+ How to Setup Express Typescriptt with SQL?
    -   npm init --yes
    -   npm install express mysql12
    -   npm i -D typescript @types/express @types/node
    -   npx tsc --init
    -   npm i -D concurrently nodemon
    -   Edit "scripts" on "package.json" with this Code:
        "scripts": {
            "build": "npx tsc",
            "start": "node dist/index.js",
            "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
        }

+ How to kill port (macos)?
    - sudo lsof -i :<PortNumber>
    - kill -9 <PID>

+ How to create user with root privileges in mysql?
    - CREATE USER 'new_user'@'localhost' IDENTIFIED BY 'password';
    - GRANT ALL PRIVILEGES ON * . * TO 'user_name'@'localhost';
    - FLUSH PRIVILEGES;

    To create with specific privileges:
    - GRANT CREATE, SELECT ON * . * TO 'user_name'@'localhost';
    - CREATE — enable users to create a database or table
    - SELECT — permit users to retrieve data
    - INSERT — let users add new entries in tables
    - UPDATE — allow users to modify existing entries in tables
    - DELETE — enable users to erase table entries
    - DROP — let users delete entire database tables

    Delete User:
    - DROP USER ‘user_name’@‘localhost’;

        How to Running? npm run dev