//  todo list with array

let todos = [
  [
    {
      id: 1,
      title: "Buy groceries",
      description: "Milk, eggs, bread, and fruits",
      completed: false,
    },
    {
      id: 2,
      title: "Morning workout",
      description: "30 minutes of cardio",
      completed: true,
    },
    {
      id: 3,
      title: "Finish project report",
      description: "Complete and submit by email",
      completed: false,
    },
    {
      id: 4,
      title: "Call plumber",
      description: "Fix kitchen sink leakage",
      completed: false,
    },
    {
      id: 5,
      title: "Read a book",
      description: "Read 50 pages of a novel",
      completed: false,
    },
    {
      id: 6,
      title: "Team meeting",
      description: "Weekly sync-up with team",
      completed: true,
    },
    {
      id: 7,
      title: "Clean the house",
      description: "Vacuum and dust all rooms",
      completed: false,
    },
    {
      id: 8,
      title: "Pay electricity bill",
      description: "Pay via online banking",
      completed: false,
    },
    {
      id: 9,
      title: "Doctor appointment",
      description: "Annual health check-up",
      completed: false,
    },
    {
      id: 10,
      title: "Plan weekend trip",
      description: "Research hotels and activities",
      completed: false,
    },
    {
      id: 11,
      title: "Update resume",
      description: "Add recent project experience",
      completed: true,
    },
    {
      id: 12,
      title: "Water plants",
      description: "Indoor and balcony plants",
      completed: false,
    },
    {
      id: 13,
      title: "Backup laptop data",
      description: "Upload important files to cloud",
      completed: false,
    },
    {
      id: 14,
      title: "Cook dinner",
      description: "Try a new pasta recipe",
      completed: true,
    },
    {
      id: 15,
      title: "Car service",
      description: "Oil change and tire rotation",
      completed: false,
    },
    {
      id: 16,
      title: "Schedule dentist visit",
      description: "Book appointment for cleaning",
      completed: false,
    },
    {
      id: 17,
      title: "Organize desk",
      description: "Declutter workspace",
      completed: false,
    },
    {
      id: 18,
      title: "Learn JavaScript",
      description: "Complete one online tutorial",
      completed: true,
    },
    {
      id: 19,
      title: "Send birthday gift",
      description: "Order gift online",
      completed: false,
    },
    {
      id: 20,
      title: "Meditation session",
      description: "15 minutes mindfulness practice",
      completed: false,
    }
  ]
];

// add the task 
function addTasks(id,title , description, completed) {

   const addTodos = {id, title, description, completed}

   todos.push(addTodos)
        
        
}

addTasks()

// console.log(todos);

//  remove the tasks , so that first we will get the todos by ID and than target the id and delete it with the use of splice 


function removeTodos(id) {

    // get the value first from the todos id 
    // remain the index value is 0 because we are using direct array 

    const getbyId = todos[0].findIndex(
        (todoofI)=>(todoofI.id === id)
    ) 

    // check the availability of the todos if it's exist 
    if(getbyId !== -1){
        todos[0].splice(getbyId, 1)
    }
}



// console.log("befor" , todos);
removeTodos()
// console.log("after", todos);




