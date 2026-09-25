import fs from 'fs';
import sharp from 'sharp';
import TextToSVG from 'text-to-svg';
import GIFEncoder from 'gif-encoder-2';

async function generate() {
    const fontPath = './public/fonts/CabinSketch-Bold.ttf';
    const textToSVG = TextToSVG.loadSync(fontPath);

    const text1 = 'The';
    const text2 = 'Dimenstion';

    const attributes = {fill: '#111111', stroke: 'none'};
    const fontSize = 250;
    
    const m1 = textToSVG.getMetrics(text1, {fontSize});
    const m2 = textToSVG.getMetrics(text2, {fontSize});

    const width = 2048;
    const height = 1024;
    
    // Base center values
    const baseX1 = (width - m1.width) / 2;
    const baseY1 = height / 2 - m1.height - 20;

    const baseX2 = (width - m2.width) / 2;
    const baseY2 = height / 2 + 50;
    
    // We will generate 4 frames with slight jitter
    const framesData = [];
    const jitters = [
        { dx: 0, dy: 0, r: 0 },
        { dx: -3, dy: 4, r: 0.5 },
        { dx: 4, dy: -3, r: -0.4 },
        { dx: -2, dy: -2, r: 0.2 },
    ];
    
    for (let i = 0; i < jitters.length; i++) {
        const j = jitters[i];
        
        const path1 = textToSVG.getPath(text1, {x: baseX1 + j.dx, y: baseY1 + j.dy, fontSize, anchor: 'top', attributes});
        const path2 = textToSVG.getPath(text2, {x: baseX2 + j.dx, y: baseY2 + j.dy, fontSize, anchor: 'top', attributes});
        
        // Wrap in <g> with rotation around center
        const cx = width / 2;
        const cy = height / 2;
        
        const compositeSvg = `
            <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(${j.r}, ${cx}, ${cy})">
                    ${path1}
                    ${path2}
                </g>
            </svg>
        `;
        
        // Composite onto base image
        const frameBuffer = await sharp('./public/textures/corridor/pustatabliczka.webp')
            .composite([{ input: Buffer.from(compositeSvg), top: 0, left: 0 }])
            .ensureAlpha()
            .raw()
            .toBuffer({ resolveWithObject: true });
            
        framesData.push(frameBuffer.data);
        console.log(`Frame ${i + 1} generated`);
    }

    // Now encode to GIF
    const encoder = new GIFEncoder(width, height, 'octree', false); // octree is usually faster and better
    encoder.start();
    encoder.setRepeat(0);   
    encoder.setDelay(150);  // 150ms per frame gives a nice sketchy boil
    encoder.setQuality(10); 
    
    console.log('Encoding GIF... this might take a few seconds.');
    for (let i = 0; i < framesData.length; i++) {
        encoder.addFrame(framesData[i]);
        console.log(`Encoded frame ${i + 1}`);
    }
    
    encoder.finish();
    
    const buffer = encoder.out.getData();
    fs.writeFileSync('./public/textures/corridor/readme_board_animated.gif', buffer);
    console.log('Animated GIF saved successfully!');
}

generate().catch(console.error);
