const express = require('express');
const Router = express.Router();

const ImageController = require('./controller')


// Router /api/image/.....
Router.get('/', (req, res) => {
  ImageController.listImageByPage(req.query.page || 1)
  .then(images => {
    console.log(images.length);
    res.send( { success: 1, images: images } );
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({ success: 0, errMsg: err });
  });
});

Router.post('/', (req, res) => {
  ImageController.createImage(req.body)
  .then(imageCreatedId => res.status(201).send({ success: 1, image: imageCreatedId}))
  .catch(err => {
    console.log(err);
    res.status(500).send({ success: 0, errMsg: err });
  });
});

Router.put('/view/:imageId', (req, res) => {
  ImageController.updateImage(req.params.imageId)
  .then(image => {
    image.view += 1;
    res.status(201).send({ success: 1, image: image});
    image.save();
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({ success: 0, errMsg: err });
  });
});

Router.put('/like/:imageId', (req, res) => {
  ImageController.updateImageData(req.params.imageId)
  .then(image => {
    image.like += 1;
    res.status(201).send({ success: 1, image: image});
    image.save();
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({ success: 0, errMsg: err });
  });
});
Router.put('/unlike/:imageId', (req, res) => {
  ImageController.updateImageData(req.params.imageId)
  .then(image => {
    image.like -= 1;
    res.status(201).send({ success: 1, image: image});
    image.save();
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({ success: 0, errMsg: err });
  });
});

Router.put('/comment/create/:imageId/', (req, res) => {
  ImageController.updateImageData(req.params.imageId)
  .then(image => {
    image.comment.push(req.body);
    res.status(201).send({ success: 1, image: image});
    image.save();
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({ success: 0, errMsg: err });
  });
});


Router.put('/comment/delete/:imageId/:commentId', (req, res) => {
  ImageController.updateImageData(req.params.imageId)
  .then(image => {
    image.comment.forEach( function(i){
      (i._id == req.params.commentId)? image.comment.splice(image.comment.indexOf(i), 1) : console.log('1');
    });
    res.status(201).send({ success: 1, image: image});
    image.save();
  })
  .catch(err => {
    console.log(err);
    res.status(500).send({ success: 0, errMsg: err });
  });
});





module.exports = Router;
