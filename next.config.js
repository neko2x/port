
const withImages=require('next-images')
// module.exports=withImages({});

const withVideos=require('next-videos')
// module.exports=withVideos({});

module.exports=withImages(withVideos());


//npm install --save next-images