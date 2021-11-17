const fs= require('fs').promises;
const  path= require('path');

// fs.readdir(path.resolve(__dirname))
// .then(files=> console.log(files))
// .catch(e=> console.log(e))

async function readdir(rootDir) {
    rootDir=rootDir || path.resolve(__dirname)
    const files= await fs.readdir(rootDir)
    walk(files, rootDir)
    
}

async function walk(files, rootDir) {
    for(let file of files){
        const fileFullWalk=path.resolve(rootDir, file);
        const stats = await  fs.stat(fileFullWalk);

        if(/\.git/g.test(fileFullWalk)) continue;
        if(/\.node_modules/g.test(fileFullWalk)) continue;
        
        if(stats.isDirectory()){
            readdir(fileFullWalk)
            continue;
        }
        
        
        if(!/\.css$/g.test(fileFullWalk) && !/\.html$/g.test(fileFullWalk)) continue;

        console.log(fileFullWalk)

    }
    
}

readdir('C:/Users/guigu/OneDrive/all i know theory/Java Script/Java Script Advanced')

