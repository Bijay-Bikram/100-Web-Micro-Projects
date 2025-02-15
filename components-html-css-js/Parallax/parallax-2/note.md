
## For Parallax background
1. It must be inside scrollable document (Wrapper)

2. CSS property "perspective" , " transform-style: preserve-3d; and  overflow-y: scroll;" should be given to Wrapper element (parent element) .

3. css "transform: translateZ();" property is applide to its children to apply perspective

4. Note: The more you decrease the value of "translateZ()", more the distance away from the screen and increase its moveability. (size will reduce) 