import { serverSetUp } from './setupServer';
import { databaseSetUp } from './setUpDatabase';

async function init() {
    await serverSetUp();
    await databaseSetUp();
}

init();
