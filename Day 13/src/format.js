export const  APP_Name="JavaScript Everywhere";

export function formatTask(task){
const mark=task.status==="done"?"[x]":"[ ]";
    return `${mark} #${task.id} ${task.title} `;

}