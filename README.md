# 🎓 **TO DO APPLICATION**  


---

## 🛠 **TECH STACK**
🔹 Frontend: EJS (Embedded JavaScript), CSS3  
🔹 Backend: Node.js, Express.js  
🔹 Database: (MongoDB, make sure you have the right db connection url in index.js)  

---

## 📂 **PROJECT STRUCTURE**
public/                     # Public assets    
│── css/                    # Stylesheets  
│   ├── styles.css  

views/                      # Views (EJS templates)  
├── list.ejs                # Renders the to do list

.gitignore                  # Git ignored files  
index.js                    # Main server file  
index.html                  # Renders the background and the layout  
item.js                     # It defines each task into a model
package.json                # Dependencies and scripts  
package-lock.json           # Dependency lock file  

---

## 💻 **HOW TO RUN THE PROJECT**
<ol>
  <li>Open the terminal and clone the repo</li>
  <li>navigate to To-Do-List  

  ```sh
    cd To-Do-List
 ```
  </li>
  <li>
    configure the database connection url in index.js
  </li>
  <li>
    Install dependencies and run the server:  
    
    npm i
    node index.js

  </li>
  <li>
    Open your browser and search the following in your browser:  

    http://localhost:3000

  </li>
</ol>
