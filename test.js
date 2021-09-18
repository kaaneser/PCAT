const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Connect Database
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create Schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// Create a photo
// Photo.create({
//   title: 'Photo Title 3',
//   description: 'Photo Description 3 Lorem Ipsum',
// });

// Read a photo
// Photo.find({}, (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
// });

// Update a photo
// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Updated Photo Title 111',
//     description: 'Updated Description 111 Lorem Ipsum',
//   },
//   {
//     new: true,
//   },
//   (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
//   }
// );

/* const id = '613d377bf9fed23590b63ccb';
// Delete a photo
Photo.findByIdAndDelete(id, (err, data) => {
  if (err) console.log(err);
  console.log('Photo removed.');
});
*/