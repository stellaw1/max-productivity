const functions = require('firebase-functions');
const admin = require('firebase-admin');
const vision = require('@google-cloud/vision');
const visionClient =  new vision.ImageAnnotatorClient();
let Promise = require('promise');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.getIfFocused = functions.firestore.document('photos/{document}')
.onCreate((snap, context) => {

	const data = snap.data();

	const photoUrl = "gs://" + data.bucket + "/" + data.fullPath;

	return Promise.resolve()
	.then(() => {
		return visionClient.faceDetection(photoUrl);
	})
	.then(results => {
		const faceDetection = results[0].faceDetection

        // // old shit
		// let similarImages = [];
 		// if (faceDetection.visuallySimilarImages.length) {
		// 	faceDetection.visuallySimilarImages.forEach(image => {
		// 	 	similarImages.push(image);
		// 	 });
        // }		
        // // ^^

        const [result] = await client.faceDetection(photoUrl);
        const faces = result.faceAnnotations;
        console.log('Faces:');
        faces.forEach((face, i) => {
          console.log(`  Face #${i + 1}:`);
          console.log(`  Joy: ${face.joyLikelihood}`);
          console.log(`  Anger: ${face.angerLikelihood}`);
          console.log(`  Sorrow: ${face.sorrowLikelihood}`);
          console.log(`  Surprise: ${face.surpriseLikelihood}`);
        });

        //if (faces[0] = "VERY_LIKELY" || faces[1] = "VERY_LIKELY" || faces[2] = "VERY_LIKELY" || faces)

		// db.collection('photos').doc(context.params.document).update({ similarImages })
		// .then(res => console.log('dopples added'))
		// .catch(err => console.error(err));

	})
	.catch(err => console.error(err));

})