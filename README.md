#https://elvinoo.github.io/Dices-game-with-native-js/
# Dices-game-with-native-js
It is a simple dice spinning game written in native js.
HTML description
Initially I added two divisions(divs) and named them as dice 1 and dice 2. In each div I added 6 different images with dice photo starting from 1 to 6. Only the first images of the divs had class property(class="show").
Then I added spin and restart buttons in a separate div tag in order to use them with javascript.

CSS description
In the css file initially I made the img tag(all of them) as display:none and the show class as display:inline in order to get only two images by default.
Then changed button sizes for the mobile and tablet screens in order to touch it easily

JS description
In JS file, I created and empty h3 tag and appended it in the div of buttons in order to show the winner. 
I chose all images of two divisions and with the forEach I removed all the classes of the images. Then I added a click listener to the spin button. Inside the listener I called a function that first of all generates two random numbers between 1-5(as the index counting starts from 0) and based on created random number it chooses randomly one of the images of each division and adds them the show class. And then with the ternary operator I made the comparison between random numbers and returned the winner to the empty h3 tag that I initially created with js.
Then I added another click event to restart button that simply reloads the window page on click and returns the default page. 


