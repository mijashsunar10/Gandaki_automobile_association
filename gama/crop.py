from PIL import Image
import glob
import os

files = glob.glob('public/freinds/*.*')
for f in files:
    try:
        img = Image.open(f)
        print(f"File: {os.path.basename(f)}, Size: {img.size}")
    except Exception as e:
        print(f"Error reading {f}: {e}")
