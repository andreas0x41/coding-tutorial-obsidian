[OpenCV: OpenCV-Python Tutorials](https://docs.opencv.org/3.4/d6/d00/tutorial_py_root.html)
[Welcome to OpenCV-Python Tutorials’s documentation! — OpenCV-Python Tutorials beta documentation](https://opencv24-python-tutorials.readthedocs.io/en/latest/)
[OpenCV Python Tutorial - GeeksforGeeks](https://www.geeksforgeeks.org/opencv-python-tutorial/)
[Install opencv python - A Comprehensive Guide to Installing "OpenCV-Python" - Machine Learning Plus](https://www.machinelearningplus.com/python/install-opencv-python/)
[Getting Started with OpenCV | LearnOpenCV](https://learnopencv.com/getting-started-with-opencv/)
[OpenCV Tutorial: A Guide to Learn OpenCV in Python](https://www.mygreatlearning.com/blog/opencv-tutorial-in-python/)
[Python Programming Tutorials](https://pythonprogramming.net/loading-images-python-opencv-tutorial/)
[OpenCV Python Tutorial](https://www.tutorialspoint.com/opencv_python/index.htm)

__computer vision and image processing tasks using OpenCV library__

```python
import cv2

# Open the video capture device (0 represents the default camera)
cap = cv2.VideoCapture(0)
# Check if the camera was successfully opened
if not cap.isOpened():
    print("Error opening video capture device")
    exit()  

while True:
    # Capture frame-by-frame
    ret, frame = cap.read()
    # If the frame was not read successfully, break the loop
    if not ret:
        break  

    # Display the frame
    cv2.imshow('Frame', frame)  

    # Check for 'q' key press to stop the loop
    if cv2.waitKey(1) == ord('q'):
        break  

# Release the video capture object
cap.release() 
# Close all OpenCV windows
cv2.destroyAllWindows()
```

|Method|Description|
|---|---|
|`cv2.imread(path)`|Read an image from a file|
|`cv2.imshow(window_name, image)`|Display an image in a window|
|`cv2.imwrite(path, image)`|Save an image to a file|
|`cv2.cvtColor(image, color_space)`|Convert the color space of an image|
|`cv2.resize(image, (width, height))`|Resize an image to the specified dimensions|
|`cv2.flip(image, flip_code)`|Flip an image along the specified axis|
|`cv2.rectangle(image, (x1, y1), (x2, y2), color, thickness)`|Draw a rectangle on an image|
|`cv2.circle(image, center, radius, color, thickness)`|Draw a circle on an image|
|`cv2.line(image, (x1, y1), (x2, y2), color, thickness)`|Draw a line on an image|
|`cv2.putText(image, text, (x, y), font, font_scale, color, thickness)`|Add text to an image|
|`cv2.split(image)`|Split the image channels|
|`cv2.merge(channels)`|Merge multiple image channels|
|`cv2.threshold(image, threshold_value, max_value, threshold_type)`|Apply image thresholding|
|`cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)`|Convert image to grayscale|
|`cv2.GaussianBlur(image, (ksize, ksize), sigmaX)`|Apply Gaussian blur to the image|
|`cv2.Canny(image, threshold1, threshold2)`|Apply Canny edge detection to the image|
|`cv2.HoughLines(image, rho, theta, threshold)`|Detect lines in the image using Hough transform|
|`cv2.findContours(image, mode, method)`|Find contours in the image|
|`cv2.drawContours(image, contours, contour_index, color, thickness)`|Draw contours on the image|