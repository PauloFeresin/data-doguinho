const cron = require('node-cron');
const MonitorJob = require("./MonitorJob");

// O nome ficou como index.js porque em NODE index.jsm quando for chamado no app.js,
//  ele automaticamente procura por ./jobs/index.js, sem precisar faz imports explicitos

cron.schedule(" * * * * * ", async () => {
    console.log("Requisitando a cada minuto");
    await MonitorJob.run();
});