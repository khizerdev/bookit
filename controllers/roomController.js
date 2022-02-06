import Room from "../models/room";
import ErrorHandler from '../utils/errorHandler'
import catchAsyncErrors from '../middlewares/catchAsyncErrors'
import APIFeatures from "../utils/apiFeatures";

const allRooms = catchAsyncErrors(async (req,res) => {
    
    const apiFeatures = new APIFeatures(Room.find(), req.query)
        .search()

    const rooms = await apiFeatures.query;
    
    // const rooms = await Room.find()

    res.status(200).json({
        success:true,
        count: rooms.length,
        rooms
    })
 
})


// Create new room   =>   /api/rooms
const newRoom = catchAsyncErrors(async (req, res) => {

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

    
        const room = await Room.create(req.body);

        res.status(200).json({
            success: true,
            room
        })
   


   
})

// Get room details   =>   /api/rooms/:id
const getSingleRoom = catchAsyncErrors(async (req, res, next) => {

   
        const room = await Room.findById(req.query.id);

        if (!room) {
            return next(new ErrorHandler('Room not found with this ID', 404))
        }

        res.status(200).json({
            success: true,
            room
        })
  

    
})

// Update room details   =>   /api/rooms/:id
const updateRoom = catchAsyncErrors(async (req, res) => {

    
        let room = await Room.findById(req.query.id);

    if (!room) {
        return next(new ErrorHandler('Room not found with this ID', 404))
    }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

        res.status(200).json({
            success: true,
            room
        })
 

    

})

// Delete room   =>   /api/rooms/:id
const deleteRoom = catchAsyncErrors(async (req, res) => {

   
        const room = await Room.findById(req.query.id);

        if (!room) {
            return next(new ErrorHandler('Room not found with this ID', 404))
        }

        await room.remove();

        res.status(200).json({
            success: true,
            message: 'Room is deleted.'
        })
 

    

})

export {
    allRooms,
    newRoom,
    getSingleRoom,
    updateRoom,
    deleteRoom
}