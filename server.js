const express = require('express');
const cors = require('cors');
const { Storage } = require('@google-cloud/storage');

const gc = new Storage({
    keyFilename: 'smart-column-304423-57017e534e3b.json',
    projectId: 'smart-column-304423',
});

// gc.getBuckets().then((res) => console.log(res));

// async function uploadFile() {
//     await gc.bucket('stackshot').upload('README.md', {
//         metadata: {
//             // Enable long-lived HTTP caching headers
//             // Use only if the contents of the file will never change
//             // (If the contents will change, use cacheControl: 'no-cache')
//             cacheControl: 'no-cache',
//         },
//     });
// }

// uploadFile().then(() => console.log('uploaded'));

const app = express();
app.use(cors());

const PORT = 5000 | process.env.PORT;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});
