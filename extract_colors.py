
import sys
import subprocess

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    from PIL import Image
except ImportError:
    install('Pillow')
    from PIL import Image

from collections import Counter

def rgb_to_hex(rgb):
    return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])

def extract_colors(image_path, num_colors=10):
    try:
        img = Image.open(image_path)
        img = img.convert('RGB')
        # Resize to speed up processing and reduce noise
        img = img.resize((100, 100))
        pixels = list(img.getdata())
        counts = Counter(pixels)
        common = counts.most_common(num_colors)
        
        print(f"Top {num_colors} colors in {image_path}:")
        for color, count in common:
            hex_code = rgb_to_hex(color)
            print(f"{hex_code} (Count: {count})")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract_colors(r"c:\Users\Admin\Downloads\sumi\udaya-sankalp-foundation\logo\colorpallette.png")
