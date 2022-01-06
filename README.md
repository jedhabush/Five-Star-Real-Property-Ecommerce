# Five-Star-Real-Property-Ecommerce
A property ecommerce project. 

**Features:**
- Allow users to navigate different property listings for rent or properties for sale. 
- Allow users to login by signing up using an email and password or by using their Google account.
- Allow users to reset thier passowrd by using forgot password feature.
- Allow users to edit/update their personal information on their profile page.
- Allow users to create their own property listing by providing the property details such as name, address, price, upload property images up to 6 imgaes and more options. 
- Allow users to delete the property from their listing.
- Allow users to contact the owner to ask for more information about the property.
- Allow users to copy the property listing link by clicking on the clipboard icon.

**Technologies:**
- Website is fully developed using Reactjs.
- All data are completely saved and retrieved from Firebase DB Version 9.
- Google Authentication is implemented to allow users to login using their google account.
- Users passwords are deleted before sending data to Firbase DB upon signing up for security purposes.
- React-toastify package is used to prompt users.
- Sass is used for styling and improve website responsiveness on different devices.
- Latest react router version 6 is being used.
- SwiperCore is used to create a nice carousel component.

------------
**Fun Fact!**
- There's an easter egg somewhere in the website can you find it? ^_^

------------
**Possible Improvements:**
- Add Geolocation component to show property location on the map.
- Enhance user interface.
- Allow users to edit/change property details.
- Add more sign up options.
- Sort properties based on location, price, etc.


------------
# Live Version 
https://five-star-real-property.netlify.app/



------------
**Available Scripts**
In the project directory, you can run:

# ```npm start```

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

# ```npm test```
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

# ```npm run build```
Builds the app for production to the ```build``` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

# ```npm run eject```
Note: this is a one-way operation. Once you ```eject```, you can’t go back!

If you aren’t satisfied with the ```build``` tool and configuration choices, you can ```eject``` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies ```(webpack, Babel, ESLint, etc)``` right into your project so you have full control over them. All of the commands except ```eject``` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use ```eject```. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
