const ImageModel = require('./model');


// Create New Image
const createImage = ( { imageUrl, title, description, createdBy } ) => new Promise( (resolve, reject) => {
   ImageModel
    .create({ imageUrl, title, description, createdBy})
    .then(imageCreated => resolve(imageCreated._id))
    .catch(err => reject(err));
 });

 // Update Image
const updateImage = (imageId, { imageUrl, title, description  }) => new Promise( (resolve, reject) => {
    ImageModel.findByIDAndUpdate(
        imageId,
        { imageUrl, title, description}
      )
      .then(updatedImage => resolve(updatedImage._id))
      .catch(err => reject(err));
  });

  // Read all Image
const listAllImage = () => new Promise((resolve, reject) => {
    ImageModel.find({ active: true })
    .then(images => resolve(images))
    .catch(err => reject(err));
  })

  // Read Image by Page
const listImageByPage = (pageNumber) => new Promise((resolve, reject) => {
    ImageModel.find({ Active: true })
    .sort({ createdAt: -1}) // sort by latest post
    .skip((pageNumber - 1) * 5) // divide images into pages
    .limit(5) // number of page to send
    .exec()
    .then(images => resolve(images))
    .catch(err => reject(err));
  });

  // Delete
const deleteImage = (imageId) => new Promise((resolve, reject) => {
    ImageModel.findByIdandUpdate(
      imageId,
      { active: false }
    )
    .then(deletedImage => resolve())
    .catch(err => reject(err));
  });

//UpdateImage
const updateImageData = (imageId) => new Promise((resolve, reject) => {
  ImageModel.findById(imageId)
  .then(image => resolve(image))
  .catch(err => reject(err));
  });









module.exports = {
  createImage,
  updateImage,
  listImageByPage,
  deleteImage,
  updateImageData
}

// TO DO
    // Comment
    // View
    // Like
