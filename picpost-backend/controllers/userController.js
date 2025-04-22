import User from "../models/userModel.js";

const followUser = async (req, res) => {
    try {
        const {id} = req.params;
        const me = await User.findById(req.userId);

        if (me.following.includes(id)) {
            return res.status(400).json({success: false, message: 'already following this user'});
        }

        me.following.push(id);
        await me.save();

        res.status(200).json({success: true, message: 'now following this user'})
    } catch (error) {
        console.error('follow user error:', error);
        res.status(500).json({success: false, message: 'server error'});
    }
};

export default followUser;