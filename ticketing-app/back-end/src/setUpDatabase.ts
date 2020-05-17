import Mongoose from 'mongoose';

async function databaseSetUp() {
    const connected: boolean = await connectToDatabase();
    if (!connected) {
        process.exit();
    }
}

async function connectToDatabase(): Promise<boolean> {
    const connectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    try {
        await Mongoose.connect('mongodb://localhost:27017/ticketing-app', connectionOptions);
        console.log('Connected to database');
        return true;
    }
    catch (error) {
        console.log('Error occured while connecting to database', error);
        return false;
    }
}

export { databaseSetUp };