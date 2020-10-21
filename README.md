# Extopia

I'm feeling really enthusiastic about this project, but didn't want to step on anyone's toes. Instead of working on the main app (excoappjs), I'm creating this one in parellel. I'm hoping that we can trade code between the two as it makes sense. Here is a list of currently working example of our opened story points:<br>

* Basic authentication with email and google
* Configuration of authentication tools in firebase
* Database modelling of the post requirement
* Basic Create Functionality
* implement main "fake delete" functionality, which is actually an update
* implement time based tracking of posts (timestamp)
* retrieving posts from the server to timeline
* Basic Read functionality using the timeline
* inifinite scroll (in development, I have an example)
* implement pagination--download json in chunks (almost complete)
* create database indexes (this actually happens automatically)
* create filter and sorting rules for posts, based on credits and timestamp
* adjust the timeline after post is deleted

Instructions/README

Open CMD prompt<br>
Navigate to your xampp htdocs folder (Mine is C:\xampp\htdocs, but yours might be different)<br>

git clone https://github.com/jcopedev/Extopia.git

~~Make sure to also transfer the appconfig.js into this folder, that I gave you on discord~~

Start Xampp (run as administrator) <br>
Start Apache--We don't need SQL ;-) <br>
Navigate to: localhost/extopia/excoapp<br>
The index.html should come automatically <br>
Try posting--don't say anything mean, because we'll actually be able to see it in the database <br>
~~Try deleting something in the limited timeline, it will prompt you to sign up not implemented yet.~~--no limited timeline<br>
Navigate to authentication<br>
sign up either with google or email password.<br> 
Use real credentials It should redirect you to your user profile with a "full timeline" <br>
That's all I have so far, and nothing is set in stone, but some features I'm very attached to.<br>

<br>
pages: <br>
http://localhost/extipia/excoapp <br>
http://localhost/extopia/excoapp/timeline.html <br>
http://localhost/extopia/excoapp/authenticate.html<br>
