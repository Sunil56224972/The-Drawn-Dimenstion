from PIL import Image, ImageDraw, ImageFont
import os

# Paths
board_path = "public/textures/corridor/pustatabliczka.webp"
font_path = "public/fonts/CabinSketch-Bold.ttf"
output_path = "public/textures/readme_board.png"

try:
    img = Image.open(board_path).convert("RGBA")
    width, height = img.size
    
    draw = ImageDraw.Draw(img)
    
    font_size_1 = int(height * 0.22)
    font_size_2 = int(height * 0.28)
    
    font1 = ImageFont.truetype(font_path, font_size_1)
    font2 = ImageFont.truetype(font_path, font_size_2)
    
    text1 = "THE"
    text2 = "DIMENSTION"
    
    try:
        bbox1 = draw.textbbox((0, 0), text1, font=font1)
        w1 = bbox1[2] - bbox1[0]
        h1 = bbox1[3] - bbox1[1]
    except AttributeError:
        # Fallback for older PIL
        w1, h1 = draw.textsize(text1, font=font1)
        
    try:
        bbox2 = draw.textbbox((0, 0), text2, font=font2)
        w2 = bbox2[2] - bbox2[0]
        h2 = bbox2[3] - bbox2[1]
    except AttributeError:
        # Fallback for older PIL
        w2, h2 = draw.textsize(text2, font=font2)
    
    x1 = (width - w1) / 2
    y1 = height * 0.2 - (h1 / 2)
    
    x2 = (width - w2) / 2
    y2 = height * 0.55 - (h2 / 2)
    
    draw.text((x1, y1), text1, font=font1, fill=(17, 17, 17, 255))
    draw.text((x2, y2), text2, font=font2, fill=(17, 17, 17, 255))
    
    img.save(output_path, "PNG")
    print("SUCCESS")
except Exception as e:
    print(f"ERROR: {e}")
