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
            "101 Dalmatians, Peter Pan, Lady and the Tramp, and Mulan are the only Disney cartoons where both parents are present and don't die throughout the movie. .",
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
            'The very first bomb dropped by the Allies on Berlin during World War II killed the only elephant in the Berlin Zoo.',
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
            'Crocodiles and alligators are surprisingly fast on land. Although they are rapid, they are not agile. So, if being chased by one, run in a zigzag line to lose him or her.',
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
        text: 'In the United States, a pound of potato chips costs two hundred times more than a pound of potatoes.',
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
        text: 'Women manage the money and pay the bills in 75% of all Americans households.',
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
            'Ants closely resemble human manners: When they wake, they stretch & appear to yawn in a human manner before taking up the tasks of the day.',
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
            "One-fourth of the world's population lives on less than $200 a year. Ninety million people survive on less than $75 a year.",
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
            'The average lead pencil will draw a line 35 miles long or write approximately 50,000 English words. More than 2 billion pencils are manufactured each year in the United States. If these were laid end to end they would circle the world nine times.',
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
            "Valentine Tapley from Pike County, Missouri grew chin whiskers attaining a length of twelve feet six inches from 1860 until his death 1910, protesting Abraham Lincoln's election to the presidency.",
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
            "A palindrome is a sentence or group of sentences that reads the same backwards as it does forward: Ex: 'Red rum, sir, is murder.' 'Ma is as selfless as I am.' 'Nurse, I spy gypsies. Run!' 'A man, a plan, a canal - Panama.' 'He lived as a devil, eh?'",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "The first CD pressed in the US was Bruce Springsteen's 'Born in the USA'",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'In 1986 Congress & President Ronald Reagan signed Public Law 99-359, which changed Daylight Saving Time from the last Sunday in April to the first Sunday in April. It was estimated to save the nation about 300,000 barrels of oil each year by adding most of the month April to D.S.T.',
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
            "Since 1978, 37 people have died by Vending Machine's falling on them. 13 people are killed annually. All this while trying to shake merchandise out of them. 113 people have been injured.",
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
            'Researchers at the Texas Department of Highways in Fort Worth determined the cow population of the U.S. burps some 50 million tons of valuable hydrocarbons into the atmosphere each year. The accumulated burps of ten average cows could keep a small house adequately heated and its stove operating for a year.',
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
            "The expression 'to get fired' comes from long ago. When clans wanted to get rid of unwanted people, they would burn their houses instead of killing them, creating the term 'Got fired'.",
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
        text: "Dr. Kellogg introduced Kellogg's Corn Flakes in hopes that it would reduce masturbation.",
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
        text: "Napoleon's penis was sold to an American Urologist for $40,000.",
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
        text: "Mike Nesmith's (the guitarist of The Monkeys) mom invented White Out.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Only 6 people in the whole world have died from moshing.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            '241.    In a test performed by Canadian scientists, using various different styles of music, it was determined that chickens lay the most eggs when pop music was played.',
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
            'A signature is called a John Hancock because he signed the Declaration of Independence. Only 2 people signed the declaration of independence on July 4. The last person signed 2 years later.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Arnold Schonberg suffered from triskaidecaphobia, the fear of the number 13. He died at 13 minutes from midnight on Friday the 13th.',
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
        text: 'In England, the Speaker of the House is not allowed to give speeches like other MPs.',
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
        text: 'All of the clocks in the movie "Pulp Fiction" are stuck on 4:20, an international pot-smokers hour.',
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
            'There are only four words in the English language which end in "dous": tremendous, horrendous, stupendous, and hazardous.',
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
            'On an American one-dollar bill, there is an owl in the upper left-hand corner of the "1" encased in the "shield" and a spider hidden in the front upper right-hand corner.',
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
            'One of the reasons marijuana is illegal today is because cotton growers in the 1930s lobbied against hemp farmers because they saw it as competition.',
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
        text: "You can't kill yourself by holding your breath.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "The average person spends 12 weeks a year 'looking for things'.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The symbol on the "pound" key (#) is called an octothorpe.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "The dot over the letter 'i' is called a tittle.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Ingrown toenails are hereditary.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: '"Underground" is the only word in the English language that begins and ends with the letters "und"',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The longest word in the English language, according to the Oxford English Dictionary, is: pneumonoultramicroscopicsilicovolcanoconiosis.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The longest place-name still in use is: Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiakitnatahu, a New Zealand hill.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "An ostrich's eye is bigger than its brain.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Alfred Hitchcock didn't have a belly button. It was eliminated when he was sewn up after surgery.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Telly Savalas and Louis Armstrong died on their birthdays.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Donald Duck's middle name is Fauntleroy.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The muzzle of a lion is like a fingerprint - no two lions have the same pattern of whiskers.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: "Steely Dan got their name from a sexual device depicted in the book 'The Naked Lunch'.",
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The Ramses brand condom is named after the great pharoh Ramses II who fathered over 160 children.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'There is a seven letter word in the English language that contains ten words without rearranging any of its letters, "therein": the, there, he, in, rein, her, here, ere, therein, herein.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'A goldfish has a memory span of three seconds.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Cranberries are sorted for ripeness by bouncing them; a fully ripened cranberry can be dribbled like a basketball.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The male gypsy moth can "smell" the virgin female gypsy moth from 1.8 miles away.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The letters KGB stand for Komitet Gosudarstvennoy Bezopasnosti.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The word "dexter" whose meaning refers to the right hand is typed with only the left hand.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'To "testify" was based on men in the Roman court swearing to a statement made by swearing on their testicles.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'Facetious and abstemious contain all the vowels in the correct order, as does arsenious, meaning "containing arsenic." ',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The word "Checkmate" in chess comes from the Persian phrase "Shah Mat," which means "the king is dead."',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text:
            'The first episode of "Joanie Loves Chachi" was the highest rated American program in the history of Korean television, a country where "Chachi" translates to "penis".',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'Rubber bands last longer when refrigerated.',
        source: 'https://www.djtech.net/humor/useless_facts.htm',
    },
    {
        text: 'The national anthem of Greece originally had 158 verses.',
        source:
            'https://checkthisstuff.wordpress.com/2013/10/08/the-national-anthem-of-greece-has-158-verses-no-one-in-greece-has-memorized-all-158-verses/',
    },
    {
        text: "Two-thirds of the world's eggplant is grown in New Jersey.",
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
            'When the French Academy was preparing its first dictionary, it defined "crab" as, "A small red fish, which walks backwards." This definition was sent with a number of others to the naturalist Cuvier for his approval. The scientist wrote back, "Your definition, gentlemen, would be perfect, only for three exceptions. The crab is not a fish, it is not red and it does not walk backwards."',
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
        text: 'Dueling is legal in Paraguay as long as both parties are registered blood donors.',
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
        text: 'The longest recorded flight of a chicken is 13 seconds',
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
        text:
            "Mr. Cherry breaks all the records you've never heard of, including the most jelly eaten with chopsticks in one minute, the most socks put on one foot in 30 seconds and the most tennis balls caught with a boxing glove in one minute.",
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
        text: 'The elephant is the only animal with four forward-facing knees.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'Kansas state law requires pedestrians crossing the highways at night to wear tail lights.',
        source: 'https://www.cs.cmu.edu/~bingbin/',
    },
    {
        text: 'The scientific term for brain freeze is “sphenopalatine ganglioneuralgia”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Canadians say “sorry” so much that a law was passed in 2009 declaring that an apology can’t be used as evidence of admission to guilt.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Back when dinosaurs existed, there used to be volcanoes that were erupting on the moon.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The only letter that doesn’t appear on the periodic table is J.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'One habit of intelligent humans is being easily annoyed by people around them, but saying nothing in order to avoid a meaningless argument.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'If a Polar Bear and a Grizzly Bear mate, their offspring is called a “Pizzy Bear”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 2006, a Coca-Cola employee offered to sell Coca-Cola secrets to Pepsi. Pepsi responded by notifying Coca-Cola.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There were two AI chatbots created by Facebook to talk to each other, but they were shut down after they started communicating in a language they made for themselves.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Nintendo trademarked the phrase “It’s on like Donkey Kong” in 2010.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Daniel Radcliffe was allergic to his Harry Potter glasses.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The famous line in Titanic from Leonardo DiCaprio, “I’m king of the world!” was improvised.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'A single strand of Spaghetti is called a “Spaghetto”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Hershey’s Kisses are named that after the kissing sound the deposited chocolate makes as it falls from the machine on the conveyor belt.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Princess Peach didn’t move until 1988, designers believed it was too complicated to make her a movable character.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'To leave a party without telling anyone is called in English, a “French Exit”. In French, it’s called a “partir à l’anglaise”, to leave like the English.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'If you cut down a cactus in Arizona, you’ll be penalized up to 25 years in jail. It is similar to cutting down a protected tree species.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Buddha commonly depicted in statues and pictures is a different person entirely. The real Buddha was actually incredibly skinny because of self-deprivation.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In Colorado, USA, there is still an active volcano. It last erupted about the same time as the pyramids were being built in Egypt.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The first movie ever to put out a motion-picture soundtrack was Snow White and the Seven Dwarves.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'If you point your car keys to your head, it increases the remote’s signal range.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Fruit stickers are edible, though the same as any fruit, washing prior to eating is recommended. The glue used for them is regulated by the FDA.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The scientific name for Giant Anteater is Myrmecophaga Tridactyla. This means “ant eating with three fingers”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Astronaut is a compound word derived from the two Ancient Greek words “Astro” meaning “star” and “naut” meaning “sailor”. So astronaut literally means “star sailor”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The flashes of colored light you see when you rub your eyes are called “phosphenes”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'At birth, a baby panda is smaller than a mouse.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Iceland does not have a railway system.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The largest known prime number has 17,425,170 digits. The new prime number is 2 multiplied by itself 57,885,161 times, minus 1.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Forrest Fenn, an art dealer and author, hid a treasure chest in the Rocky Mountains worth over 1 million dollars. It still has not been found.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The lead singer of The Offspring started attending school to achieve a doctorate in molecular biology while still in the band. He graduated in May 2017.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The world’s largest grand piano was built by a 15-year-old in New Zealand.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The tongue is the only muscle in one’s body that is attached from one end.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is a company in Japan that has schools that teach you how to be funny. The first one opened in 1982. About 1,000 students take the course each year.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Lego Group is the world’s most powerful brand. There are more Lego Minifigures than there are people on Earth.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Bagheera kiplingi spider was discovered in the 1800s and is the only species of spider that has been classified as vegetarian.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is a boss in Metal Gear Solid 3 that can be defeated by not playing the game for a week; or by changing the date.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Roman – Persian wars are the longest in history, lasting over 680 years. They began in 54 BC and ended in 628 AD.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Elvis was originally blonde. He started coloring his hair black for an edgier look. Sometimes, he would touch it up himself using shoe polish.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'If you translate “Jesus” from Hebrew to English, the correct translation is “Joshua”. The name “Jesus” comes from translating the name from Hebrew, to Greek, to Latin, to English.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Ed Sheeran bought a ticket to LA with no contacts. He was spotted by Jamie Foxx, who offered him the use of his recording studio and a bed in his Hollywood home for six weeks.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'German Chocolate Cake is named after an American baker by the name of Samuel German.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The first service animals were established in Germany during World War I. References to service animals date as far back as the mid-16th Century.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'An 11-year-old girl proposed the name for Pluto after the Roman god of the Underworld.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The voice actor of SpongeBob and the voice actor of Karen, Plankton’s computer wife, have been married since 1995.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'An Italian banker, Gilberto Baschiera is considered a modern-day Robin Hood. Over the course of 7 years, he secretly diverted 1 million euros to poorer clients from the wealthy ones so they could qualify for loans. He made no profit and avoided jail in 2018 due to a plea bargain.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Octopuses and squids have beaks. The beak is made of keratin – the same material that a bird’s beak, and our fingernails are made of.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'An estimated 50% of all gold ever mined on Earth came from a single plateau in South Africa: Witwatersrand.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: '75% of the world’s diet is produced from just 12 plant and five different animal species.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The original Star Wars premiered on just 32 screens across the U.S. in 1977. This was to produce buzz as the release widened to more theaters.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The British government coined the slogan, “Keep Calm and Carry on” during World War 2 in order to motivate citizens to stay strong.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Apple paid a couple $1.7 million dollars for their plot of land, which was only worth $181,700.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Tirana, the capital of Albania has a lot of things in common with other European capitals – except one. It’s one of two capitals without a Mcdonald’s. The second is Vatican City.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Sour Patch Kids are from the same manufacturer as Swedish Fish. The red Sour Patch Kids are the same candy as Swedish Fish, but with sour sugar.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The largest Japanese population outside of Japan stands at 1.6 million people who live in Brazil.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'IKEA is an acronym which stands for Ingvar Kamprad Elmtaryd Agunnaryd, which is the founder’s name, farm where he grew up, and hometown.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 2009, Stephen Hawking held a reception for time travelers, but didn’t publicize it until after. This way, only those who could time travel would be able to attend. Nobody else attended.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Violin bows are commonly made from horse hair.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'There are less than 30 ships in the Royal Canadian Navy which are less than most third-world countries.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Larry the Cable Guy’s real name is Daniel Lawrence Whitney. His notable Southern accent is fake – he was born and raised in the midwest, not the South.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The youngest Pope in history was Pope Benedict IX who was 11 years old at the time of the election. He is also the only person to have been the Pope more than once.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'There were only 9 developers on the team for GoldenEye 007 for Nintendo 64.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Costa Coffee employs Gennaro Pelliccia as a coffee taster, who has had his tongue insured for £10 million since 2009.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Johnny Cash took only three voice lessons before his teacher advised him to stop taking lessons and to never deviate from his natural voice.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'There is an island called “Just Enough Room”, where there’s just enough room for a tree and a house.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'People who post their fitness routine on Facebook are more likely to have psychological problems.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Medieval chastity belts are a myth. A great majority of examples now existing were made in the 18th and 19th centuries as jokes.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Nowadays, millionaires with just $1 million aren’t considered wealthy anymore by most Americans. Now, the typical American sees at least $2.4 million as wealthy.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Hanna-Barbera pitched The Flintstones to networks for 8 weeks before it was finally picked up. It became the first-ever animated show to air during primetime.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is a company that sells mirrors that make people look 10 pounds thinner. Overall, the mirrors have contributed to 54% of total sales for retailers that use it.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There’s no period in “Dr. Pepper”. It was removed because the old logo font made it look like “Di: Pepper”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'There is an underwater version of rugby, unsurprisingly called “underwater rugby”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Standing around burns calories. On average, a 150-pound person burns 114 calories per hour while standing and doing nothing.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Although GPS is free for the world to use, it costs $2 million per day to operate. The money comes from American tax revenue.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In World War II, Germany tried to collapse the British economy by dropping millions of counterfeit bills over London.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The human eye is so sensitive that, if the Earth were flat and it was a dark night, a candle’s flame could be seen from 30 miles away.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'When Space Invaders was created, Tomohiro Nishikado left in the lag caused by more invaders on the screen in order to create greater difficulty in the games.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The color red doesn’t really make bulls angry; they are color-blind.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: '65% of autistic kids are left-handed, and only 10% of people, in general, are left-handed.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 2007, Scotland spent £125,000 devising a new national slogan. The winning entry was: “Welcome to Scotland”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Until 2016, the “Happy Birthday” song was not for public use. Meaning, prior to 2016, the song was copyrighted and you had to pay a license to use it.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'When mice live in the wild, they typically only live for about six months.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is a punctuation mark used to signify irony or sarcasm that looks like a backwards question mark ⸮',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Lettuce is a member of the sunflower family.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Researches have found that flossing your teeth can help your memory. Flossing prevents gum disease, which prevents stiff blood vessels, which cause memory issues.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'A cluster of bananas is called a “hand”. Along that theme, a single banana is called a “finger”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Hobbit has been published in two editions. In the first edition, Gollum willingly bet on his ring in the riddle game.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'For nearly 60 years, Texas didn’t have an official state flag between 1879 & 1933. During that time, the Lone Star flag was the active, but the unofficial flag.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'A wildlife technician, Richard Thomas, took the famous tongue twister, “how much wood would a woodchuck chuck if a woodchuck could chuck wood” and calculated a rough estimate of what the answer would actually be. It came out to be around 700 pounds.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Red Solo cups are a common souvenir to bring back from the United States. The novelty comes from the cups being used in many party scenes in movies.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Swedish meatballs originated from a recipe King Charles XII brought back from Turkey in the early 1800s.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Saint Lucia is the only country in the world named after a woman.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Those cute furry bits inside a cat’s ear are called “ear furnishings”. They ensure that dirt doesn’t go inside and also helps them to hear well.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Scientists discovered sharks that are living in an active underwater volcano. Divers cannot investigate because they would get burns from the acidity and heat.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There are times when Pluto is closer to the Sun than Neptune – one of these timelines was from 1979 to 1999.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is a town in Nebraska called Monowi with a population of one. The only resident is a woman who is the Mayor, Bartender, and Librarian.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Ethiopian calendar is 7.5 years behind the Gregorian calendar due to the fact that it has 13 months.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 1994, the company that had a patent on GIFs tried to charge a fee for using GIFS. The PNG was invented as an alternative, and the company backed down.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'China is spending $3 billion dollars to build panda-shaped solar farms in order to get more young people interested in renewable energy.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Mercury and Venus are the only two planets in our solar system that do not have any moons.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The average American child is given $3.70 per tooth that falls out.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },

    {
        text:
            'The world’s first motel is in San Luis Obispo, which was built in 1925. When opened, it cost $1.25 for a two-room bungalow with a kitchen and a private adjoining garage.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Scotland was one of the few countries able to hold off being conquered by the Romans in the first century A.D.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'I Will Always Love You was originally written and recorded in 1973 by Dolly Parton. It was written as a farewell to her mentor of seven years.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            '“Opposites attract” is a common myth. People are actually attracted to people who look like family members or those with a similar personality type.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Llamas can be used as guards against coyote attacks on sheep herds. Studies have proven that just one guard llama is an effective protector and can even kill the attacking coyotes.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The unique smell of rain actually comes from plant oils, bacteria, and ozone.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Vanilla flavoring is sometimes made with the urine of beavers.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'If you heat up a magnet, it will lose its magnetism.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The most expensive virtual object is “Club NEVERDIE” in the Entropia Universe which is worth $635,000. It was originally bought at $10,000.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Cruise ships have morgues that can store up to 10 bodies at once. The average amount of people that die on cruise ships per year is 200.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Birds are the closest living relatives of crocodilians, as well as the descendants of extinct dinosaurs with feathers. This makes them the only surviving dinosaurs.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Small as they may be, ladybugs have a unique smell that humans are incredibly sensitive to.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'During WWII, a U.S. naval destroyer won a battle against a Japanese submarine by throwing potatoes at them. The Japanese thought they were grenades.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The Marshal Mathers foundation for at-risk and disadvantaged youth was founded by Eminem.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Since 1955, 50% of the population of Niger is consistently under 16 years old. The total current population is 21,600,000.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The author of Mary Had a Little Lamb, Sarah Josepha Hale, is most responsible for the creation of Thanksgiving being a national holiday.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The oldest unopened bottle of wine was found in a Roman tomb that is over 1,650 years old.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Chicken Run is the highest-grossing stop motion animated film, even beating The Nightmare Before Christmas.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Nobody knows how the Academy Awards came to be referred to as the Oscars. The earliest mention was 1932, and was made official in 1939.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'More tornadoes occur in the United Kingdom per square mile than any other country in the world.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Owners of personalized license plates in Uganda are facing a tax increase of over 300%, which will raise the tax from $1,498 to $5,992.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Popularized by the Shakespeare play, many people think Julius Caesar’s last words were “And you, Brutus?” In reality, he said “You too, my child?”',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Times Square was originally called Longacre Square until it was renamed in 1904 after The New York Times moved its headquarters to the newly built Times Building.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Daniel Craig was an anonymous Storm Trooper in Star Wars: The Force Awakens. Originally, he denied his cameo and claimed he wouldn’t bother being an extra in a movie.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Queen Elizabeth has a personal net worth of 425 million dollars. That includes the $65 million Sandringham House and $140 million Balmoral Castle.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Although there is currently no drug proven to make someone tell the truth, some countries like Russia, Canada, and India use truth serums.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Only primates, humans, and opossums have opposable thumbs. Out of these, the opossum is the only one with no thumbnail.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'One of the World Trade Center’s was built to be 1,776 feet tall on purpose to reference the year the Declaration of Independence was signed.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The word “kimono”, literally means a “thing to wear”. Ki is “wear”, and mono is “thing”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is a statue of Tesla in Silicon Valley that radiates free Wi-Fi. It was done as an homage to his vision for wireless communication.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'It snows metal on planet Venus! There are two types that have been found, galena and bismuthinite.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Tic Tacs got their name from the sound they make when they are tossed around in their container.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Only official members of federally accepted Native American tribes may legally possess or collect eagle feathers. If a normal citizen has one, it is illegal.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'By the time they have been retired for 2 years, 78% of former NFL players have gone bankrupt or are under financial stress because of joblessness or divorce.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            '500 seeds of 5 different types of seeds were taken into orbit around the moon and later planted around the U.S. as well as a few countries. They were called Moon Trees.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In order to protest the high tariffs enforced by a U.K. censorship board, a filmmaker sent in a 10-hour “movie” of white paint drying. They had to watch the entire film.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The popular LMFAO group who created the viral hit, Party Rock Anthem, is made up of an uncle-nephew duo.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            '50% of apartments in Los Angeles don’t come with a fridge. This is legal, as fridges are considered an “amenity”, and therefore landlords are not required to provide one.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Norway has a 25-year statute of limitation on murder. This means if the murder happened more than 25 years ago, they cannot be charged.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Several of the facts on Snapple caps have been found to be outdated, incorrect or exaggerated.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Both of the drummers from Queen and Duran Duran had the same name – Roger Taylor.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is a company in the U.K. that offers “being hungover” as a valid reason for calling off work. They are allotted four hungover days per year.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The majority of blind people in the U.S. and the U.K. cannot read braille. Statistically, less than 1% of blind in the U.K., and under 10% in the U.S.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'It’s not just humans who are right or left-handed. Most female cats prefer using their right paw and males are more likely to be left-pawed.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Over 290 people have died climbing Mount Everest since 1922. Most deaths occur because of avalanches, and not all bodies have been recovered.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There are only two countries in the world that have the color purple in their flags: Nicaragua and Dominica.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'A bolt of lightning can reach 53,540 degrees Fahrenheit. That’s 5 times hotter than the surface of the sun, which is 10,340 degrees Fahrenheit.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is a village in Russia called Tsovkra where every resident can tightrope walk. It is a tradition that dates back over 100 years but no one knows how it started.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'When Shakira was in second grade, she was rejected by the school choir because her vibrato was too strong. The music teacher told her that she sounded like a goat.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Four of the top seven highest-grossing films of all time were released in 2015. Avengers: Age of Ultron, Furious 7, Jurassic World, and Star Wars: The Force Awakens.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Four Nile crocodiles have been found in Florida. They are the second-largest crocodile and are more dangerous than the native crocodiles and alligators in Florida.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Julius Caesar’s only son, Caesarion, was the last Pharaoh of Egypt. Even though Cleopatra swears he is Caesar’s son, Caesar never officially acknowledged him.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The quietest room in the world in Minnesota is measured in negative decibels – so quiet that you can hear your own heartbeat and your bones moving.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            '“Tsundoku” is a Japanese word for the habit of buying too many books, letting them pile up in your house, and never reading them.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Guinness World Record for the time longest spend searching for the Loch Ness Monster is held by Steve Feltham who camped at Loch Ness for 25 years.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Brain fibers lose 10% of their total length every decade. They can shrink even more so under acute stress.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Chewing gum boosts mental proficiency and is considered a better test aid than caffeine – but nobody knows why.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Per capita, the happiest countries in the world also rank highest in terms of consumers of antidepressants.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Even though Irish is the official language of Ireland, Polish is more widely spoken.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There’s a bar in Yukon that serves a “Sourtoe cocktail”. It consists of a shot of whisky with a human toe floating in the glass. An estimated 60,000 people have had it.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The Stockholm archipelago has more islands than the Pacific Ocean at around 30,000.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Pope Francis has been given many extravagant gifts over the years, and one of them was a Harley-Davidson motorcycle. However, rather than keeping it for his own pleasure and adventures, he sold it off and used the money to benefit homeless people.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In Japan, Domino’s started testing pizza delivery via reindeer in 2016.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The motto on the United Kingdom’s Royal Coat of Arms is in French. The motto is “Dieu et mon droit”, which means “God and my right”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The average household income of the top 1% in the United States is $1,260,508 per year.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Disney sold the streaming right for the original Star Wars films in 2016 to Turner until 2024. Disney has since decided to start a streaming service and has tried asking for the rights back, but Turner refuses every time.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Gaming-related accidents increased by 26.5% during the first 5 months of Pokémon Go being released. This included 2 deaths and $25.5 million in damages.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Helen Keller was related to Robert E. Lee. Her paternal grandmother was second cousins with him.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'During the 1908 Olympics in London, the Russians showed up 12 days late due to the fact that they were using the Julian calendar instead of the Gregorian calendar.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Non-violent attempts to escape Mexican prisons are not punished because “it’s human nature to want freedom”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The line, “Born and raised in South Detroit” in Journey’s “Don’t Stop Believin” actually refers to Canada, not Michigan.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'On one slow news day on April 18, 1930, a BBC radio announcer blatantly said “there is no news”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'If you cut a starfish, it won’t bleed – it doesn’t have blood! Rather, they circulate nutrients by using seawater in their vascular system.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            '12% of the world’s total languages are found in Papua New Guinea, which has over 820 indigenous languages. There are more languages on this island than in any other country.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The hottest temperature ever recorded in Washington state was at Ice Harbor Dam at 118 °F (47.8 °C) on August 5, 1961.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In efforts to undercut the Dreamcast’s sales of the upcoming SEGA release, Sony announced the PlayStation 2 and exaggerated its performance capabilities.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Nepal has the most mathematical flag in the world. It even has an article in its constitution that details the steps of drawing the flag.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Mount Rushmore cost less than one million dollars to construct. It took 14 years to build – from 1927 to 1941 and took 400 workers.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Samsung means “three stars” in Korean. This was chosen by the founder because he wanted the company to be powerful and everlasting like stars in the sky.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'On average, 46.1% of Americans have less than $10,000 in assets when they die.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'While shedding, geckos will eat their skin in order to prevent predators from finding and eating them more easily.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Bees actually have knees. The expression comes from the fact that they store large build-ups of pollen in hairy baskets on their knees.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Between North and South Korea lies 155 miles of no man’s land where hundreds of rare animal species thrive.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'While watching a Merry-Go-Round from a bench in Griffith Park, Los Angeles, Walt Disney was struck with inspiration for the creation of Disneyland.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is a Scottish tartan designed for Mars exploration. It was officially registered in 2016 to be worn during Mars science, exploration and outreach activities.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Santa Claus was issued a pilot’s license from the U.S. government in 1927. They also gave him airway maps and promised to keep the runway lights on.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'When you exercise, the burned fat metabolizes to become carbon dioxide, water, and energy. Meaning: you exhale the fat that you lose.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The word “velociraptor” comes from the Latin words “velox” which means swift, and “raptor” which means robber. Literally – speedy robber!',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The largest stadium in the world is the Rungrado 1st of May Stadium in North Korea. It can hold up to 114,000 spectators. It covers 51 acres and is 197 feet tall.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Polar bears often hunt walruses by simply charging at a group of them and eating the ones that were crushed or wounded in the mass panic to escape. Direct attacks are rare.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The group of spikes at the end of stegosaurid tails are called the “thagomizer”. They had no distinct name until the term was coined in 1982 by a cartoonist.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is a correlation between pulling an all-nighter and snapping out of depression. This is because the brain gets more active the longer it goes without sleep.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Adult cats only meow at humans, not other cats. Kittens meow to their mother but once they get a little older, cats no longer meow to other cats.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'When shuffling a deck of cards, the number of possible arrangements is approximately 8×1067. That’s more than the number of stars in the observable universe.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is a United Arab Emirates’ territory inside an Oman’s territory that itself is inside the United Arab Emirates country. It is called Madha village.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Disappointment Island is an uninhabited island in New Zealand. Over 65,000 pairs of white-capped albatross live there. In 1868, a steel tanker crashed on the island which killed 68 people, leaving the 15 survivors waiting 18 months to be rescued. In 1907, another ship ended up crashing there and 12 men drowned.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'During the entire run of Gilligan’s Island, it was never revealed if “Gilligan” was his first or last name.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Videogames have been found to be more effective at battling depression than therapy.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },

    {
        text: 'Bi-weekly has two different definitions: Twice a week, or once every two weeks.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Mona Lisa was stolen from the Louvre in 1911, which drew more visitors to see the empty space than the actual painting.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is an insurance policy issued against alien abduction. Around 50,000 policies have been sold, mainly to residents of the U.S. and England.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Volvo invented the three-point seatbelt, then gave the invention away for free. They decided it was too important of an invention to keep to themselves.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 2005, Connecticut was accidentally issued an Emergency Alert to evacuate the entire state. Only about 1% of the people actually tried to leave.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'An 18-year old with dwarfism played the 8-year-old Grinch in The Grinch (2000). He passed away two years after the film was released.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Rebecca Felton was the first woman to ever serve for the United States Senate, but she only served for one day.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Webster’s Dictionary accidentally had a word that didn’t exist in it for five years – “Dord”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Amber-colored rear turn signals are statistically proven to reduce collisions by about 28%.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Roselle, a guide dog, lead her blind owner down 78 flights of stairs during 9/11. The descent took about an hour and they both safely made it out.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'It is thought by Russians that eating ice cream will keep you warm.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Somebody hid an episode of South Park inside Tiger Woods 99 as an Easter egg, causing EA to do a massive recall.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Madagascar once was a stomping ground for lemurs which were the size of today’s gorillas.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Underneath the streets of Beijing, there are over a million people who live in nuclear bunkers.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The full name of the famous Chuck E. Cheese’s mouse is Charles Entertainment Cheese.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The American roulette wheel is different from the European wheel. The American one has 2 green spaces while the European one only has 1. Although on both, if you add up all the numbers on a roulette wheel, you will get 666.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The day after Thanksgiving is called “Brown Friday” by plumbers in America because it is their busiest day of the year.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The wife of Anthony Perkins, the original Norman Bates, Berry Berenson died as a result of being a passenger on one of the 9/11 planes.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The thumbs-up sign is believed to have originated from Chinese pilots. It was used to communicate with the ground crew before take-off.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In Toy Story 2 in the scene where Buzz gives a speech in front of the American flag, the flag was edited to be a globe for release in non-American countries.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The tallest mountain in our solar system, Olympic Mons, is 3 times taller than Mount Everest.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Batman and Predator exist in the same fictional universe. Since 1991, they have been featured together in three comic books.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'A study from Harvard University finds that having no friends can be just as deadly as smoking. Both effect levels of a blood-clotting protein.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In South Dakota, you can get a driver’s permit at age 14 with parental consent. Once you turn 16, you can get your license.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The Backpack Kid’s real name is Russell Horning.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 2017, Adidas sold over 1 million pairs of shoes made from recycled ocean plastic, each pair taking 11 plastic bottles to make.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The British Pound is the world’s oldest currency still in use at 1,200 years old. The pound has been an identity as a symbol of British sovereignty.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The world’s smallest mammal, a Bumblebee Bat, weighs about the same as a U.S. dime. Native to Myanmar and Thailand, these bats are endangered.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'As of December 2018, The Itchy & Scratchy Show that takes place within The Simpsons has 107 episodes.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Will Smith owed $2.8 Million to the IRS and almost went bankrupt, just before he signed the contract for The Fresh Prince Of Bel-Air.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Great Pyramid of Giza actually has eight sides, rather than four. All of the other pyramids have just four sides.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'English is not native to the British Isles. It was brought to Britain in the mid 5th to 7th Centuries by German, Danish, and Dutch settlers.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'When we’re born, the only innate fears we have are the fear of falling, and the fear of loud sounds. All other fears are learned.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In Korea, there is a breed of dog called a Sapsali which was originally thought to banish ghosts and evil spirits.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Qantas Airways once powered an interstate flight on cooking oil. This marked Australia’s first commercial flight using sustainably derived biofuel.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Berries are simple fruits stemming from one flower. This means that pineapples, bananas, watermelon, pumpkins, and avocados are berries.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'One horse can have approximately 15 horsepower. Horsepower is about 746 watts. The term was coined in the late 18th Century.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Leaning Tower of Piza is tilted because of the soft soil that it’s built on – which has also protected it from at least 4 powerful earthquakes.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'All the paint on the Eiffel Tower weighs the same as ten elephants. It gets repainted every seven years without closing to the public.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'All new FBI special agents and intelligence analysts are required to visit the United States Holocaust Memorial Museum.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'While dinosaurs roamed the earth, they lived on every continent including Antarctica.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The blue whale’s heart is the size of a VW Beetle and weighs up to 1,000 lbs (453 kg).',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'One of the most widely used symbols for medical assistance is actually the Swiss flag and not a medical symbol.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Until 2007, slavery was legal in Mauritania. Even still, 1-4% of the population is still living as slaves.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'A man named Ronald MacDonald robbed a Wendy’s in 2005.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The longest unbroken alliance in world history is between England and Portugal. It has lasted since 1386, and still stands today.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Before finally being accepted, J.K. Rowling’s original Harry Potter pitch was rejected by 12 publishers.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Japanese term for a Shotgun Wedding is “Dekichatta kekkon”, which literally translates to “oops-we-did-it-marriage”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Garlic is known to attract leeches.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 1992, a shipping crate containing 28,000 rubber duckies fell overboard. They washed up around the world for the next 20 years.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'After the release of the 1996 film Scream, which involved an anonymous killer calling and murdering his victims, Caller ID usage tripled in the United States.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Aeroflot Flight 593 crashed because the pilot let his kids fly the plane, who unknowingly disengaged the autopilot function. The crash killed everyone on board.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'It takes Uranus 84 years to orbit the Sun once.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'A 26 sided shape is known as a rhombicuboctahedron.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Mob boss Vincent Gigante used to wander around New York in his bathrobe to convince the police he was insane and avoid capture.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The military has used silly string to detect tripwires in Iraq. Before entering a room, they can squirt it inside. If it hangs in the air, it may have revealed a wire.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'By applying even pressure on an egg, it is nearly impossible to break the shell by squeezing it.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'So far, two diseases have successfully been eradicated: smallpox and rinderpest. The last case of smallpox was in 1977, and the last of rinderpest was in 2001.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'A recently discovered deep-sea snail, the Scaly-Foot Gastropod, has a shell that is impressively developed. So much so, that the U.S. military is trying to use its design to inspire defensive layers in military armor.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'There are over 6,000 known species of grass.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The total weight of all air on Earth is 11 quintillion pounds.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            '“Time anxiety” occurs in a person when they are perpetually afraid of being late, or of others being late.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Ant queens can live for up to 30 years.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In 2014, Princeton researchers determined that Facebook would lose 80% of its users by 2017.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Orlando Bloom has swinophobia, which is a fear of pigs!',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Eight of the ten largest statues in the world are of Buddha’s.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Meghan Trainor has Nyctophobia, which is a huge fear of the dark.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Garrett McNamara holds the record for the largest wave ever surfed, set in 2011 in Nazare, Portugal. The wave was 78 feet tall.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The logo on the Red Bull cans are not cattle, but a type of bovine called a “gaur”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In Bruges, Belgium, there an underground pipeline that runs 2 miles to transfer beer from a brewery to the bottling plant.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The collective group of lemurs is called a conspiracy.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The first Primark store opened in Dublin in June 1969 under the name Penney’s.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Ron Swanson’s character on Parks and Recreation is based on a real person – a woman who works in a high bureaucratic position who is also anti-government.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Captive tigers in the U.S. alone outnumber the amount of wild tigers worldwide.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The 1831 London Bridge was sold in 1962 when it needed to be replaced. It was bought by Lake Havasu City, Arizona, to help tourism.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Scrappy-Doo, widely considered to be one of the most hated characters in fiction, has not appeared in an animated Scooby-Doo production since 1988 due to audience backlash.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The first X-rated animated movie was Fritz the Cat. It is still the most successful independent animated feature to date.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Roughly 33% of cats are not affected by catnip. The euphoric reaction commonly associated with catnip is hereditary.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Facebook will track and record nearly everything you do if you browse the web while logged in to your Facebook account.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Bubble wrap was originally invented to be wallpaper. The creators tried to make plastic wallpaper with a paper backing, but it came out with plastic backing.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The longest Cricket Test match lasted over 12 days between England and South Africa. It only ended because the English team would have missed their boat home.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'MIT, often cited as one of the world’s most prestigious universities, puts almost all of its course materials online for anyone to access for free.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Albert Einstein had mastered calculus by the tender age of 15.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Madagascar got its name when Marco Polo misspelled it. The name stuck and the island was christened to the name in 1500.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Tom Hanks had an asteroid named after him which was called “12818 tomhanks“.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The number of stars on the EU flag doesn’t represent anything. 12 stars were chosen as a number with no political association and as a symbol of unity.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'High heels are nothing new to the world. In the 18th Century, they were fashionable even for children.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Elephants think people are cute, the same way people think puppies or kittens are cute.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Cats which have blue eyes for the duration of their lives are likely to be deaf.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The manager of Guinness started the Guinness Book of World Records when he got annoyed that he couldn’t find out what the fastest game bird was ever recorded.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Barry Manilow wrote many famous jingles for companies like McDonald’s, State Farm, and BandAids.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'One of the smartest bird species is the magpie. They can even recognize themselves in mirrors.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In order to keep Nazis away, a Polish doctor faked a typhus outbreak. This strategy saved 8,000 people.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The atomic number of zinc is 30.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The tall chef’s hat is called a toque.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There’s very little evidence the TSA has ever stopped a terrorist or found a real bomb. When tested, they failed to find fake weapons and bombs 95% of the time.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In the United States, each person owns an average of seven pairs of blue jeans. That’s one for every day of the week!',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Whenever Charles Dickens was away from home, he would always realign the bed he was sleeping in to face Northwards, as he felt that this fostered and unlocked his creativity.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The Shawn Mendes EP reached Number 1 on iTunes in 37 minutes.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Since 1990 the United States has added more acres of forest than it has lost, with almost 20 million new acres of forest land added in the last 2 decades.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is a liquid that you can breathe in called perfluorohexane. Animals can be submerged in a bath of perfluorohexane without drowning.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Feeding curry to a sheep reduces the amount of methane in its farts by up to 40%.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'During a conversation each speaker’s “turn” averages 2 seconds, and the pause in between only 200 milliseconds. That figure is nearly universal.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Cold showers have more health benefits than hot or warm showers. These include improving circulation, stimulating weight loss, and easing depression.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Despite being landlocked, Mongolia has a navy consisting of seven men and one vessel, the “Sukhbaatar III“, stationed on Lake Khövsgöl.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'During the Second World War, German tank drivers would drive their vehicles over camel droppings, thinking it would bring them good luck.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In Alabama, it is illegal to participate in shooting, hunting, gaming, card playing, or racing on Sundays. The fine ranges from $10 to $100.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Originally, bumper cars were not supposed to hit each other. Drivers were actually supposed to avoid crashing in spite of chaotic driving. The first company to patent a bumper car was in 1920 named Dodgem.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'A woman was elected to the House of Representatives four years before women even won the right to vote.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In the Netherlands version of Sesame Street, instead of Big Bird, they have a bluebird named Pino. He was later established as Big Bird’s cousin.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The full Bible has been translated into over 3,000 languages. Among those include fictional languages like Elvish, Klingon, and Na’vi.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The voice of Stargazer in Mass Effect 3 was done by Buzz Aldrin.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The first 4th of July celebration was in 1777.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Justin Bieber’s first tweet was at 8:27 pm on May 11, 2009.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Snakes and lizards both molt out of their old skin as they grow. Investigators have come to the conclusion that dinosaurs may have also molted.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Zebras have only one toe on each foot.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Humans have been performing dentistry since 7000BC, which makes dentists one of the oldest professions.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Originally, the Pokémon Vulpix was going to be called “FoxFire”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The first-ever documented feature film was made in Australia in 1906.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Ancient Roman surgeons were trained to block out the screams of human pain.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'William Hung, made famous for his appearance on American Idol singing “She Bangs“, is a 73rd generation descendant of Confucius.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'From 1937 to 1953, NBC’s Today Show had a chimpanzee co-host named J. Fred Muggs. It is estimated he brought in the network around $100 million.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Because snow is composed of ice, it can be classified as a mineral. Water, however, does not fall under the same classification and is not a mineral.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Of the 9,000 Blockbuster stores that existed in the early 1990s, at least 10 Blockbusters are open across the U.S. Seven of those are in Alaska.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is a geocache on the International Space Station placed in 2008. It has since been visited four times by other astronauts.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Vatican had music that was forbidden to be copied and was only played twice per year. It was secret for almost 150 years until a 14-year-old Mozart heard it and transcribed it from memory.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Canada eats more macaroni and cheese than any other nation in the world.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Octopuses only touch in situations of mating or aggression. Female octopuses sometimes do both, strangling and eating the male after mating.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Scotland wanted to replicate the Parthenon bigger and cheaper in 1826. It was never completed and is now nicknamed “Scotland’s Disgrace”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'A French general gave John Quincy Adams a pet alligator. Adams kept it in one of the White House bathtubs and enjoyed showing it off.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In 1866, The United States purchased Alaska from Russia for $7.2 million by writing a check.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In the Philippines, you can buy spaghetti at McDonald’s, where they also sell a “McDo” piece of chicken.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Though most think it’s Italian, pepperoni is an American invention. The first use of the word dates back to 1919.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The pumpkin is a member of the cucurbit family, which are gourds, such as cucumbers and squashes.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Any prime number higher than three, when squared and subtracted by one, will always turn out to be a multiple of 24.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'When dogs are first born, they are completely blind & cannot hear anything. The first sense which they develop is the sense of touch.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Margherita Pizza uses tomato, mozzarella, and basil toppings to represent the Italian national flag. It was originally to honor the Queen of Italy in 1890.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Sudan has more pyramids than any country with 255. They outnumber Egyptian pyramids by twice the amount.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The money for the Statue of Liberty came from fundraising from auctions, a lottery, and boxing matches in Europe and the U.S. The Statue cost the French about $250,000, which today would be over $5.5 million dollars.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Not all hamsters are small. Although some hamsters are as small as 2-4 inches, the largest ones are approximately 13 inches long.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The hand and footprints in front of the Chinese Theater tradition started accidentally when silent film actress, Norma Talmadge stepped on wet cement.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Snakes can help predict earthquakes. They can sense a coming earthquake from 75 miles away, up to five days before it happens.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Soviet Russia needed lighthouses on their uninhabited Northern Coast, so they built automated lighthouses powered by small nuclear reactors.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Animal’s yawn based on how large their brain is. The bigger the brain, the longer they will yawn.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Before Apple bought Siri, it was originally going to be released as an app for Android & Blackberry.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Approximately 1 in every 2,000 babies already has a tooth when they are first born.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Young America Township in Minnesota has a population of less than 1,000, but more than 20 zip codes.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The United States Department of Agriculture says the official definition of a sandwich is: “at least 35 percent cooked meat and no more than 50 percent bread”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Nutella was invented during WWII when an Italian pastry maker mixed hazelnuts into chocolate to extend his chocolate ration.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The original name for Xbox was DirectXbox designed to show how Microsoft’s Direct X graphics could improve the console market.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In Switzerland, it is illegal to own just one guinea pig. This is because guinea pigs are social animals, and they are considered victims of abuse if they are alone.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Walter Hunt, a man from America, invented the safety pin back in 1849.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The highest recorded fall without a parachute happened in 1972 at 33,333 ft. The victim, Vesna Vulović was in the hospital for 16 months after the fall.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'A mason in 1700’s Jerusalem left his wooden ladder behind after doing some work on a church and now it can’t be moved without the agreement & permission of six different Christian leaders.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Eminem’s mother filed an $11 million defamation lawsuit against him because of his lyrics about her. She settled for $25,000 and $23,354.25 of that went to her lawyer.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'San Marino is the fifth smallest country in the world (and the third smallest in Europe).',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'A woman faked her entire tragedy and the loss of her husband during the 9/11 attacks and became President of the Support Network in New York.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Postal Service got its name based on the fact that they originally used USPS to send each other music tracks because of conflicting schedules.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'December 3rd is known as “Roof Over Your Head Day” – a day to be grateful of what we have in life!',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Alaska is the only state in America that can be typed on one row of a traditional English QWERTY keyboard.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Michael Jackson’s shiny glove was actually just a modified golf glove.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The spiked dog collar was invented by the Ancient Greeks to protect their dogs from wolf attacks.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Mr. and Mrs. originated from using the words master and mistress.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The only difference between kosher salt and table salt is the grain size. Kosher salt is smaller, and they both come from underground salt deposits.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Invented in 1923, Q-Tips were originally called Baby Gays; then Q-Tip Baby Gays, then finally just Q-Tips. The Q stands for quality.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: '1912 saw the last Olympic gold medals made entirely out of gold.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Every 10 years, the human skeleton repairs and renews itself. Essentially, you have different bones now than you did 10 years ago!',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The first game to be played in space was Starcraft – Daniel Barry took it with him in 1999 on the Space Shuttle mission STS-96.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Houston is the most diverse city in the United States. As of 2010, 43.8% is Latino, 25.6% is White, 23.1% is Black, and 6% is Asian.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'May 29th is “National Put a Pillow on Your Fridge Day“. It is celebrated in Europe & USA to bring luck & wealth to the household.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'When water freezes to ice cubes, it will take up 9% more volume.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The little piece of paper sticking out of a Hershey’s Kiss is called a niggly wiggly.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'As a child, Jet Li performed with the Chinese National Wushu Team for President Nixon. Nixon asked him to be his personal bodyguard, but he declined.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Eating grapefruit can restrict the effects of 43 different kinds of medications.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Dinosaurs would swallow large rocks which stayed in their stomach to help churn and digest food.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The word robot comes from the Czech “robota”. This translates into forced labor or work.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'During 1943, U.S. officials imposed a short-lived ban on sliced bread as a wartime conservation measure. It lasted less than 3 months.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Abraham Lincoln loved cats and once let one eat from the table during a formal White House dinner.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Canadian government isn’t sure when Canada became a sovereign state. Its Supreme Court ruled that sovereignty occurred sometime between 1919 and 1931.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'On April 1, 2005, NASA pulled an April Fool’s prank telling the world that they had found water on Mars.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There’s a town in the Oklahoma panhandle named “Hooker” and its slogan is “it’s a location, not a vocation”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Japan is facing a ninja shortage. There is a high demand for “ninja shows”, but it is a dying tradition and companies have trouble time finding properly trained ninjas.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'New Jersey had 4 Governors in the span of 8 days in early 2002. The shortest term of those was served by John Farmer Jr. for 90 minutes.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'George Miller – the person who created Mad Max is the same person who created Happy Feet.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Surgeons who play video games at least 3 hours a week perform 27% faster and make 37% fewer errors.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In Svalbard, a remote Norwegian island, it is illegal to die.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'When cellophane was invented in 1908, it was originally intended to be used to protect tablecloths from wine spills.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'A Dutch start-up company has been able to start training wild crows so that they pick up cigarette butts and put them in bins for a peanut as a reward.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'We feel “hangry” because it’s harder for us to control our emotions when our brains are low on glucose.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The mayor of a historical district in Alaska is a cat named Stubbs. Mayor Stubbs drinks catnip laden water from a wineglass every afternoon, at a local restaurant.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Spam mail got its name from the canned meat after a Monty Python skit that made fun of Spam as tasting “horrible and being ubiquitous and inescapable”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Humans specifically have eyes that face forward for the purpose of seeing in 3D. On the other hand, vegetarian dinosaurs such as the Triceratops, had eyes that looked out to the side so they could stay vigilant watching for danger as they ate.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In the 1980s, the founder of Pringles, Fredric Baur, requested to be buried in a Pringles can. His children honored the request.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'You can now get a headstone with a QR code. Called “Living Headstones”, they show pages with photos, video biography’s, and comments from loved ones.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'While filming Dumb and Dumber, Jim Carrey had his crown temporarily removed – that chipped tooth is real and a result of a childhood fight.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Ginger beer is brewed and fermented with ginger, while ginger ale is merely carbonated water flavored with ginger.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'During the first live iPhone presentation, Steve Jobs had to frequently switch phones behind his desk. Otherwise, it would run out of RAM and crash.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In Mississippi, it is considered a federal offense to Dine-n-Dash on a check that is over $25. In California, it is only petty theft.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The NYPD had a police officer follow Andre the Giant whenever he went out drinking. This was to make sure he didn’t get drunk and fall on anyone.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In the popular film, The Godfather, the word “mafia” is never said because the actual mafia commanded it.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The only window that opens on the presidential car is the driver’s window, to pay tolls. It also has no keyholes, and only the Secret Service knows how to open the doors.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Thomas Edison invented an electric pen in 1876 that was later adapted to become the first tattoo machine in 1891.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Animal Planet aired two fake documentaries that “proved” mermaids exist. So many people thought it was real that the U.S. government issued an official statement about it.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 18th Century England, having a pineapple was a symbol of wealth because of high import fees. They would be used as displays instead of being eaten.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Marvel’s Deadpool issue #27 holds the Guinness World Record for the most comic book characters on one cover.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Instead of an agent, Bill Murray uses a 1-800 number where you can leave a message for him if you want to cast him for a movie or event.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'When written down, the word “almost” is the longest word in the English language to have all of its letters in alphabetical order.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The black-footed cat is the smallest wild cat, at just 20 inches long.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The world’s most remote ATM is run by Wells Fargo in the Antarctic. The ATMs serve around 1,200 residents at the U.S. scientific facility.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The first Game Boy could run for a staggering 30 hours on only two AA batteries!',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Hershey’s chocolate syrup, Ritz Crackers, DumDums, and Oreos are all suitable for vegans.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The sound of a Star Wars lightsaber was created by pairing together the sound of an idle film projector and the buzz from an old TV set.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Your tonsils can grow back if there was tissue left behind during the removal process. Sometimes it’s accidental, other times it’s left on purpose.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Greenland voted to leave the European Union in 1985 and has not rejoined since.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Every second, the human eye moves about 50 times.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There’s a reply to the saying “Liar, liar, pants on fire” – It’s “I don’t care, I don’t care, I can buy another pair”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Only 2% of the world’s population has green eyes.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The A.D. and B.C. system was not proposed until 525 A.D. by a monk. However, it was not widely used until the 9th Century.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Daniel Radcliffe had the same stunt double for the first six Harry Potter movies – until the double was paralyzed from an accident on set during the filming of the 7th movie.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            '“Tater Tots”, a registered trademark, originally failed because people thought the product was too cheap. Popularity rose after the price was raised.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Movie theaters make roughly 85% of their profit off concession stands. This is because ticket revenues have to be shared with the movie distributors.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'By mixing nonoplatelets from carrots and other root vegetables, concrete mixtures can be significantly strengthened, meaning less cement is needed to achieve the same effect.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Honey, and items immersed in honey, can be preserved for centuries. The long shelf life is due to an enzyme found in the stomachs of bees.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Credit card EMV chip technology has been around since 1986. It was first implemented in France, with Germany following shortly after.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The odds of being born on February 29th are 1 in 1461.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'People who donate blood in Sweden are sent a text message each time their blood saves a life.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In the U.S., around ¾ of all houses possess at least 1 jar of peanut butter.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            '30 of the first 31 popes were murdered. Most of them were martyred, but not all causes of their deaths are known.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The average U.S. household has 300,000 things, from paper clips to ironing boards. U.S. children make up 3.7% of children on the planet but have 47% of all toys and children’s books.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The commonly known phrase “to a T”, means something that fits just right. Interestingly enough, this expression derives from a similar phrase “to a tittle”, which is a small mark that is used in spelling norms, like the dots of i’s or j’s, or an accent mark.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Both Motel 6 and Super 8 got their names from the original prices of the rooms. Motel 6 started at $6 in 1962, and Super 8 at $8.88 in 1974.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'About 25% of all blood from the heart goes into the kidneys.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In Israel, it is illegal to bring bears to the beach.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Rednex, the band who remixed and popularized Cotton Eye Joe, is not Southern, but Swedish. They all have Southern-sounding stage names.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'BuzzFeed sponsored content costs about $20,000 for five or six “articles”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Comets only reflect 4% of the light that falls on them, the rest is absorbed.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The name for the shape of Pringles is called a “Hyperbolic Paraboloid”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Writing down your worries before taking an exam can help combat test anxiety, improve performance and boost your test scores.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The highest body count in film history goes to “Lord of the Rings: Return of the King” with 836 on-screen deaths.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is an uninhabited island in the Bahamas known as Pig Beach, which is populated entirely by swimming pigs.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'While filming Rocky IV, Lundgren hit Sylvester Stallone for real and he ended up in the hospital for nine days.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'For almost 15 years, Vermont was technically its own country before joining the United States in 1791. It had its own coins and postal service.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'An adult’s kidney weighs about 5 ounces (142 grams) and is the size of a fist.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Without saliva, humans are unable to taste food.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The German Autobahn has no speed limits because Western Germany saw them as a Nazi relic. This became effective in 1972.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'If you ate nothing but rabbit meat, you would die from protein poisoning. This would be a mixture of too much protein and an absence of fat in the diet.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The loudness of a monkey is relative to the size of its testicles. Researchers found that the smaller the testicles, the louder the monkey.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Every Pixar movie contains a reference to the Pixar movie that comes after it.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Joe Arridy had an IQ of 46 and is known as the “happiest prisoner on death row”. He went into the gas chamber with a smile. It turned out he was innocent.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There exists a plankton, Dinoflagellates, which if consumed, reverses your feeling of hot and cold – as well as hallucinations. Symptoms can last from weeks to years.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Red pandas have no living relatives – they aren’t even related to giant pandas.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'After Christianity, the largest religious affiliation in the U.S. is Judaism.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Ewok Jerky was a popular snack across the Outer Rim in the Star Wars Universe.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Italy built an entire courthouse to prosecute the Mafia. They charged 474 members in a trial that lasted from 1986-1992. To date, it was the biggest trial in the world.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Doug Engelbart created the very first computer mouse from wood in 1964.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The smallest thing ever photographed is the shadow of an atom.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Despite Mercury being the closest planet to the Sun, Venus is the warmest planet.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'There is no visual differences between male and female herons.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Cranes are built using cranes.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In the popular 2014 movie “Godzilla“, the Godzilla portrayal was only seen for about 8 minutes in the entire film.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In every scene of Fight Club, there is a Starbucks coffee cup.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'It snowed in the Sahara desert for 30 minutes on February 18, 1979.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'PewDiePie supported his YouTube channel by selling hot dogs. His persistence paid off when in 2012 his YouTube channel garnered over one million subscribers.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Approximately 1,000,000 dogs in the U.S. are named as the heirs of their owners’ wills.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'It takes longer to drown in salt water than in freshwater. Because of this, around 90% of drownings occur in freshwater.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Employees at MillerCoors get three free cases of beer each month, in addition to having access to beer and cider on location after a work day.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Steven Spielberg was executive producer of The Animaniacs.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Kanye West’s song “Hey Mama” was dedicated to his mother, who died in 2007 after complications with plastic surgery.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'More than 90% of survivors of the 9/11 terror attacks delayed evacuation to save their work, shut down computers, change shoes, or visit the bathroom.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Queen Elizabeth saved up post-war clothing ration coupons in order to pay for her wedding dress in 1947.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Sweden has the most islands in the world, with 221,800 islands.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Although dingoes are about the same size as a Springer Spaniel, they are brave enough to target an adult kangaroo when hunting in packs.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'If you keep smelling something that is not really there, you may be experiencing the earliest symptoms of schizophrenia.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'When George Washington died, Napoleon Bonaparte of France gave a personal eulogy and ordered a ten-day mourning period for France.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Since the death penalty was restored in 1976, the states of Washington and New Hampshire have returned to hanging as an available method of execution.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Even though drugs are officially illegal in the Netherlands, it is legal to be under the influence of any drug to encourage people to seek medical help.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The first world leader to create a YouTube channel was the British Prime Minister, Tony Blair who made his account in 2007.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Rick Astley has his own brand of beer. It was a collaboration between him and the Danish microbrewery Mikkeller; it’s a red lager with “a hint of ginger”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The total spend on adult Halloween costumes each year in America is $1.5 billion.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'When double rainbows occur, the colors of the second arc are always reversed.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Bookworms are actual insects that bore holes in books. A major book feeding insect is a paper louse that feeds on microscopic mold in poorly kept books.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            '3 inches of ice can support one person, on foot. 4 inches can support a group of people, single file. 36 inches can support up to 110 tons of weight.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'January 17th is known as “Ditch New Year’s Resolution Day”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Dinosaurs that could run using just two legs are referred to as bipeds.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Russia has the most man-made satellites in orbit with 1,324. There is a total of 2,271 and the U.S. is in second place at 658.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The most difficult Chinese character requires 62 total strokes to write. The word itself, “biang” holds no meaning.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In order to protect themselves from poachers, African Elephants have been evolving without tusks, which unfortunately also hurts their species.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'A certain type of box jellyfish’s venom will make you feel a strong sense of anxiety and sense of impending doom. These symptoms can last up to two weeks.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The island in Lake Bled is the only natural island in Slovenia.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In Switzerland, it is illegal to flush the toilet after 10 pm.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'If sheep have long tails when they are born, the tails are cut off in order to prevent infection.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The name for a collective group of rhinoceroses is called a crash.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Because of the Electoral College, a presidential candidate can win with only 23% of the popular vote.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There was a snail glued to a specimen card in the British Museum mid-1800s. It spent four years glued there before scientists realized it was still alive.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'August 21st is Senior Citizen’s Day – a day to honor the older generation.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'William Shakespeare had a curse engraved on his tombstone to prevent anyone from moving his bones.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Acetaminophen, one of the most popular pain-killers, restrains masculinity and dulls emotions. It had been rejected in 1887 for its side effects, then approved in 1955.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The Twenty One Pilots fan base is known as the Skeleton Clique.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'A man who was hanged for his part in the Guy Fawkes Gunpowder Plot had his skin removed and it was used to bind a book that listed his offenses.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Valentine’s Day in South Korea is a little different. Only women give gifts, not men.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },

    {
        text: 'Cookie Monster’s real name is Sid.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'At any given moment, there are 1,800 thunderstorms happening on Earth. This amounts to 16 million storms each year.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'March 3rd is known as “What if Cats and Dogs Had Opposable Thumbs Day”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'While writing the famous song, “Hallelujah“, Leonard Cohen originally wrote 80 verses for the song which he sometimes interchanges in and out depending on where he’s playing.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'People can suffer from a psychological disorder called Boanthropy that makes them believe they are a cow.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Hugh Jackman often will tell paparazzi where he is when he goes home to Australia so they can get their photos then leave him alone for the rest of his visit.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The “Lost” pilot was so expensive (over $10 million) that the Chairman of ABC was fired for green-lighting the project.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The largest living thing on earth is a giant sequoia named General Sherman.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Tupac was the first U.S. artist to have an album reach Billboard #1 while still in prison. It was his third studio album, titled “Me Against the World“.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'If you multiply 1089 x 9 you get the exact reverse, 9801.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'August 17th is known as Black Cat Appreciation Day.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Saturn is so big that Earth could fit into it whooping 755 times!',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            '“Rap God” by Eminem packs 1,560 words into a 6 min 4 sec song. It holds the world record for most words in a hit single.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'A water dropwort is a highly poisonous plant. If it kills you, it can cause you to smile after you die. This is called a sardonic grin.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'There is a British chocolate scientist who insured her taste buds for £1 million.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Kraft singles cannot be advertised as cheese because U.S. FDA standards state a food can only be identified as cheese if it contains “at least 51% real cheese”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'When the Titanic sank in 1912, there were 3 dogs that survived. They had all been traveling with their owners in the First Class cabins.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'China has a series of underground tunnels running 3,000 miles long. They are used to store and transport mobile intercontinental ballistic missiles.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Pitbulls rank high among the most affectionate and least aggressive dogs. Pitbulls are only aggressive when forcibly trained as such; usually for illegal dogfighting.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Using tanning beds before age 30 increases your risk of developing melanoma by 75%. Tanning beds and lamps are in the highest cancer risk category.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'When Blackbeard captured ships, many of the African slaves on board would go on to become pirates. When he died, nearly one-third of his total crew were former slaves.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Poodle is one of the cleanest breeds of dogs, making them a great choice for people with pet allergies. They don’t molt much at all, and they rarely smell either.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Owls have specialized feathers where the edges protrude out to dissipate airflow. This means that they are able to fly silently and are highly deadly hunters.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'A man, Ben Sliney, grounded 4,000 commercial planes across the United States on 9/11 due to the attacks – it was his first day on the job.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'California law does not allow or prohibit lane splitting – when motorcycles pass other vehicles within the same lane.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In California, you can get a ticket if you’re driving too slow.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Malta’s official language is Maltese; however, the majority of the population also speaks English.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'More civilians died in the Battle of Stalingrad than the nuclear atrocities at Hiroshima and Nagasaki combined.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Your brain uses 20% of the total oxygen in your body.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Both KitKat and Rolo is produced globally by Nestlé, except in the U.S. where it’s made by their competitor, Hershey’s.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'When electricity was first installed in the White House in 1891, President Benjamin Harrison and his wife were afraid of electrocution because of the new concept. They refused to touch light switches so the staff had to turn the lights on and off for them.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: '35,000 hectares of peas are grown in the UK in a single year.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 2007, a 1000-gallon inflatable swimming pool was stolen from someone’s back yard without a single drop of water being found!',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Both U.S. and Soviet militaries have trained dolphins. They can be used for rescuing lost naval swimmers and locating underwater mines.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Being in a negative relationship can weaken your immune system.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'October 19th is “Evaluate Your Life Day” – a day to think about your situation in life & wonder how it could be improved. Be sure to weigh the good and bad!',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The total population of insects is estimated to be a billion times greater than that of the human population.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Snoop Dogg’s real name is Cordozar Calvin Broadus Jr. His “Snoop Dogg” nickname came from his mother who thought he looked like Snoopy from the Peanuts.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'When the historic Plaza Hotel in NYC opened in 1907, a room cost $2.50 per night, the same as $64.26 today. The Plaza now charges over $1,000/night.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Originally, the Eiffel Tower was going to be erected in Barcelona, but the project was rejected because citizens thought it was an eyesore.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The world’s longest place name has 85 letters & is located in New Zealand.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'An amateur beekeeper and a group of scientists found that wax worms are capable of eating and breaking down plastic bags. The settings of a wax worm’s stomach can be recreated to safely dispose of plastic bags and bottles.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Long ago, people chewed on tree bark as a method of pain relief. Willow bark has a high amount of salicylic acid, an ingredient still used in aspirin today.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The oldest “your mom” joke was discovered on a 3,500-year-old Babylonian tablet in Iraq in 1976. The tablet has since been lost, but the text remains preserved.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Kangaroos keep growing until they die. They are the world’s largest marsupial.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 1923, a jockey suffered a fatal heart attack but his horse finished and won the race, making him the first and only jockey to win a race after death.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'A red blood cell takes only about 20 seconds to make a complete circuit through your body.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Iceland was chosen as the training ground for Apollo astronauts because it was the most “moonlike” surface.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'A polygon with 30 sides is a triacontagon.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The shower-curtain effect is the phenomenon in which a shower curtain gets blown inward with a running shower. Scientists don’t know what causes this.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The KKK headquarters were purchased by the Catholic Church then turned into a church.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'After a waitress at a pizzeria helped a customer choose the numbers for a winning lottery ticket in 1984, he “tipped” her $3,000,000 – half of his $6,000,000 prize money.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Jack Gilinsky is Jewish.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'While most people think of Neil Patrick Harris as an actor, he is also a writer, producer, comedian, singer, and even amateur magician!',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Part of the Falklands Islands is littered with leftover landmines from the Falklands War. This stretch of beach has become home to over 1 million penguins as they are too light to trigger the mines when walking on them.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Young Tyrannosaurus rex‘s probably had a thin coat of downy feathers to stay warm. They did not need them as they got older due to their size.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The first jet aircraft was invented in Nazi Germany. Development started in 1936, but the first takeoff occurred in 1939.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'If you were to have your picture taken by the very first camera, you’d need to sit still for 8 hours.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Of the top 20 most-watched TV broadcasts in the United States, 19 were Super Bowls, and the other was the 1983 finale of M*A*S*H.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'English accounts for 50% of visited webpages, even though the amount of English users is only 26%. Russian accounts for the 2nd most visited pages at only 6%.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In season 5 of Breaking Bad, Aaron Paul (Jesse) was paid $150,000 per episode.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'September 25th is known as “World Dream Day” – a day about chasing your dreams, no matter how big or small they may be!',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'A snail can sleep for 3 years.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Since 1497, the United Kingdom has printed their laws on vellum, made from calf or goat-skin. They continue to do this in order to uphold the tradition.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Steven Spielberg and George Lucas wanted to make an animated Calvin and Hobbes movie. The author declined because he wanted to protect the integrity of the comic.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In New Delhi, if a tree falls sick, an ambulance is dispatched to treat them. This came into effect in 2009 and takes four people to do the job.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 1998, David Bowie released an internet provider called BowieNet. Subscribers were offered exclusive content and a BowieNet email. It was shut down in 2006.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The 6th largest pyramid in the world is a Bass Pro Shops in the Memphis Pyramid. At 32 stories tall, it also has the tallest freestanding elevator in the U.S.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Ben & Jerry’s has an online flavor graveyard for their 10 discontinued ice cream flavors. Each one has a photo, life span, and epitaph.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Females are better at distinguishing colors, while males excel at tracking fast-moving objects and discerning detail from a distance.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'During the Aztec reign, a slave could be bought for 100 cocoa beans.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The average temperature of a beehive is the same as a human body. Bees flap their wings to regulate heat.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The famous Lacoste crocodile symbol was created in 1933, and was the first designer logo ever.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Each day on Neptune lasts for around 16 hours, 6 minutes and 36 seconds.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            '“Infantry” sounds like “infant” as typically in ancient times an army’s infantry consisted of soldiers too young or too inexperienced to ride a horse and be part of the cavalry.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The fear of vegetables is called Lachanophobia.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'During the cremation process of a 500 pound body, the corpse was so obese that it set the crematorium on fire.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In English, twelve is the largest number that has just one syllable.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Out of the 400 species of parrots, there is only one that can’t fly, called the Kakapo parrot.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Calling “shotgun” when riding in a car comes from the term “shotgun messenger”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Dogs with pointed and long faces tend to live longer than those which have flatter faces, such as pugs.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 2005, Frito-Lay launched Cheetos Lip Balm, but it was quickly taken off the market due to its failure.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The average human heart beats 3.6 million times a year.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The average life expectancy of a toucan is a very impressive 20 years.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'A standard 12oz jar of honey take 864 bees to produce.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            '7% of all American adults believe that chocolate milk comes from brown cows. That works out to 16.4 million people.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Marie Antoinette’s last words were to her executioner after accidentally stepping on his foot, saying, “Pardon me sir, I meant not to do it”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In Japan, many families eat a KFC for Christmas Dinner. Many people order their meals months in advance and queue for hours to collect them.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Arctic and Antarctic trace their names to the simple meanings of “Bears” and “Opposite the Bears”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Your earlobes line up with your nipples.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Jupiter completes a rotation of the Sun every 11.86 years.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Hanson made a beer called “Mmmhops”. They give away a free song with every bottle.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Using a hands-free device to talk on the phone while driving is shown to be equally or more dangerous than driving drunk.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Even a small amount of alcohol placed on a scorpion will make it go crazy and sting itself to death.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The first roller coaster was used to transport coal down a hill. After people found that it could reach speeds up to 50 miles per hour, tourists asked to ride on it for a few cents.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Monster in Frankenstein was never actually named, although the Monster itself proposed the name “Adam”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'At one point, 50% of the CD’s produced worldwide had an AOL logo on it. The cost for the marketing campaign was in the billions – and it worked.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There are 30 times more trees on Earth than there are stars in the Milky Way. It’s estimated that there are 100 billion stars, and 3 trillion trees.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The first spacecraft to visit Mars was Mariner 4 in 1965.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'According to Biblical Scholars, Jesus was more than likely born in a cave not a stable as the tale says.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The process by which bread toasts is called the “Maillard Reaction”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The front paws of a cat are different from the back paws. They have five toes on the front but only four on the back.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The word “barbarian” originally referred to people who don’t speak Greek. The Greeks thought people who spoke a foreign tongue sounded like they were saying “bar bar bar” all the time.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'A group of horses will not go to sleep at the same time – at least one of them will stay awake to look out for the others.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Antimatter is the most expensive substance on earth. It costs roughly $62.5 trillion per gram, or $1.75 quadrillion per ounce.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The word “friends” is said in every episode of Friends.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Alongside Sudoku, chess has been named as one of the best ways to improve the mind and the memory.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In Utah, birds have the right of way on a highway.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Logan was the most complained about movie in the U.K. in 2017 as viewers felt that the movie was too violent for its 15 rating.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'It was Nicholas Cage who first advised Johnny Depp to pursue a career in acting, during the mid-1980s.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'While hunting, stoats go crazy jumping, spinning, and twisting to get a rabbits attention. This hypnotizes the rabbit until the stoat gets close enough to attack.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Jellyfish are considered biologically immortal. They don’t age and will never die unless they are killed.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Extreme ironing is a sport in which people take ironing boards to remote locations and iron items of clothing. It originated in England.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Mickey Mouse was the first-ever cartoon character to talk. In the 1929 episode, The Karnival Kid, Mickey’s first words were “Hot dogs!”',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Bob Ross’s hair was naturally straight but he chose to get a perm so he could save money on haircuts when touring the US penniless in his mobile home. Bob actually hated his curly hair but kept it as it was iconic.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The longer you spend dating somebody before marrying, the less likely the marriage is to end in divorce.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'It costs almost $290,000 per year in fees to run a hot dog cart near the Central Park Zoo in New York City. This does not include cart incurred costs.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Around 15% of active Twitter accounts are social bots. This means there are nearly 48 million accounts that are not controlled by humans.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Contrary to popular belief, only 45% of the London Underground is actually underground.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 2013, a plant was genetically spliced that grew tomatoes above ground, and potatoes underground. It is called the TomTato.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In Indonesian, there is a word, “Jayus”, that means “A joke told so poorly, and so unfunny that one cannot help but laugh”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Overwhelmingly, red states have the highest rate of dog ownership while residents of blue states are more likely to keep a cat as a pet.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Frederick Douglass was the most photographed man of the 19th Century. He wanted to ensure an accurate depiction of Black Americans during the Civil War.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Apple seeds, cherry apricot, and peach pits contain cyanide, but it takes a large amount of each to actually make you sick or kill you.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In Australia, there are nearly twice the amount of kangaroos as there are humans.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'During the Prohibition era, the U.S. Government allowed Whiskey to be sold through pharmacies. As a result, Walgreens grew from 20 retail stores to almost 400.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: '15% of iPhone users use an iPhone with a broken screen.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Baby owls are called “owlettes”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The EU didn’t want to showcase any country over another, so the architecture on each EU banknote was created by a computer to make neutral designs.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Elephants can die of a broken heart if their mate dies.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The average person takes 12 seconds to count to 24.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'It’s Australian tradition to eat sausages at polling places on election day called Democracy Sausages. For many communities, this is the biggest fundraising event of the year.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'For her part as June Boatwright in the 2008 movie “The Secret Life of Bees“, Alicia Keys learned to play cello within 4 weeks.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Celebrity chef Jamie Oliver has such severe dyslexia that he didn’t read his first novel until he was 38.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Uncle Phil from Fresh Prince of Bel-Air was also the voice of Shredder from the original Teenage Mutant Ninja Turtles cartoon.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The fear of cooking is known as Mageirocophobia and is a recognized phobia.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In Cambodia, rats are being trained to sniff out land mines. They can clear 200 square meters in less than 35 minutes, which usually takes 2-3 days with a de-miner.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            '10% of Filipinos (approximately 10 million people) live overseas. The country with the highest amount is the United States with almost 4 million Filipinos.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The collective name for a group of unicorns is called a blessing.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'President Ulysses S. Grant was arrested while in office. He was charged, booked, and released for speeding on a horse, and had to pay a fine.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Paddington Bear has 2 birthdays (just like the Queen). Paddington celebrates his birthdays on June 25th and December 25th.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Dogs have a total of 42 teeth when they are fully-grown.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Originally, cigarette filters were made out of cork, the look of which was incorporated into today’s pattern.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In the early 1900s, there was a pod of killer wales who helped humans hunt down other wales in Australia. They would do this for the fins and tongues of the captured whales as rewards and this agreement was known as “The Law of Tongue”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'During 9/11, some fighters took off without live ammo, knowing that to stop the hijackers; the pilots might have to crash their fighters into the planes.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In Halden prison in Norway, guards are encouraged to interact, play sports, and eat with the inmates. This is to prevent aggression and create a sense of family.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Danish flag is the oldest current flag of a sovereign state. It was adopted in 1370 or earlier. The second oldest is Netherlands at 1572.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The entire world population could fit in Texas allotting 330 square feet per person. The area of Texas is about 262,000 square miles.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'On average, 97 chickens are killed every 0.05 seconds worldwide.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Paul McCartney was only paid £1 for performing at the 2012 London Olympics Closing Ceremonies. He willingly donated his performance.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'All of the sweaters Mister Rogers wore on his show were hand-knitted by his mother. He said he loved wearing them because they always made him think of her.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The maximum recommended consumption for Monster Energy Drink is 16oz in Australia, but 48oz in the U.S.A.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Coca-Cola was first served in 1886. At that time, only 9 colas were served in an average day, 3,285 a year. Today, 19,400 Coke products are consumed every second.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Alexander Hamilton was shot and mortally wounded by Aaron Burr on the same spot that his son had been killed 3 years before, and by the same set of pistols.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Sunflowers can help clean radioactive soil. Japan is using this to rehabilitate Fukashima. Almost 10,000 packets of sunflower seeds have been sold to the people of the city.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Medical errors are the 6th leading cause of the death in the U.S.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Nicki Minaj is acrophobic, meaning she is afraid of heights.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Ed Sheeran has a ketchup bottle tattooed on his arm.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'After a Muslim astronaut had trouble figuring out how to fast for Ramadan in space, a booklet was written to explain how to observe Ramadan while in orbit.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Manatees can get frostbite in water below 68 degrees Fahrenheit (20°C). Their fat is not designed to insulate them from the cold.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'There is a town in India called Santa Claus.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: '“Darth Vader” is derived from Old Dutch, meaning “Dark Father”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In the original Psycho movie, the blood in the famous shower scene was actually chocolate syrup.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'There are more storms on Mars when the planet is closer to the sun.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'False eyelashes were invented in 1916 when a producer wanted to enhance an actresses’ eyes in a movie. The lashes were made of human hair.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The word “Gymnastics” linguistically means “to train naked”. It is derived from the two Ancient Greek words “gumnasía” (athletic training, exercise) and “gumnós” (naked). This is because many Greek athletes would train naked for the Olympic games.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In the film Star Wars Episode Three: Revenge of the Sith, every single one of the Clone Troopers was produced using CGI effects.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'You’re not allowed to swear if playing in Wimbledon. Because of this, line judges have to learn curse words in every language.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'It is illegal to play a musical instrument in the Northern Territory, Australia, for the purpose of annoying other people.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Bob Marley’s last words were “Money can’t buy life”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'America consumes almost 50% of the world’s chocolate.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'A study at Florida State University discovered that playing Portal 2 is better for your brain than brain-training games like Lumosity.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'People who eat breakfast feel better both mentally and physically throughout the day.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The original Xbox contained edited snippets of actual transmissions from the Apollo missions.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'When Pink Floyd designed the “Animals” album cover, the inflatable pig tied to the power station broke free, causing Heathrow Airport to cancel all their flights.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Herring fish communicate by using flatulence.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: '“Schnapsidee” is the German word for a ridiculous idea that only sounds good when you’re drunk.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Forgiveness is the number one trait linked to happiness in humans.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The police in Belfast, Northern Ireland, used music from an ice-cream truck to calm down angry teen rioters. The music diffused a tense situation, but the officers were reprimanded for it.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Ralph Lauren’s real name was Ralph Lifshitz.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In the 1830s, the ruler of Egypt Muhammad Ali Pasha wanted to disassemble the Giza Pyramids and use them as pre-cut building materials. Thankfully, the Quantity Surveyor for the project fudged the figures and made it look like it would cost too much to save them.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Pantheism is the belief that God did not create the universe, but rather the universe is God.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'By using big data, Wal-Mart determined that people stock up the most on strawberry Pop-Tarts and beer before a hurricane.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The most used hashtags on Instagram are #love, #instagood, #me, #cute and #follow.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Cats can hear ultrasound.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Anna Bagenhold fell through a frozen stream while she was skiing and was stuck for over an hour. She made a full recovery and became the person to survive the lowest body temperature ever recorded at 56.7 F (13.7 C) even though she was clinically dead.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Aggressive sitting is a sport. It originated in Berlin no later than 2008. You can purchase a special stool for this sport for around 70 dollars.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The whole Harry Potter series contains 199 chapters, 4,224 pages, and 1,090,739 words and has been made into 19 hours and 39 minutes of the film.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Daniel Radcliffe identifies as Jewish, and his mother is Jewish too.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The distance from your wrist to your elbow is the same length as your foot.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'A group of parrots is known as a pandemonium of parrots.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'On average, PewDiePie receives around 2 million YouTube views on each video after only 24 hours of uploading them.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'When Jay-Z was 12, he shot his older brother in the shoulder for stealing his jewelry. He later referenced it in a song, titled “You Must Love Me“.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In Ancient Greece, throwing an apple to a woman was a symbolic declaration of love, and to catch it was to show acceptance of that love.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The average computer user blinks seven times a minute, the normal rate is twenty times per minute.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'If you keep a goldfish in a dark room, it will become pale.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Worldwide cucumber production was 57.5 million tons in 2010 alone, with 40.7 million tons of production and export happening in China.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'When tea started being sold in bags, originally it was intended to be removed from the bags by customers, but they found it easier to brew the tea still in the bag.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'If the electors of the Holy Roman Emperor did not vote within 30 days, they were only allowed to eat bread and water and forbidden to leave the city.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The original Star-Spangled Banner was sewn on the floor of a brewery in Baltimore in 1813 by Mary Pickersgill and her daughter.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Cucumber can actually cure bad breath. A slice pressed to the roof of your mouth for 30 seconds with your tongue allows the phytochemicals to kill the problematic bacteria.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Wonder Woman has a black sister, Nubia. She was sculpted from black clay-like Diana was sculpted from white clay.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Dartmouth’s unofficial mascot is a beer keg called “Keggy the Keg”. Created in 2003, it was initially controversial but is now part of the Dartmouth culture.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: '27,000 trees are cut down every day to supply the world’s toilet paper.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'According to scientists, the weight of the average cumulus cloud is 1.1 million pounds.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Egg yolks are one of the few foods that naturally contain Vitamin D.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The first band to ever perform live on all seven continents was Metallica.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'November 17th is known as “Unfriend Day”. On this day you should unfriend anybody who you don’t know or speak to.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'A 2017 survey found Paraguay to be the happiest country in the world for the second year in a row.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In a few Appalachian forests, there are fireflies that glow blue for up to a minute instead of flashing yellow.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Spacesuits take 5,000 hours to make, costs 1 million dollars, weigh about 110 pounds, and have 11 layers of material.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'There are more than 70 species of mushrooms that glow in the dark.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is a Guinness world record for the longest amount of time needed to create an official government – it is held by Belgium.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Some butterfly species are extremely fast; the Skipper Butterfly can fly faster than a horse can run.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Canadian law requires citizens to answer a math question when entering sweepstakes. This is done to add some aspect of skill to the contest.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Empire State building only took a little over a year to build (410) days and it was 12 days ahead of schedule when completed.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Neptune was the first planet to be found through mathematical predictions rather than telescopic location.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Foxes have whiskers on their legs. This helps them with their bearings, especially when it’s dark outside.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The call of a Kookaburra is used as the stock jungle sound effect in many movies and shows set in the jungles of Africa or South America, even though they are only in Australia and New Guinea.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Deep snow can sometimes appear blue in color because the extra layers of snow create a filter for light.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Crows can remember the faces of individual humans. They can also hold a grudge.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 1942, a 12-year-old lied about his age to join the Navy. He became a decorated war hero at age 13 but was thrown out of the Navy after his mom found out.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'A Brussels airline flight to Vienna was aborted because the pilot was attacked in the cockpit. The attacker was a passenger’s cat.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The least common day to be born on is May 22nd.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Reindeer are one of the only mammals that can see UV light.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Angelina Jolie performed her own stunts whilst filming Lara Croft: Tomb Raider.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'As per the Shark Tank contract, if you mention the name of any company you own, then Shark Tank automatically owns 5% of that company or gets 2% of the lifetime profits.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Because of its unique tilt, a single night on Uranus lasts for 21 years.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Alaska is the state which produces the most serial killers.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is such an expansive collection of books under the British library in their archive, that if a person could read 5 books per day it would take the 80,000 years to complete.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The King of Macedon threatened Sparta with “If I bring my army into your land, I will raze your city”. The Spartans replied: “If”. No attempt was made to capture the city.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: '85% of Valentine’s Day Cards are bought by women.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Chocolate ice cream has been proven to significantly reduce emotional and physical pain.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Due to paralytics administered, if you wake up during surgery, you probably wouldn’t be able to tell anyone.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In America, it is a federal crime to use your roommate or friend’s Netflix account.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Volkswagen owns Bentley, Bugatti, Lamborghini, Audi, Ducati, and Porsche.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Facebook causes you to overestimate how happy your friends are and, in turn, makes you more depressed.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Gatorade was invented to help the Florida Gators Football Team stay hydrated.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'When Nike first started, it was called Blue Ribbon Sports. The name was changed in 1971.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: '28 is the atomic number of Nickel and the atomic mass of Silicon.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The modern salute is believed to be derived from the way in which French Knights would greet each other by lifting the visors of their helmets.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 1937, a major fire broke out at the Fox Film Studios in New Jersey. The fire destroyed 75% of their movies, including most of their silent films.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Fungus is more closely related to animals on a genetic level than they are to plants.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },

    {
        text: 'The average person in France sleeps 8.83 hours per day, the most in the developed world.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Akon is the #1 selling artist for ringtones in the world.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Albert Einstein was married to his distant cousin; Elsa Einstein.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In the Pokémon games, Poliwag & Ditto have the same cry sounds.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The Hogwarts Express from the Harry Potter movies is a real train in Scotland.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Einstein’s brain went missing when he died in 1955 and was lost for 23 years. The doctor who worked on his autopsy stole it and kept in a hidden cider box.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'When you remember a past event, you are actually remembering the last time you remembered it, not the event itself.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'At the 1936 Olympic games, competitors from Liechtenstein were shocked to discover their flag was the exact same as Haiti’s. Liechtenstein added a crown to their flag a year later.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In Zimbabwe, it is illegal for citizens to make offensive gestures at a passing car.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The word “oxymoron” is itself an oxymoron. This is because it derives from Ancient Greek where “oxy” means sharp and “moros” means stupid.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            '“She sells seashells by the seashore” was written about a female paleontologist from the 1800s. She actually sold dinosaur bones and fossilized shells.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Scientists have no idea how dinosaurs mated.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'There is a Japanese village called Nagoro which has 35 inhabitants, but over 350 scarecrows!',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Another term for your nieces or nephews would be “niblings”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Daniel Radcliffe broke over 80 wands while filming the Harry Potter movies because he used them as drumsticks!',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The “butterflies” you get in your stomach when you see someone you like is actually a stress response from adrenaline.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The insurance company backing the payouts for “Who Wants to Be a Millionaire” sued the show for being too easy.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is no federally declared official language for the U.S. English is only the official language of 32 states.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'It requires seven to eight trees to provide enough oxygen for just one person per year.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            "There are more people in the U.K. than in Canada, Australia, Norway, and Iceland combined. The U.K.'s population is over 65 million.",
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Walking uses a total of 200 muscles with every step you take.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Give something back to the Earth on March 12th – because it’s officially known as “Plant a Flower Day”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Harry Potter and the Prisoner of Azkaban is the only film in the series not in the 50 highest-grossing films list.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The first known recipe of Angel Food Cake was published in 1878.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Arizona driver’s licenses don’t expire until you’re 65. You then have to renew in person every five years.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The name ASOS is an acronym for “As Seen On Screen”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In general, people tend to read as much as 10% slower from a screen than from paper.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Rabbits can be literally “scared to death” if approached by a predator when they are totally unaware.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Pistanthrophobia is a common fear of trusting people due to past experiences with relationships gone bad.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'September 3rd is International Bacon Day.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The same brain cycles that occur when asleep, still happen when you’re awake, but in smaller sections. Meaning, parts of your brain are always “falling asleep”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'One in every four cranes in the entire world is in Dubai.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The Lion King was originally called “King of the Jungle” before they realized that lions don’t actually live in jungles.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Several African countries don’t like second-hand clothes being imported to their countries because it is destroying their local textiles industry.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Pure cocoa can help prevent tooth decay. Naturally occurring chemicals in cocoa beans fight harmful bacteria in the mouth.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Baby rabbits are collectively known as litter.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'All of the suits worn by Neil Patrick Harris on How I Met Your Mother were tailored especially for the actor. After the series finale, he took some of them home.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Iceland has a dating app that stops you hooking up with your cousin.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'NASA stands for “National Aeronautics and Space Administration”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'April 12th is known as “Grilled Cheese Sandwich Day”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Every day in the U.S., more than 100,000 people get a speeding ticket.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Airport runway numbers actually indicate direction on a compass.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Suriphobia is the fear of mice.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The goliath frog is the largest frog in the world and can grow up to 12.5inch (32cm) in length, and weigh up to 7.2 pounds (3.3kg).',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'December 12th is Ding-A-Ling Day – a day to call friends and family that you haven’t spoken to in a while.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'There are more volcanoes on Venus than any other planet within our solar system.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The age of the Universe is estimated to be 13.7 billion years. The oldest stars in the Milky Way, found in globular clusters, are 13.6 billion years old.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Triskaidekaphobia is the fear of the number 13.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Japanese people rarely leave rubbish on the streets. As a result, Japan doesn’t need janitors.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The costume designers for The Lord of the Rings worked for two straight years making custom armor. Just one Orc suit had 13,000 rings and took 3 days to make.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Eye of newt, toe of frog, and wool of bat are just archaic terms for mustard seed, buttercup, and holly leaves.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Northern Korean people are legally only allowed to have one of 28 haircuts. Men and women can choose from 14 different styles.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Eating a banana can help to form a lining which prevents heartburn from getting worse.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The closest living relatives of hippopotamuses are whales, dolphins and porpoises.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The Great Wall of China is 3,728 miles long.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'When Play-Doh was first developed in the 1930s, it wasn’t a toy… it was a way to clean wallpaper.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In Ancient Bafia culture, one could purchase a wife for the price of thirty potato mashers.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In a human foot there are 26 bones.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Antarctica is the only continent that turtles don’t live on.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Warren Buffett eats at McDonald’s every single morning and only orders one of three things. It never costs him more than $3.17.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Psychopaths can only think of the possible positive consequences of their actions, not the negative ones.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Disney World is the second-largest purchaser of explosives in the United States, the first being the U.S. Department of Defense.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Hard cheeses have a longer shelf live than soft cheeses.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There were 19 living men in Austria found to be direct descendants of Ötzi the Iceman in 2013 determined by blood testing.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The Latin name for banana is “musa sapientum” which translates to fruit of the wise men.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'July 3rd is International Plastic Bag Free Day – it’s a day about making a little change to make a big impact (for the better) in the future.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Coca-Cola owns all website URLs that can be read as ahh, all the way up to 62 h’s.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In 1907, a woman was arrested on a beach in Boston for wearing a one-piece swimsuit.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Mountain Dew is slang for moonshine. It was originally created as a mixer for moonshine and whiskey in Tennessee.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The center of a comet is called a nucleus.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'A crocodile escaped out of a duffel bag onboard a flight in the Congo, causing everybody to go to the front of the plane. This caused the plane to crash, leaving only one survivor.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'August 5th is known as National Underwear Day – the perfect day to add some new, confidence-boosting pieces to your underwear collection.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Sprite was manufactured as Coca-Cola’s response to the popularity of 7 Up.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The word “white” comes from the Indo-European root “kweit” meaning “to shine”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Although many people think shaving causes the hair to grow back quicker, there is no scientific evidence for this.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In 1999, PayPal was voted as one of the top ten worst business ideas.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Ziggy Marley, Bob Marley’s son, wrote the theme song for the popular children’s cartoon, Arthur, when he was 26.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Around 70% of people tilt their heads to the right rather than the left when kissing somebody else.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The name Milky Way derives from the Greek “galaxías kýklos” or “milky circle” due to its appearance as a dim milky band in the sky.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'If your throat tickles, scratching your ear can make it go away.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'A dog was the first living creature to be sent into space in 1957.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'There are more stars in space than there are grains of sand on every beach in the world.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Of the 70% of water covering the Earth only 3% of it is fresh, the other 97% of it is salted.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Baltimore is the largest independent city in the U.S. with a population of 621,849. Meaning, it is not part of any county.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Applying non-fat yogurt to a sunburnt area is a natural way to deal with sunburn.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Humans cannot walk in a straight line without a visual point – When blindfolded, we will gradually walk in a circle.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Baby horses can walk and run after just a few hours of being born.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Even though smoking has been banned on airplanes, ash trays are mandatory on every plane. This is for safe disposal in case someone breaks the law.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: '79% of pet owners sleep with their pets.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Brussels Airport is the world’s biggest chocolate seller, selling over 800 tons of chocolate a year.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Although Saturn is the second-largest planet in our solar system, it is also the lightest planet!',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The Apple Lisa was the first commercial computer with a graphical user interface (GUI) and a mouse.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'When you have to make a choice, and every choice is a bad one, it’s called a zugzwang.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Victoria’s Secret was originally supposed to be a store for men to shop for their female partners without feeling embarrassed.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The mongoose is one of those rare animals that are immune to a snake’s venom.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Mulan has the highest kill-count of any Disney character, including villains, and was the first Disney Princess to be shown killing people on-screen.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In Greece, women are not legally allowed to wear high heels or tall hats in the Olympic Stadium.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Most catfish are normally active at night, however the Peppered Cory Catfish is active more often during the day.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There was a man in the late 1700’s who had such a constant and severe appetite, he was once kicked out from a hospital because they thought he ate an entire toddler.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Lake Superior contains 10% of the world’s freshwater. It is the size of South Carolina, and contains 2,900 cubic miles of water.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Erotomania is a psychological disorder where the sufferer has delusions that another person is in love with him or her.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Harry Burnett Reese, the founder of Reese’s chocolate, was a former shipping foreman and dairy farmer for Milton S. Hershey, the founder of Hershey’s chocolate.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Selfies now cause more deaths than shark attacks. It is estimated there are 28 selfie-related deaths per year, with the leading cause being heights.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Carrots have zero fat content.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Cards Against Humanity bought an island in Maine to preserve wildlife. It is called Hawaii 2.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Leather products like handbags or shoes can be polished with the inside of a banana skin, simply rub it on and wipe off with a cloth.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: '“Death by PowerPoint” is a term relating to the intense boredom of useless PowerPoint presentations.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Intentionally farting on a California prison guard can get you an additional 11 years in prison.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Nearly every brand of hard liquor is vegan.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Giving up alcohol for just one month can improve liver function, decrease blood pressure, and reduce the risk of liver disease and diabetes.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The Cesky Terrier is the rarest breed of dog in the world. Around 350 of them exist in total worldwide.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Puma, cougar, and mountain lion are names for the exact same animal. The scientific name is puma, but they are more commonly referred to as cougars.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In the Philippines, it is considered good luck if a coconut is cleanly split open without jagged edges.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'One of Hitler’s favorite tunes to whistle was the very popular, “Who’s Afraid of the Big Bad Wolf?”',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Jennifer Lopez was the first actress to have a movie and an album hit number one in the same week.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'After the attack on Pearl Harbor, there were 3 sailors trapped in the USS West Virginia who could not be rescued and it took 16 days for them to die.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Jack Daniel (the founder of the whiskey) died from kicking a safe. When he kicked it, he broke his toe which got infected. He eventually died from blood poisoning.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Clinomania is the excessive desire to lay in bed all day.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'At his audition for The Office, John Krasinski told someone he was nervous about the producers ruining the show because of how great the British version was – little did he know, the person he was talking to was the show’s executive producer.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Hawaii’s state flag is the only U.S. state flag to feature the Union Jack upon it.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The radio took 38 years to reach a market audience of 50 million. The television took 13 years and the iPod only took 3 years to reach a market audience of 50 million.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'If a snake has its head chopped off – that chopped-off head can still bite and unleash a huge amount of venom.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Instead of having an army, Andorrans all must keep a rifle. The law also says that police officers can offer up a firearm if the need arises.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Pope Francis used to be a nightclub bouncer.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'King Kong was the first movie to ever have a sequel.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'With the exception of a few organs, caterpillars liquefy almost completely while undergoing metamorphosis.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Sonic the Hedgehog is in the Guinness Book of World Records for being the fastest gaming character ever.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Each day, your mouth produces anywhere from 2 to 4 pints of saliva.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'BTS was the first K-Pop group to get their own Twitter emojis.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The Green Lantern debuted in 1940, making the Lantern’s first debut only two years after Superman’s.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Gleeking is the act of stimulating the salivary glands underneath your tongue into spitting a concentrated jet of pure saliva.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Bill Gates house was designed using a Macintosh Computer.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Playboy has been publishing braille versions of their magazines since 1970, however, no pictorial representations are included.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 1986, a soviet Aeroflot pilot tried to land the plane blindly with all the windows curtained due to a bet with the co-pilot. He crashed and killed 70 of the 94 passengers on board.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: '26 is the atomic number of iron.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The swan has over 25,000 feathers on its body.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Biting someone with false teeth in Louisiana, USA is considered aggravated assault.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Allodoxaphobia is the fear of opinions.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Temperature affects your attitude towards others. For example if you hold a warm coffee as opposed to a cold coffee, you are more likely to be more selfless towards others.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Male cats are called toms and females are called queens or mollies.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Nowhere in the Bible does it say there were three wise men, just three gifts.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'When Kurt Russell smashed the guitar in “The Hateful Eight” he accidentally destroyed an irreplaceable 145-year old museum piece, instead of one of the replicas.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Arachibutyrophobia is the fear of peanut butter sticking to the roof of the mouth.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Ladybugs bleed from their knees when threatened.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Butterflies have their skeletons on the outside of their bodies, this is known as the exoskeleton.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The creators of the PNG image file format wanted it to be pronounced as “ping”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Dogs can be allergic to humans – specifically, their dander. While being treated for this allergy, it can take up to 12 months for a dog to recover.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'World Kindness Day falls on November 13th and is a day to make the world a better place by showing just a little kindness to everybody.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Makeup has been used by women since before Cleopatra’s time. They would use berries and other fruits to give their faces some color.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            '85% of people have experienced a dream so real that they were not sure if it happened in real life or not.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'When he was President, George H.W. Bush banned broccoli from Air Force One and the White House.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The British tried to invent a ship made out of wood pulp and ice during World War II. Called Project Habakkuk, it was shelved due to costs.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Although the saltwater crocodile has the highest recorded bite force in any animal, the muscles to open its mouth are weak. Its mouth can be shut with a couple layers of duct tape.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'John Steinbeck was born on February 27, 1902. He wrote 27 books including Of Mice and Men.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In over 35 British divorce cases in 2012 alone, the video game “Football Manager” was cited.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The only 15-letter word that can be spelled without repeating a letter is uncopyrightable.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The last picture taken of John Lennon while he was alive had his killer in the frame.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Gasping for air in a high altitude environment, plus UV light reflecting off the snow will cause the roof of your mouth to get sunburnt.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Tutankhamun’s parents were brother and sister.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'A bottle of Coca-Cola has a PH scale of 2.8, and could dissolve a nail in just 4 days.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The Titanic was about three times bigger than Noah’s Ark, with a volume of 4.6 million cubic feet.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The Eiffel Tower was inaugurated the same year Nintendo was founded and Adolf Hitler was born: 1889.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The largest snowflake in the world was found in 1887 it was 15 inches wide and 8 inches thick.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'China banned Back to the Future because it contained time travel.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Donald Trump owns and operates around 18 golf courses around the world.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'January 10th is “Peculiar People Day” – a day to celebrate those of us who are a little quirky, weird or eccentric.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Aaron Carpenter got verified on Instagram on April 29, 2015.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The U.S. government gave Indiana University $1 million to study memes.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Cards Against Humanity celebrated Black Friday by digging a hole as long as people donate. They raised over $100k.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Coca-Cola was the first drink that was ever consumed in space.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Enceladus, one of Saturn’s smaller moons, reflects 90% of the sunlight, making it more reflective than snow.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'God is the only Simpsons character who has five fingers. The rest of the characters are only seen with four.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In India, the flying of a kite is illegal under a 1934 law, which classes kites as aircraft.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The very first bottle of Dr Pepper was sold in America on January 12, 1885.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            '“Finger Lickin’ Good” had a bit of a mishap when translated to Chinese for their first KFC outlets in the country, the famous phrase became “eat your fingers off”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Giraffe hearts pump twice as hard as a cow’s heart, in order to get blood to its brain.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Nike was founded on January 25, 1964, by Bill Bowerman and Phil Knight.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The “Pinky Promise” originally indicated that the person who breaks the promise must cut off their pinky finger.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The television was invented only two years after the invention of sliced bread.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Drinking water and staying hydrated will help the fluids in your sinuses from becoming sticky, which causes more snoring.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In feudal Japan, lords purposely built homes with squeaky floors as a defensive measure against ninjas.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 2015, Ariana Grande won two MTV Millennial Awards for the “Global Instagrammer of the Year” and “International Hit of the Year” with her single “One Last Time“.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The word “peacock” does not actually apply to both male and female birds. It’s only the males that are called peacocks, while the females are called peahens. Together, the collective name for them is “peafowl”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Evangeline Lilly is a notoriously bad driver. She has been in at least 8 car accidents, and none of them were with another car.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 1993, Aleksandr A. Serebrov took his Game Boy to space. Later, it was auctioned for $1,220 and is said to have orbited earth 3,000 times.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The patterns on a giraffe are totally unique – no two giraffes are ever the same.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Geomelophagia is someone who has the urge to eat raw potatoes.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Drink green tea before bed to burn calories while sleeping. Green tea will also increase your metabolism.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'As of May 2015, 2.3 Million Americans still subscribed to AOL Dial-Up Internet.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The average inmate at Alcatraz read 75-100 books per year.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There are computers designed for Amish people, with selling points like “No internet, no video, no music”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Overall Subway, actually has more chains than the fast-food juggernaut, McDonald’s.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In Texas, according to Texas Parks and Wildlife Department, it is legal to kill Bigfoot if you find it. It would be considered a non-protected nongame animal.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'During 1922 & 1933, The Coca-Cola Company was offered a chance to buy the Pepsi-Cola company, and it declined on three separate occasions.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Putting your phone in airplane mode will stop ads while playing games.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Cardi B’s birth name is Belcalis Almanzar.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'A group of whales is called a pod.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Bumblebees have hair on their eyes.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The word “Android” means a human with a male robot appearance.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Triton, one of Neptune’s moons, is gradually getting closer to the planet it orbits.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The Earth is the only planet in our solar system not named after either a Greek or Roman God.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Kiss means “pee” in Swedish.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In New Jersey, it’s illegal to wear a bulletproof vest while committing a violent crime.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The most leaves ever found on a single clover is 56.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'There is actually a difference between coffins and caskets – coffins are typically tapered and six-sided, while caskets are rectangular.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            '“Strategic incompetence” is the art of avoiding certain tasks by pretending you don’t know how to do them.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'A 23 sided shape is called an Icosakaitrigon.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Turkeys aren’t just for Christmas. June is National Turkey Lover’s Month.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'When Pablo Picasso died in 1973, he was the richest artist in history.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The inventor of Vaseline, Robert Chesebrough, ate a spoonful of the stuff every single day.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            '“Led Zeppelin” originally wanted to be called “Lead Zeppelin” but they felt that “thick Americans” would pronounce the word wrong.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The serial number on Darth Vader’s suit of armor was E-3778Q-1.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'More than 45 million turkeys are cooked and eaten in the U.S. at Thanksgiving.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Liège, Belgium tried to use 37 cats to deliver mail in the 1870s. Most of the cats took up to a day to deliver the mail, and the service was short-lived.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'A female’s heart is smaller than a male’s by about 25%. Because of this, the female heart has to beat around six times more than a male heart to pump the correct amount of blood around the body.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In 2000 the first permanent crew inhabited the International Space Station (ISS), and have been there ever since.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Turkey vultures use defensive vomit to get rid of any disturbing animal. They can propel their vomit up to 10 feet.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'During World War II, the very first bomb dropped on Berlin by the Allies killed the only elephant in Berlin Zoo.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Peaches are the third most popular fruit grown in America.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Emilie de Ravin‘s biggest TV role as Claire Littleton on the hit show “Lost“, loves peanut butter – which is unintentionally ironic because Emilie is allergic to peanuts. In reality, her biggest weakness is actually chocolate.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Jupiter has 69 moons. A few are 12-37 miles in diameter, but most are barely 1 mile in size. Jupiter itself is 317 times the mass of the Earth.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'In a survey, 33% of dog owners admitted to chatting over the telephone to their dogs.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'Losing Weight is the most common New Year’s resolution.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'A sunset on Mars is blue.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The smallest possible measurement of length is known as the Planck Length. Anything smaller than this would break everything we understand about physics',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The social media website, MySpace, was founded in 2003 and sold for $580 million in 2005. At this time, it was the most visited social networking site in the world, and even surpassed Google as the most visited website in the United States!',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'One of the earliest depictions of dreadlocks dates back to 1600 BC to the Minoan Civilization, one of Europe’s earliest civilizations, who lived in what is now known as Greece.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The most expensive domain name ever sold was cars.com for an astonishing $872.3 million.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Polygamy is the practice of having more than one husband or wife at the same time. Polygyny is where a man is married to more than one woman, and Polyandry is where a woman is married to more than one husband.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'As of September 2016, the Giant Panda was downgraded from “endangered” to “vulnerable” on the Global List of Species at Risk of Extinction.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The world’s oldest surviving bank is “Banca Monte dei Paschi di Siena”, which was founded in 1472, and is currently Italy’s 3rd largest bank.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The letter Z is the least frequently used letter in written English. It is more common in American English than in British English due to spelling differences.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The cardboard holder that you often get around a takeaway cup of coffee is called a “zarf”.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The logo for the Monster energy drink cans is not an M as most believe, but are claw marks from a monster ripping through the can. In 2014 a YouTube video gained an international audience when they claimed that each segment of the claw mark looks like the Hebrew symbol for the number six, making the logo into 666, the number of the Beast.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The largest pumpkin pie ever baked was in 2005, and weighed 2,020 pounds, or just over 916kg.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The Triangle took nearly 100 years to become a popular orchestral instrument.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The first computer virus ever created was called Creeper, back in 1971. Shortly after this virus was created, Reaper was created as the world’s first anti-virus.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'The earliest mention of the mythical creature, the Unicorn, dates back from as far as 2700 BC in Asia and was described as a creature of great power and wisdom.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text: 'The oldest webcam stream online today is The San Francisco FogCam and has been operational since 1994.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'In Japanese legend, it is said that anyone who folds 1,000 origami cranes will be granted a wish by the gods.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },
    {
        text:
            'Doggerland is the area of land connecting Great Britain to continental Europe. It was flooded by rising sea-levels (6500-6200 BC), turning Great Britain into an island.',
        source: 'https://www.thefactsite.com/1000-interesting-facts/',
    },

    {
        text: 'Giant Pandas eat approximately 28 pounds of bamboo a day – that’s over 5 tons per year!',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'The Nobel Peace Prize is named for Alfred Nobel, the inventor of dynamite.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Cats are not able to taste anything that is sweet.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'You fart on average 14 times a day, and each fart travels from your body at 7 mph.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'One of the ingredients needed to make dynamite is peanuts.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text:
            'The largest living organism in the world is a fungus. It is in Oregon, covering 2,200 acres and is still growing.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text:
            'A horse’s canter is a 3-beat gait. On the second beat, opposite front and rear legs hit the ground at the same time. After the third beat is a “rest”, or suspension, when all three legs are off the ground.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Want chocolate smelling poo? There is a pill for that.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'The shortest war in history lasted for only 38 minutes.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Sea Lions have rhythm. They are the only animal able to clap to a beat.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'While you sleep you can’t smell anything – even really, really bad or potent smells.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Some tumors can grow hair, teeth, bones, even fingernails.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Your brain uses 10 watts of energy to think and does not feel pain.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Glass balls can bounce higher than rubber ones.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'The smallest country in the world takes up .2 square miles: Vatican City.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Hippopotamus milk is pink.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Your fingernails grow faster when you are cold.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Applesauce was the first food eaten in space by astronauts.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Snails take the longest naps with some lasting as long as three years.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'The average person spends two weeks of their life waiting at traffic lights.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Before 1913 parents could mail their kids to Grandma’s – through the postal service.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Don’t like mosquitoes? Get a bat. They could eat 3,000 insects a night.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'A typical cough is 60 mph while a sneeze is often faster than 100 mph.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Some fish cough. Really.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Are you terrified that a duck is watching you? Some people are. That is anatidaephobia.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text:
            'American Black bears are not just black but include bears of varying colors including blonde, cinnamon, brown, white and even silver-blue.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text:
            'Because of the 4 stages of the Water Cycle – Evaporation, Condensation, Precipitation and Collection – water falling as rain today may have previously fallen as rain days, weeks, months or years before.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Goats have rectangular pupils in their eyes.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'There are 31,556,926 seconds in a year.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Cans of diet soda will float in water but regular soda cans will sink.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Birds can not live in space – they need gravity to be able to swallow.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Some perfumes actually have whale poo in them.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Your feet typically produce a pint of sweat every single day.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'The snow on Venus is metal.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text:
            'Baby koalas are fed poo by their parents after they are born which helps them digest Eucalyptus leaves later in life.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text:
            'Many mammals, including cats and dogs, walk on their toes in contrast to humans, who walk on the soles of their feet.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: '20% of all the oxygen you breathe is used by your brain.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'You can cut a pie into 8 pieces with only three cuts.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'If a Donkey and a Zebra have a baby, it is called a Zonkey.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text:
            'The most difficult-to-pronounce town is in Wales: Llanfairpwllgwyngyllgogerychwyrndrobwyll llantysiliogogogoch.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'A tsunami can travel as fast as a jet plane.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text:
            'There is a 50% chance that in a group of 23 people, two will share the same birthday. In a group of 367 people, it is a 100% chance. But only 70 people are required for a 99.9% chance.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'All babies are born with blue eyes.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text:
            'When you look at a bright sky and see white dots, you are looking at your blood. Those are white blood cells.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Your small intestine is the largest internal organ in your body.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Love carrots? Don’t eat too many or you will turn orange.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Cows can walk up stairs but not down them.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'Tiger shark embryos begin attacking each other in their mother’s womb before they are even born.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text: 'The surface of Mars is covered in rust, making the planet appear red.',
        source: 'https://kidsactivitiesblog.com/76701/50-random-facts/',
    },
    {
        text:
            'Christian Bale reportedly studied Tom Cruise’s mannerisms to prepare for his role as a serial killer Patrick Bateman in American Psycho.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'Gene Autry is the only person to be awarded stars in all five categories on the Hollywood Walk of Fame (film, television, music, radio, and live performance).',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'The word “PEZ” comes from the German word for peppermint – PfeffErminZ.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'There are 11 U.S. states have land farther south than the most northern point of Mexico.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'There is a Boring, Oregon and a Dull, Scotland. They have been sister cities since 2012.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'Actress Nichelle Nichols, who played Lieutenant Uhura in the original Star Trek, almost quit the show after one season, but was persuaded to stay on by Martin Luther King Jr., who felt the role was important to the Civil Rights Movement.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'The term “soccer” comes from the UK, where it was derived from a short form of “Association Football.”',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'Defeated only once in roughly 300 matches, President Abraham Lincoln was inducted into the National Wrestling Hall Of Fame in 1992.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'The Sahara is the largest non-polar desert in the world. It is comparable in size to China or the United States.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'It’s been said that nearly 3% of the ice in Antarctic glaciers is penguin urine.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'The first tiger shark to hatch inside of its mother’s womb eats all the other embryos of its siblings. Even scientists admit that this is an unusual mode of survival.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'The the Kola Superdeep Borehole in Russia is the world’s deepest hole. It is 7.5 miles deep, but interestingly, only 9 inches wide.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'King Henry VIII had a “Groom of the Stool”, whose job was to monitor and assist in the King’s bowel motions. The role remained in existence until King Edward VII abolished it in 1901.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'With an average height of about 13,000 feet and stretching for 4,300 miles, the Andes Mountains are the longest continental mountain range in the world.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'High heeled shoes were originally created for men.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'The word “orange” was first used to describe the fruit, not the color.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Up to 12 million Dum Dums are made every single day.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'Kenny Baker, who played R2-D2 in the Star Wars franchise, once called Anthony Daniels, or C-3PO, “the rudest man” he’s ever met.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'Whether measuring by size (0.17 sq mi) or population (1,000), Vatican City is the smallest country in the world.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'In 1916, Jeanette Rankin became the first female member of Congress in America, four years before women were given the right to vote.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Baby porcupines are called “porcupettes”.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'Mount Rushmore almost featured the heads of famous American West heroes, like Buffalo Bill Cody, but the lead sculptor argued that the subjects should be more recognizable.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'At the 1908 Olympics, the Russians showed up 12 days late because they were using the Julian calendar instead of the Gregorian calendar.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'The Amazon Forest is the largest natural rainforest in the world. At 2.7 million square miles, it covers 40% of South America.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'China owns nearly all of the pandas in the world, even the ones you see at zoos. They rent them out for about $1 million a year.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'Beer is one of the oldest recorded recipes in the world, with documentations of the beverage dating back to around 5,000 BC and the ancient Egyptians.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'Lasting only 38 minutes, the Anglo-Zanzibar War of 1896 is generally considered to be the shortest war in history.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Bubble Wrap was originally intended to be used as 3D wallpaper.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'Due to a discrepancy over border recognition between Egypt and Sudan, there is a region in Africa called Bir Tawil that belongs to no country.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'At 3’7″, Eddie Gaedel was the smallest Major League Baseball player of all time. He walked in his only plate appearance.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'Valles Marineris, a canyon on Mars, would stretch from from Los Angeles to the Atlantic coast if it were on Earth.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'Serial killer Ted Bundy once received a commendation from the Seattle Police Department for chasing down a purse snatcher.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Americans consume around 150 million hot dogs on 4th of July each year.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'The Caspian Sea is the largest enclosed inland body of water on Earth.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Lord Byron allegedly kept a pet bear in his dorm room while studying at Cambridge University.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Geologic activity around the Ring of Fire is responsible for roughly 90% of all earthquakes worldwide.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'During World War II, Queen Elizabeth II, then an 18-year-old princess, trained in London as a mechanic and military truck driver.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'The heart of a shrimp is located in its head.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Canada has more lakes than anywhere in the world. 9% of the country is covered in fresh water.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'President Richard Nixon was at Disney World when he infamously proclaimed, “I am not a crook.”',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'A group of flamingos is called a “flamboyance”.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'The World Wrestling Federation (WWF) had to change their name to World Wrestling Entertainment (WWE) because of legal action taken by the World Wildlife Fund (WWF).',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'According to John Lennon, the imagery in the song “Lucy in the Sky with Diamonds” was inspired by the work of Lewis Carroll.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'There are more than 7,000 different Caribbean islands, but only about 2% of them are inhabited.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'It’s been estimated that a new baby can rob parents of anywhere between 400-750 hours of sleep in the first year.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'Whatcom County in the state of Washington unanimously passed a resolution declaring the region a Sasquatch Protection and Refuge Area.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'Titan, Saturn’s largest moon, is the only moon known to have a fully developed atmosphere. In fact, it is about 50% denser than Earth’s.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Since 1945, all British tanks have come equipped with tea making facilities.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Reno, Nevada is west of Los Angeles, California.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Babe Ruth’s 54 home runs in 1920 were more than the total hit by 14 of 15 other MLB teams.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'You actually can see Russia from Alaska. Given the correct weather conditions in the Bering Sea, you can see the island of Big Diomede, Russia, from the smaller island of Little Diomede, Alaska.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Many lipsticks contain fish scales.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'After three-letter airport codes became standard, airports that had previously been using only two letters simply added an X.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'At 3,212 feet high, Angel Falls in Venezuela is the highest uninterrupted waterfall in the world.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Prairie dogs say “hello” by kissing.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'With a fortune of $336 billion when adjusted for inflation, oil tycoon John D. Rockefeller is the wealthiest person in U.S. history.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'Liberty Island, the home of the Statue of Liberty, might belong to New York City, but it is surrounded by the waters of Jersey City, and is actually closer to the New Jersey mainland.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'According to AT&T, more collect phone calls are made on Father’s Day than any other holiday.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'India and China are the only countries in the world with populations above 1 billion people.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'At just 135 words, George Washington’s second inaugural address remains the shortest ever delivered.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'The medical term for a gurgling stomach is “borborygmus”.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Despite their names, Iceland isn’t covered in ice and Greenland isn’t very green.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'A single cow can make roughly 200,000 glasses of milk in a lifetime.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Roughly 30% of the Earth’s remaining mineral resources can be found in Africa.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'The largest sand castle in the world was built in Germany and was over 54 feet high. It took 168 trucks over a week to deliver enough sand.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Earth is not a perfect sphere. Our planet is squashed at its poles and swollen at the equator.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'The U.S. Supreme Court has its own private basketball court. It’s been nicknamed, “The Highest Court in the Land”.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'A snail can sleep for three years.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Earth’s highest point on land (Mt. Everest), and lowest (Dead Sea), are both found in Asia.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'The Cookie Monster has a real name. It’s Sid.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Rhode Island might be the smallest state in terms of land area, but Wyoming is the least populated.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Barry Manilow’s hit, “I Write the Songs”, wasn’t written by him.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'After he retired, Dwight D. Eisenhower’s secret service code name became “Scorecard” because of his affinity for golf.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Indonesia is made up of over 17,000 islands.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'Stretching over 1,600 miles, the Great Barrier Reef is the world’s biggest single structure made by living organisms.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'In 2009, Scottish scientists searching for the Loch Ness Monster found 100,000 golf balls instead.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'Saint Patrick never banished snakes from Ireland. Scientist believe the island has been snake-free since the Ice Age.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'When spliced together, there are 26 minutes of quiet staring in the Twilight film series.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'There is no spot in Central America more than 125 miles from the ocean.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'There’s a village in Norway called Hell, and it freezes over every winter.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Koalas and humans have remarkably similar fingerprints.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'S.O.S. does not stand for anything. It was created as a universal distress signal because it is a simple, unmistakable message when sent via Morse Code.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Pluto’s average distance from the Sun is 3,670,050,000 miles.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'At 4,101 feet, Mt. Thor on Baffin Island, Canada, has Earth’s greatest sheer vertical drop.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'With 94% identical DNA, Chimpanzees are the closest living relatives to humans.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Tootsie Rolls were used as part of the rations for World War II soldiers.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'The French territory of Louisiana was purchased by the U.S. in 1803 for roughly four cents per acre.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'A pluot is a hybrid between a plum and a apricot.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'There are seven different villages in Denmark, Sweden, and Norway with the name Å (it translates to “river” in Scandinavian languages).',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Aulophobia is an exaggerated or irrational fear of flutes.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'In the last row of the U.S. Senate Chamber, there is a desk that is always stocked with candy.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'In 1986, one year after Steve Jobs resigned as chairman, Apple launched a clothing line called “The Apple Collection”.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'An Egyptian Pharaoh named King Pepy II commonly smothered his servants in honey to keep flies away from him.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'With a population of 37,308 and an area less than 1 square mile, Monaco is the most densely populated nation in the world.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'It takes light from the Sun 8 minutes to reach Earth.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'Elephants can’t jump.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'Grover Cleveland was both the 22nd and 24th U.S. President. He is the only man to have been elected to non-consecutive presidential terms.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'The suffix -stan is Persian for “place of” or “country”, which explains why so many countries end with it.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text:
            'The Atacama Desert is the driest non-polar region on Earth. Some weather stations in the Atacama have never received rain.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },
    {
        text: 'The U.S. Supreme Court has previously ruled that tomatoes are vegetables.',
        source: 'https://www.sporcle.com/blog/2018/11/101-more-interesting-trivia-facts/',
    },

    {
        text:
            "There is only one Tube station which does not have any letters of the word 'mackerel' in it: St John's Wood.",
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The average speed on the Underground is 20.5 miles per hour including station stops.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            "The busiest Tube station is Waterloo, which was used by around 95 million passengers in 2015. In 2014 Oxford Circus took top spot, in 2009 it was Victoria, and in 2005 it was King's Cross, ",
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'On the Metropolitan line, trains can reach over 60mph.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The shortest distance between two adjacent stations on the underground network is only 260 metres. The tube journey between Leicester Square and Covent Garden on the Piccadilly Line takes only about 20 seconds, but costs £4.90 (cash fare). Yet it still remains one of the most popular journeys with tourists.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'Many tube stations were used as air-raid shelters during the Second World War, but the Central Line was even converted into a fighter aircraft factory that stretched for over two miles, with its own railway system. Its existence remained an official secret until the 1980s.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: "Angel has the Underground's longest escalator at 60m/197ft, with a vertical rise of 27.5m.",
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The shortest escalator is Stratford, with a vertical rise of 4.1m.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'Only 45 per cent of the Underground is actually in tunnels.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The longest distance between stations is on the Metropolitan line from Chesham to Chalfont & Latimer: a total of only 3.89 miles.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The longest continuous tunnel is on the Northern line and runs from East Finchley to Morden (via Bank), a total of 17.3 miles.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'Aldgate Station, on the Circle and Metropolitan Lines, is built on a massive plague pit, where more than 1,000 bodies are buried.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The longest journey without change is on the Central line from West Ruislip to Epping, and is a total of 34.1 miles.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The deepest station is Hampstead on the Northern line, which runs down to 58.5 metres.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'In Central London the deepest station below street level is also the Northern line. It is the DLR concourse at Bank, which is 41.4 metres below.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The TARDIS, (Dr Who’s transport) can be found outside Earl’s Court station. Or at least an old police call box can.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The London Underground manages about 10 per cent of all green spaces in London.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'Wildlife observed on the Tube network includes woodpeckers, deer, sparrowhawk, bats, grass snakes, great crested newts, slow worms.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'Over 47 million litres water are pumped from the Tube each day, enough to fill a standard leisure centre swimming pool (25 metres x 10 metres) every quarter of an hour.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The London Underground trains were originally steam powered.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The station with the most platforms is Baker Street with 10 (Moorgate also has 10 platforms but only six are used by Tube trains - others are used by overground trains).',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The District Line has the most stations: 60.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The Waterloo and City Line has the fewest stations (no intermediate stations)',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The Underground name first appeared on stations in 1908.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'London Underground has been known as the Tube since 1890 due to the shape of the tunnels.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The first deep-level electric railway line also opened in 1890.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: "The Tube's logo is known as “the roundel” (a red circle crossed by a horizontal blue bar)",
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The station with the most escalators is Waterloo with 23.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            "The total number of passengers carried during 2013/14 was 1.265 billion – making it the world's 11th busiest metro.",
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The highest station above sea level is Amersham, at 147 metres.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'Tube trains travelled 76.4 million kilometres last year.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The Northern line has the highest maximum number of trains required for scheduled peak period service: 91.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The Waterloo & City line has the fewest scheduled for peak period service at just five.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The total length of the London Underground network is 250 miles.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The eastern extension of the Jubilee line is the only Underground line to feature glass screens to deter "jumpers".',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The earliest trains run from Osterley to Heathrow on the Piccadilly line, starting at 4.45am.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The greatest elevation above the ground level is on the Northern line at Dollis Brook viaduct over Dollis road, Mill Hill: it rises a total of 18 metres (60ft).',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'One of the early names proposed for the Victoria Line was the Viking line.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'In 1924, the first baby was born on the Underground, on a train at Elephant & Castle on the Bakerloo line.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The American talk show host Jerry Springer was born at East Finchley during the Second World War: his mother had taken shelter in the station from an air raid.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'Builders working on the Bakerloo Line are reported to have suffered from the bends while tunnelling under the Thames.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The inaugural journey of the first Central line train in 1900 had the Prince of Wales and Mark Twain on board.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The tunnels beneath the City curve significantly because they follow its medieval street plan.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The Central line introduced the first flat fare when it opened at the turn of the 20th century. The tuppence fare lasted until the end of June 1907 when a threepenny fare was introduced for longer journeys.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'Charles Pearson, MP and Solicitor to the City of London, is credited with successfully campaigning for the introduction of the Underground. He died in 1862 shortly before the first train ran.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: "The first escalator on the Underground was installed at Earl's Court in 1911.",
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The first crash on the Tube occurred in 1938 when two trains collided between Waterloo and Charing Cross, injuring 12 passengers.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'Harry Beck produced the well known Tube map diagram while working as an engineering draughtsman at the London Underground Signals Office. He was reportedly paid 10 guineas (£10.50) for his efforts.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'Harry Beck’s map was considered too big a departure from the norm, but the public liked it and it became official in 1933.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'Busking has been licensed on the Tube since 2003.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'Sting and Paul McCartney are both rumoured to have busked on the Underground in disguise.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The phrase "Mind the gap" dates back to 1968. The recording that is broadcast on stations was first done by Peter Lodge, who had a recording company in Bayswater.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The Peter Lodge recording of “Mind the Gap” is still in use, but some lines use recordings by a Manchester voice artist Emma Clarke. On the Piccadilly line the recording is notable for being the voice of Tim Bentinck, who plays David Archer in The Archers.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The Jubilee Line was the only Underground Line to connect with all the others until the East London line ceased to be part of the Underground in 2007 (now the Central Line does too). ',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'Approximately 50 passengers a year kill themselves on the Underground.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'Fewer than 10 per cent of Tube stations lie south of the Thames.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The total number of lifts on the Underground, including four stair lifts, is 167.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            "Smoking was banned on the Underground as a result of the King's Cross fire in November 1987 which killed 31 people. A discarded match was thought to be the cause of that inferno.",
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'An estimated half a million mice live in the Underground system.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: '1961 marked the end of steam and electric haulage of passenger trains on the London Underground.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'One of the levels in Tomb Raider 3 is set in the disused Aldwych tube station, featuring scenes of Lara Croft killing rats.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'In the film Harry Potter and the Philosopher’s Stone, the Hogwarts headmaster has a scar that resembles a map of the London Underground on his knee.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'There are only two tube station names that contain all five vowels: Mansion House, and South Ealing.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'Edward Johnston designed the font for the London Underground in 1916. The font he came up with is still in use today.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'Amersham is also the most westerly tube station, as well as the highest (see above).',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'In January 2005, in an attempt to alleviate a problem with loitering young people, the London Underground announced it would play classical music at problem stations.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The Underground has the oldest section of underground railway in the world, which opened in 1863.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            "The first section of the Underground ran between Paddington (Bishop's Road) and Farringdon Street. The same section now forms part of the Circle, Hammersmith & City, and Metropolitan lines.",
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The Underground was first used for air raid shelters in September 1940.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'During the Second World War, part of the Piccadilly line (Holborn - Aldwych branch), was closed and British Museum treasures were stored in the empty spaces.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The London Passenger Transport Board was nationalised and became the London Transport Executive in 1948.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The first Tube tunnel was opened in 1880, running from the Tower of London to Bermondsey.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: "The Central Line used to be nicknamed as the 'Twopenny Tube' for its flat fare.",
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'Dot matrix train destination indicators were introduced onto London Underground platforms in 1983.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The single worst accident in terms of fatalities on the Underground occurred on February 28, 1975 at Moorgate, when 42 people died.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The Piccadilly line extended to serve Heathrow Terminal 4 in 1986.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'Penalty fares were only introduced in 1994.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The Tube carried one billion passengers in a year for the first time in 2007.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The last manually operated doors on Tube trains (replaced by air-operated doors) were phased out in 1929.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The Jubilee Line was named to mark Queen Elizabeth II’s Silver Jubilee in 1977 – but the line did not open until 1979.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'A census carried out on September 27, 1940, found that 177,500 Londoners were sleeping in Tube stations.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'During the war, special supply trains ran, providing seven tonnes of food and 2,400 gallons of tea and cocoa every night to people staying in the Tube.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'Covent Garden is believed to be haunted by the ghost of William Terris who met an untimely death near the station in 1897.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'Another station that is believed to be haunted is Farringdon. The so-called Screaming Spectre is believed to have been a milliner.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The Seven Sisters Underground station is believed to have been named after a line of elm trees which stood nearby until the 1830s.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The fictitious station of Walford East, which features in the long-running soap opera Eastenders, is supposed to be on the District Line.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'Every week, Underground escalators travel the equivalent distance of going twice around the world.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'According to TFL, London Underground trains travel a total of 1,735 times around the world (or 90 trips to the moon and back) each year.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'A spiral escalator was installed in 1907 at Holloway Road station, but linear escalators were favoured for the rest of the network. A small section of the spiral escalator is in the Acton depot.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'A small section of the old London Wall survives in the trackside walls of Tower Hill station at platform level. One of the largest pieces of the wall also stands just outside this station.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'Finsbury Park station has murals that show a pair of duelling pistols, harking back to a time when men would visit the park after hours to defend their honour.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'In 2012, the most complained about line was the Jubilee.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The London Underground is thought to be the third largest metro system in the world, in terms of miles, after the Beijing Subway and the Shanghai Metro.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The London Underground is the third busiest metro system in Europe, after Moscow and Paris.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The coffin of Dr. Thomas Barnardo was carried in funeral cortege on an underground train in 1905, one of only two occasions this is known to have happened.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The Underground helped over 200,000 children escape to the countryside during the Second World War.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'During the war, some stations (now mostly disused) were converted into government offices: a station called Down Street was used for meetings of the Railway Executive Committee, as well as for the War Cabinet before the Cabinet War Rooms were built.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'Brompton Road (now disused) on the Piccadilly, Line was apparently used as a control room for anti-aircraft guns.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'Only five London Underground stations lie outside the M25 motorway',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The Underground runs 24 hours a day at New Year, during special events (such as for the opening and closing ceremonies of the London Olympics), and on selected lines at the weekend.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'According to a 2002 study air quality on the Underground was 73 times worse than at street level, with 20 minutes on the Northern Line having "the same effect as smoking a cigarette".',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            "The former poet laureate John Betjeman created 'Metroland' series, a homage to the people and places served by the Metropolitan line in 1973.",
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The Oyster card was introduced in 2003.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The worst civilian death toll on the Underground occurred at Bethnal Green Tube tragedy in 1943, when 173 people died. It is the largest loss of life in a single incident on the London Underground network.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The largest number of people killed by a single wartime bomb was 68 at Balham Station.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The 100th anniversary of the roundel (the Tube Logo) was celebrated in 2008 by TfL commissioning 100 artists to produce works that celebrate the design.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The largest Tube car park is at Epping and has 599 parking spots.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The Central Line has the most tube stations with no surface building (Bank, Bethnal Green, Chancery Lane, Gants Hill, Notting Hill Gate)',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'Of the stations that have stairs, Hampstead Station has the most steps (320 in total).',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'There are 14 journeys between stations that take less than a minute on average.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            "King's Cross St Pancras tube station is served by more Underground lines than any other station on the network.",
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'Seven London Boroughs are not served by the underground system, six of them being situated south of the River Thames.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: "The total number of carriages in London Underground's fleet, as of January 2013, was 4,134.",
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The total number of stations served on the network is 270.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'London Underground transferred from the control of the Government to Transport for London (TfL) on July 15, 2003.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'Scenes from the film Sliding Doors were shot at Waterloo station on the Waterloo & City Line and at Fulham Broadway tube station on the District Line.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'Filming on location in the Underground costs £500 per hour (plus VAT) unless you have a crew of less than five.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'You can now no longer go around the Circle Line in a full circle. From 2009, the Circle Line terminated at Edgware Road.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'Greenford on the Central Line was the last Tube station to use wooden escalators. They were replaced in 2014. ',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'Arsenal (originally Gillespie Road) on Piccadilly line is the only station named after a football team.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'There are three tube stations on the Monopoly board: Liverpool Street Station, King’s Cross and Marylebone.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The number of stations that only use escalators is 12',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'Nineteen stations just use lifts.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The River Westbourne was funnelled above a platform on Sloane Square in a large iron pipe suspended from girders. It remains in place today.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The first tube station to be demolished was Westbourne Park on the Metropolitan Line. It was re-sited in 1871.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'There is a mosquito named after the Tube – the London Underground mosquito, which was found in the London Underground. It was notable for its assault of Londoners sleeping in the Underground during the Blitz.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The London Underground Film Office handles over 200 requests a month.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'In Alfred Hitchcock’s first feature film The Lodger (1926) featured the director making a cameo on the Tube.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The record for visiting all the stations on the London Underground network – known as the Tube Challenge – is currently held by Ronan McDonald and Clive Burgess of the United Kingdom, who completed the challenge in 16 hours, 14 minutes and 10 seconds on February 19, 2015',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'The Tube Challenge record did not appear in the Guinness book of records until its eighth edition in 1960, when it stood at 18 hours, 35 minutes.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'An interactive novel has been published, set on the London Underground. You can read it here.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'In cockney rhyming slang, the London Underground is known as the Oxo (Cube/Tube).',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'Around 30,000 passengers went on The Metropolitan Line on its first day of public business – January 10, 1863.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'There were claims the first baby born on the Underground was called Thelma Ursula Beatrice Eleanor (so that her initials would have read TUBE) but this story later proved false – her actual name was Marie Cordery.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'On August 3 2012, during the Olympic Games, the London Underground had its most hectic day ever, carrying 4.4 million passengers – but that record was beaten on Friday December 4 2015, when 4.82 million people used it. ',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'St James is the only Underground Station to have Grade-I protected status. It includes 55 Broadway, the administrative headquarters of London’s Underground since the 1930s.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The most recent Tube birth – a boy – was in 2009.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The most common location for filming is Aldwych, a disused station.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'As Princess Elizabeth, the Queen travelled on the Underground for the first time in May 1939, when she was 13 years old, with her governess Marion Crawford and Princess Margaret.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'Poems on the Underground was launched in 1986, the idea of American writer Judith Chernaik.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            "A series of animal shapes have also been highlighted in the London Underground map, first discovered by Paul Middlewick in 1988. They're created using the tube lines, stations and junctions of the London Underground map.",
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'A fragrance known as Madeleine was trialled at St. James Park, Euston, and Piccadilly stations in 2001, intended to make the Tube more pleasant. It was stopped within days after complaints from people saying they felt ill.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'There were eight deep-level shelters built under the London Underground in the Second World War. One of them in Stockwell is decorated as a war memorial.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'After the war, the deep level shelter at Clapham South housed immigrants from the West Indies.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text:
            'A 2011 study suggested 30 per cent of passengers take longer routes due to the out-of-scale distances on the Tube map.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The first ever air-conditioned, walk-through Underground train ran on the Metropolitan line in 2010.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'The average distance travelled by each Tube train annually stands at around 114,500 miles.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
    {
        text: 'Alcohol was banned on the Tube – and all London Transport – from June 2008.',
        source:
            'https://www.telegraph.co.uk/travel/destinations/europe/united-kingdom/england/london/articles/London-Underground-150-fascinating-Tube-facts/',
    },
];

export default facts;
