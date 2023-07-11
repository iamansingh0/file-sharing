import mongoose from 'mongoose'

const DBConnection = async () => {
    const DB_URL = `mongodb+srv://aman:SbljcsdQLmv831DR@file-sharing.b30pror.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser: true })
        console.log('Database connected successfully')
    } catch(error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default DBConnection