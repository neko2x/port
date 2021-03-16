
const withImages=require('next-images')
// module.exports=withImages({});

const withVideos=require('next-videos')
// module.exports=withVideos({});

module.exports=withImages(withVideos({
    basePath:process.env. NEXT_PUBLIC_BASE_PATH,
    assetPrefix:process.env. NEXT_PUBLIC_BASE_PATH
}));


//npm install --save next-images