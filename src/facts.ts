const facts = [
    {
        text: 'Most American car horns honk in the key of F.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The name Wendy was made up for the book "Peter Pan."',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Barbie's full name is Barbara Millicent Roberts.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Every time you lick a stamp, you consume 1/10 of a calorie.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The average person falls asleep in seven minutes.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Studies show that if a cat falls off the seventh floor of a building it has about thirty percent less chance of surviving than a cat that falls off the twentieth floor. It supposedly takes about eight floors for the cat to realize what is occurring, relax and correct itself.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Your stomach has to produce a new layer of mucus every 2 weeks otherwise it will digest itself.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "The citrus soda 7-UP was created in 1929; '7' was selected after the original 7-ounce containers and 'UP' for the direction of the bubbles.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "101 Dalmatians, Peter Pan, Lady and the Tramp, and Mulan are the only Disney cartoons where both parents are present and don't die throughout the movie.  .",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "A pig's orgasm lasts for 30 minutes.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "'Stewardesses' is the longest word that is typed with only the left hand.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "To escape the grip of a crocodile's jaws, push your thumbs into its eyeballs - it will let you go instantly.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Reindeer like to eat bananas.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'No word in the English language rhymes with month, orange, silver and purple.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The word "samba" means "to rub navels together."',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Mel Blanc (the voice of Bugs Bunny) was allergic to carrots.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The electric chair was invented by a dentist.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The very first bomb dropped by the Allies on Berlin during World War II Killed the only elephant in the Berlin Zoo.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'More people are killed annually by donkeys than airplane crashes.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "A 'jiffy' is a unit of time for 1/100th of a second.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "A whale's penis is called a dork.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Because of the rotation of the earth, an object can be thrown farther if it is thrown west.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The average person spends 6 months of their life sitting at red lights.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'In 1912 a law passed in Nebraska where drivers in the country at night were required to stop every 150 yards, send up a skyrocket, wait eight minutes for the road to clear before proceeding cautiously, all the while blowing their horn and shooting off flares.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'More Monopoly money is printed in a year, than real money throughout the world.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "Caesar salad has nothing to do with any of the Caesars. It was first concocted in a bar in Tijuana, Mexico, in the 1920's.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'One quarter of the bones in your body are in your feet.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Crocodiles and alligators are surprisingly fast on land.  Although they are rapid, they are not agile.  So, if being chased by one, run in a zigzag line to lose him or her.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Seattle’s Fremont Bridge rises up and down more than any drawbridge in the world.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Right-handed people live, on average; nine years longer than left handed people.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Ten percent of the Russian government's income comes from the sale of vodka.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'In the United States, a pound of potato chips costs two hundred times more than a pound of potatoes.  ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'A giraffe can go without water longer than a camel.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'A person cannot taste food unless it is mixed with saliva. For example, if a strong-tasting substance like salt is placed on a dry tongue, the taste buds will not be able to taste it. As soon as a drop of saliva is added and the salt is dissolved, however, a definite taste sensation results. This is true for all foods.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Nearly 80% of all animals on earth have six legs.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'In the marriage ceremony of the ancient Inca Indians of Peru, the couple was considered officially wed when they took off their sandals and handed them to each other.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Ninety percent of all species that have become extinct have been birds.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'There is approximately one chicken for every human being in the world.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Most collect calls are made on father's day.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The first automobile race ever seen in the United States was held in Chicago in 1895. The track ran from Chicago to Evanston, Illinois. The winner was J. Frank Duryea, whose average speed was 71/2 miles per hour.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Each of us generates about 3.5 pounds of rubbish a day, most of it paper.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Women manage the money and pay the bills in  75% of all Americans households.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'A rainbow can be seen only in the morning or late afternoon. It can occur only when the sun is 40 degrees or less above the horizon.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'It has NEVER rained in Calama, a town in the Atacama Desert of Chile.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'It costs more to buy a new car today in the United States than it cost Christopher Columbus to equip and undertake three voyages to and from the New World.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The plastic things on the end of shoelaces are called aglets.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'An eighteenth-century German named Matthew Birchinger, known as "the little man of Nuremberg," played four musical instruments including the bagpipes, was an expert calligrapher, and was the most famous stage magician of his day. He performed tricks with the cup and balls that have never been explained. Yet Birchinger had no hands, legs, or thighs, and was less than 29 inches tall.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Daylight Saving Time is not observed in most of the state of Arizona and parts of Indiana.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Ants closely resemble human manners:  When they wake, they stretch & appear to yawn in a human manner before taking up the tasks of the day.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Bees have 5 eyes. There are 3 small eyes on the top of a bee's head and 2 larger ones in front.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Count the number of cricket chirps in a 15-second period, add 37 to the total, and your result will be very close to the actual outdoor Fahrenheit temperature.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "One-fourth of the world's population lives on less than $200 a year.  Ninety million people survive on less than $75 a year.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Butterflies taste with their hind feet.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "Only female mosquito’s' bite and most are attracted to the color blue twice as much as to any other color.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'If one places a tiny amount of liquor on a scorpion, it will instantly go mad and sting itself to death.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'It is illegal to hunt camels in the state of Arizona.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'In eighteenth-century English gambling dens, there was an employee whose only job was to swallow the dice if there was a police raid.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'There are no clocks in Las Vegas gambling casinos.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The human tongue tastes bitter things with the taste buds toward the back. Salty and pungent flavors are tasted in the middle of the tongue, sweet flavors at the tip!',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The first product to have a bar code was Wrigley’s gum.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "When you sneeze, air and particles travel through the nostrils at speeds over 100 mph. During this time, all bodily functions stop, including your heart, contributing to the impossibility of keeping one's eyes open during a sneeze.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Annual growth of WWW traffic is 314,000%',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '%60 of all people using the Internet, use it for pornography.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'In 1778, fashionable women of Paris never went out in blustery weather without a lightning rod attached to their hats.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Sex burns 360 calories per hour.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'A raisin dropped in a glass of fresh champagne will bounce up and down continually from the bottom of the glass to the top.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Celery has negative calories! It takes more calories to eat a piece of celery than the celery has in it.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The average lead pencil will draw a line 35 miles long or write approximately 50,000 English words.  More than 2 billion pencils are manufactured each year in the United States. If these were laid end to end they would circle the world nine times.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The pop you hear when you crack your knuckles is actually a bubble of gas burning.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'A literal translation of a standard traffic sign in China: "Give large space to the festive dog that makes sport in the roadway."',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'You burn more calories sleeping than you do watching TV.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "Larry Lewis ran the 100-yard dash in 17.8 seconds in 1969, thereby setting a new world's record for runners in the 100-years-or-older class. He was 101.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'In a lifetime the average human produces enough quarts of spit to fill 2 swimming pools.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "It's against the law to doze off under a hair dryer in Florida/against the law to slap an old friend on the back in Georgia/against the law to Play hopscotch on a Sunday in Missouri.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Barbie's measurements, if she were life-size, would be 39-29-33.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The human heart creates enough pressure to squirt blood 30ft.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'One third of all cancers are sun related.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "THE MOST UNUSUAL CANNONBALL: On two occasions, Miss 'Rita Thunderbird' remained inside the cannon despite a lot of gunpowder encouragement to do otherwise. She performed in a gold lamé bikini and on one of the two occasions (1977) Miss Thunderbird remained lodged in the cannon, while her bra was shot across the Thames River.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'It has been estimated that humans use only 10% of their brain.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "Valentine Tapley from Pike County, Missouri  grew chin whiskers attaining a length of twelve feet six inches from 1860 until his death 1910, protesting Abraham Lincoln's election to the presidency.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Most Egyptians died by the time they were 30 about 300 years ago,',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'For some time Frederic Chopin, the composer and pianist, wore a beard on only one side of his face, explaining: "It does not matter, my audience sees only my right side."',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '1 in every 4 Americans has appeared someway or another on television.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '1 in 8 Americans has worked at a McDonalds restaurant.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '70% of all boats sold are used for fishing.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Studies have shown that children laugh an average of 300 times/day and adults 17 times/day, making the average child more optimistic, curious, and creative than the adult.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'A pregnant goldfish is called a twit.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The shortest war in history was between Zanzibar and England in 1896. Zanzibar surrendered after 38 minutes.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'You were born with 300 bones, but by the time you are an adult you will only have 206.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'If you go blind in one eye you only lose about one fifth of your vision but all your sense of depth.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Women blink nearly twice as much as men.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The strongest muscle (Relative to size) in the body is the tongue.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "A Boeing 747's wingspan is longer than the Wright brother's first flight.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'American Airlines saved $40,000 in 1987 by eliminating one olive from each salad served in first-class.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Average life span of a major league baseball: 7 pitches.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "A palindrome is a sentence or group of sentences that reads the same backwards as it does forward: Ex:  'Red rum, sir, is murder.' 'Ma is as selfless as I am.' 'Nurse, I spy gypsies. Run!'  'A man, a plan, a canal - Panama.' 'He lived as a devil, eh?'",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "The first CD pressed in the US was Bruce Springsteen's 'Born in the USA'",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'In 1986 Congress & President Ronald Reagan signed Public Law 99-359, which changed Daylight Saving Time from the last Sunday in April to the first Sunday in April.  It was estimated to save the nation about 300,000 barrels of oil each year by adding most of the month April to D.S.T.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The thumbnail grows the slowest, the middle nail the fastest, nearly 4 times faster than toenails.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The Human eyes never grow, but nose and ears never stop growing.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The 57 on Heinz ketchup bottles represents the number of varieties of pickles the company once had.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Tom Sawyer was the first novel written on a typewriter.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'If Texas were a country, its GNP would be the fifth largest of any country in the world.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'There are 1 million ants for every human in the world.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Odds of being killed by lightening? 1 in 2million/killed in a car crash? 1 in 5,000/killed by falling out of bed? 1 in 2million/killed in a plane crash? 1 in 25 million.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "Since 1978, 37 people have died by Vending Machine's falling on them.  13 people are killed annually.  All this while trying to shake merchandise out of them. 113 people have been injured.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Half the foods eaten throughout the world today were developed by farmers in the Andes Mountains (including potatoes, maize, sweet potatoes, squash, all varieties of beans, peanuts, manioc, papayas, strawberries, mulberries and many others).',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "The 'Golden Arches' of fast food chain McDonalds is more recognized worldwide than the religious cross of Christianity.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Former basketball superstar Michael Jordan is the most recognized face in the world, more than the pope himself.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The average talker sprays about 300 microscopic saliva droplets per minute, about 2.5 droplets per word.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The Earth experiences 50,000 Earth quakes per year and is hit by Lightning 100 times a second.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Every year 11,000 Americans injure themselves while trying out bizarre sexual positions.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'If we had the same mortality rate now as in 1900, more than half the people in the world today would not be alive.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'On average, Americans eat 18 acres of pizza everyday.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Researchers at the Texas Department of Highways in Fort Worth determined the cow population of the U.S. burps some 50 million tons of valuable hydrocarbons into the atmosphere each year.  The accumulated burps of ten average cows could keep a small house adequately heated and its stove operating for a year.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'During a severe windstorm or rainstorm the Empire State Building sways several feet to either side.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'In the last 3,500 years, there have been approximately 230 years of peace throughout the civilized world.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The Black Death reduced the population of Europe by one third in the period from 1347 to 1351.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The average person spends about two years on the phone in a lifetime.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Length of beard an average man would grow if he never shaved 27.5 feet',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Over 60% of all those who marry get divorced.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '400-quarter pounders can be made from 1 cow.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'A full-loaded supertanker traveling at normal speed takes at least 20 minutes to stop.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Coca-Cola was originally green.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Men can read smaller print than women; women can hear better.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Hong Kong holds the most Rolls Royce’s per capita.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Average number of days a West German goes without washing his underwear: 7',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'WWII fighter pilots in the South Pacific armed their airplanes while stationed with .50 caliber machine gun ammo belts measuring 27 feet before being loaded into the fuselage. If the pilots fired all their ammo at a target, he went through "the whole 9 yards", hence the term.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Average number of people airborne over the US any given hour: 61,000.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Intelligent people have more zinc and copper in their hair.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Iceland consumes more Coca-Cola per capita than any other nation.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "In the early 1940s, the FCC assigned television's Channel 1 to mobile services (like two-way radios in taxis) but did not re-number the other channel assignments.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The San Francisco Cable cars are the only mobile National Monuments.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Firehouses have circular stairways originating from the old days when the engines were pulled by horses. The horses were stabled on the ground floor and figured out how to walk up straight staircases.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The Main Library at Indiana University sinks over an inch every year because when it was built, engineers failed to take into account the weight of all the books that would occupy the building.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '111,111,111 x 111,111,111 = 12,345,678,987,654,321',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Statues in parks: If the horse has both front legs in the air, the person died in battle; if the horse has one front leg in the air, the person died as a result of wounds received in battle; if the horse has all four legs on the ground, the person died of natural causes.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "The expression 'to get fired' comes from long ago Clans that wanted to get rid of unwanted people, so they would burn their houses instead of killing them, creating the term 'Got fired'.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '"I am." is the shortest complete sentence in the English language.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "Hershey's Kisses are called that because the machine that makes them looks like it's kissing the conveyor belt.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The phrase "rule of thumb" is derived from an old English law, which stated that you couldn\'t beat your wife with anything wider than your thumb.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The longest recorded flight of a chicken is thirteen seconds.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The Eisenhower interstate system requires that one mile in every five must be straight in case of war or emergency, they could be used as airstrips.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "The name Jeep came from the abbreviation used in the army. G.P. for 'General Purpose' vehicle.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The Pentagon, in Arlington, Virginia, has twice as many bathrooms as is necessary, because when it was built in the 1940s, the state of Virginia still had segregation laws requiring separate toilet facilities for blacks and whites.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The cruise liner, Queen Elizabeth II, moves only six inches for each gallon of diesel that it burns.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'If you have three quarters, four dimes, and four pennies, you have $1.19, the largest amount of money in coins without being able to make change for a dollar.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'In Aspen Colorado, you can have a maximum income of $104,000 and still receive government subsidized housing.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Honking of car horns for a couple that just got married is an old superstition to insure great sex.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Dr. Kellogg introduced Kellogg's Corn Flakes in hopes that it would reduce masturbation. ",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The sperm of a mouse is actually longer than the sperm of an elephant.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'In medieval France, unfaithful wives were made to chase a chicken through town naked.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The Black Widow spider eats her mate during or after sex.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Napoleon's penis was sold to an American Urologist for $40,000. ",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Eating the heart of a male Partridge was the cure for impotence in ancient Babylon.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'A bull can inseminate 300 cows from one single ejaculation.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'When a Hawaiian woman wears a flower over her left ear, it means that she is not available.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The "save" icon on Microsoft Word shows a floppy disk with the shutter on backwards.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The only nation whose name begins with an "A", but doesn\'t end in an "A" is Afghanistan.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The following sentence: \'A rough-coated, dough-faced, thoughtful ploughman strode through the streets of Scarborough; after falling into a slough, he coughed and hiccoughed.\' Contains the nine different pronunciations of "ough" in the English Language.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The verb "cleave" is the only English word with two synonyms which are antonyms of each other: adhere and separate.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The only 15-letter word that can be spelled without repeating a letter is uncopyrightable.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The shape of plant collenchyma’s cells and the shape of the bubbles in beer foam are the same - they are orthotetrachidecahedrons.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Emus and kangaroos cannot walk backwards, and are on the Australian coat of arms for that reason.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Cats have over one hundred vocal sounds, while dogs only have about ten.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Blueberry Jelly Bellies were created especially for Ronald Reagan.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'PEZ candy even comes in a Coffee flavor.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The first song played on Armed Forces Radio during operation Desert Shield was "Rock the Casba" by the Clash.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Non-dairy creamer is flammable.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The airplane Buddy Holly died in was the "American Pie." (Thus the name of the Don McLean song.)',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Each king in a deck of playing cards represents a great king from history. Spades - King David, Clubs - Alexander the Great, Hearts - Charlemagne, and Diamonds - Julius Caesar.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Golf courses cover 4% of North America.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The average person will accidentally eat just under a pound of insects every year.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Until 1994, world maps and globes sold in Albania only had Albania on them.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The value of Pi will be officially "rounded down" to 3.14 from 3.14159265359 on December 31, 1999.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The Great Wall of China is the only man-made structure visible from space.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'A piece of paper can be folded no more then 9 times.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The amount of computer Memory required to run WordPerfect for Win95 is 8 times the amount needed aboard the space shuttle.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The average North American will eat 35,000 cookies during their life span.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Between 25% and 33% of the population sneeze when exposed to light.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The most common name in world is Mohammed.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Mount Olympus Mons on Mars is three times the size of Mount Everest.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Most toilets flush in E flat.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '2,000 pounds of space dust and other space debris fall on the Earth every day.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Each month, there is at least one report of UFOs from each province of Canada.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '40,000 Americans are injured by toilets each year.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'You can be fined up to $1,000 for whistling on Sunday in Salt Lake City, Utah.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'It takes about 142.18 licks to reach the center of a Tootsie pop.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The serial number of the first MAC ever produced was 2001.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'It is illegal to eat oranges while bathing in California.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'If done perfectly, a rubix cube combination can be solved in 17 turns.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The average American butt is 14.9 inches long.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "More bullets were fired in 'Starship Troopers' than any other movie ever made.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '60% of electrocutions occur while talking on the telephone during a thunderstorm.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The name of the girl on the statue of liberty is Mother of Exiles.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '3.6 cans of Spam are consumed each second.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "There's a systematic lull in conversation every 7 minutes.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The buzz from an electric razor in America plays in the key of B flat; Key of G in England.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'There are 1,575 steps from the ground floor to the top of the Empire State building.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "The world's record for keeping a Lifesaver in the mouth with the hole intact is 7 hrs 10 min.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'There are 293 ways to make change for a dollar.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The world record for spitting a watermelon seed is 65 feet 4 inches.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'In the Philippine jungle, the yo-yo was first used as a weapon.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Dueling is legal in Paraguay as long as both parties are registered blood donors.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Texas is also the only state that is allowed to fly its state flag at the same height as the U.S. flag.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The three most recognized Western names in China are Jesus Christ, Richard Nixon, & Elvis Presley.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'There is a town in Newfoundland, Canada called Dildo.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The Boston University Bridge (on Commonwealth Avenue, Boston, Massachusetts) is the only place in the world where a boat can sail under a train driving under a car driving under an airplane.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'All 50 states are listed across the top of the Lincoln Memorial on the back of the $5 bill.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "In space, astronauts are unable to cry, because there is no gravity and the tears won't flow.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Chewing gum while peeling onions will keep you from crying.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'There are more plastic flamingos in the U.S that there are real ones.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The crack of a whip is actually a tiny sonic boom, since the tip breaks the sound barrier.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Jupiter is bigger than all the other planets in our solar system combined.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Hot water is heavier than cold.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The common idea that only 10% of the brain is used it not true as it is impossible to determine the actual percentage because of the complexity of the brain.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Lawn darts are illegal in Canada.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'There are more psychoanalysts per capita in Buenos Aires than any other place in the world.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Between 2 and 3 jockeys are killed each year in horse racing.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '5,840 people with pillow related injuries checked into U.S. emergency rooms in 1992.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The average woman consumes 6 lbs of lipstick in her lifetime.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Some individuals express concern sharing their soap, rightly so, considering 75% of all people wash from top to bottom.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Conception occurs most in the month of December.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'CBS\' "60 Minutes" is the only TV show without a theme song/music.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Half of all Americans live within 50 miles of their birthplace.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "'Obsession' is the most popular boat name.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "On average, Americans' favorite smell is banana.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'If one spells out numbers, they would have to count to One Thousand before coming across the letter "A".',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Honey is the only food which does not spoil.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '3.9% of all women do not wear underwear.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "This common everyday occurrence composed of 59% nitrogen, 21% hydrogen, and 9% dioxide is called a 'fart'.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            '"Evaluation and Parameterization of Stability and Safety Performance Characteristics of Two and Three Wheeled Vehicular Toys for Riding." Title of a $230,000 research project proposed by the Department of Health, Education and Welfare, to study the various ways children fall off bicycles.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Babies are born without kneecaps. They don't appear until the child reaches 2-6 years of age.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Meteorologists claim they're right 85% of the time (think about that one!)",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'In 1980, a Las Vegas hospital suspended workers for betting on when patients would die.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "Los Angeles' full name 'El Pueblo de Nuestra Senora la Reina de Los Angeles de Porciuncula' is reduced to 3.63% of its size in the abbreviation 'L.A.'.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "If you went out into space, you would explode before you suffocated because there's no air pressure.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The only real person to ever to appear on a pez dispenser was Betsy Ross.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Mike Nesmith's (the guitarist of The Monkeys) mom invented White Out. ",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Only 6 people in the whole world have died from moshing.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            '241.     In a test performed by Canadian scientists, using various different styles of music, it was determined that chickens lay the most eggs when pop music was played.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The storage capacity of human brain exceeds 4 Terabytes.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'In Vermont, the ratio of cows to people is 10:1',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Any free-moving liquid in outer space will form itself into a sphere, because of its surface tension.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The average American looks at eight houses before buying one.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'In the average lifetime, a person will walk the equivalent of 5 times around the equator.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Koala is Aboriginal for "no drink".',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Shakespeare spelled his OWN name several different ways.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The first contraceptive was crocodile dung used by the ancient Egyptians.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'A signature is called a John Hancock because he signed the Declaration of Independence. Only 2 people signed the declaration of independence on July 4. The Last person signed 2 years later.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Arnold Schonberg suffered from triskaidecaphobia, the fear of the number 13.  He died at 13 minutes from midnight on Friday the 13th.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Mozart wrote the nursery rhyme 'twinkle, twinkle, little star' at the age of 5.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Weatherman Willard Scott was the first original Ronald McDonald.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Virginia Woolf wrote all her books standing.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "Einstein couldn't speak fluently until after his ninth birthday. His parents thought he was mentally retarded.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Al Capone's business card said he was a used furniture dealer.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Deborah Winger did the voice of E.T.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Kelsey Grammar sings and plays the piano for the theme song of Fraiser.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Thomas Edison, acclaimed inventor of the light bulb, was afraid of the dark.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'In England, the Speaker of the House is not allowed to speak.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'You can sail all the way around the world at latitude 60 degrees south.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The earth weighs around 6,588,000,000,000,000,000,000,000,000 tons.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Peanuts are one of the ingredients of dynamite.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Porcupines can float in water.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "The average person's left hand does 56% of the typing.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'A shark is the only fish that can blink with both eyes.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The longest one-syllable word in the English language is "screeched."',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'All of the clocks in the movie "Pulp Fiction" are stuck on 4:20, a national pot-smokers hour.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '"Dreamt" is the only English word that ends in the letters "mt."',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Almonds are a member of the peach family.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Winston Churchill was born in a ladies' room during a dance.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Maine is the only state whose name is just one syllable.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'There are only four words in the English language which end in "dous": tremendous, horrendous, stupendous, and  hazardous.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Tigers not only have striped fur, they have striped skin!',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'In most advertisements, including newspapers, the time displayed on a watch is 10:10.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'On the ground, a group of geese is a gaggle, in the sky it is a skein.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'To Ensure Promptness, one is expected to pay beyond the value of service – hence the later abbreviation: T.I.P.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "When the University of Nebraska Cornhuskers play football at home, the stadium becomes the state's third largest city.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The characters Bert and Ernie on Sesame Street were named after Bert the cop and Ernie the taxi driver in Frank Capra\'s "Its A Wonderful Life."',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'A dragonfly has a lifespan of 24 hours.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'A dime has 118 ridges around the edge.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'On an American one-dollar bill, there is an owl in the upper left-hand corner of the "1"encased in the "shield" and a spider hidden in the front upper right-hand corner.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The name for Oz in the "Wizard of Oz" was thought up when the creator, Frank Baum, looked at his filing cabinet and saw A-N, and O-Z; hence the name "OZ."',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The microwave was invented after a researcher walked by a radar tube and a chocolate bar melted in his pocket.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Mr. Rogers is an ordained minister.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "John Lennon's first girlfriend was named Thelma Pickles.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'There are 336 dimples on a regulation golf ball.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "The scene where Indiana Jones shoots the swordsman in Raider’s of the Lost Ark was Harrison Ford's idea so that he could take a bathroom break.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'A crocodile cannot stick its tongue out.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'A snail can sleep for three years.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'All polar bears are left-handed.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'China has more English speakers than the United States.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Elephants are the only animals that can't jump.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'February 1865 is the only month in recorded history not to have a full moon.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'If the population of China walked past you in single file, the line would never end because of the rate of reproduction.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'If you yelled for 8 years, 7 months and 6 days, you will have produced enough sound energy to heat one cup of coffee.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'In the last 4000 years, no new animals have been domesticated.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Leonardo Da Vinci invented the scissors.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The word "set" has more definitions than any other word in the English language.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Nutmeg is extremely poisonous if injected intravenously.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'On average, people fear spiders more than they do death.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'One of the reasons marijuana is illegal today is because cotton growers in the 1930s lobbied against hemp farmers they saw it as competition.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Shakespeare invented the word 'assassination' and 'bump'.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Some lions mate over 50 times a day.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Starfish haven't got brains.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The ant always falls over on its right side when intoxicated.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The name of all continents in the world end with the same letter that they start with.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'There are two credit cards for every person in the United States.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The longest word comprised of one row on the keyboard is: TYPEWRITER',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "You can't kill yourself by holding your breath. ",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "The average person spends 12 weeks a year 'looking for things'.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The symbol on the "pound" key (#) is called an octothorpe..  ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "The dot over the letter 'i' is called a tittle. ",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Ingrown toenails are hereditary.  ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '"Underground" is the only word in the English language that begins and ends with the letters "und"',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The longest word in the English language, according to the Oxford English Dictionary, is: pneumonoultramicroscopicsilicovolcanoconiosis..  ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The longest place-name still in use is: Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiakitnatahu, a New Zealand hill.  ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "An ostrich's eye is bigger than its brain. ",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Alfred Hitchcock didn't have a belly button. It was eliminated when he was sewn up after surgery.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Telly Savalas and Louis Armstrong died on their birthdays.  ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Donald Duck's middle name is Fauntleroy. ",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The muzzle of a lion is like a fingerprint - no two lions have the same pattern of whiskers.  ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Steely Dan got their name from a sexual device depicted in the book 'The Naked Lunch'. ",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The Ramses brand condom is named after the great pharoh Ramses II who fathered over 160 children.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'There is a seven letter word in the English language that contains ten words without rearranging any of its letters, "therein": the, there, he, in, rein, her, here, ere, therein, herein.  ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'A goldfish has a memory span of three seconds.  ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Cranberries are sorted for ripeness by bouncing them; a fully ripened cranberry can be dribbled like a basketball.  ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The male gypsy moth can "smell" the virgin female gypsy moth from 1.8 miles away.  ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The letters KGB stand for Komitet Gosudarstvennoy Bezopasnosti.  ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The word "dexter" whose meaning refers to the right hand is typed with only the left hand.  ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'To "testify" was based on men in the Roman court swearing to a statement made by swearing on their testicles.  ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Facetious and abstemious contain all the vowels in the correct order, as does arsenious, meaning "containing arsenic."  ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The word "Checkmate" in chess comes from the Persian phrase "Shah Mat," which means "the king is dead."',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The first episode of "Joanie Loves Chachi" was the highest rated American program in the history of Korean television, a country where "Chachi" translates to "penis".  ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Rubber bands last longer when refrigerated.  ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The national anthem of Greece has 158 verses. No one in Greece has memorized all 158 verses.  ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Two-thirds of the world's eggplant is grown in New Jersey. ",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The giant squid has the largest eyes in the world.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Giraffes have no vocal cords.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "The pupils of a goat's eyes are square.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Van Gogh only sold one painting when he was alive.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'A standard slinky measures 87 feet when stretched out.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The highest per capita Jell-O comsumption in the US is Des Moines.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "If a rooster can't fully extend its neck, it can't crow.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "There were always 56 curls in Shirley Temple's hair.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The eyes of a donkey are positioned so that it can see all four feet at all times.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Worcestershire sauce in essentially an Anchovy Ketchup.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Rhode Island is the only state which the hammer throw is a legal high school sport.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The average lifespan of an eyelash is five months.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'A spider has transparent blood.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Every acre of American crops harvested contains 100 pounds of insects.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Prince Charles is an avid collecter of toilet seats.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The most common street name in the U.S. is Second Street.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Tehran is the most expensive city on earth.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The sweat drops drawn in cartoon comic strips are called pleuts.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Babies are most likely to be born on Tuesdays.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The HyperMart outside of Garland Texas has 58 check-outs.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The Minneapolis phone book has 21 pages of Andersons.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "In the 1980's American migraines increased by 60%.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Poland is the "stolen car capital of the world".',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Jefferson invented the dumbwaiter, the monetary system, and the folding attic ladder.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The S in Harry S. Truman did not stand for anything.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'In Miconesia, coins are 12 feet across.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'A horse can look forward with one eye and back with the other.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Shakespeare is quoted 33,150 times in the Oxford English dictionary.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The word Pennsylvania is misspelled on the Liberty Bell.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'NBA superstar Michael Jordan was originally cut from his high school basketball team.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'You spend 7 years of your life in the bathroom.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'A family of 26 could go to the movies in Mexico city for the price of one in Tokyo.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '10,000 Dutch cows pass through the Amsterdam airport each year.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Approximately every seven minutes of every day, someone in an aerobics class pulls their hamstring.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Simplistic passwords contribute to over 80% of all computer password break-ins.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The top 3 health-related searches on the Internet are (in this order): Depression, Allergies, & Cancer.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Dentists have recommended that a toothbrush be kept at least 6 feet away from a toilet to avoid airborne particles resulting from the flush.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Most dust particles in your house are made from dead skin.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Venus is the only planet that rotates clockwise.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Oak trees do not produce acorns until they are fifty years of age or older.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The first owner of the Marlboro company died of lung cancer.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "All US Presidents have worn glasses; some just didn't like being seen wearing them in public.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "Mosquito repellents don't repel. They hide you. The spray blocks the mosquito's sensors so they don't know you're there.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Walt Disney was afraid of mice.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The site with the highest number of women visitors between the age of 35 and 44 years old: Alka-Seltzer.com',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The king of hearts is the only king without a mustache.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Pearls melt in vinegar.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "It takes 3,000 cows to supply the NFL with enough leather for a year's supply of footballs.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Thirty-five percent of people who use personal ads for dating are already married.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The 3 most valuable brand names on earth are Marlboro, Coca-Cola, and Budweiser (in that order).',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Humans are the only primates that don't have pigment in the palms of their hands.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Months that begin on a Sunday will always have a 'Friday the 13th'.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The fingerprints of koala bears are virtually indistinguishable from those of humans, so much so that they can be easily confused at a crime scene.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The mask worn by Michael Myers in the original "Halloween" was actually a Captain Kirk mask painted white.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The only two days of the year in which there are no professional sports games--MLB, NBA, NHL, or NFL--are the day before and the day after the Major League All-Star Game.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Only one person in two billion will live to be 116 or older.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'When the French Academy was preparing its first dictionary, it defined "crab" as, "A small red fish, which walks backwards." This definition was sent with a number of others to the naturalist Cuvier for his approval.  The scientist wrote back, "Your definition, gentlemen, would be perfect, only for three exceptions. The crab is not a fish, it is not red and it does not walk backwards."',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Dr. Jack Kevorkian first patient has Alzheimer's disease.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Fictional/horror writer Stephen King sleeps with a nearby light on to calm his fear of the dark. ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "It's possible to lead a cow upstairs but not downstairs.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "It was discovered on a space mission that a frog can throw up. The frog throws up its stomach first, so the stomach is dangling out of its mouth. Then the frog uses its forearms to dig out all of the stomach's contents and then swallows the stomach back down.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "The very first song played on MTV was 'Video Killed The Radio Star' by the Buggles.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "William Marston engineered one of the earliest forms of the polygraph in the early 1900's. Later he went on to create the comic strip Wonder Woman, a story about a displaced Amazon princess who forces anyone caught in her magic lasso to tell the truth",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Americans travel 1,144,721,000 miles by air every day',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "The the U.S. you dial '911'. In Stockholm, Sweden you dial 90000",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '38% of American men say they love their cars more than women',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The U.S. military operates 234 golf courses',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '100% of lottery winners do gain weight',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Bullet proof vests, fire escapes, windshield wipers, and laser printers were all invented by women',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'A cat has 32 muscles in each ear.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "A duck's quack doesn't echo, and no one knows why.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Cats urine glows under a black light.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'In every episode of Seinfeld there is a Superman somewhere.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Lorne Greene had one of his nipples bitten off by an alligator while he was host of "Lorne Greene\'s Wild Kingdom."',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            "Pamela Anderson Lee is Canada's Centennial Baby, being the first baby born on the centennial anniversary of Canada's independence.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Pinocchio is Italian for "pine head."',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'When possums are playing \'possum\', they are not "playing." They actually pass out from sheer terror.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Who\'s that playing the piano on the "Mad About You" theme? Paul Reiser himself.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Winston Churchill was born in a ladies' room during a dance.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Most lipstick contains fish scales!',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Donald Duck comics were banned from Finland because he doesn't wear pants!",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'There are more than 10 million bricks in the Empire State Building!',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Camels have three eyelids to protect themselves from blowing sand!',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "The placement of a donkey's eyes in its' heads enables it to see all four feet at all times!",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The average American/Canadian will eat about 11.9 pounds of cereal per year!',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Over 1000 birds a year die from smashing into windows!',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The state of Florida is bigger than England!',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Dolphins sleep with one eye open!',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'In the White House, there are 13,092 knives, forks and spoons!',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Recycling one glass jar, saves enough energy to watch T.V for 3 hours!',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Owls are one of the only birds who can see the color blue!',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Honeybees have a type of hair on their eyes!',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'A jellyfish is 95 percent water!',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'In Bangladesh, kids as young as 15 can be jailed for cheating on their finals!',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The katydid bug hears through holes in its hind legs!',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Q is the only letter in the alphabet that does not appear in the name of any of the United States!',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '166,875,000,000 pieces of mail are delivered each year in the US',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Bats always turn left when exiting a cave',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The praying mantis is the only insect that can turn its head',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Daffy Duck\'s middle name is "Dumas"',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'In Disney\'s Fantasia, the Sorcerer\'s name is "Yensid" (Disney backwards.)',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'In The Empire Strikes Back there is a potato hidden in the asteroid field',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Walt Disney holds the world record for the most Academy Awards won by one person, he has won twenty statuettes, and twelve other plaques and certificates',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "James Bond's car had three different license plates in Goldfinger",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Canada makes up 6.67 percent of the Earth's land area",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "South Dakota is the only U.S state which shares no letters with the name of it's capital",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The KGB is headquartered at No. 2 Felix Dzerzhinsky Square, Moscow',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The Vatican city registered 0 births in 1983',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Spain leads the world in cork production',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'There are 1,792 steps in the Eiffel Tower',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'There are 269 steps to the top of the Leaning Tower of Pisa',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Leonardo da Vinci could write with one hand while drawing with the other',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'It is impossible to lick your elbow.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Intelligent people have more zinc and copper in their hair.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In every episode of Seinfeld there is a Superman somewhere.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Wearing headphones for just an hour will increase the bacteria in your ear by 700 times.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'More than 50% of the people in the world have never made or received a telephone call.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '13% of Americans actually believe that some parts of the moon are made of cheese.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "The world's youngest parents were 8 and 9 and lived in China in 1910.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Fish that live more than 800 meters below the ocean surface don't have eyes.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Grapes explode when you put them in the microwave. Go on, try it then',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Ramses brand condom is named after the great pharaoh Ramses II who fathered over 160 children.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Peanuts are one of the ingredients of dynamite.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "The average chocolate bar has 8 insects' legs in it.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In York, it is perfectly legal to shoot a Scotsman with a bow and arrow (except on Sundays)',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'No piece of square dry paper can be folded in half more than 7 times',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The average human eats 8 spiders in their lifetime at night.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '"Stewardesses" is the longest word typed with only the left hand.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'An average human loses about 200 head hairs per day.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Mexico City sinks about 10 inches a year',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "It's impossible to sneeze with your eyes open.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In France, a five year old child can buy an alcoholic drink in a bar',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'During the chariot scene in "Ben Hur," a small red car can be seen in the distance.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Because metal was scarce, the Oscars given out during World War II were made of wood.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'By raising your legs slowly and lying on your back, you cannot sink into quicksand.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Venus is the only planet that rotates clockwise.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Charlie Chaplin once won third prize in a Charlie Chaplin look-alike contest.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The glue on Israeli postage is certified kosher.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "In 10 minutes, a hurricane releases more energy than all of the world's nuclear weapons combined.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'On average, 100 people choke to death on ball-point pens every year.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Thirty-five percent of the people who use personal ads for dating are already married.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The electric chair was invented by a dentist.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Bruce Lee was so fast that they actually had to s-l-o-w film down so you could see his moves.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "A Boeing 747s wingspan is longer than the Wright brother's first flight.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Babies are born without knee caps. They don't appear until the child reaches 2-6 years of age.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '14% of all facts and statistics are made up and 27% of people know that fact.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Every time you lick a stamp, you're consuming 1/10 of a calorie.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Eskimos have over 15 words for the English word of 'Snow'",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Americans on the average eat 18 acres of pizza every day.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Banging your head against a wall uses 150 calories an hour.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'On a Canadian two dollar bill, the flag flying over the Parliament buildings is an American flag.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Almonds are a member of the peach family.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The plastic things on the end of shoelaces are called aglets.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '“Ithyphallophobia" is a morbid fear of seeing, thinking about or having an erect penis.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The average shelf-life of a latex condom is about two years.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '14% of Americans have skinny-dipped with a member of the opposite sex at least once.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Male bats have the highest rate of homosexuality of any mammal.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "A man's beard grows fastest when he anticipates sex.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A man will ejaculate approximately 18 quarts of semen in his lifetime.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Sex is biochemically no different from eating large quantities of chocolate.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Humans and dolphins are the only species that have sex for pleasure.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "For every 'normal' webpage, there are five porn pages.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '"Venus observa" is the technical term for the "missionary position."',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Sex is the safest tranquilizer in the world. IT IS 10 TIMES MORE EFFECTIVE THAN VALIUM.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Samuel Clemens (Mark Twain) was born on and died on days when Halley’s Comet can be seen.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'US Dollar bills are made out of cotton and linen.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The 57 on the Heinz ketchup bottle represents the number of pickle types the company once had.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Americans are responsible for about 1/5 of the world’s garbage annually.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Giraffes and rats can last longer without water than camels.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Your stomach produces a new layer of mucus every two weeks so that it doesn’t digest itself.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '98% of all murders and rapes are by a close family member or friend of the victim.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A B-25 bomber crashed into the 79th floor of the Empire State Building on July 28, 1945.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The Declaration of Independence was written on hemp (marijuana) paper.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The dot over the letter “i” is called a tittle.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Benjamin Franklin was the fifth in a series of the youngest son of the youngest son.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Triskaidekaphobia means fear of the number 13.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Paraskevidekatriaphobia means fear of Friday the 13th, which occurs one to three times a year.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In Italy, 17 is considered an unlucky number. In Japan, 4 is considered an unlucky number.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A female ferret will die if it goes into heat and cannot find a mate.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In ancient Rome, when a man testified in court he would swear on his testicles.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The ZIP in “ZIP code” means Zoning Improvement Plan.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Coca-Cola contained Coca (whose active ingredient is cocaine) from 1885 to 1903.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A “2 by 4" is really 1 1/2 by 3 1/2.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'It’s estimated that at any one time around 0.7% of the world’s population is drunk.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '40% of McDonald’s profits come from the sales of Happy Meals.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Every person, including identical twins, has a unique eye & tongue print along with their finger print.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The “spot” on the 7-Up logo comes from its inventor who had red eyes. He was an albino.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '315 entries in Webster’s 1996 dictionary were misspelled.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The “save” icon in Microsoft Office programs shows a floppy disk with the shutter on backwards.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Albert Einstein and Charles Darwin both married their first cousins',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Camel’s have three eyelids.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'On average, 12 newborns will be given to the wrong parents every day.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'John Wilkes Booth’s brother once saved the life of Abraham Lincoln’s son.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Warren Beatty and Shirley McLaine are brother and sister.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Chocolate can kill dogs; it directly affects their heart and nervous system.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Daniel Boone hated coonskin caps.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '55.1% of all US prisoners are in prison for drug offenses.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Most lipstick contains fish scales.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Dr. Seuss pronounced his name “soyce”.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Slugs have four noses.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Ketchup was sold in the 1830s as medicine.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'India has a Bill of Rights for cows.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'American Airlines saved $40,000 in 1987 by taking out an olive from First Class salads.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'About 200,000,000 M&Ms are sold each day in the United States.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Because metal was scarce, the Oscars given out during World War II were made of wood.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are 318,979,564,000 possible combinations of the first four moves in Chess.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are no clocks in Las Vegas gambling casinos.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Coconuts kill about 150 people each year. That’s more than sharks.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Half of all bank robberies take place on a Friday.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The name Wendy was made up for the book Peter Pan. There was never a recorded Wendy before it.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The international telephone dialing code for Antarctica is 672.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The first bomb the Allies dropped on Berlin in WWII killed the only elephant in the Berlin Zoo.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The average raindrop falls at 7 miles per hour.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'If you put a drop of liquor on a scorpion, it will instantly go mad and sting itself to death.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Bruce Lee was so fast that they had to slow the film down so you could see his moves.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The first CD pressed in the US was Bruce Springsteen’s “Born in the USA”.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'IBM’s motto is “Think”. Apple later made their motto “Think different”.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The original name for butterfly was flutterby.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'One in fourteen women in America is a natural blonde. Only one in sixteen men is.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The Olympic was the sister ship of the Titanic, and she provided twenty-five years of service.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'When the Titanic sank, 2228 people were on it. Only 706 survived.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Every day, 7% of the US eats at McDonald’s.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'During his entire life, Vincent Van Gogh sold exactly one painting, “Red Vineyard at Arles”.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'By raising your legs slowly and lying on your back, you cannot sink into quicksand.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'One in ten people live on an island.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'It takes more calories to eat a piece of celery than the celery has in it to begin with.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '28% of Africa is classified as wilderness. In North America, its 38%.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Charlie Chaplin once won third prize in a Charlie Chaplin look-alike contest.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Chewing gum while peeling onions will keep you from crying.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Sherlock Holmes NEVER said “Elementary, my dear Watson”',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Humphrey Bogart NEVER said “Play it again, Sam” in Casablanca',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'They NEVER said “Beam me up, Scotty” on Star Trek.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Sharon Stone was the first Star Search spokes model.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'More people are afraid of open spaces (kenophobia) than of tight spaces (claustrophobia).',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The glue on Israeli postage is certified kosher.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There is a 1 in 4 chance that New York will have a white Christmas.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The Guinness Book of Records holds the record for being the book most often stolen from Libraries.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Thirty-five percent of the people who use personal ads for dating are already married.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '$203,000,000 is spent on barbed wire each year in the U.S.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Every US president has worn glasses (just not always in public).',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Bats always turn left when exiting a cave.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Jim Henson first coined the word “Muppet”. It is a combination of “marionette” and “puppet.”',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The Michelin man is known as Mr. Bib. His name was Bibendum in the company’s first ads in 1896.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The word “lethologica” describes the state of not being able to remember the word you want.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'About 14% of injecting drug users are HIV positive.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A word or sentence that is the same front and back (racecar, kayak) is called a “palindrome”.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A snail can sleep for 3 years.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'People photocopying their buttocks are the cause of 23% of all photocopier faults worldwide.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'China has more English speakers than the United States.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'One in every 9000 people is an albino.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The electric chair was invented by a dentist.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'You share your birthday with at least 9 million other people in the world.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Everyday, more money is printed for Monopoly sets than for the U.S. Treasury.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Every year 4 people in the UK die putting their trousers on.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Cats have over one hundred vocal sounds; dogs only have about ten.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Our eyes are always the same size from birth but our nose and ears never stop growing.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In every episode of “Seinfeld” there is a Superman picture or reference somewhere.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Rats multiply so quickly that in 18 months, two rats could have over million descendants.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Wearing headphones for just an hour will increase the bacteria in your ear by 700 times.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Each year in America there are about 300,000 deaths that can be attributed to obesity.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'About 55% of all movies are rated R.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'About 500 movies are made in the US and 800 in India annually.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Arabic numerals are not really Arabic; they were created in India.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The February of 1865 is the only month in recorded history not to have a full moon.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There is actually no danger in swimming right after you eat, though it may feel uncomfortable.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The cruise liner Queen Elizabeth II moves only six inches for each gallon of diesel that it burns.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'More than 50% of the people in the world have never made or received a telephone call.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A shark is the only fish that can blink with both eyes.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are about 2 chickens for every human in the world.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The word “maverick” came into use after Samuel Maverick, a Texan refused to brand his cattle.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Two-thirds of the world’s eggplant is grown in New Jersey.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'On a Canadian two-dollar bill, the American flag is flying over the Parliament Building.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'An American urologist bought Napoleon’s penis for $40,000.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'No word in the English language rhymes with month, orange, silver, or purple.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Dreamt is the only English word that ends in the letters “MT”.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '$283,200 is the absolute highest amount of money you can win on Jeopardy.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Almonds are members of the peach family.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Rats and horses can’t vomit.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The penguin is the only bird that can’t fly but can swim.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are approximately 100 million acts of sexual intercourse each day.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Winston Churchill was born in a ladies room during a dance.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Maine is the only state whose name is just one syllable.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Americans on average eat 18 acres of pizza every day.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Every time you lick a stamp you consume 1/10 of a calorie.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'You are more likely to be killed by a champagne cork than by a poisonous spider.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Hedenophobic means fear of pleasure.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Ancient Egyptian priests would pluck every hair from their bodies.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A crocodile cannot stick its tongue out.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '80% of burglaries are committed by people aged 13-21.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'An ant always falls over on its right side when intoxicated.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'All polar bears are left-handed.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The catfish has over 27000 taste buds (more than any other animal)',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A cockroach will live nine days without its head before it starves to death.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Butterflies taste with their feet.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Elephants are the only mammals that cannot jump.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'An ostrich’s eye is bigger than its brain.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Starfish have no brains.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '11% of the world is left-handed.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Rubber bands last longer when refrigerated.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The national anthem of Greece has 158 verses.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are 293 ways to make change for a dollar.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A healthy (non-colorblind) human eye can distinguish between 500 shades of gray.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A pregnant goldfish is called a twit.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Lizards can self-amputate their tails for protection. It grows back after a few months.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Los Angeles’ full name is “El Pueblo de Nuestra Senora la Reina de los Angeles de Porciuncula”.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A cat has 32 muscles in each ear.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A honeybee can fly at fifteen miles per hour.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Tigers have striped skin, not just striped fur.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A “jiffy” is the scientific name for 1/100th of a second.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The average child recognizes over 200 company logos by the time he enters first grade.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The youngest pope ever was 11 years old.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The first novel ever written on a typewriter is Tom Sawyer.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'One out of every 43 prisoners escapes from jail. 94% are recaptured.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The average chocolate bar has 8 insects’ legs melted into it.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A rhinoceros horn is made of compacted hair.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Elwood Edwards did the voice for the AOL sound files (i.e. “You’ve got Mail!”).',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A polar bears skin is black. Its fur is actually clear, but like snow it appears white.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Elvis had a twin brother named Garon, who died at birth, which is why Elvis middle name was Aron.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: ' Dueling is legal in Paraguay as long as both parties are registered blood donors.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Donkeys kill more people than plane crashes.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Shakespeare invented the words “assassination” and “bump.”',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are a million ants for every person on Earth.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'If you keep a goldfish in the dark room, it will eventually turn white.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Women blink nearly twice as much as men.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The name Jeep comes from “GP”, the army abbreviation for General Purpose.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Right handed people live, on average, nine years longer than left handed people do.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are two credit cards for every person in the United States.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Cats’ urine glows under a black light.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A “quidnunc” is a person who is eager to know the latest news and gossip.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Leonardo Da Vinci invented the scissors, the helicopter, and many other present day items.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In the last 4000 years no new animals have been domesticated.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '25% of a human’s bones are in its feet.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'On average, 100 people choke to death on ballpoint pens every year.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '“Canada” is an Indian word meaning “Big Village”.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Only one in two billion people will live to be 116 or older.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Rape is reported every six minutes in the U.S.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The human heart creates enough pressure in the bloodstream to squirt blood 30 feet.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A jellyfish is 95% water.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Truck driving is the most dangerous occupation by accidental deaths (799 in 2001).',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Banging your head against a wall uses 150 calories an hour.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Elephants only sleep for two hours each day.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'On average people fear spiders more than they do death.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The strongest muscle in the human body is the tongue. (the heart is not a muscle)',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In golf, a ‘Bo Derek’ is a score of 10.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In the U.S, Frisbees outsell footballs, baseballs and basketballs combined.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In most watch advertisements the time displayed on a watch is 10:10.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'If you plant an apple seed, it is almost guaranteed to grow a tree of a different type of apple.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Al Capone’s business card said he was a used furniture dealer.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The only real person to be a PEZ head was Betsy Ross.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are about 450 types of cheese in the world. 240 come from France.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A dragonfly has a lifespan of 24 hours.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In Iceland, a Big Mac costs $5.50.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Broccoli and cauliflower are the only vegetables that are flowers.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There is no solid proof of who built the Taj Mahal.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In a survey of 200000 ostriches over 80 years, not one tried to bury its head in the sand.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A dime has 118 ridges around the edge. A quarter has 119.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '”Judge Judy” has a $25,000,000 salary, while Supreme Court Justice Ginsberg has a $190,100 salary.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Andorra, a tiny country between France & Spain, has the longest average lifespan: 83.49 years.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Mr. Rogers was an ordained Presbyterian minister.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In America you will see an average of 500 advertisements a day.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'John Lennon’s first girlfriend was named Thelma Pickles.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'You can lead a cow upstairs but not downstairs.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The average person falls asleep in seven minutes.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '“The sixth sick sheik’s sixth sheep’s sick” is said to be the toughest tongue twister in English.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are 336 dimples on a regulation US golf ball. In the UK its 330.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '“Duff” is the decaying organic matter found on a forest floor.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The US has more personal computers than the next 7 countries combined.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Kuwait is about 60% male (highest in the world). Latvia is about 54% female (highest in the world).',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The Hawaiian alphabet has only 12 letters.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In 10 minutes, a hurricane releases more energy than all the world’s nuclear weapons combined.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'At the height of its power in 400 BC, the Greek city of Sparta had 25,000 citizens and 500,000 slaves.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Julius Caesar’s autograph is worth about $2,000,000.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'People say “bless you” when you sneeze because your heart stops for a millisecond.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'US gold coins used to say “In Gold We Trust”.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In “Silence of the Lambs”, Hannibal Lector (Anthony Hopkins) never blinks.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A shrimp’s heart is in its head.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In the 17th century, the value of pi was known to 35 decimal places. Today, to 1.2411 trillion.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Pearls melt in vinegar.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '“Lassie” was played by a group of male dogs; the main one was named Pal.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Nepal is the only country that doesn’t have a rectangular flag.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Switzerland is the only country with a square flag.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Gabriel, Michael, and Lucifer are the only angels named in the Bible.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Johnny Appleseed planted apples so that people could use apple cider to make alcohol.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Abraham Lincoln’s ghost is said to haunt the White House.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'God is not mentioned once in the book of Esther.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The odds of being born male are about 51.2%, according to census.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Scotland has more redheads than any other part of the world.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There is an average of 61,000 people airborne over the US at any given moment.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Prince Charles and Prince William never travel on the same airplane in case there is a crash.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The most popular first name in the world is Muhammad.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The surface of the Earth is about 60% water and 10% ice.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'For every 230 cars that are made, 1 will be stolen.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Jimmy Carter was the first U.S. President to be born in a hospital.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Lightning strikes the earth about 8 million times a day.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Humans use a total of 72 different muscles in speech.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'If you feed a seagull Alka-Seltzer, its stomach will explode.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Only female mosquitoes bite.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The U.S. Post Office handles 43 percent of the world’s mail.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Most household dust is made of dead skin cells.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'One in eight million people has progeria, a disease that causes people to grow faster than they age.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The male seahorse carries the eggs until they hatch instead of the female.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Negative emotions such as anxiety and depression can weaken your immune system.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Stephen Hawking was born exactly 300 years after Galileo died.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Mercury is the only planet whose orbit is coplanar with its equator.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Venus and Uranus are the only planets that rotate opposite to the direction of their orbit.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'John Adams, Thomas Jefferson, and James Monroe died on July 4th.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Baby Ruth candy bar was named after Grover Cleveland’s daughter, Ruth, not the baseball player.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Dolphins can look in different directions with each eye. They can sleep with one eye open.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The Falkland Isles (pop. about 2000) has over 700000 sheep (350 per person).',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are 41,806 different spoken languages in the world today.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The city of Venice stands on about 120 small islands.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The past-tense of the English word “dare” is “durst”',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Beetles taste like apples, wasps like pine nuts, and worms like fried bacon.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Of all the words in the English language, the word 'set' has the most definitions!",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'What is called a "French kiss" in the English speaking world is known as an "English kiss" in France.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '"Almost" is the longest word in the English language with all the letters in alphabetical order.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '"Rhythm" is the longest English word without a vowel.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In 1386, a pig in France was executed by public hanging for the murder of a child',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A cockroach can live several weeks with its head cut off!',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Human thigh bones are stronger than concrete.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "You can't kill yourself by holding your breath",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There is a city called Rome on every continent.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Your heart beats over 100,000 times a day!',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The skeleton of Jeremy Bentham is present at all important meetings of the University of London',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Right handed people live, on average, nine years longer than left-handed people',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Your ribs move about 5 million times a year, every time you breathe!',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'One quarter of the bones in your body, are in your feet!',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Like fingerprints, everyone's tongue print is different!",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Fingernails grow nearly 4 times faster than toenails!',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Most dust particles in your house are made from dead skin!',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Present population of 5 billion plus people of the world is predicted to become 15 billion by 2080.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Women blink nearly twice as much as men.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Adolf Hitler was a vegetarian, and had only ONE testicle.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Honey is the only food that does not spoil.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Months that begin on a Sunday will always have a "Friday the 13th."',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Coca-Cola would be green if coloring weren’t added to it.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "On average a hedgehog's heart beats 300 times a minute.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'More people are killed each year from bees than from snakes.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The average lead pencil will draw a line 35 miles long or write approximately 50,000 English words.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "More people are allergic to cow's milk than any other food.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Camels have three eyelids to protect themselves from blowing sand.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "The placement of a donkey's eyes in it’s' heads enables it to see all four feet at all times!",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The six official languages of the U.N. are: English, French, Arabic, Chinese, Russian and Spanish.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Earth is the only planet not named after a god.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "It's against the law to burp, or sneeze in a church in Nebraska, USA.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "You're born with 300 bones, but by the time you become an adult, you only have 206.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Some worms will eat themselves if they can't find any food!",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The world’s oldest piece of chewing gum is 9000 years old!',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The longest recorded flight  of a chicken is 13 seconds',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Owls are the only birds that can see the color blue.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A man named Charles Osborne had the hiccups for 69 years!',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A giraffe can clean its ears with its 21-inch tongue!',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The average person laughs 10 times a day!',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "The Bible, the world's best-selling book, is also the world's most shoplifted book.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Someone paid $14,000 for the bra worn by Marilyn Monroe in the film 'Some Like It Hot'.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Your tongue is the only muscle in your body that is attached at only one end.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'More than 1,000 different languages are spoken on the continent of Africa.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Buckingham Palace in England has over six hundred rooms.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There was once an undersea post office in the Bahamas.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Ninety percent of New York City cabbies are recently arrived immigrants.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "It's possible to lead a cow upstairs...but not downstairs.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A snail can sleep for three years.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'No word in the English language rhymes with "MONTH".',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Average life span of a major league baseball: 7 pitches.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Our eyes are always the same size from birth, but our nose and ears never stop growing.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '"Go." is the shortest complete sentence in the English language.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The "pound" key on your keyboard (#) is called an octotroph.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The only domestic animal not mentioned in the Bible is the cat.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Table tennis balls have been known to travel off the paddle at speeds up to 160 km/hr.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Pepsi originally contained pepsin, thus the name.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The original story from "Tales of 1001 Arabian Nights" begins, "Aladdin was a little Chinese boy."',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Nutmeg is extremely poisonous if injected intravenously.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Honey is the only natural food that is made without destroying any kind of life.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "The volume of the earth's moon is the same as the volume of the Pacific Ocean.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Cephalacaudal recapitulation is the reason our extremities develop faster than the rest of us.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Chinese Crested dogs can get acne.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Each year there is one ton of cement poured for each man woman and child in the world.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The house fly hums in the middle octave key of F.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The only capital letter in the Roman alphabet with exactly one end point is P.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "The giant red star Betelgeuse has a diameter larger than that of the Earth's orbit around the sun.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Hummingbirds are the only animals that can fly backwards.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "A cat's jaw cannot move sideways.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The human heart creates enough pressure when it pumps out to the body to squirt blood 30 feet.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "The flea can jump 350 times its body length. It's like a human jumping the length of a football field.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Some lions mate over 50 times a day.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Rubber bands last longer when refrigerated.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "The average person's left hand does 56% of the typing.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The longest one-syllable word in the English language is "screeched."',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'All of the clocks in the movie "Pulp Fiction" are stuck on 4:20.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '"Dreamt" is the only English word that ends in the letters "mt."',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Maine is the only state (in USA) whose name is just one syllable.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The giant squid has the largest eyes in the world.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In England, the Speaker of the House is not allowed to speak.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Mr. Rogers was an ordained minister.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A rat can last longer without water than a camel.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Your stomach has to produce a new layer of mucus every two weeks or it will digest itself.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A female ferret will die if it goes into heat and cannot find a mate.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A 2" X 4" is really 1-1/2" by 3-1/2".',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'On average, 12 newborns will be given to the wrong parents daily.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are no words in the dictionary that rhyme with orange, purple, silver and month.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text:
            'If one places a tiny amount of liquor on a scorpion, it will instantly go mad and sting itself to death.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The first CD pressed in the US was Bruce Springsteen\'s "Born in the USA."',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Sherlock Holmes NEVER said, "Elementary, my dear Watson."',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'California consumes more bottled water than any other product.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'California has issued 6 drivers licenses to people named "Jesus Christ."',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In 1980, a Las Vegas hospital suspended workers for betting on when patients would die.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Nevada is the driest state in the U.S.. Each year it averages 7.5 inches (19 cm) of rain.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In Utah, it is illegal to swear in front of a dead person.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Salt Lake City, Utah has a law against carrying an unwrapped ukulele on the street.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Arizona was the last of the 48 adjoining continental states to enter the Union.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'It is illegal to hunt camels in the state of Arizona.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Wyoming was the first state to give women the right to vote in 1869.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Denver, Colorado lays claim to the invention of the cheeseburger.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The first license plate on a car in the United States was issued in Denver, Colorado in 1908.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The state of Maryland has no natural Lakes.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Illinois has the highest number of personalized license plates than any other state.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Residents of Houston, Texas lead the U.S. in eating out - approximately 4.6 times per week.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Laredo, Texas is the U.S.'s farthest inland port.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Rugby, North Dakota is the geographical center of North America.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Butte County, South Dakota is the geographical center of the U.S.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Louisiana's capital building is the tallest one of any U.S. state.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Hawaii is the only coffee producing state.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'One in seven workers in Boston, Massachusetts walks to work.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The "Dull Men\'s Hall of Fame" is located in Carroll, Wisconsin.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Gary, Indiana is the murder capital of the U.S. - probably the world.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Alabama was the first state to recognize Christmas as an official holiday.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The largest NFL stadium is the Pontiac Silverdome in Detroit, Michigan.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Michigan was the first state to have roadside picnic tables.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'No matter where you stand in Michigan, you are never more than 85 miles from a Great Lake.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The official beverage of Ohio is tomato juice.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Georgia\'s state motto is "Wisdom, Justice and Moderation."',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The U.S. city with the highest rate of lightning strikes per capita is Clearwater, Florida.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "It's illegal to spit on the sidewalk in Norfolk, Virginia.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The first streetlights in America were installed in Philadelphia around 1757.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The highest point in Pennsylvania is lower than the lowest point in Colorado.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'If you were to take a taxicab from New York City to Los Angeles, it would cost you $8,325.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The NY phone book had 22 Hitlers before WWII. The NY phone book had 0 Hitlers after WWII.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In New York State, it is illegal to but any alcohol on Sundays before noon.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There were 240 pedestrian fatalities in New York City in 1994.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Columbia University is the second largest landowner in New York City, after the Catholic Church.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Montpelier, Vermont is the only state capital without a McDonalds.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Maine is the only state that has borders with only one other state.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "The first McDonald's restaurant in Canada was in Richmond, British Columbia.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In 1984, a Canadian farmer began renting advertising space on his cows.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are more donut shops in Canada per capita than any other country.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '0.3% of all road accidents in Canada involve a Moose.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In the great fire of London in 1666 half of London was burnt down but only 6 people were injured.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In Quebec, there is an old law that states margarine must be a different color than butter.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text:
            'The largest taxi fleet in the world is found in Mexico City. The city boasts a fleet of over 60,000 taxis.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'More than 90% of the Nicaraguan people are Roman Catholic.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Cuba is the only island in the Caribbean to have a railroad.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Jamaica has the most churches per square mile than any other country in the world.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The angel falls in Venezuela are nearly 20 times taller than Niagara Falls.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Canada is the only country not to win a gold medal in the summer Olympic games while hosting.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "The Amazon is the world's largest river, 3,890 miles (6,259 km) long.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The town of Calma, Chile in the Atacama Desert has never had rain.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The people of France eat more cheese than any other country in the world.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'King Louis XIX ruled France for 15 minutes.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The most common name in Italy is Mario Rossi.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Greece's national anthem has 158 verses.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In ancient Greece "idiot" meant a private citizen or layman.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Bulgarians are known to be the biggest yogurt eaters in the world.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Czechs are the biggest consumers of beer per male in the world.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A Czech man, Jan Honza Zampa, holds the record for drinking one liter of beer in 4.11 seconds.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Netherlands is the only country with a national dog.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "When we think of Big Ben in London, we think of the clock. Actually, it's the bell.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The Automated Teller Machine (ATM) was introduced in England in 1965.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Buckingham Palace has 602 rooms.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Icelanders consume more Coca-Cola per Capita than any other nation.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Until 1997, there were more pigs than people in Denmark.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There is a hotel in Sweden built entirely out of ice; it is rebuilt every year.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Sweden has the least number of murders annually.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Lithuania has the highest suicide rate in the world.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The country code for Russia is "007".',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Russians generally answer the phone by saying, "I\'m listening".',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The U.S. bought Alaska for 2 cents an acre from Russia.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "1 in 5 of the world's doctors are Russian.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Antarctica is the only continent that does not have land areas below sea level.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The people of Israel consume more turkeys per capita than any other country.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Nepal is the only country that has a non-rectangular flag. It is also asymmetrical.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '1,800 cigarettes are smoked per person each year in China.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Respiratory Disease is China's leading cause of death.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are more than 40,000 characters in the Chinese script.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'More people speak English in China than the United States.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The toothbrush was invented in China in 1498.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Mongolia is the largest landlocked country.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Vatican City is the smallest country in the world, with a population of 1000 and just 108.7 acres.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "In Japan, watermelons are squared. It's easier to stack them that way.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '98% of Japanese are cremated.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The number "four" is considered unlucky in Japan because it is pronounced the same as "death".',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The average Japanese household watches more than 10 hours of television a day.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The Philippines has about 7,100 islands, of which only about 460 are more than 1 square mile in area.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Yo-yos were used as weapons by warriors in the Philippines in the 16th century.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Australian soldiers used the song "We\'re Off to See the Wizard" as a marching song in WWII.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The Australian $5 to $100 notes are made of plastic.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The Nullarbor Plain of Australia covers 100,000 square miles (160,900 km) without a tree.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Tasmania, Australia has the cleanest air in the inhabited world.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Greenland is the largest island in the world.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The first female guest host of "Saturday Night Live" was Candace Bergen.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In 1933, Mickey Mouse, an animated cartoon character, received 800,000 fan letters.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The Simpsons is the longest running animated series on TV.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The first toilet ever seen on television was on "Leave It to Beaver."',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In every episode of Seinfeld there is a Superman somewhere.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The average human brain has about 100 billion nerve cells.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Nerve impulses to and from the brain travel as fast as 170 miles (274 km) per hour.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The thyroid cartilage is more commonly known as the adams apple.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Your stomach needs to produce a new layer of mucus every two weeks or it would digest itself.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The average life of a taste bud is 10 days.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The average cough comes out of your mouth at 60 miles (96.5 km) per hour.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Relative to size, the strongest muscle in the body is the tongue.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'When you sneeze, all your bodily functions stop even your heart.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Babies are born without knee caps. They don't appear until the child reaches 2-6 years of age.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Right handed people live, on average, nine years longer than left handed people do.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Children grow faster in the springtime.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'It takes the stomach an hour to break down cows’ milk.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Women blink nearly twice as much as men.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Blondes have more hair than dark-haired people do.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are 10 human body parts that are only 3 letters long (eye hip arm leg ear toe jaw rib lip gum).',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'If you go blind in one eye you only lose about one fifth of your vision but all your sense of depth.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The average human head weighs about 8 pounds.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In the average lifetime, a person will walk the equivalent of 5 times around the equator.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'An average human scalp has 100,000 hairs.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The average human blinks their eyes 6,205,000 times each year.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Your skull is made up of 29 different bones.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Ancient Egyptians shaved off their eyebrows to mourn the deaths of their cats.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Hair is made from the same substance as fingernails.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The surface of the human skin is 6.5 square feet (2m).',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '15 million blood cells are destroyed in the human body every second.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The pancreas produces Insulin.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The most sensitive cluster of nerves is at the base of the spine.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The human body is comprised of 80% water.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The average human will shed 40 pounds of skin in a lifetime.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Human thighbones are stronger than concrete.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are 45 miles of nerves in the skin of a human being.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Canadian researchers have found that Einstein's brain was 15% wider than normal.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'While in Alcatraz, Al Capone was inmate #85.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Astronaut Neil Armstrong first stepped on the moon with his left foot.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Jim Morrison, of the 60's rock group The Doors, was the first rock star to be arrested on stage.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Frank Lloyd Wright's son invented Lincoln Logs.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Peter Falk, who played "Columbo," has a glass eye.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Barbie\'s full name is "Babara Millicent Roberts."',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The mother of Michael Nesmith of "The Monkees" invented whiteout.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Isaac Asimov is the only author to have a book in every Dewey-decimal category.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Shakespeare invented the word "assassination" and "bump."',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Leonardo Da Vinci invented the scissors.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Adolf Hitler's mother seriously considered having an abortion but was talked out of it by her doctor.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Marilyn Monroe had six toes.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The shortest British monarch was Charles I, who was 4 feet 9 inches.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Tina Turner's real name is Annie Mae Bullock.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Beethoven dipped his head in cold water before he composed.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'President John F Kennedy could read 4 newspapers in 20 minutes.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Bob Dylan's real name is Robert Zimmerman.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Sigmund Freud had a morbid fear of ferns.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Anne Boleyn, Queen Elizabeth I's mother, had six fingers on one hand.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Orville Wright was involved in the first aircraft accident. His passenger, a Frenchman, was killed.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The sound of E.T. walking was made by someone squishing her hands in jelly.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Cher\'s last name was "Sarkissian." She changed it because no one could pronounce it.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Sugar was first added to chewing gum in 1869 by a dentist, William Semple.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Paper was invented early in the second century by Chinese eunuch.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Sir Isaac Newton was only 23 years old when he discovered the law of universal gravitation.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Hannibal had only one eye after getting a disease while attacking Rome.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A blue whales heart only beats nine times per minute.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A cat uses its whiskers to determine if a space is too small to squeeze through.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "A chameleon's tongue is twice the length of its body.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A crocodiles tongue is attached to the roof of its mouth.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Rodent's teeth never stop growing.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A shark can detect one part of blood in 100 million parts of water.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "The penguin is the only bird that can swim but can't fly.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "The cheetah is the only cat that can't retract its claws.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "A lion's roar can be heard from five miles away.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Emus and kangaroos can't walk backwards.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Cats have over 100 vocal sounds; dogs only have 10.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A mole can dig a tunnel 300 feet (91 m) long in just one night.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Insects outnumber humans 100,000,000 to one.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Sharkskin has tiny tooth-like scales all over.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Chameleons can move their eyes in two directions at the same time.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Koalas never drink water. They get fluids from the eucalyptus leaves they eat.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A cow gives nearly 200,000 glasses of milk in her lifetime.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'When sharks take a bite, their eyes roll back and their teeth jut out.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Camels chew in a figure 8 pattern.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Proportional to their size, cats have the largest eyes of all mammals.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Sailfish can leap out of the water and into the air at a speed of 50 miles (81 km) per hour.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The catfish has the most taste buds of all animals, having over 27,000 of them.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "A skunk's smell can be detected by a human a mile away.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A lion in the wild usually makes no more than 20 kills a year.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "In space, astronauts cannot cry, because there is no gravity, so the tears can't flow.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The state of Florida is bigger than England.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'One in every 4 Americans has appeared on television.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The average American/Canadian will eat about 11.9 pounds of cereal per year!',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are over 58 million dogs in the US',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Dogs and cats consume over $11 billion worth of pet food a year',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Baby robins eat 14 feet of earthworms every day',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'In Raiders of the Lost Ark there is a wall carving of R2-D2 and C-3P0 behind the ark',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '"I" is the most spoken word in the English language',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '"You" is the second most spoken English word',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Spain leads the world in cork production',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are 1,792 steps in the Eiffel Tower',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There is a city in Norway called "Hell"',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The human brain uses the same amount of energy as a 10-watt light bulb',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The human feet perspire half a pint of fluid a day',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'An Olympic gold medal must contain 92.5 percent silver',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are 240 dots on an arcade Pac-Man game',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The San Francisco Cable cars are the only mobile National Monuments',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "Lee Harvey Oswald's cadaver tag sold at an auction for $6,600 in 1992.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'A pound of houseflies contains more protein than a pound of beef',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The average American works 24,000 hours in their lifetime just to pay their taxes',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The U.S. military operates 234 golf courses',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: '40% of all people who come to a party in your home snoop in your medicine cabinet',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: "A duck's quack doesn't echo, and no one knows why.",
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Non-dairy creamer is flammable.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'Pinocchio is Italian for "pine head."',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'There are more than 10 million bricks in the Empire State Building.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The sun is 330,330 times larger than the earth.',
        source: 'http://www.djtech.net/humor/shorty_useless_facts.htm',
    },
    {
        text: 'The heads on Easter Island have bodies.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The moon has moonquakes.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Goosebumps are meant to ward off predators.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'There’s no such thing as “pear cider.”',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Pineapple works as a natural meat tenderizer.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Humans are the only animals that blush.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The feeling of getting lost inside a mall is known as the Gruen transfer.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The wood frog can hold its pee for up to eight months.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The hottest spot on the planet is in Libya.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'You lose up to 30 percent of your taste buds during flight.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Your nostrils work one at a time.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Only two mammals like spicy food: humans and the tree shrew.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'A chef’s toque contains 100 folds.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Rabbits can’t puke.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "The “M's” in M&Ms stand for “Mars” and “Murrie.”",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The human body literally glows.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Copper door knobs are self-disinfecting.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Cotton candy was invented by a dentist.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Marie Curie is the only person to earn a Nobel prize in two different sciences.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Fingernails don’t grow after you die.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The English word with the most definitions is “set.”',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Creedence Clearwater Revival has the most No. 2 Billboard hits—without ever hitting No. 1.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Pigeons can tell the difference between a painting by Monet and Picasso.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The dot over the lower case “i” or “j” is known as a “tittle.”',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Chewing gum boosts concentration.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "Superman didn't always fly.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The first computer was invented in the 1940s.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Space smells like seared steak.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The longest wedding veil was the same length as 63.5 football fields.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The unicorn is the national animal of Scotland.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Bees sometimes sting other bees.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Kids ask 300 questions a day.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The total weight of ants on earth once equaled the total weight of people.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: '"E" is the most common letter and appears in 11 percent of all english words.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "A dozen bodies were once found in Benjamin Franklin's basement.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The healthiest place in the world is in Panama.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'A pharaoh once lathered his slaves in honey to keep bugs away from him.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "Some people have an extra bone in their knee (and it's getting more common).",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "Pringles aren't actually potato chips.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "There's a giant fish with a transparent head.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "There's a decorated war hero dog.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Showers really do spark creativity.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Abraham Lincoln’s bodyguard left his post at Ford’s Theatre to go for a drink.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Dolphins have been trained to be used in wars.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Playing the accordion was once required for teachers in North Korea.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "Children's medicine once contained morphine.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text:
            'Plastic Easter eggs and plastic Easter grass were invented by a man who holds more patents than Thomas Edison.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Water makes different pouring sounds depending on its temperature.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "Most laughter isn't because things are funny.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'One man has saved more than 200 people from suicide.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Our European ancestors were cannibals.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Dogs actually understand some English.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'You have a nail in your body.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "Redheads aren't actually going extinct.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Pro baseball once had women players.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Koalas have fingerprints.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Humans are just one of the estimated 8.7 million species on Earth.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Riding a roller coaster could help you pass a kidney stone.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Dinosaurs lived on every continent.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Bee hummingbirds are so small they get mistaken for insects.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Sea lions can dance to a beat.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Rolls-Royce makes the most expensive car in the world.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The famed "Typhoid Mary" infected more than 50 people by cooking for them.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The legend of the Loch Ness Monster goes back nearly 1,500 years.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Nutmeg can be fatally poisonous.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Chinese police use geese squads.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "The first iPhone wasn't made by Apple.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "There's a country where twins are most likely to be born.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The Comic Sans font came from an actual comic book.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "For 100 years, maps have shown an island that doesn't exist.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Babies are physical anomalies.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The Queen has some hidden hideaways.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The man who wrote Dracula never visited Transylvania.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The Australian government banned the word "mate" for a day.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Many languages have the same roots.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'A tick bite can make you allergic to red meat.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Harriet Tubman was even more heroic than you thought.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Tornadoes can cause "fish rain."',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Napoleon was once attacked by thousands of rabbits.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "Star Trek's Scotty stormed the beach at Normandy.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "Apple Pie isn't actually American.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Pigs are constitutionally protected in Florida.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "Mr. Cherry breaks all the records you've never heard of.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "Sweat doesn't actually stink.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Some planets produce diamond rain.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Sharks can live for five centuries.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "There's an entire town under a rock.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'It is illegal to sell a "bounceless" pickle to somebody in Connecticut.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "The Bermuda Triangle isn't any more likely to cause a mysterious disappearance than anywhere else.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "There's a world record—and a happy ending—for the greatest distance thrown in a car accident.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'You can sneeze faster than a cheetah can run.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The fire hydrant patent was lost in a fire.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Saudi Arabia imports camels from Australia.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'One man once survived two atomic bombs.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The cast of Friends still earns around $20 million each year.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "Pluto technically isn't even a year old.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Cows kill more Americans each year than sharks do.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "Newborns don't have kneecaps.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'In Germany, people help toads cross the road.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "Cheetahs don't roar.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'France has a dozen time zones.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "Humans aren't the only species to adopt.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Blue Ivy Carter is the youngest person ever to appear on a Billboard chart.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The majority of Americans choose dogs over love.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The first Star Wars was expected to be a flop.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Your liver can regrow itself in three weeks.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Danes once bred a pig to look like the flag.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'A 70-year-old woman once completed seven marathons in seven days, across all seven continents.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Dogs like squeaky toys for a dark reason.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The man who founded Atari also started Chuck E. Cheese.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'One man was once constipated for nearly two months.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Most people break up on Mondays.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'There may be 2,000 active serial killers in the U.S. right now.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Beethoven could still hear after going deaf.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Ants have a built-in FitBit.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Stressed men have altered proclivities.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Crows holds grudges.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Canada once heavily targeted LGBTQ individuals.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Bill Gates has donated nearly half his fortune.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'You can always "see" your nose.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'A restaurant in New York employs grandmas as chefs.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Shaq only ever made one three-pointer.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "America's first bank robber deposited the money back into the same bank.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Germany uncovers 2,000 tons of unexploded bombs every year.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Sharks existed before trees.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "And trees weren't always biodegradable.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Detroit undercover cops in a drug ring once fought another group of undercover cops.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "You're pronouncing Dr. Seuss' name wrong.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Nearly all species to have ever existed on Earth are extinct.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The Silverback gorilla can lift almost a literal ton.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "Every time you shuffle a deck of cards, you get a combination that's never existed.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'There is an immortal jellyfish.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'America accidentally dropped an atom bomb on South Carolina in 1958.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Baby blue whales grow 200 pounds per day.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Actor Bill Murray uses a 1-800 number instead of an agent or manager.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Cats once delivered mail in Belgium.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'It’s a myth that people are either “left-brained” or “right-brained.”',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Women are attracted to the scent of Good & Plenty licorice candy and cucumber.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "There's a device that creates energy from snowfall.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'A mermaid "documentary" once fooled so many people that the U.S. government had to issue a statement.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text:
            'The Iowa State Fair holds quirky competitions like a beard-growing contest and a husband-calling contest.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "There's a textbook written entirely by an AI author.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "Earth won't always have the same North Star.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'There’s an entire family in Italy that feels almost no pain.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The word “hipster” goes all the way back to the 1930s.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Guinea pigs were once sacrificed wearing earrings and necklaces and wrapped like sushi.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Hitler had a flatulence problem.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Scientists were able to take a picture of an atom’s shadow.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Maine is the only state that borders just one other state.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "The Twitter bird's official name Is Larry.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The longest book title contains 1,809 words.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Allergy season is getting longer and more intense each year.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "There's a reason there's a hole in your pen caps.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'You can learn the High Valyrian language from Game of Thrones with an online course.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Some Maryland residents are taxed for the rain.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Scientists have partially revived disembodied pig brains.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Astronauts in space are exposed to the same amount of radiation as 150 to 6,000 chest x-rays.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Beaver bum goo is occasionally used to enhance vanilla flavorings.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The U.S. almost went to war with Canada over a pig.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Tornados used to be called “twirlblasts” and “twirlwinds” in the 18th century.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The Sundance Kid took his nickname from the town of Sundance, Wyoming.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Eating your offspring may be a sign of good parenting in some species.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The word “MacGyvered” is in the Oxford English Dictionary.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Kentucky has more bourbon than people.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Jupiter’s red spot is getting taller and smaller at the same time.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Three eagles were found co-parenting three eaglets in Illinois.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'There is a town in Nebraska with a population of one.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'When President Carter pardoned draft dodgers, only half returned.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "The Amazon River Dolphin’s brain capacity is 40 percent larger than humans'.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: "There's a Scottish term for hesitating when introducing someone because you’ve forgotten their name.",
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Earth is hit with more energy from the sun each hour than the planet uses in a year.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The Queen celebrates two birthdays every year.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'Scientists can identify the brain waves that signal someone is having an angry dream.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'McRib sandwiches contain about 70 ingredients.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text: 'The Apollo astronauts’ footprints on the Moon could stay there for 100 million years.',
        source: 'https://bestlifeonline.com/random-fun-facts/',
    },
    {
        text:
            "The numbers '172' can be found on the back of the U.S. $5 dollar bill in the bushes at the base of the Lincoln Memorial.",
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'President Kennedy was the fastest random speaker in the world with upwards of 350 words per minute.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'In the average lifetime, a person will walk the equivalent of 5 times around the equator.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Odontophobia is the fear of teeth.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The 57 on Heinz ketchup bottles represents the number of varieties of pickles the company once had.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'In the early days of the telephone, operators would pick up a call and use the phrase, "Well, are you there?". It wasn\'t until 1895 that someone suggested answering the phone with the phrase "number please?"',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The surface area of an average-sized brick is 79 cm squared.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'According to suicide statistics, Monday is the favored day for self-destruction.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Cats sleep 16 to 18 hours per day.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The most common name in the world is Mohammed.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'It is believed that Shakespeare was 46 around the time that the King James Version of the Bible was written. In Psalms 46, the 46th word from the first word is shake and the 46th word from the last word is spear.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Karoke means "empty orchestra" in Japanese.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'The Eisenhower interstate system requires that one mile in every five must be straight. These straight sections are usable as airstrips in times of war or other emergencies.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The first known contraceptive was crocodile dung, used by Egyptians in 2000 B.C.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'Rhode Island is the smallest state with the longest name. The official name, used on all state documents, is "Rhode Island and Providence Plantations."',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'When you die your hair still grows for a couple of months.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'There are two credit cards for every person in the United States.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Isaac Asimov is the only author to have a book in every Dewey-decimal category.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'The newspaper serving Frostbite Falls, Minnesota, the home of Rocky and Bullwinkle, is the Picayune Intellegence.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'It would take 11 Empire State Buildings, stacked one on top of the other, to measure the Gulf of Mexico at its deepest point.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The first person selected as the Time Magazine Man of the Year - Charles Lindbergh in 1927.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The most money ever paid for a cow in an auction was $1.3 million.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'It took Leo Tolstoy six years to write "War & Peace".',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: "The Neanderthal's brain was bigger than yours is.",
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'On the new hundred dollar bill the time on the clock tower of Independence Hall is 4:10.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'Each of the suits on a deck of cards represents the four major pillars of the economy in the middle ages: heart represented the Church, spades represented the military, clubs represented agriculture, and diamonds represented the merchant class.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'The names of the two stone lions in front of the New York Public Library are Patience and Fortitude. They were named by then-mayor Fiorello LaGuardia.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'The Main Library at Indiana University sinks over an inch every year because when it was built, engineers failed to take into account the weight of all the books that would occupy the building.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The sound of E.T. walking was made by someone squishing her hands in jelly.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            "Lucy and Linus (who where brother and sister) had another little brother named Rerun. (He sometimes played left-field on Charlie Brown's baseball team, [when he could find it!]).",
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The pancreas produces Insulin.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: '1 in 5,000 north Atlantic lobsters are born bright blue.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'There are 10 human body parts that are only 3 letters long (eye hip arm leg ear toe jaw rib lip gum).',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: "A skunk's smell can be detected by a human a mile away.",
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The word "lethologica" describes the state of not being able to remember the word you want.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The king of hearts is the only king without a moustache.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'Henry Ford produced the model T only in black because the black paint available at the time was the fastest to dry.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            "Mario, of Super Mario Bros. fame, appeared in the 1981 arcade game, Donkey Kong. His original name was Jumpman, but was changed to Mario to honor the Nintendo of America's landlord, Mario Segali.",
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The three best-known western names in China: Jesus Christ, Richard Nixon, and Elvis Presley.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Every year about 98% of the atoms in your body are replaced.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: "Elephants are the only mammals that can't jump.",
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The international telephone dialing code for Antarctica is 672.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'World Tourist day is observed on September 27.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Women are 37% more likely to go to a psychiatrist than men are.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The human heart creates enough pressure to squirt blood 30 feet (9 m).',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Diet Coke was only invented in 1982.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'There are more than 1,700 references to gems and precious stones in the King James translation of the Bible.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'When snakes are born with two heads, they fight each other for food.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'American car horns beep in the tone of F.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            "Turning a clock's hands counterclockwise while setting it is not necessarily harmful. It is only damaging when the timepiece contains a chiming mechanism.",
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'There are twice as many kangaroos in Australia as there are people. The kangaroo population is estimated at about 40 million.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'Police dogs are trained to react to commands in a foreign language; commonly German but more recently Hungarian.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The Australian $5 to $100 notes are made of plastic.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'St. Stephen is the patron saint of bricklayers.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The average person makes about 1,140 telephone calls each year.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Stressed is Desserts spelled backwards.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'If you had enough water to fill one million goldfish bowls, you could fill an entire stadium.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Mary Stuart became Queen of Scotland when she was only six days old.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: "Charlie Brown's father was a barber.",
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'Flying from London to New York by Concord, due to the time zones crossed, you can arrive 2 hours before you leave.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'Dentists have recommended that a toothbrush be kept at least 6 feet (2 m) away from a toilet to avoid airborne particles resulting from the flush.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'You burn more calories sleeping than you do watching TV.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: "A lion's roar can be heard from five miles away.",
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'The citrus soda 7-UP was created in 1929; "7" was selected because the original containers were 7 ounces. "UP" indicated the direction of the bubbles.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: "Canadian researchers have found that Einstein's brain was 15% wider than normal.",
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The average person spends about 2 years on the phone in a lifetime.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The fist product to have a bar code was Wrigleys gum.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'The largest number of children born to one woman is recorded at 69. From 1725-1765, a Russian peasant woman gave birth to 16 sets of twins, 7 sets of triplets, and 4 sets of quadruplets.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Beatrix Potter created the first of her legendary "Peter Rabbit" children\'s stories in 1902.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'In ancient Rome, it was considered a sign of leadership to be born with a crooked nose.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The word "nerd" was first coined by Dr. Seuss in "If I Ran the Zoo."',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'A 41-gun salute is the traditional salute to a royal birth in Great Britain.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The bagpipe was originally made from the whole skin of a dead sheep.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'The roar that we hear when we place a seashell next to our ear is not the ocean, but rather the sound of blood surging through the veins in the ear. Any cup-shaped object placed over the ear produces the same effect.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'Revolvers cannot be silenced because of all the noisy gasses which escape the cylinder gap at the rear of the barrel.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'Liberace Museum has a mirror-plated Rolls Royce; jewel-encrusted capes, and the largest rhinestone in the world, weighing 59 pounds and almost a foot in diameter.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'A car that shifts manually gets 2 miles more per gallon of gas than a car with automatic shift.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Cats can hear ultrasound.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Dueling is legal in Paraguay as long as both parties are registered blood donors.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The highest point in Pennsylvania is lower than the lowest point in Colorado.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The United States has never lost a war in which mules were used.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Children grow faster in the springtime.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'On average, there are 178 sesame seeds on each McDonalds BigMac bun.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Paul Revere rode on a horse that belonged to Deacon Larkin.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: "The Baby Ruth candy bar was actually named after Grover Cleveland's baby daughter, Ruth.",
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Minus 40 degrees Celsius is exactly the same as minus 40 degrees Fahrenheit.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'Clans of long ago that wanted to get rid of unwanted people without killing them used to burn their houses down -- hence the expression "to get fired"',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'Nobody knows who built the Taj Mahal. The names of the architects, masons, and designers that have come down to us have all proved to be latter-day inventions, and there is no evidence to indicate who the real creators were.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Every human spent about half an hour as a single cell.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: '7.5 million toothpicks can be created from a cord of wood.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The plastic things on the end of shoelaces are called aglets.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'A 41-gun salute is the traditional salute to a royal birth in Great Britain.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'The earliest recorded case of a man giving up smoking was on April 5, 1679, when Johan Katsu, Sheriff of Turku, Finland, wrote in his diary "I quit smoking tobacco." He died one month later.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: '"Goodbye" came from "God bye" which came from "God be with you."',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'February is Black History Month.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Jane Barbie was the woman who did the voice recordings for the Bell System.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text:
            'The first drive-in service station in the United States was opened by Gulf Oil Company - on December 1, 1913, in Pittsburgh, Pennsylvania.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The elephant is the only animal with 4 knees.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Kansas state law requires pedestrians crossing the highways at night to wear tail lights.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
];

export default facts;
