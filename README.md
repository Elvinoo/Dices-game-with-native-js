# Dices-game-with-native-js
It is a simple dice spinning game written in native js.
HTML description
Initially I added two divisions(divs) and named them as dice 1 and dice 2. In each div I added 6 different images with dice photo starting from 1 to 6. Only the first images of the divs had class property(class="show").
Then I added spin, restart buttons and an empty h3 tag in order to use them with javascript

CSS description
In the css file initially I made the img tag(all of them) as display:none and the show class as display:inline in order to get only two images by default.

JS description
In JS file, I chose all images of two divisions and with the forEach I removed all the classes of the images. Then I added a click listener to the spin button. Inside the listener I called a function that first of all generates two random numbers between 1-5(as the index counting starts from 0) and based on created random number it chooses randomly one of the images of each division and adds them the show class. And then with the ternary operator I made the comparison between random numbers and returned the winner to the empty h2 tag that I created in html.
Then I added another click event to restart button that simply reloads the window page on click and returns the default page. 


