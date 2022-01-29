import Room from "../models/room";

const allRooms = (req,res) => {
    res.status(200).json({
        success:true,
        message: "All rooms"
    })
}


// Create new room   =>   /api/rooms
const newRoom = async (req, res) => {

    // const images = req.body.images;

    // let imagesLinks = [];

    // for (let i = 0; i < images.length; i++) {

    //     const result = await cloudinary.v2.uploader.upload(images[i], {
    //         folder: 'bookit/rooms',
    //     });

    //     imagesLinks.push({
    //         public_id: result.public_id,
    //         url: result.secure_url
    //     })

    // }

    try {
        const room = await Room.create(req.body);

        res.status(200).json({
            success: true,
            room
        })
    } catch(error) {
        res.status(400).json({
            success: false,
            error: error.message    
        })
    }


   
}

export {
    allRooms,
    newRoom
}