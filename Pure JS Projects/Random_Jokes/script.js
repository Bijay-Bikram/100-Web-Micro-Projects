const jokes = ["Why don't the circus lions eat the clowns?\nBecause they taste funny",

    "What did the pirate say when he turned 80? \nAye matey.",

    "Why did the chicken cross the playground?\n To get to the other slide!",

    "Why did the actor fall through the floorboards?\n They were going through a stage!",

    "Why did a scarecrow win a Nobel prize? \n  He was outstanding in his field!",

    "Why are peppers the best at archery? \n Because they habanero!",

    `What did the duck say after she bought chapstick?
Put it on my bill!`,

`Why did an old man fall in a well?
Because he couldn see that well!`,

`What do you call a fake noodle?
An impasta!`,

`What did the three-legged dog say when he walked into a saloon?
“I’m looking for the man who shot my paw!”`,

`How do you tell the difference between a bull and a cow?
It is either one or the udder!`,

`What’s red and smells like blue paint?
Red paint!`,

`What the difference between a hippo and a Zippo?
One is very heavy, the other is a little lighter!`,

`What happened when Bluebeard fell overboard in the Red Sea?
He got marooned!`,

`Why couldn't the skeleton go to school?
His heart just was not in it.`,

`What did the termite say when it walked into a bar?
"Where's the bar tender?"`,

`Why can’t you send a duck to space?
Because the bill would be astronomic`,

`What does Jeff Bezos do before he goes to sleep?
He puts his PJ-Amazon!`,

`What happened when the world's tongue-twister champion got arrested?
They gave him a tough sentence!`,

`What did the mama cow say to the calf?
It’s pasture bedtime!`,

`How does a vampire start a letter?
Tomb it may concern!`,

`What do you call an illegally parked frog?
Toad!`,

`What did one plate say to the other?
Dinner is on me!`,

`Why do hummingbirds hum?
Because they don’t know t`,

`What do sprinters eat before a race?
Nothing. They fast!`,

`Why did the dinosaur cross the road?
Because chickens hadn't evolved yet.`,

`What do you call a cow that can't make milk?
An udder failure — a milk dud.`,

`What do cats eat for breakfast?
Mice Crispies!`,

`What do you call an elephant that doesn’t matter?
An irrelephant!`,

`What do you get when you cross a rabbit with shellfish?
An oyster bunny!`,

`Where do polar bears keep their money?
In a snow bank!`,

`Why did the pony get sent to his room?
He wouldn’t stop horsing around!`,

`What kind of dog does a magician have?
A Labracadabrador!`,

`Where do cows go on Friday nights?
They go to the moo-vies!`,

`Why couldn't the pony sing “Happy Birthday?”
Because she was just a little hoarse!`,

`How do you make an octopus laugh?
With ten-tickles!`,

`How do you keep a bull from charging?
Take away its credit card!`,

`What is the difference between a cat that took a nap on the Xerox machine and a cat that imitates everything you do?
One is a cat copy, and the other is a copy cat.`,

`How do young bees get to school?
They take the school buzz!`,

`What do frogs order at fast-food restaurants?
French flies!`,

`What do you get from a pampered cow?
Spoiled milk!`,

`What do you call an alligator who solves mysteries?
An investigator!`,

`Why is a snake difficult to fool?
You can’t pull its leg!`,

`What kind of socks do grizzlies wear?
None, they have bear feet!`,

`What do you get when you cross a snail with a porcupine?
A slowpoke!`,

`What did the dog say when it sat on sandpaper?
"Ruff!"`,

`What's a cat's favorite dessert?
Chocolate mouse!`,

`What fish only swims at night?
Starfish!`,

`What does a triceratops sit on?
Its tricera-bottom!`,
]
let randomText = Math.floor(Math.random() * jokes.length);
let input = jokes[randomText];

 document.getElementById('para').innerHTML=input;

 btn.addEventListener('click',function next(){
    
    if(para.style.display ='block'){
        para.textContent=jokes[randomText]
    }
 })


