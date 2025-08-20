# 📝 CLI Todo App

A simple **command-line-based Todo application** built with **Node.js**.  
It allows you to **add, view, complete, delete, and manage tasks** directly from the terminal.  

---

## 🚀 Features

- Add new tasks  
- View all tasks  
- Mark tasks as completed  
- Delete tasks  
- Save tasks in a local `data.json` file  
- Interactive command-line interface  
- Help command to show available options  

---

## 📂 Project Structure

```
.
├── app.js            # Main entry point
├── src
│   ├── ask.js        # Handles user input (readline)
│   ├── fs.js         # File system functions (load & save tasks)
│   └── control.js    # Task control functions (add, view, delete, complete)
└── data.json         # Local storage for tasks
```

---

## 🛠️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/pankaj72885/cli-todo-app.git
   cd cli-todo-app
   ```

2. Install dependencies (if any):
   ```bash
   npm install
   ```

3. Run the app:
   ```bash
   node app.js
   ```

---

## 📖 Usage

Once started, the app will prompt for commands:  

```
Add/View/Completed/Delete/Exit/Help?
```

### 🔑 Available Commands

- **add** → Add a new task  
- **view** → View all tasks  
- **completed** → Mark a task as completed (by task number)  
- **delete** → Delete a task (by task number)  
- **help** → Show all available commands  
- **exit** → Exit the application  

---

## 💾 Data Storage

All tasks are stored locally in a `data.json` file.  
Each task contains:  
- Task description  
- Status (pending/completed)  
- Timestamp (when added/updated)  

---

## 👨‍💻 Author

- **Pankaj Bepari**  
- GitHub: [@pankaj72885](https://github.com/pankaj72885)
