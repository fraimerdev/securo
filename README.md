

`# SECURO - AI-Powered Crime Prevention & Community Safety Platform`

`![Python](https://img.shields.io/badge/Python-3.11+-blue?style=for-the-badge&logo=python&logoColor=white)![Flask](https://img.shields.io/badge/Flask-2.3+-black?style=for-the-badge&logo=flask&logoColor=white)![Google Gemini](https://img.shields.io/badge/Google_Gemini-AI_Powered-4285F4?style=for-the-badge&logo=google&logoColor=white)![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)`

`**SECURO (Secure Emergency Crime Understanding & Response Operations)** is an intelligent, full-stack platform designed to enhance public safety in St. Kitts & Nevis. It leverages real-time data aggregation, AI analysis, and advanced community engagement tools to empower both citizens and the Royal St. Christopher & Nevis Police Force (RSCNPF).`

`## Core Features`

`-`   📰 ``**Live Multi-Source News Scraping**: Aggregates real-time crime reports from official local news outlets (`St. Kitts Nevis Observer`, `SKNIS`, `WINN FM`).``  
`-`   🤖 `**AI Law Enforcement Assistant**: A professional AI chatbot powered by Google Gemini, trained on local crime data and legal procedures.`  
`-`   🔊 `**Voice Synthesis**: Integrated with ElevenLabs for text-to-speech capabilities, allowing the AI to provide audible responses.`  
`-`   🛡️ `**Intelligent Fallback System**: Automatically generates trend-based or simulated data if live news sources are unavailable, ensuring the platform remains operational 24/7.`  
`-`   📊 `**Interactive Analytics Dashboard**: A comprehensive dashboard with multi-year historical crime data (2016-2024) and interactive Chart.js visualizations.`  
`-`   🗺️ `**Crime Hotspot Mapping**: Visualizes high-risk areas with temporal data to aid in strategic resource allocation.`  
`-`   📧 `**Secure Crime Reporting**: Allows citizens to submit both anonymous and identified crime reports directly to law enforcement via an automated email system.`  
`-`   🌐 `**API-Driven Backend**: A robust Flask API serves all frontend data, making the system modular and scalable.`  
`-`   🌍 `**Automatic Language Detection**: The AI assistant can detect the user's language and respond accordingly, serving the diverse population of the federation.`

`## System Architecture`

`SECURO is built as a monolithic Flask application that serves both a server-rendered frontend and a JSON API. This architecture is robust, self-contained, and designed for efficient deployment.`

`#### Architecture Diagram`  
```` ```mermaid ````  
`graph TD`  
    `A[User's Browser] --> B{Web Server (Nginx)};`  
    `B --> C{WSGI Server (Gunicorn)};`  
    `C --> D[Flask Application (app.py)];`

    `subgraph Flask Application`  
        `D --> E[Web Pages (Jinja2 Templates)];`  
        `D --> F[API Endpoints (/api/...)];`  
        `D --> G[Business Logic & Data Processing];`  
    `end`

    `subgraph External Data & Services`  
        `G --> H[Live Data Scraper<br/>- SKN Observer<br/>- SKNIS<br/>- WINN FM];`  
        `G --> I[AI & Cloud Services<br/>- Google Gemini API<br/>- ElevenLabs TTS API<br/>- Gmail SMTP];`  
        `G --> J[Internal Static Database<br/>- Historical Crime Data (2016-2024)<br/>- Hotspot Coordinates];`  
    `end`

    `E --> A;`  
    `F --> A;`  
**Architectural Breakdown**

1. **Presentation Layer**: The frontend is rendered using **Jinja2 templates** directly from the Flask backend. Interactive elements like the live feed and charts are powered by JavaScript fetching data from the API endpoints.  
2. **Application Logic Layer**: The core of the system resides in `app.py`. It handles routing, request processing, business logic, and orchestrates communication between the data layer and external services.  
3. **Data Layer**:  
   * **Live Data**: The `StKittsNevisCrimeFeedAggregator` class is a real-time scraping engine that fetches, parses, and standardizes crime news.  
   * **Historical Data**: A comprehensive set of crime statistics from 2016-2024 is stored internally as a static data source, acting as the application's historical database.  
4. **External Services**: SECURO integrates with third-party APIs for its most advanced features:  
   * **Google Gemini**: Powers the AI assistant's natural language understanding and response generation.  
   * **ElevenLabs**: Provides high-quality, realistic text-to-speech for the AI.  
   * **Gmail SMTP**: Used to securely and reliably dispatch crime reports to the police force.

**Technology Stack**

| Category | Technology |
| :---- | :---- |
| **Backend Framework** | **Python 3.11+**, **Flask** |
| **AI & ML** | **Google Gemini 2.5 Flash** |
| **Data Scraping** | **BeautifulSoup4**, **Requests** |
| **Services** | **ElevenLabs API** (Text-to-Speech), **Flask-Mail / smtplib** (Email) |
| **Frontend** | **HTML5**, **CSS3**, **JavaScript**, **Jinja2**, **Chart.js** |
| **Deployment** | **Gunicorn** (WSGI Server), **PM2** (Process Manager), **Heroku/Render** (PaaS-Ready) |

**Getting Started**  
Follow these instructions to get a local copy up and running for development and testing purposes.

**1\. Clone the Repository**  
code  
Bash

`git clone https://github.com/fraimerdev/securo.git`  
`cd securo`  
**2\. Create and Activate a Virtual Environment**  
code  
Bash

`# For Windows`  
`python -m venv venv`  
`venv\Scripts\activate`

`# For macOS/Linux`  
`python3 -m venv venv`  
`source venv/bin/activate`  
**3\. Install Dependencies**  
code  
Bash

`pip install -r requirements.txt`

**4\. Set Up Environment Variables**  
Create a file named `.env` in the root directory. **Do not commit this file to Git.** Add the following, replacing the placeholder values with your actual keys:

code  
Code

`# Flask Configuration`  
`FLASK_APP=app.py`  
`FLASK_ENV=development`  
`FLASK_SECRET_KEY='a_strong_and_random_secret_key'`

`# API Keys`  
`GEMINI_API_KEY="AIzaSy..."`  
`ELEVENLABS_API_KEY="sk_..."`

`# Email Configuration`  
`MAIL_USERNAME="your-email@gmail.com"`  
`MAIL_PASSWORD="your_google_app_password"`  
**5\. Run the Development Server**  
code  
Bash

`flask run`  
The application will be available at `http://127.0.0.1:3010`.

**Deployment**  
This application is designed for flexible deployment.

**Option 1: Deploying to a PaaS (Heroku, Render)**  
This project includes a `Procfile`, making it ready for automated deployment on platforms like Heroku.

1. Ensure `gunicorn` is in your `requirements.txt`.  
2. Create a `Procfile` in the root directory with the following line: code Code    `web: gunicorn app:app `   
3. Push your code to the PaaS provider and configure your environment variables in their dashboard.

**Option 2: Deploying to a VPS (AWS, DigitalOcean)**  
This project includes an `ecosystem.config.js` file for process management with PM2.

1. On your server, install Python, Nginx, and PM2.  
2. Clone the repository and install dependencies.  
3. Set up your environment variables on the server.  
4. Modify `ecosystem.config.js` to start with Gunicorn for production: code JavaScript    `// ecosystem.config.js`  
5. `module.exports = {`  
6.   `apps: [{`  
7.     `name: 'securo',`  
8.     `script: 'gunicorn',`  
9.     `args: '--workers 4 --bind 0.0.0.0:5000 app:app',`  
10.     `interpreter: 'none',`  
11.     `env_production: {`  
12.       `// Your production env variables here`  
13.     `}`  
14.   `}]`  
15. `}; `   
16. Start the application with PM2: code Bash    `pm2 start ecosystem.config.js --env production ` 

**Key API Endpoints**

* `GET /api/live-feed-data`: Fetches real-time and fallback crime incidents with filtering and pagination.  
* `GET /api/crime-feed-sources`: Returns the status of the live news scraping sources.  
* `POST /api/refresh-crime-sources`: Manually triggers a refresh of the news feed.  
* `POST /api/chat`: The main endpoint for interacting with the SECURO AI assistant.  
* `POST /api/submit-report`: Handles the submission of anonymous and identified crime reports.  
* `GET /api/crime-statistics/<year>`: Retrieves detailed historical crime data for a specific year.  
* `POST /api/text-to-speech`: Converts text from the AI's response into audio.

**Local Context**  
SECURO is built with a deep understanding of the local context of **St. Kitts & Nevis**, featuring:

* **Data Sources**: Exclusively uses recognized local news outlets for crime data.  
* **Jurisdiction**: The AI is specifically prompted to operate within the legal and procedural framework of the RSCNPF.  
* **Locations**: Hotspot data and location extraction are based on known districts and towns in the federation, including Basseterre, Frigate Bay, Sandy Point, and Charlestown.

**License**  
This project is licensed under the MIT License. © 2025 Securo AI.