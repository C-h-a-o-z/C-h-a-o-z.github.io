function projectSwitch (projectPage, titleProject, projnum) {
    document.getElementById("projectContent").innerHTML = projectPage;
    document.getElementById("TitleProject").innerHTML = titleProject;
    currProj = projnum;
}
function scrollTopDiv() {
    var divElement = document.getElementById("projectContent");
    divElement.scroll({
        top: 0,//scroll to the bottom of the element
        behavior: 'auto' //auto, smooth, initial, inherit
    });
}

var button;
var currProj=0;
console.log(currProj);
document.addEventListener('keydown', function(e){
    if(e.key === 'w'){
        var button = document.getElementById("proj" + (currProj -1));
        button.click();
        console.log(currProj);
    }
    else if(e.key === 's'){
    var button = document.getElementById("proj" + (currProj +1));
    button.click();
    console.log(currProj);
}
  });


var project1Page = ("\
<div>\
<h2>My first project/game. </h2>\
<img src=\"/images/projectcontent/pong.png\" alt=\"image project\" style=\"width: 80%;\"> </br>\
<p style=\"color:rgba(0, 0, 0, 0.5);\"> ^ Screenshot from game (Made in Unity) ^ </p>\
<h4>My Progress</h4>\
<p>Pong was my first project. We got the base introduction to C# and in the lessons the teacher would explain how to code a moving ball.\
We'd then get explained how to make it bounce by using materials instead of coding the bounce upon collision.\
After that, we got taught how to use user inputs to move objects and to make them stop at certain points.\
We also had to play audio on every collision the ball has. \
We were free to do whatever we felt like doing with the project, like making a trail. This you did have to figure out yourself.\
You were also allowed to make the ball speed up with every bounce, but just like the trail that was optional\
Over all, this game was a big thing for me. It made me realize how much I liked coding.\
Now, when I look back at the project I think about a lot of ways to improve it, which feels amazing since it's a sign that my skills have improved. </p>\
<h4>The game itself</h4>\
<p>-The game is for 2 players, one on each side.</br>\
-Player one moves the pedal on the left using W (up) and S (down).</br>\
-Player two moves the pedal on the Right using Arrow Up (up) and Arrow Down (down).</br>\
<br>\
The point is to hit the ball to the other player and make the other miss the ball.</br>\
If the other player misses the ball, and it gets past them, You'll get a point and the ball resets in the middle.</br>\
The game doesn't have an end coded in, so it's endless, and it doesn't get more difficult either.</p>\
<a class=\"btn btn-dark\" href=\"../index.html\" role=\"button\">Go to home page</a>\
</div>\
");
var project2Page = ("\
<div>\
<h2>My first 3d world/game</h2>\
<img src=\"/images/projectcontent/3dleveldesign.png\" alt=\"image project\" style=\"width: 80%;\"> </br>\
<p style=\"color:rgba(0, 0, 0, 0.5);\"> ^ Screenshot from world Design (Made in Unity) ^ </p>\
<h4>My Progress</h4>\
<p>This was my first time working in 3d. We had to design a level for an FPS game. We were allowed to use copyright free textures\
using unity's landscaping feature, I made a mountain area with snow and different textures\
I also wanted to add water and villages, but I didn't have enough time and I didn't want water that's just a png.\
I did however try to make the terrain look like a giant blade like object cut it diagonally with scorch marks.\
Personally, I didn't like this assignment as it was only landscaping and using other people's textures/prefabs (for houses)\
</p>\
<a class=\"btn btn-dark\" href=\"../index.html\" role=\"button\">Go to home page</a>\
</div>\
");
var project3Page = ("\
<div>\
<h2>My first personal 2D game</h2>\
<img src=\"/images/projectcontent/gameAmbitie.png\" alt=\"image project\" style=\"width: 80%;\"> </br>\
<p style=\"color:rgba(0, 0, 0, 0.5);\"> ^ Screenshot from my test level(Made in Unity) ^ </p>\
<h4>Background info</h4>\
<p>I worked on this project for half a year, since I wanted to work on it more during following projects.</br>\
Since I continued working on it, I don't have some of the older screenshots.</p>\
<h4>My Progress</h4>\
<p>This Project was the first project where we were allowed to make anything we wanted. I started out getting ideas and I ended up making a 2d platformer with ability's. \
This way I could learn how to make timed cooldowns and use particles all at the same time. Once I made a basic map, I followed a tutorial about basic movement. \
In past projects, we had to use transform.position a lot. By following this tutorial, I learned more about velocity and how much better it is. \
So once I got the movement down, I started working on my first ability. Double Jump. I edited some things in my movement script, so I could jump twice when I hit the ground. \
After the double jump, I made a clone ability. You'd be able to summon a clone that would stay for 10 seconds, and then you could use it again. \
I then made a dash ability and a shield ability shortly after. The dash would send me forward in the direction I was facing with a certain amount of velocity. \
The shield ability would load a transparent blue square over the player, showing you activated the shield. Every ability had their own duration (if they had one) and cooldown. \
After that, I made a laser that would destroy the player on contact, except if you had the shield active. Then I made a teleportation wall. \
If you hit the right button you would go through the wall to the other side, keeping your Y position (and later your X position when I made a horizontal teleport wall) \
I then made visible cooldown animations only using unity's canvas. It had a fill function and I made the cooldowns change the fill amount depending on the cooldown duration. \
I also made the shield visibly charge up the cooldown, so you'd see how long you had until it went on cooldown. \
After that, I added a death animation that was basically the player just disappearing and particles appearing instead. I also made it reset your cooldowns to 0 \
As well as stay at the position of your death for 5 seconds. Afterwards, I added particles for the lasers if you went inside of them using a shield. \
The particles would appear on top of the player and not through the entire laser. I did add particles that are in the lasers, but those were a lot less 'violent' \
I then added dash particles and shield destruction particles, as well as a clone destruction particle (if it dies from a laser or just despawns) \
I then added Power ups you could pick up and stack a few times (there was a limit to how many you could be using at the same time). \
There was a speed Power Up and a Jump Power Up. Then I added enemy's that would move around in a designated area and could only be destroyed by dashing into them. \
The enemy's would respawn a few seconds after getting destroyed. I then added a tutorial level and checkpoint so if you'd die you would spawn at the checkpoint. \
After that I was basically finished, so I made a menu where you could edit any cooldown/duration value as well as default values such as speed or jump height. \
I also added a level system, so you had to finish the tutorial level, and then you could access the sandbox/test level. I never really added any other levels, and I'm not planning to add more either.</p> \
<h2>What have I learned from this project?</h2>\
<p> -Particles</br>\
    -Cooldowns</br>\
    -PowerUps</br>\
    -ability's</br>\
    -Moving enemy's</br>\
    -a menu with working settings</br></p>\
<a class=\"btn btn-dark\" href=\"../index.html\" role=\"button\">Go to home page</a>\
</div>\
");
var project4Page = ("\
<div>\
<h2>First time using Blender</h2>\
<img src=\"/images/projectcontent/RenderBlikje.png\" alt=\"image project\" style=\"width: 80%;\"> </br>\
<p style=\"color:rgba(0, 0, 0, 0.5);\"> ^ Rendered image (Made in Blender) ^ </p>\
<h4>My Progress</h4>\
<p>This blender can was the first thing I ever made with Blender. I made a texture and put it on this can I made following a tutorial. \
It's not that interesting, and it doesn't have anything to do with coding, so I'll keep it short. We had to make a can based on something we wanted.\
So, I based mine from a game called Genshin Impact. I wanted to talk about it since it might be useful for game developers to be able to make a few 3d sprites \
which I can. It can be useful if I ever need temporary sprites.</p>\
<a class=\"btn btn-dark\" href=\"../index.html\" role=\"button\">Go to home page</a>\
</div>\
");
var project5Page = ("\
<div>\
</br>\
<h1>Comming soon?</h1>\
</div>\
");
