const fs = require('fs').promises;

module.exports = {
    async getTaskById(id) {
        const data = await fs.readFile('data.json');
        return JSON.parse(data).find((task) => task.id === id);
    },
    async addTask(task) {
        const data = JSON.parse(await fs.readFile('data.json'));
        const id = Number(data[data.length - 1]?.id) + 1;
        data.push({ id, ...task });
        await fs.writeFile('data.json', JSON.stringify(data));
    },
    async removeTaskById(id) {
        let data = JSON.parse(await fs.readFile('data.json'));
        data = data.filter((task) => task.id !== id);
        await fs.writeFile('data.json', JSON.stringify(data));
    },
};
