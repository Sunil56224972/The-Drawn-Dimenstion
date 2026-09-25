import fs from 'fs';
import sharp from 'sharp';
import TextToSVG from 'text-to-svg';

async function generate() {
    const fontPath = './public/fonts/CabinSketch-Bold.ttf';
    const textToSVG = TextToSVG.loadSync(fontPath);

    const text1 = 'The';
    const text2 = 'Dimenstion';

    const attributes = {fill: '#111111', stroke: 'none'};
    const fontSize = 250;
    
    // getMetrics to find width and height
    const m1 = textToSVG.getMetrics(text1, {fontSize});
    const m2 = textToSVG.getMetrics(text2, {fontSize});

    const width = 2048;
    const height = 1024;

    // Center calculations
    const x1 = (width - m1.width) / 2;
    const y1 = height / 2 - m1.height - 20; // top line

    const x2 = (width - m2.width) / 2;
    const y2 = height / 2 + 50; // bottom line

    const path1 = textToSVG.getPath(text1, {x: x1, y: y1, fontSize, anchor: 'top', attributes});
    const path2 = textToSVG.getPath(text2, {x: x2, y: y2, fontSize, anchor: 'top', attributes});

    const compositeSvg = `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
            ${path1}
            ${path2}
        </svg>
    `;

    await sharp('./public/textures/corridor/pustatabliczka.webp')
        .composite([{ input: Buffer.from(compositeSvg), top: 0, left: 0 }])
        .toFile('./public/textures/corridor/readme_board.webp');
        
    console.log('Image generated successfully!');
}

generate().catch(console.error);
