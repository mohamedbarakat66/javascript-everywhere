import {mkdir,readFile,writeFile} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here=path.dirname(fileURLToPath(import.meta.url));
const dataFile=path.join(here,"..","data","tasks.json");
    

export async function readTasks(){
    
  try{
    const data=await readFile(dataFile,"utf-8");
    return JSON.parse(data);
  }catch(err){
    if(err.code==="ENOENT"){
      throw err;
    }
   
  }
}

export async function writeTasks(tasks){
    await mkdir(path.dirname(dataFile),{recursive:true});
    const data=JSON.stringify(tasks,null,2);
    await writeFile(dataFile,data,"utf-8");
}

export async function addTasks(title){
    const tasks=await readTasks();
    const id=tasks.length+1;
    const task={id,title,status:"todo"};
    tasks.push(task);
    await writeTasks(tasks);
    return task;
}

export async function updateTask(id,status){
    const tasks=await readTasks();
    const task=tasks.find(t=>t.id===id);
    if(task){
        task.status=status;
        await writeTasks(tasks);
    }
}

export async function deleteTask(id){
    const tasks=await readTasks();
    const index=tasks.findIndex(t=>t.id===id);
    if(index!==-1){
        tasks.splice(index,1);
        await writeTasks(tasks);
    }
}

export async function clearTasks(){
    await writeTasks([]);
}

export async function removeTasks(id){
    const tasks=await readTasks();
    const index=tasks.findIndex(t=>t.id===id);
    if(index!==-1){
        tasks.splice(index,1);
        await writeTasks(tasks);
    }
}
