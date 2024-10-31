import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        unique: [true , "Name must be unique!"]
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        unique: [true , 'Email must be unique!'],
        lowercase: true,
        select: false
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        select: false
    }
}, {
    timestamps: true
});

const UserModel = model("User", UserSchema);

export { UserModel };
