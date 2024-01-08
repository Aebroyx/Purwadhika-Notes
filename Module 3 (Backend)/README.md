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
    -   npm install express mysql2
    -   npm i -D typescript @types/express @types/node
    -   npm i -D concurrently nodemon
    -   npm install cors --save
    -   npm install @types/cors --save-dev
    -   npx tsc --init
    -   Edit "scripts" on "package.json" with this Code:
        "scripts": {
            "build": "npx tsc",
            "start": "node dist/index.js",
            "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
        }
    - Edit uncomment outdir in tsconfig.json and change to:
        "outDir": "./dist",
        "rootDir": "rootDir": "./src"
    - create folder src/connection
    - create file db

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

+ Additional JS library:
    - npm install moment --save

+ How to setup ORM backend
    + How to Setup Express Typescript?
    -   npm init --yes
    -   npm i -D typescript @types/express @types/node
    -   npm i -D concurrently nodemon
    -   npm install cors --save
    -   npm install @types/cors --save-dev
    -   npx tsc --init
    -   Edit "scripts" on "package.json" with this Code:
        
        "scripts": {
            "build": "npx tsc",
            "start": "node dist/index.js",
            "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
        },

+ How to Setup ORM Prisma?
    USING JAVASCRIPT or TYPESCRIPT
    1. Install Package
    npm install prisma --save-dev
    npx prisma init --datasource-provider mysql

    2. Edit on .env File
    DATABASE_URL="mysql://root:abc12345@localhost:3306/day08_prisma"

    3.Create Model Inside prisma > schema.prisma
    model Users {
    id    String     @id @default(cuid())
    email String  @unique
    name  String
    password String

    usersaddress UsersAddress[]

    createdAt DateTime @default(now()) 
    updatedAt DateTime @default(now()) 
    }

    model UsersAddress{
    id    Int     @id @default(autoincrement())
    consignee String 
    address String

    users Users @relation(fields: [usersId], references: [id])
    usersId String @unique  

    createdAt DateTime @default(now()) 
    updatedAt DateTime @default(now()) 
    }

    4. Migration Models
    npx prisma migrate dev --name init

    5. Setup Seeders
    - Create "seed.js/ts" on "prisma" Folders
    - Edit package.json:
        "prisma": {
            "seed": "ts-node prisma/seed.ts"
        }
    - After That, You Can Execute This Command: 
    npx prisma db seed

    ***Error Solved:
    Invalid `prisma.user.create()` invocation ---> npx prisma generate

        How to Running? npm run dev