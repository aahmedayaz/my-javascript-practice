const ffmpeg = require('fluent-ffmpeg');
ffmpeg({source : './inputVideo.mp4'})
.takeScreenshots({
    count : 0 ,
    folder : './outputImages' ,
    timemarks: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'], // This will generate only 10 images -
    filename: 'screenshot-%i',
})

// If you want to generate Images after every 10Seconds
// use this command 

//  ffmpeg -i inputVideo.mp4 -vf "fps=1/10,scale=120:-1,tile=2x1" -q:v 1 anotherOutputImages/output_image_%03d.jpg