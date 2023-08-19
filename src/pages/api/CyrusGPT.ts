// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  response: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { OPEN_AI_API_KEY, OPEN_AI_MODEL, OPEN_AI_URL } = process.env;
    console.log(OPEN_AI_API_KEY, OPEN_AI_MODEL, OPEN_AI_URL);
    const { chatMessage } = req.body;

    const data = { "model": OPEN_AI_MODEL, max_tokens: 300, "messages": [{"role": "user", "content": `My name is Cyrus Baybay and my resume is attached below this. Answer all questions as if you were me in a meaningful but short response. If asked about things that AI cannot give info on, act as if you are me. Always be polite and professional and answer all questions because you are me.
    CYRUS TRAEH CABATO BAYBAY
Buena Park, CA
714-746-7254 | cyrusb10@gmail.com
https://github.com/TRA3H
https://www.linkedin.com/in/cyrus-baybay-69a809175/
EDUCATION
California State University, Fullerton, Fullerton, CA
Bachelor of Science, Computer Science Expected Graduation: May 2024
• Programming Languages: C++ | C# | C | Java | Python | HTML | CSS | Javascript | Swift | SQL
• Web Dev: React | Native React | React Router | Swift Storyboard
• Technical: Microsoft Word | Microsoft Excel | Microsoft PowerPoint
• Backend & Other: Express.js | Flask | MongoDB | MySQL | Node.js | Swing | Visual Studio
TECHNICAL SKILLS
PROJECTS
• Analyze user product through search and displays all products shown on different sites and prices
• Objectively webscrape data from different sites to collectively store data onto a database operated on Flask and manipulated by web
application
• Performed a beautiful front-end UI for efficient and user-friendly navigation when searching through products and alternatives
Product ZERO To HERO September 2022 - Present
• Executed a Multi-page portfolio showcasing interests, goals, and aspirations to connect with viewer
• Performed and designed animated content through packages support React to deepen visual understanding and engagement
• Accomplished a responsive React web application is able to respond and adapt to any user device
Personal Portfolio July 2022 - September 2022
• Launched a web application includes front-end and back-end application
• Established an API to save user's persistent data using Firebase for later uses and convenience when surfing web or communication
• Developed functionality to open any application on device or web application to send saved data to user increasing efficient work flow
Clipboard July 2022 - August 2022
EXPERIENCE
• Developed and worked closely with team members of semester-long projects such as ACM blog, Food Tinder, & ACM website
• Experimented with latest front-end technology (Svelte) to issue bug-fixes and correct errors found in a group setting
• Managed and maintained files within the ACM project folders closely working with API's and implemented responsive front-end design
Association of Computer Machinery CSUF Fullerton, CA
Product Designer May 2022 - Present
• Taught in multiple languages starting from Scratch, Javascript, LUA, and C# to construct games to broaden knowledge in the Game
Development and foundational knowledge in programming
• Closely educated engaged students how to objectively code with Javascript on a IDE built website by company
• Taught multi-leveled students in different age ranges through "belt-level" curriculum on various problems of foundational coding
knowledge
• Boosted student attendance and company sales growth through advertising and outreach opportunities
• Hosted Minecraft and Roblox workshops focused on modding and programming with Javascript and LUA to create and design multiple
supervised projects
Code Ninjas La Habra, CA
Internship September 2021 - February 2022
• Led and organized weekly meetings to discuss future functionality and direction of game product
• Operated groups specializing in target areas including 3D rendering models, gameplay definitions, and UI
• Evaluated product outline using Github to organize team goals, general information, and technical specifics to define project scope
Video Game Design Club CSUF Fullerton, CA
Project Manager August 2021 - December 2021
Best Buy Orange, CA
Retail Sales Advisor July 2023 - Current



    Question: ${chatMessage}`}] };
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPEN_AI_API_KEY}` },
        body: JSON.stringify(data)
    };

    
    const response = await fetch(OPEN_AI_URL!, options);
    console.log(response)
    const responseJson = await response.json();
    

    res.status(200).json({ response: responseJson.choices[0].message.content.toString()})
}