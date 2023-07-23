import fs from "fs";
import path from "path";
export const userget = (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src", "model", "users.json")));
    return res.send(data)
};
export const userpost = (req, res) => {
    const { last_name, age } = req.body;
    const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src", "model", "users.json")));
    data.push({ id: data.at(-1)?.id + 1 || 1, last_name, age })
    fs.writeFileSync(path.join(process.cwd(), "src", "model", "users.json"), JSON.stringify(data));
    console.log(last_name);
    return res.send('post');
};
export const userput = (req, res) => {
    const { last_name, age } = req.body;
    const { id } = req.params;
    const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src", "model", "users.json")));
    const user = data.filter(e => e.id == id);
    user.last_name = last_name || user.last_name;
    user.age = age || user.age;
    fs.writeFileSync(path.join(process.cwd(), "src", "model", "users.json"), JSON.stringify(data));
    return res.send("put");
};
export const userdelete = (req, res) => {
    const { id } = req.params;
    const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), "src", "model", "users.json")));
    const newData = data.filter((user) => user.id != id);
    fs.writeFileSync(path.join(process.cwd(), "src", "model", "users.json"), JSON.stringify(newData));
    console.log(newData);
    return res.send("delete");
};