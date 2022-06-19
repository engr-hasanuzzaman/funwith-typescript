import mongoose from "mongoose";
import config from "config";

const connect = async () => {
    const dbUrl = config.get<string>('dbUrl');
    try {
        await mongoose.connect(dbUrl);
        console.log('-------db connected');
    } catch (error) {
        console.log('-----db connection failed');
        process.exit(0)
    }
}

export default connect;