/*
*DONE* 1) Get PC editing working *DONE*
*DONE* 2) Get Thread editing working *DONE*
*DONE* 3) Debug saving of adventures - notes not saving (done); worth making 'save' strictly an over=write, currently behaving as a 'save as'. *DONE*
*DONE* 4) Random event on a doubles throw on a Fate question *DONE*
*DONE* 5) Behaviour Check tables from Mythic Variations 2 *DONE*
*DONE* 6) Event Check - rename the Insert Random Event button *DONE*
*DONE* 7) Design: Adventure on one helper page (name, save, load etc. buttons, Chaos Factor, Scene generator), then all Checks and dice.
8) Extended Design: add one page per RPG system, e.g. Mongoose Traveller, Mothership, etc. Each page will have task rolls and possibly quick-char gen, e.g. just UWPs for Traveller.

New to-do - conversion to Mythic GME 2nd Edition
*DONE* 1) Fate Chart converted to 2nd Edition
*NOT DOING* 2) Remove Behaviour mechanics from Variations 2
*DONE* 3) Check Action, Description tables are the same.  Check mechanics of Event descriptions - keep eventMA / eventMS?
*DONE* 4) Add all the extra meaning tables

FUTURE: thread progress tracks (add / check off / delete)
*/

const descriptor1 = ["Adventurously","Aggressively","Anxiously","Awkwardly","Beautifully","Bleakly","Boldly","Bravely","Busily","Calmly","Carefully","Carelessly","Cautiously","Ceaselessly","Cheerfully","Combatively","Coolly","Crazily","Curiously","Dangerously","Defiantly","Deliberately","Delicately","Delightfully","Dimly","Efficiently","Emotionally","Energetically","Enormously","Enthusiastically","Excitedly","Fearfully","Ferociously","Fiercely","Foolishly","Fortunately","Frantically","Freely","Frighteningly","Fully","Generously","Gently","Gladly","Gracefully","Gratefully","Happily","Hastily","Healthily","Helpfully","Helplessly","Hopelessly","Innocently","Intensely","Interestingly","Irritatingly","Joyfully","Kindly","Lazily","Lightly","Loosely","Loudly","Lovingly","Loyally","Majestically","Meaningfully","Mechanically","Mildly","Miserably","Mockingly","Mysteriously","Naturally","Neatly","Nicely","Oddly","Offensively","Officially","Partially","Passively","Peacefully","Perfectly","Playfully","Politely","Positively","Powerfully","Quaintly","Quarrelsomely","Quietly","Roughly","Rudely","Ruthlessly","Slowly","Softly","Strangely","Swiftly","Threateningly","Timidly","Very","Violently","Wildly","Yieldingly"];
const descriptor2 = ["Abnormal","Amusing","Artificial","Average","Beautiful","Bizarre","Boring","Bright","Broken","Clean","Cold","Colorful","Colorless","Comforting","Creepy","Cute","Damaged","Dark","Defeated","Dirty","Disagreeable","Dry","Dull","Empty","Enormous","Extraordinary","Extravagant","Faded","Familiar","Fancy","Feeble","Festive","Flawless","Forlorn","Fragile","Fragrant","Fresh","Full","Glorious","Graceful","Hard","Harsh","Healthy","Heavy","Historical","Horrible","Important","Interesting","Juvenile","Lacking","Large","Lavish","Lean","Less","Lethal","Lively","Lonely","Lovely","Magnificent","Mature","Messy","Mighty","Military","Modern","Mundane","Mysterious","Natural","Normal","Odd","Old","Pale","Peaceful","Petite","Plain","Poor","Powerful","Protective","Quaint","Rare","Reassuring","Remarkable","Rotten","Rough","Ruined","Rustic","Scary","Shocking","Simple","Small","Smooth","Soft","Strong","Stylish","Unpleasant","Valuable","Vibrant","Warm","Watery","Weak","Young"];
const action1 = ["Attainment","Starting","Neglect","Fight","Recruit","Triumph","Violate","Oppose","Malice","Communicate","Persecute","Increase","Decrease","Abandon","Gratify","Inquire","Antagonize","Move","Waste","Truce","Release","Befriend","Judge","Desert","Dominate","Procrastinate","Praise","Separate","Take","Break","Heal","Delay","Stop","Lie","Return","Imitate","Struggle","Inform","Bestow","Postpone","Expose","Haggle","Imprison","Release","Celebrate","Develop","Travel","Block","Harm","Debase","Overindulge","Adjourn","Adversity","Kill","Disrupt","Usurp","Create","Betray","Agree","Abuse","Oppress","Inspect","Ambush","Spy","Attach","Carry","Open","Carelessness","Ruin","Extravagance","Trick","Arrive","Propose","Divide","Refuse","Mistrust","Deceive","Cruelty","Intolerance","Trust","Excitement","Activity","Assist","Care","Negligence","Passion","Work","Control","Attract","Failure","Pursue","Vengeance","Proceedings","Dispute","Punish","Guide","Transform","Overthrow","Oppress","Change"];
const action2 = ["Goals","Dreams","Environment","Outside","Inside","Reality","Allies","Enemies","Evil","Good","Emotions","Opposition","War","Peace","Innocent","Love","Spirit","Intellect","Ideas","Joy","Messages","Energy","Balance","Tension","Friendship","Physical","Project","Pleasures","Pain","Possessions","Benefits","Plans","Lies","Expectations","Legal","Bureaucracy","Business","Path","News","Exterior","Advice","Plot","Competition","Prison","Illness","Food","Attention","Success","Failure","Travel","Jealousy","Dispute","Home","Investment","Suffering","Wishes","Tactics","Stalemate","Randomness","Misfortune","Death","Disruption","Power","Burden","Intrigues","Fears","Ambush","Rumor","Wounds","Extravagance","Representative","Adversities","Opulence","Liberty","Military","Mundane","Trials","Masses","Vehicle","Art","Victory","Dispute","Riches","Normal","Technology","Hope","Magic","Illusions","Portals","Danger","Weapons","Animals","Weather","Elements","Nature","Masses","Leadership","Fame","Anger","Information"];
const theOdds = {"Impossible":[{exY:0, y:1, exN:81}, {exY:0, y:1, exN:81}, {exY:0, y:1, exN:81}, {exY:1, y:5, exN:82}, {exY:2, y:10, exN:83}, {exY:3, y:15, exN:84}, {exY:5, y:25, exN:86}, {exY:7, y:35, exN:88}, {exY:10, y:50, exN:91}],
				 "Nearly Impossible":[{exY:0, y:1, exN:81}, {exY:0, y:1, exN:81}, {exY:1, y:5, exN:82}, {exY:2, y:10, exN:83}, {exY:3, y:15, exN:84}, {exY:5, y:25, exN:86}, {exY:7, y:35, exN:88}, {exY:10, y:50, exN:91}, {exY:13, y:65, exN:94}],
				 "Very Unlikely":[{exY:0, y:1, exN:81}, {exY:1, y:5, exN:82}, {exY:2, y:10, exN:83}, {exY:3, y:15, exN:84}, {exY:5, y:25, exN:86}, {exY:7, y:35, exN:88}, {exY:10, y:50, exN:91}, {exY:13, y:65, exN:94}, {exY:15, y:75, exN:96}],
				 "Unlikely":[{exY:1, y:5, exN:82}, {exY:2, y:10, exN:83}, {exY:3, y:15, exN:84}, {exY:5, y:25, exN:86}, {exY:7, y:35, exN:88}, {exY:10, y:50, exN:91}, {exY:13, y:65, exN:94}, {exY:15, y:75, exN:96}, {exY:17, y:85, exN:98}],
				 "50/50":[{exY:2, y:10, exN:83}, {exY:3, y:15, exN:84}, {exY:5, y:25, exN:86}, {exY:7, y:35, exN:88}, {exY:10, y:50, exN:91}, {exY:13, y:65, exN:94}, {exY:15, y:75, exN:96}, {exY:17, y:85, exN:98}, {exY:18, y:90, exN:99}],
				 "Likely":[{exY:3, y:15, exN:84}, {exY:2, y:25, exN:86}, {exY:7, y:35, exN:88}, {exY:10, y:50, exN:91}, {exY:13, y:65, exN:94}, {exY:15, y:75, exN:96}, {exY:17, y:85, exN:98}, {exY:18, y:90, exN:99}, {exY:19, y:95, exN:100}],
				 "Very Likely":[{exY:2, y:25, exN:86}, {exY:7, y:35, exN:88}, {exY:10, y:50, exN:91}, {exY:13, y:65, exN:94}, {exY:15, y:75, exN:96}, {exY:17, y:85, exN:98}, {exY:18, y:90, exN:99}, {exY:19, y:95, exN:100}, {exY:20, y:99, exN:101}],
				 "Nearly Certain":[{exY:7, y:35, exN:88}, {exY:10, y:50, exN:91}, {exY:13, y:65, exN:94}, {exY:15, y:75, exN:96}, {exY:17, y:85, exN:98}, {exY:18, y:90, exN:99}, {exY:19, y:95, exN:100}, {exY:20, y:99, exN:101}, {exY:20, y:99, exN:101}],
				 "Certain":[{exY:10, y:50, exN:91}, {exY:13, y:65, exN:94}, {exY:15, y:75, exN:96}, {exY:17, y:85, exN:98}, {exY:18, y:90, exN:99}, {exY:19, y:95, exN:100}, {exY:20, y:99, exN:101}, {exY:20, y:99, exN:101},{exY:20, y:99, exN:101}]};
const eventFocusTbl = [{name:"Remote Event", weight:5},{name:"NPC action", weight:10},{name:"Introduce a new NPC", weight:10},{name:"Move toward a thread", weight:5},{name:"Move away from a thread", weight:10},{name:"Close a thread", weight:5},{name:"PC negative", weight:10},{name:"PC positive", weight:5},{name:"Ambiguous Event", weight:5},{name:"NPC Negative", weight:5},{name:"NPC Positive", weight:5},{name:"Current Context", weight:5}];
const detailCheckTbl = {dice:function(chaosFactor){ return d10() + d10() + (chaosFactor > 5 ? 2 : (chaosFactor < 4 ? -2 : 0)); }, min:0, max: 22, 0:"Anger", 1:"Anger", 2:"Anger", 3:"Anger", 4:"Anger", 5:"Sadness", 6:"Fear", 7:"Disfavours Thread", 8:"Disfavours PC", 9:"Focus NPC", 10:"Favours NPC", 11:"Focus PC", 12:"Disfavours NPC", 13:"Focus Thread", 14:"Favours PC", 15:"Favour Thread", 16:"Courage", 17:"Happiness", 18:"Calm", 19:"Calm", 20:"Calm", 21:"Calm", 22:"Calm"};
const dispositionTbl = [{name:"Passive (-2)",mod:-2}, {name:"Passive (-2)",mod:-2}, {name:"Passive (-2)",mod:-2}, {name:"Passive (-2)",mod:-2}, {name:"Passive (-2)",mod:-2}, {name:"Passive (-2)",mod:-2}, {name:"Moderate (0)",mod:0}, {name:"Moderate (0)",mod:0}, {name:"Moderate (0)",mod:0}, {name:"Moderate (0)",mod:0}, {name:"Moderate (0)",mod:0}, {name:"Active (+2)",mod:2}, {name:"Active (+2)",mod:2}, {name:"Active (+2)",mod:2}, {name:"Active (+2)",mod:2}, {name:"Active (+2)",mod:2}, {name:"Aggressive (+4)",mod:4}];
const npcActionTbl1 = [{name:"Theme Action.",dispMod:0,tbl2action:false,tbl2mod:0},{name:"Theme Action.",dispMod:0,tbl2action:false,tbl2mod:0},{name:"Theme Action.",dispMod:0,tbl2action:false,tbl2mod:0},{name:"NPC Continues.",dispMod:0,tbl2action:false,tbl2mod:0},{name:"NPC Continues.",dispMod:0,tbl2action:false,tbl2mod:0},{name:"NPC Continues (+2).",dispMod:2,tbl2action:false,tbl2mod:0},{name:"NPC Continues (-2).",dispMod:-2,tbl2action:false,tbl2mod:0},{name:"NPC Action.",dispMod:0,tbl2action:true,tbl2mod:0},{name:"NPC Action (-4).",dispMod:0,tbl2action:true,tbl2mod:-4},{name:"NPC Action (+4).",dispMod:0,tbl2action:true,tbl2mod:4}];
const npcActionTbl2 = {dice:function() { return d10() + d10(); }, min:6, max: 19, 6:"Talks, Exposition", 7:"Performs an ambiguous action", 8:"Performs an ambiguous action", 9:"Acts out of PC Interest", 10:"Acts out of PC Interest", 11:"Gives something", 12:"Seeks to end the encounter", 13:"Changes the theme", 14:"Changes descriptor", 15:"Acts out of self interest", 16:"Acts out of self interest", 17:"Acts out of self interest", 18:"Takes something", 19:"Causes harm"};
const elementsTbls = {
"Adventure Tone":["Action","Activity","Adventurous","Adversity","Aggressive","Amusing","Anxious","Attainment","Average","Bizarre","Bleak","Bold","Busy","Calm","Cheerful","Colorful","Combative","Competitive","Conflict","Crazy","Creepy","Dangerous","Dark","Emotional","Energetic","Epic","Evil","Exterior","Failure","Fame","Familiar","Fearful","Festive","Fierce","Fortunate","Frantic","Fresh","Frightening","Glorious","Goals","Hard","Harsh","Heavy","Historical","Hopeful","Horrible","Horror","Important","Inquire","Inspect","Intellect","Intense","Interesting","Intrigue","Lavish","Legal","Lethal","Light","Macabre","Magnificent","Majestic","Mature","Meaningful","Mechanical","Messy","Military","Misfortune","Mistrust","Modern","Mundane","Mystery","Natural","Normal","Odd","Personal","Physical","Power","Pursuit","Quaint","Random","Rare","Reassuring","Remarkable","Rough","Rustic","Scary","Simple","Slow","Social","Strange","Strong","Struggle","Tension","Travel","Trials","Vengeance","Very","Violent","Warlike","Wild"],
"Alien Species Descriptors":["Advanced","Aggressive","Agile","Amphibious","Ancient","Anxious","Aquatic","Arrogant","Artistic","Avian","Beautiful","Bizarre","Carapace","Clawed","Colorful","Combative","Conquering","Dangerous","Declining","Defensive","Desperate","Destructive","Dominating","Emotionless","Enormous","Exploitive","Explorers","Familiar","Fast","Feeble","Feral","Ferocious","Friendly","Frightening","Fungal","Furry","Generous","Gentle","Glowing","Graceful","Harsh","Helpful","Humanoid","Hungry","Immortal","Insectlike","Insubstantial","Intelligent","Intimidating","Large","Lethal","Levitating","Liquid","Mammalian","Many-eyed","Militaristic","Mysterious","Nightmarish","Odd","Oppressive","Passive","Peaceful","Perfect","Plant","Powered","Powerful","Powers","Primitive","Prosperous","Psychic","Reptilian","Robotic","Scary","Scientific","Secretive","Servitor","Simple","Skilled","Slender","Slow","Small","Smelly","Strange","Strong","Suffering","Tail","Tall","Technological","Tentacled","Threatening","Toothy","Travelers","Treacherous","Violent","Warlike","Wary","Watery","Weak","Wings","Wormish"],
"Animal Actions":["Abandon","Abnormal","Aggressive","Angry","Anxious","Assist","Attack","Befriend","Bestow","Bizarre","Bold","Break","Busy","Calm","Careful","Careless","Cautious","Ceaseless","Change","Combative","Curious","Dangerous","Deliberate","Disinterested","Disrupt","Distracted","Dominate","Energetic","Excited","Exotic","Familiar","Fearful","Feeble","Ferocious","Fierce","Fight","Flee","Follow","Food","Frantic","Friendship","Frightening","Generous","Gentle","Graceful","Harm","Hasty","Helpful","Helpless","Hungry","Hunt","Ignore","Imitate","Implore","Imprison","Inspect","Intense","Irritating","Juvenile","Lazy","Leave","Lethal","Loud","Loyal","Messy","Mistrust","Move","Mundane","Mysterious","Natural","Neglect","Normal","Observe","Odd","Oppose","Playful","Protect","Pursue","Quiet","Reassuring","Release","Return","Scary","Simple","Slow","Strange","Struggle","Swift","Tactics","Take","Threatening","Tranquil","Transform","Trick","Trust","Violent","Warn","Waste","Wild","Yield"],
"Army Descriptors":["Active","Aggressive","Allies","Ambush","Animals","Arrive","Assist","Average","Betray","Bizarre","Block","Bold","Calm","Careless","Cautious","Ceaseless","Celebrate","Colorful","Communicate","Creepy","Deceive","Defensive","Defiant","Delay","Disorganized","Divide","Efficient","Enemies","Energy","Failure","Ferocious","Fight","Food","Foolish","Fortunate","Frantic","Fresh","Frightening","Helpful","Helpless","Illness","Lacking","Large","Lavish","Lazy","Leadership","Lethal","Loud","Loyal","Mighty","Mysterious","Normal","Path","Persecute","Power","Problems","Punish","Pursue","Quiet","Ready","Reassuring","Recruit","Release","Riches","Rough","Ruin","Ruthless","Simple","Skilled","Slow","Small","Stalemate","Start","Stop","Strange","Strong","Struggle","Success","Suffering","Supplies","Swift","Tactics","Take","Technology","Tension","Testing","Threatening","Tired","Travel","Triumph","Truce","Trust","Unequipped","Unexpected","Untrained","Victory","Violate","Waste","Weak","Weapons"],
"Cavern Descriptors":["Activity","Ancient","Animals","Aromatic","Art","Beautiful","Bizarre","Bleak","Blocked","Boulder","Bright","Cliff","Climb","Closed","Cold","Collapsed","Colorful","Cracked","Cramped","Crawl","Creature","Creepy","Crumbling","Curious","Damaged","Dangerous","Dark","Difficult","Dirty","Discouraging","Dripping","Dry","Echo","Elements","Empty","Enormous","Exit","Exotic","Fall","Flora","Frightening","Full","Fungus","Good","Hard","Harm","Harsh","Hole","Huge","Icy","Interesting","Large","Ledge","Lethal","Light","Loud","Magnificent","Message","Messy","Minerals","Misfortune","Mist","Mysterious","Natural","Nature","Normal","Occupied","Odd","Open","Path","Plants","Pool","Quiet","Reassuring","Remarkable","Riches","River","Rock","Rough","Scary","Simple","Slippery","Slope","Small","Smelly","Smooth","Sounds","Stalactites","Strange","Threatening","Tight","Tranquil","Treasure","Unnatural","Unstable","Untouched","Warm","Waste","Water","Windy"],
"Characters":["Accompanied","Active","Aggressive","Ambush","Animal","Anxious","Armed","Beautiful","Bold","Busy","Calm","Careless","Casual","Cautious","Classy","Colorful","Combative","Crazy","Creepy","Curious","Dangerous","Deceitful","Defeated","Defiant","Delightful","Emotional","Energetic","Equipped","Excited","Expected","Familiar","Fast","Feeble","Feminine","Ferocious","Foe","Foolish","Fortunate","Fragrant","Frantic","Friend","Frightened","Frightening","Generous","Glad","Happy","Harmful","Helpful","Helpless","Hurt","Important","Inactive","Influential","Innocent","Intense","Knowledgeable","Large","Lonely","Loud","Loyal","Masculine","Mighty","Miserable","Multiple","Mundane","Mysterious","Natural","Odd","Official","Old","Passive","Peaceful","Playful","Powerful","Professional","Protected","Protecting","Questioning","Quiet","Reassuring","Resourceful","Seeking","Skilled","Slow","Small","Stealthy","Strange","Strong","Tall","Thieving","Threatening","Triumphant","Unexpected","Unnatural","Unusual","Violent","Vocal","Weak","Wild","Young"],
"Character Actions - Combat":["Abandon","Abuse","Aggressive","Agree","Ally","Ambush","Amuse","Anger","Antagonize","Anxious","Assist","Attack","Betray","Block","Bold","Brave","Break","Calm","Careless","Carry","Cautious","Celebrate","Change","Charge","Communicate","Compete","Control","Crazy","Cruel","Damage","Deceive","Defend","Defiant","Delay","Disrupt","Divide","Dominate","Energetic","Enthusiastic","Expectation","Fearful","Ferocious","Fierce","Fight","Flee","Frantic","Free","Frightening","Harm","Harsh","Hasty","Hide","Imitate","Imprison","Kill","Lead","Lethal","Liberty","Lie","Loud","Loyal","Magic","Mechanical","Mighty","Military","Mock","Move","Mysterious","Normal","Odd","Open","Oppose","Pain","Path","Prepare","Punish","Pursue","Rough","Rude","Ruin","Ruthless","Simple","Slow","Spy","Stop","Strange","Struggle","Suppress","Swift","Take","Technology","Threaten","Trick","Truce","Usurp","Vehicle","Vengeance","Waste","Weapon","Withdraw"],
"Character Actions - General":["Abandon","Aggressive","Amusing","Anger","Antagonize","Anxious","Assist","Bestow","Betray","Bizarre","Block","Bold","Break","Calm","Care","Careful","Careless","Celebrate","Change","Combative","Communicate","Control","Crazy","Creepy","Dangerous","Deceive","Decrease","Defiant","Delay","Disrupt","Dominate","Efficient","Energetic","Excited","Expose","Fearful","Feeble","Fierce","Fight","Foolish","Frantic","Frightening","Generous","Gentle","Harm","Harsh","Hasty","Helpful","Imitate","Important","Imprison","Increase","Inspect","Intense","Juvenile","Kind","Lazy","Leadership","Lethal","Loud","Loyal","Mature","Meaningful","Messy","Move","Mundane","Mysterious","Nice","Normal","Odd","Official","Open","Oppose","Passion","Peace","Playful","Pleasures","Possessions","Punish","Pursue","Release","Return","Simple","Slow","Start","Stop","Strange","Struggle","Swift","Tactics","Take","Technology","Threatening","Trust","Violent","Waste","Weapons","Wild","Work","Yield"],
"Character Appearance":["Abnormal","Armed","Aromatic","Athletic","Attractive","Average","Bald","Beautiful","Bizarre","Brutish","Casual","Classy","Clean","Clothing","Colorful","Common","Cool","Creepy","Cute","Dainty","Delicate","Desperate","Different","Dirty","Drab","Elegant","Equipment","Exotic","Expensive","Extravagant","Eyewear","Familiar","Fancy","Features","Feminine","Festive","Frail","Hair","Hairy","Headwear","Heavy","Hurt","Innocent","Insignia","Intense","Interesting","Intimidating","Jewelry","Large","Lavish","Lean","Limbs","Lithe","Masculine","Mature","Messy","Mighty","Modern","Mundane","Muscular","Mysterious","Natural","Neat","Normal","Odd","Official","Old","Petite","Piercing","Powerful","Professional","Reassuring","Regal","Remarkable","Rough","Rustic","Scar","Scary","Scented","Scholarly","Short","Simple","Sinister","Small","Smelly","Stocky","Strange","Striking","Strong","Stylish","Tall","Tattoo","Tools","Trendy","Unusual","Very","Weak","Weapon","Wounded","Young"],
"Character Background":["Abandoned","Abuse","Academic","Activity","Adventurous","Adversity","Art","Assist","Average","Bad","Bizarre","Bleak","Bold","Burden","Business","Care","Career","Chaotic","Cheat","Combat","Commitment","Community","Competition","Conflict","Control","Crime","Damaged","Danger","Death","Deceive","Decrease","Defeated","Disaster","Dispute","Emotion","Environment","Escape","Exile","Experience","Failure","Faith","Fame","Family","Fortunate","Free","Freedom","Friend","Gifts","Good","Guided","Hard","Harm","Harsh","Heal","Helped","Heroic","Humble","Humiliation","Imprisonment","Independent","Inherit","Injury","Injustice","Legal","Loss","Military","Mistake","Mundane","Nature","Outsider","Person","Place","Poor","Power","Prestige","Privilege","Pursued","Recruited","Religion","Rural","Saved","Search","Seclusion","Service","Sheltered","Skill","Strange","Successful","Survival","Tradition","Training","Trauma","Travel","Urban","War","Wealth","Wild","Work","Wounded","Youth"],
"Character Conversations":["Abuse","Advice","Aggressive","Agree","Amusing","Angry","Anxious","Assist","Awkward","Betray","Bizarre","Bleak","Bold","Business","Calm","Careful","Careless","Cautious","Cheerful","Classy","Cold","Colorful","Combative","Crazy","Creepy","Curious","Defiant","Delightful","Disagreeable","Dispute","Efficient","Energetic","Enthusiastic","Excited","Fearful","Fierce","Foolish","Frantic","Frightening","Generous","Gentle","Glad","Grateful","Haggle","Happy","Harsh","Hasty","Helpful","Helpless","Hopeless","Ideas","Inform","Innocent","Inquire","Intense","Interesting","Intolerance","Irritating","Joyful","Judgmental","Juvenile","Kind","Leadership","Lie","Loud","Loving","Loyal","Macabre","Mature","Meaningful","Miserable","Mistrust","Mocking","Mundane","Mysterious","News","Nice","Normal","Odd","Offensive","Official","Oppose","Peace","Plans","Playful","Polite","Positive","Praise","Quarrelsome","Quiet","Reassuring","Refuse","Rude","Rumor","Simple","Threatening","Truce","Trust","Warm","Wild"],
"Character Descriptions":["Abnormal","Active","Adventurous","Aggressive","Agreeable","Ally","Ancient","Angry","Anxious","Armed","Aromatic","Arrogant","Attractive","Awkward","Beautiful","Bizarre","Bleak","Bold","Brave","Busy","Calm","Capable","Careful","Careless","Caring","Cautious","Cheerful","Classy","Clean","Clumsy","Colorful","Combative","Commanding","Common","Competitive","Confident","Crazy","Curious","Dangerous","Different","Difficult","Dirty","Disagreeable","Disciplined","Educated","Elegant","Erratic","Exotic","Fancy","Fast","Foul","Frightened","Gentle","Harmful","Helpful","Heroic","Humorous","Hurt","Ignorant","Impulsive","Inept","Informative","Intelligent","Interesting","Intimidating","Intrusive","Large","Loud","Meek","Naive","Old","Passive","Polite","Poor","Powerful","Powerless","Primitive","Principled","Quiet","Respectful","Rough","Rude","Simple","Skilled","Slow","Small","Sneaky","Sophisticated","Strange","Strong","Supportive","Surprising","Sweet","Trained","Uniformed","Unusual","Weak","Wealthy","Wild","Young"],
"Character Identity":["Abandoned","Administrator","Adventurous","Adversary","Advisor","Ally","Art","Artist","Assistant","Athlete","Authority","Bureaucrat","Business","Combatant","Competitor","Controller","Crafter","Creator","Criminal","Deceiver","Deliverer","Dependent","Driver/Pilot","Elite","Enemy","Enforcer","Engineer","Entertainer","Executive","Expert","Explorer","Family","Farmer","Fighter","Fixer","Foreigner","Friend","Gambler","Gatherer","Guardian","Healer","Helpless","Hero","Hunter","Information","Innocent","Inspector","Intellectual","Investigator","Judge","Killer","Laborer","Lackey","Law","Leader","Legal","Lost","Mechanical","Mediator","Merchant","Messenger","Military","Mundane","Mystery","Official","Organizer","Outsider","Performer","Persecutor","Planner","Pleaser","Power","Prisoner","Professional","Protector","Public","Punish","Radical","Religious","Represent","Rogue","Ruffian","Ruler","Scholar","Scientist","Scout","Servant","Socialite","Soldier","Student","Subverter","Supporter","Survivor","Teacher","Thief","Trader","Victim","Villain","Wanderer","Warrior"],
"Character Motivations":["Adventure","Adversity","Ambition","Anger","Approval","Art","Attain","Business","Change","Character","Conflict","Control","Create","Danger","Death","Deceive","Destroy","Diminish","Disrupt","Emotion","Enemy","Environment","Escape","Failure","Fame","Family","Fear","Fight","Find","Free","Friend","Goal","Gratify","Group","Guide","Guilt","Hate","Heal","Help","Hide","Home","Hope","Idea","Illness","Important","Imprison","Increase","Information","Innocent","Intellect","Intolerance","Investment","Jealousy","Joy","Justice","Leader","Legal","Loss","Love","Loyalty","Malice","Misfortune","Mistrust","Mundane","Mysterious","Nature","Object","Obligation","Official","Oppose","Pain","Passion","Path","Peace","Physical","Place","Plan","Pleasure","Power","Pride","Protect","Pursue","Rare","Recover","Reveal","Revenge","Riches","Safety","Search","Serve","Start","Stop","Strange","Struggle","Success","Suffering","Support","Take","Transform","Travel"],
"Character Personality":["Active","Adventurous","Aggressive","Agreeable","Ambitious","Amusing","Angry","Annoying","Anxious","Arrogant","Average","Awkward","Bad","Bitter","Bold","Brave","Calm","Careful","Careless","Classy","Cold","Collector","Committed","Competitive","Confident","Control","Crazy","Creative","Crude","Curious","Deceptive","Determined","Devoted","Disagreeable","Dull","Emotion","Empathetic","Fair","Fastidious","Follower","Foolish","Friendly","Good","Gourmet","Greed","Haunted","Helpful","Honest","Honor","Humble","Humorous","Inconsistent","Independent","Interesting","Intolerant","Irresponsible","Knowledgeable","Larcenous","Leader","Likable","Loyal","Manipulative","Mercurial","Naive","Nervous","Oblivious","Obstinate","Optimistic","Perceptive","Perfectionist","Practical","Prepared","Principled","Protect","Quiet","Quirky","Rash","Rational","Respectful","Responsible","Restless","Risk","Rude","Savvy","Searching","Selfish","Selfless","Shallow","Social","Strange","Strong","Studious","Superstitious","Tolerant","Vindictive","Vocal","Wary","Weak","Wild","Wise"],
"Character Skills":["Activity","Adversity","Agility","Animals","Art","Assist","Athletic","Attack","Attain","Average","Balance","Beginner","Bestow","Block","Business","Change","Combat","Communicate","Conflict","Control","Create","Criminal","Damage","Danger","Deceit","Decrease","Defense","Develop","Dispute","Disrupt","Domestic","Dominate","Driving","Elements","Energy","Environment","Experienced","Expert","Fight","Free","Guide","Harm","Heal","Health","Increase","Inform","Information","Inquire","Inspect","Intellect","Invade","Investigative","Knowledge","Leadership","Legal","Lethal","Lie","Master","Mechanical","Medical","Mental","Military","Motion","Move","Mundane","Mysterious","Nature","Normal","Obstacles","Official","Open","Oppose","Perception","Practical","Professional","Ranged","Release","Rogue","Ruin","Simple","Social","Specialist","Start","Stop","Strange","Strength","Struggle","Suppress","Take","Technology","Transform","Travel","Trick","Usurp","Vehicle","Violence","Water","Weapon","Weather","Wounds"],
"Character Traits & Flaws":["Academic","Adversity","Animal","Assist","Attract","Beautiful","Benefits","Bestow","Bizarre","Block","Burden","Combat","Communicate","Connection","Control","Create","Criminal","Damaged","Dangerous","Decrease","Defense","Delicate","Different","Dominate","Driven","Emotion","Enemy","Energy","Environment","Failure","Fame","Familiar","Fast","Feeble","Flawless","Focused","Fortunate","Friends","Good","Healthy","Illness","Impaired","Increase","Information","Inspect","Intellect","Intense","Interesting","Lacking","Large","Leadership","Legal","Less","Lethal","Limited","Loyal","Mental","Military","Misfortune","Missing","Move","Multi","Nature","Object","Odd","Old","Partial","Passion","Perception","Physical","Poor","Possessions","Power","Principles","Public","Rare","Remarkable","Resistant","Resource","Rich","Sense","Skill","Small","Social","Specialized","Spirit","Strange","Strong","Suffering","Technical","Technology","Tough","Travel","Trouble","Trustworthy","Unusual","Very","Weak","Weapon","Young"],
"City Descriptors":["Activity","Aggressive","Aromatic","Average","Beautiful","Bleak","Block","Bridge","Bustling","Calm","Chaotic","Clean","Cold","Colorful","Commerce","Conflict","Control","Crime","Dangerous","Dense","Developed","Dirty","Efficient","Energy","Enormous","Environment","Extravagant","Festive","Flawless","Frightening","Government","Happy","Harsh","Healthy","Helpful","Hills","History","Illness","Important","Impressive","Industry","Interesting","Intrigues","Isolated","Lacking","Lake","Large","Lavish","Leadership","Liberty","Loud","Magnificent","Masses","Meaningful","Mechanical","Messy","Mighty","Military","Miserable","Misfortune","Modern","Mountain","Mundane","Mysterious","Nature","Odd","Old","Oppress","Opulence","Peace","Poor","Powerful","Protected","Public","Quiet","Rare","Reassuring","Remarkable","River","Rough","Ruined","Rustic","Simple","Small","Sparse","Structures","Struggle","Success","Suffering","Technology","Tension","Travel","Troubled","Valuable","Warm","Water","Weak","Weather","Wild","Work"],
"Civilisation Descriptors":["Active","Advanced","Adventurous","Aggressive","Agricultural","Ancient","Angry","Anxious","Artistic","Average","Beautiful","Bizarre","Bleak","Bold","Bureaucratic","Carefree","Careful","Careless","Cautious","Classy","Clean","Colorful","Combative","Commercial","Competitive","Constructive","Controlling","Crazy","Creative","Creepy","Cruel","Curious","Dangerous","Declining","Defiant","Delightful","Developed","Disagreeable","Distrustful","Dominant","Dull","Efficient","Expanding","Failed","Famous","Fearful","Festive","Free","Generous","Greedy","Happy","Healthy","Helpful","Helpless","Historical","Important","Industrial","Influential","Intolerant","Large","Lawful","Lawless","Magnificent","Mighty","Militaristic","Miserable","Modern","Mundane","Mysterious","Old","Open","Oppressive","Peaceful","Polite","Poor","Powerful","Primitive","Punitive","Quaint","Religious","Ruined","Rustic","Ruthless","Scary","Simple","Small","Strange","Strong","Struggling","Successful","Suffering","Suppressed","Suspicious","Treacherous","Warlike","Weak","Wealthy","Welcoming","Wild","Young"],
"Creature Abilities":["Ambush","Animate","Armor","Arrive","Attach","Attack","Attract","Bite","Block","Blunt","Break","Breath","Carry","Change","Climb","Cold","Common","Communicate","Conceal","Contact","Control","Create","Damage","Dark","Death","Deceive","Decrease","Defense","Depower","Detect","Disrupt","Distract","Dominate","Drain","Element","Energy","Enhanced","Entangle","Environment","Extra","Fear","Fight","Fire","Flight","Harm","Heal","Illness","Illusion","Imitate","Immune","Imprison","Increase","Intelligent","Itself","Lethal","Light","Limited","Mind","Move","Multiple","Natural","Normal","Open","Others","Paralyze","Physical","Pierce","Poison","Power","Protection","Proximity","Pursue","Ranged","Rechargeable","Resistance","Self-Sufficient","Senses","Skill","Sleep","Speed","Spy","Stealth","Stop","Strange","Stun","Substance","Summon","Suppress","Swim","Take","Telepathy","Touch","Transform","Travel","Trick","Uncommon","Vision","Vulnerable","Weak","Weapon"],
"Creature Descriptors":["Aggressive","Agile","Air","Alien","Amorphous","Animal","Aquatic","Armored","Avian","Beast","Beautiful","Body","Bony","Carapace","Clawed","Clothed","Cold","Color","Composite","Constructed","Decayed","Defensive","Dripping","Elements","Exotic","Extra Limbs","Fangs","Feminine","Feral","Filthy","Fire","Fungal","Furry","Gaunt","Glowing","Group","Growling","Healthy","Horns","Humanoid","Inscribed","Insect-like","Insubstantial","Intelligent","Intimidating","Large","Levitating","Limited","Liquid","Loud","Mammalian","Mandibles","Masculine","Mechanical","Metallic","Movement","Multiple","Mutant","Natural","Nature","Nightmarish","Object","Odorous","Passive","Plant","Reptilian","Robotic","Rooted","Rough","Shape","Shifting","Silent","Simple","Slender","Small","Solitary","Spider-like","Spiked","Steaming","Sticky","Stinger","Strange","Strong","Supernatural","Tail","Tentacled","Tongue","Toothy","Transparent","Tree-like","Twisted","Undead","Unnatural","Verbal","Warm","Weak","Weapon","Wings","Wooden","Wormish"],
"Cryptic Message":["Abandoned","Activity","Adventure","Adversity","Advice","Allies","Anger","Bestow","Betray","Bizarre","Bleak","Business","Care","Colorful","Communicate","Conflict","Creepy","Damaged","Danger","Death","Deceive","Defiant","Dispute","Divide","Emotions","Enemies","Environment","Evil","Expose","Failure","Fame","Fear","Fight","Frantic","Free","Friendship","Goals","Good","Guide","Harm","Help","Helpful","Hidden","Hope","Horrible","Important","Information","Innocent","Instruction","Intrigues","Language","Leadership","Legal","Legend","Liberty","Lies","Lost","Love","Malice","Messy","Misfortune","Mistrust","Move","Mundane","Mysterious","Neglect","Normal","Obscured","Official","Old","Oppose","Partial","Passion","Plans","Possessions","Power","Propose","Punish","Pursue","Rare","Reassuring","Recipient","Reveal","Riches","Riddle","Rumor","Secret","Start","Stop","Strange","Struggle","Success","Tension","Threaten","Truce","Trust","Unknown","Vengeance","Violence","Warning"],
"Curses":["Abandon","Age","Attract","Bad","Beauty","Betray","Bizarre","Block","Body","Break","Burden","Business","Change","Compel","Condemn","Conflict","Create","Creepy","Cruel","Danger","Death","Decrease","Delay","Disrupt","Divide","Dominate","Dreams","Elements","Emotions","Enemies","Energy","Environment","Evil","Failure","Fame","Family","Fate","Fear","Feeble","Fight","Friends","Frightening","Goals","Good","Gratify","Guide","Happiness","Harm","Health","Helpless","Home","Illness","Illusions","Imprison","Incapacity","Information","Intellect","Ironic","Jealously","Joy","Legal","Lethal","Liberty","Limit","Lonely","Love","Luck","Malice","Meaningful","Miserable","Misfortune","Mistrust","Mock","Move","Mundane","Mysterious","Nature","Neglect","Old","Oppress","Pain","Passion","Peace","Permanent","Possessions","Punish","Pursue","Riches","Ruin","Senses","Separate","Start","Stop","Strange","Struggle","Success","Temporary","Vengeance","Violence","Weapon"],
"Domicile Descriptors":["Abandoned","Activity","Animal","Aromatic","Art","Average","Beautiful","Bizarre","Bleak","Busy","Classy","Clean","Cluttered","Cold","Colorful","Comfort","Common","Cramped","Creepy","Crowded","Customized","Cute","Damaged","Dangerous","Dark","Desolate","Different","Dirty","Disagreeable","Drab","Dull","Empty","Enormous","Expected","Extravagant","Faded","Fancy","Festive","Food","Frightening","Full","Home","Investment","Inviting","Lacking","Large","Lavish","Less","Light","Loud","Magnificent","Mechanical","Messy","Modern","Mundane","Mysterious","Natural","Neat","Neglected","Nondescript","Normal","Occupied","Odd","Open","Oppressive","Opulent","Organized","Plants","Poor","Portal","Possessions","Private","Protection","Quaint","Reassuring","Roomy","Rough","Ruined","Rustic","Scary","Secure","Security","Simple","Sleep","Small","Smelly","Sparse","Storage","Strange","Temporary","Thoughtful","Tidy","Tools","Tranquil","Upgrade","Utilitarian","Valuables","View","Warm","Water"],
"Dungeon Descriptors":["Abandoned","Activity","Adversity","Ambush","Ancient","Animal","Aromatic","Art","Beautiful","Bizarre","Bleak","Chamber","Clean","Closed","Cold","Collapsed","Colorful","Creature","Creepy","Damaged","Danger","Dark","Desolate","Dirty","Door","Dry","Elements","Empty","Encounter","Enemies","Enormous","Evil","Exit","Extravagant","Faded","Familiar","Fancy","Fears","Foreboding","Full","Furnishings","Gate","Good","Harm","Heavy","Helpful","Hole","Important","Information","Interesting","Large","Lavish","Lethal","Light","Magnificent","Malice","Meaningful","Mechanical","Messages","Messy","Mighty","Military","Misfortune","Modern","Mundane","Mysterious","Natural","Neglect","Normal","Object","Occupied","Odd","Open","Passage","Path","Portal","Possessions","Quiet","Rare","Reassuring","Remarkable","Riches","Room","Rough","Ruined","Rustic","Scary","Simple","Small","Smelly","Sound","Stairs","Stonework","Technology","Trap","Treasure","Unnatural","Valuable","Warm","Watery"],
"Dungeon Traps":["Aggressive","Allies","Ambush","Animals","Animate","Antagonize","Aromatic","Art","Attach","Attention","Attract","Balance","Beautiful","Bestow","Betray","Bizarre","Blades","Break","Ceiling","Change","Choice","Climb","Cloud","Cold","Colorful","Combative","Communicate","Confuse","Constrain","Control","Create","Creepy","Crush","Damaged","Danger","Dark","Deceive","Delay","Deprive","Disrupt","Divide","Door","Drop","Duplicate","Elaborate","Enemies","Energy","Fall","Fear","Fight","Fire","Floor","Frightening","Harm","Heat","Heavy","Helpless","Horrible","Illusion","Imprison","Lethal","Loud","Lure","Magic","Mechanical","Mental","Messy","Monster","Natural","Object","Odd","Old","Pain","Plants","Portal","Possessions","Prison","Projectile","Riddle","Scary","Simple","Sounds","Stab","Stop","Strange","Strangle","Suppress","Take","Toxin","Transform","Transport","Treasure","Trials","Trigger","Unleash","Wall","Warning","Water","Weapon","Wound"],
"Forest Descriptors":["Adversity","Aggressive","Ambush","Ancient","Animal","Aromatic","Art","Assist","Average","Beautiful","Bizarre","Bleak","Block","Boulder","Cave","Chaotic","Cliff","Cold","Colorful","Combative","Communicate","Creepy","Damaged","Danger","Dark","Death","Delicate","Dry","Elements","Encounter","Enormous","Environment","Fearful","Feeble","Fierce","Food","Fortunate","Fresh","Harsh","Healthy","Helpful","Important","Information","Intense","Interesting","Lacking","Lake","Large","Lean","Ledge","Lethal","Loud","Magnificent","Majestic","Masses","Mature","Message","Mighty","Mundane","Mysterious","Natural","Nature","Nondescript","Normal","Odd","Old","Path","Peaceful","Plants","Pond","Possessions","Powerful","Pursue","Quiet","Rare","Reassuring","Remarkable","River","Rocks","Rough","Ruined","Scary","Simple","Slope","Small","Sounds","Strange","Strong","Threatening","Tranquil","Tree","Unusual","Valuable","Violent","Warm","Watery","Weak","Weather","Wild","Young"],
"Gods":["Active","Alien","Ancient","Angelic","Angry","Animal","Art","Assist","Attract","Beautiful","Bestow","Betray","Bizarre","Capricious","Colorful","Combat","Communicate","Conflict","Control","Corruption","Cosmic","Create","Creepy","Cruel","Cult","Dangerous","Dark","Death","Deceit","Destroyer","Disgusting","Dominate","Dreams","Elements","Emotions","Enemies","Energy","Enormous","Evil","Feminine","Fallen","Fear","Fertility","Festive","Fire","Frightening","Generous","Gentle","Gifts","Glorious","Good","Guide","Harm","Harsh","Heal","Humanoid","Illness","Imprison","Increase","Jealous","Justice","Knowledge","Liberty","Life","Light","Love","Magic","Majestic","Major","Malice","Masculine","Mighty","Military","Minor","Monstrous","Mundane","Mysterious","Nature","Night","Oppress","Pleasures","Power","Protector","Punish","Ruler","Sacrifice","Strange","Strong","Suppress","Threatening","Transform","Underworld","Violent","War","Warm","Water","Weak","Weapon","Weather","Worshiped"],
"Legends":["Abandon","Allies","Anger","Assist","Attainment","Befriend","Bestow","Betray","Bizarre","Block","Brave","Break","Burden","Carelessness","Cataclysm","Caution","Change","Conflict","Control","Create","Crisis","Damage","Danger","Deceive","Decrease","Defeated","Defiant","Delay","Disrupt","Divide","Elements","End","Enemies","Energy","Evil","Expose","Failure","Fame","Fear","Fight","Find","Free","Friendship","Frightening","Good","Guide","Harm","Heal","Help","Helpless","Hero","Hidden","Historical","Illness","Important","Imprison","Increase","Inform","Innocent","Intrigue","Jealousy","Judge","Leadership","Legal","Lethal","Liberty","Loss","Love","Loyalty","Masses","Mighty","Military","Misfortune","Monster","Move","Mundane","Mysterious","Natural","Old","Oppose","Oppress","Peace","Plot","Possessions","Power","Punish","Pursue","Release","Return","Riches","Ruin","Savior","Stop","Strange","Struggle","Theft","Trust","Usurp","Vengeance","Villain"],
"Locations":["Abandoned","Active","Artistic","Atmosphere","Beautiful","Bleak","Bright","Business","Calm","Charming","Clean","Cluttered","Cold","Colorful","Colorless","Confusing","Cramped","Creepy","Crude","Cute","Damaged","Dangerous","Dark","Delightful","Dirty","Domestic","Empty","Enclosed","Enormous","Entrance","Exclusive","Exposed","Extravagant","Familiar","Fancy","Festive","Foreboding","Fortunate","Fragrant","Frantic","Frightening","Full","Harmful","Helpful","Horrible","Important","Impressive","Inactive","Intense","Intriguing","Lively","Lonely","Long","Loud","Meaningful","Messy","Mobile","Modern","Mundane","Mysterious","Natural","New","Occupied","Odd","Official","Old","Open","Peaceful","Personal","Plain","Portal","Protected","Protection","Purposeful","Quiet","Reassuring","Remote","Resourceful","Ruined","Rustic","Safe","Services","Simple","Small","Spacious","Storage","Strange","Stylish","Suspicious","Tall","Threatening","Tranquil","Unexpected","Unpleasant","Unusual","Useful","Warm","Warning","Watery","Welcoming"],
"Magic Item Descriptors":["Animal","Animate","Area","Armor","Assist","Attack","Attract","Benefit","Bestow","Block","Book","Change","Clothing","Cloud","Cold","Communication","Container","Control","Create","Curse","Damage","Death","Deceit","Decrease","Defense","Destroy","Detect","Dimensions","Elements","Emotion","Energy","Enhance","Environment","Escape","Evil","Explode","Fear","Fire","Flight","Food","Gem","Good","Group","Harm","Heal","Health","Helpful","Illness","Illusion","Imbue","Imitate","Increase","Information","Inhibit","Instant","Jewelry","Lethal","Life","Light","Limited","Liquid","Mental","Monster","Multi","Nature","Object","Orb","Others","Physical","Plants","Poison","Potion","Power","Ranged","Resistance","Restore","Ring","Rope","Rune","Safety","Scroll","Self","Senses","Skill","Special","Speed","Spell","Staff","Strange","Summon","Sword","Tool","Transform","Trap","Travel","Useful","Utility","Wand","Water","Weapon"],
"Mutation Descriptors":["Agility","Animal","Appearance","Armor","Assist","Attach","Attack","Benefit","Bestow","Bizarre","Block","Body","Change","Claws","Color","Combat","Communicate","Conceal","Constrain","Control","Create","Damage","Deceive","Decrease","Defect","Defense","Deformed","Detect","Diminish","Disrupt","Dominate","Elements","Energy","Enhance","Environment","Expose","Extra","Eyes","Fear","Fight","Fly","Free","Harm","Heal","Health","Heat","Helpful","Horrible","Imitate","Immunity","Imprison","Increase","Information","Inspect","Large","Learn","Lethal","Limb","Limit","Mental","Messy","Move","Nature","Pain","Partial","Power","Projectile","Protection","Ranged","Recharge","Release","Replace","Requirement","Resistance","Restore","Reveal","Scary","Senses","Simple","Skill","Stop","Strange","Strength","Strong","Struggle","Suffer","Suppress","Surroundings","Survive","Swim","Toxic","Transform","Travel","Usurp","Violence","Vulnerability","Warm","Weak","Weapon","Wound"],
"Names":["A","Action","Ah","Ahg","An","Animal","Ar","As","B","Bah","Be","Bih","Brah","Col","Color","Cor","Dah","Deeds","Del","Drah","Eee","Eh","Ei","Ell","Elements","Emotion","Ess","Est","Et","Fah","Fer","Fi","Floral","Gah","Go","Grah","Hee","Ia","Ick","In","Iss","Je","Ke","Jen","Kha","Kr","Lah","Lee","Len","Lin","Location","Ly","Mah","Military","Misdeed","N","Nah","Nature","Nee","Nn","Number","Occupation","Oh","On","Or","Orn","Oth","Ow","Ph","Pr","R","Rah","Ren","Sah","Se","Sh","Sha","T","Ta","Tal","Tar","Th","Thah","Thoh","Ti","Time","Tor","Uh","Va","Vah","Ve","Vice","Virtue","Wah","Wr","X","Y","Yah","Yuh","Z"],
"Noble House":["Aggressive","Allies","Anger","Bestow","Betray","Bizarre","Block","Break","Bureaucracy","Cautious","Change","Commerce","Compromise","Conflict","Connections","Control","Create","Crisis","Cruel","Dangerous","Death","Deceit","Defeat","Defiant","Disrupt","Enemies","Extravagant","Faded","Fame","Family","Headquarters","Heirloom","Hero","History","Home","Important","Imprison","Increase","Information","Intrigue","Investment","Land","Large","Leadership","Legal","Leverage","Liberty","Love","Loyal","Magnificent","Malice","Mighty","Military","Misfortune","Move","Mysterious","Neglect","Old","Oppose","Oppress","Overthrow","Passion","Peace","Persecute","Plans","Politics","Possessions","Powerful","Public","Refuse","Release","Remarkable","Return","Riches","Royalty","Ruthless","Secret","Security","Servant","Spy","Strange","Strong","Struggle","Succession","Suffering","Suppress","Tactics","Tension","Travel","Trust","Usurp","Valuable","Vengeance","Victory","Violence","War","Weak","Wealth","Weapon","Young"],
"Objects":["Active","Artistic","Average","Beautiful","Bizarre","Bright","Clothing","Clue","Cold","Colorful","Communication","Complicated","Confusing","Consumable","Container","Creepy","Crude","Cute","Damaged","Dangerous","Deactivated","Deliberate","Delightful","Desired","Domestic","Empty","Energy","Enormous","Equipment","Expected","Expended","Extravagant","Faded","Familiar","Fancy","Flora","Fortunate","Fragile","Fragrant","Frightening","Garbage","Guidance","Hard","Harmful","Healing","Heavy","Helpful","Horrible","Important","Inactive","Information","Intriguing","Large","Lethal","Light","Liquid","Loud","Majestic","Meaningful","Mechanical","Modern","Moving","Multiple","Mundane","Mysterious","Natural","New","Odd","Official","Old","Ornamental","Ornate","Personal","Powerful","Prized","Protection","Rare","Ready","Reassuring","Resource","Ruined","Small","Soft","Solitary","Stolen","Strange","Stylish","Threatening","Tool","Travel","Unexpected","Unpleasant","Unusual","Useful","Useless","Valuable","Warm","Weapon","Wet","Worn"],
"Plot Twists":["Action","Attack","Bad","Barrier","Betray","Business","Change","Character","Conclude","Conditional","Conflict","Connection","Consequence","Control","Danger","Death","Delay","Destroy","Diminish","Disaster","Discover","Emotion","Enemy","Enhance","Enter","Escape","Evidence","Failure","Family","Free","Friend","Good","Group","Harm","Headquarters","Help","Helpless","Hidden","Idea","Immediate","Impending","Important","Incapacitate","Information","Injustice","Leader","Legal","Lethal","Lie","Limit","Location","Lucky","Mental","Missing","Mundane","Mystery","Necessary","News","Object","Oppose","Outcast","Overcome","Past","Peace","Personal","Persuade","Physical","Plan","Power","Prepare","Problem","Promise","Protect","Public","Pursue","Rare","Remote","Repair","Repeat","Require","Rescue","Resource","Response","Reveal","Revenge","Reversal","Reward","Skill","Social","Solution","Strange","Success","Tension","Trap","Travel","Unknown","Unlikely","Unusual","Urgent","Useful"],
"Powers":["Absorb","Adversity","Alter","Animate","Assist","Attach","Attack","Block","Body","Change","Chemical","Cold","Colorful","Combat","Combine","Communicate","Control","Cosmetic","Create","Creature","Damage","Dark","Death","Deceive","Defense","Delay","Destroy","Detect","Dimensions","Diminish","Disrupt","Distance","Dominate","Duplicate","Electricity","Elements","Emission","Emotion","Enemies","Energy","Enhance","Environment","Explosion","Extra","Fire","Flight","Free","Friend","Harm","Heal","Heat","Help","Hide","Illusion","Imbue","Immunity","Increase","Information","Life","Light","Limb","Limited","Location","Magic","Major","Manipulate","Matter","Mental","Minor","Natural","Nature","Object","Others","Physical","Plants","Poison","Power","Protect","Radius","Ranged","Reflect","Repel","Resistance","Reveal","Self","Sense","Skill","Spirit","Stealth","Strange","Summon","Switch","Take","Technology","Time","Transform","Trap","Travel","Weapon","Weather"],
"Scavenging Results":["Abundance","Activity","Adversity","Allies","Animal","Art","Barrier","Beauty","Bizarre","Bleak","Broken","Clean","Clothes","Comfort","Communicate","Competition","Concealment","Conflict","Container","Control","Crisis","Damaged","Danger","Death","Dirty","Disagreeable","Disgusting","Dispute","Drink","Elements","Empty","Enemies","Energy","Extravagance","Failure","Fear","Fight","Food","Fresh","Friendship","Fuel","Good","Health","Helpful","Hope","Important","Information","Joy","Large","Lavish","Lean","Less","Lethal","Mechanical","Medicinal","Messy","Misfortune","Mundane","Mysterious","Nature","New","Normal","Odd","Official","Old","Open","Opposition","Pain","Peace","Pleasures","Portal","Possessions","Protection","Reassuring","Repairable","Rotten","Rough","Ruined","Scary","Shelter","Simple","Small","Smelly","Strange","Struggle","Success","Supply","Technology","Tool","Travel","Triumph","Trouble","Useless","Valuable","Vehicle","Victory","Violence","Warm","Waste","Weapon"],
"Smells":["Acrid","Animal","Antiseptic","Aromatic","Artificial","Attractive","Bad","Bizarre","Burnt","Chemical","Clean","Comforting","Cooking","Decrepit","Delicious","Delightful","Dirty","Disagreeable","Disgusting","Dry","Dull","Earthy","Electrical","Evocative","Faded","Faint","Familiar","Fetid","Fishy","Floral","Food","Foul","Fragrant","Fresh","Fruity","Funky","Good","Grassy","Gratifying","Heady","Heavy","Herbal","Horrible","Humid","Industrial","Interesting","Intoxicating","Irritating","Lacking","Laden","Malodorous","Meaningful","Medicinal","Metallic","Mildew","Moist","Mossy","Musky","Musty","Mysterious","Natural","Nature","Nauseating","Normal","Odd","Odorless","Offensive","Overpowering","Perfumed","Pleasurable","Powerful","Pungent","Punishing","Putrid","Rancid","Reassuring","Reek","Rich","Ripe","Rot","Rotten","Savory","Smelly","Smokey","Sour","Stagnant","Stale","Stench","Stinging","Strange","Strong","Stuffy","Sulphuric","Sweet","Warm","Waste","Watery","Weak","Weather","Woody"],
"Sounds":["Activity","Alarm","Animal","Approach","Banging","Battle","Beep","Bell","Beseeching","Bizarre","Burning","Busy","Calm","Ceaseless","Celebrate","Chaotic","Cheerful","Clang","Combative","Communicate","Construction","Conversation","Crash","Creaking","Creepy","Cries","Damage","Danger","Disagreeable","Distant","Drip","Echo","Emotion","Energetic","Explosion","Familiar","Ferocious","Footsteps","Frantic","Frightening","Grinding","Growl","Hammering","Helpful","Imitate","Important","Indistinct","Industry","Information","Innocent","Intense","Interesting","Irritating","Loud","Machinery","Meaningful","Metallic","Muffled","Multiple","Music","Mysterious","Natural","Near","Noisy","Normal","Odd","Productivity","Pursuit","Quiet","Reassuring","Remarkable","Rip","Roar","Rumbling","Rustling","Scary","Scraping","Scratching","Simple","Sizzle","Slam","Slow","Soft","Start","Stop","Strange","Tapping","Technology","Threatening","Thud","Traffic","Tranquil","Uncertain","Warning","Water","Weather","Whirring","Whistle","Wild","Wind"],
"Spell Effects":["Animal","Animate","Assist","Attack","Attract","Bestow","Bizarre","Block","Break","Bright","Burn","Change","Cloud","Cold","Communicate","Conceal","Conjure","Control","Counteract","Create","Creature","Curse","Damage","Dark","Death","Deceive","Decrease","Defense","Destroy","Detect","Diminish","Disease","Dominate","Duplicate","Earth","Elements","Emotion","Enemies","Energy","Enhance","Environment","Expose","Fire","Fix","Food","Free","Group","Guide","Hamper","Harm","Heal","Helpful","Ice","Illusion","Imbue","Immunity","Imprison","Information","Inspect","Life","Light","Limitation","Liquid","Loud","Manipulation","Mind","Nature","Object","Others","Pain","Physical","Plant","Poison","Portal","Powerful","Protect","Radius","Ranged","Resistance","Restore","Self","Senses","Shield","Soul","Strange","Strength","Stun","Summon","Time","Transform","Trap","Travel","Trigger","Uncertain","Undead","Wall","Water","Weak","Weapon","Weather"],
"Starship Descriptors":["Activity","Adversity","Assist","Automated","Battle","Beautiful","Bestow","Bleak","Block","Bright","Business","Clean","Cold","Colorful","Combative","Communicate","Computer","Contain","Control","Creepy","Crew","Damaged","Danger","Dark","Death","Defense","Elaborate","Empty","Energy","Engine","Enormous","Environment","Escape","Exit","Exterior","Fear","Food","Full","Hall","Health","Helpful","Important","Information","Inquire","Interesting","Lacking","Large","Lavish","Lethal","Loud","Magnificent","Maintenance","Meaningful","Mechanical","Message","Messy","Mighty","Military","Modern","Multiple","Mundane","Mysterious","Natural","Normal","Odd","Portal","Possessions","Power","Powerful","Prison","Protection","Quiet","Rare","Reassuring","Remarkable","Resources","Room","Rough","Ruined","Scary","Security","Simple","Small","Sounds","Start","Stop","Storage","Strange","Supplies","Survival","System","Tactics","Technology","Travel","Unusual","Valuable","Vehicle","Warm","Weapon","Work"],
"Terrain Descriptors":["Abandoned","Abundant","Activity","Advanced","Allies","Ancient","Animals","Atmosphere","Barren","Beautiful","Bizarre","Catastrophe","Chaotic","City","Civilization","Cliffs","Clouds","Cold","Colorful","Combative","Communicate","Conflict","Damaged","Danger","Defense","Desert","Dry","Dull","Elements","Empty","Energy","Enormous","Environment","Fertile","Frightening","Habitable","Harsh","Hazy","Healthy","Helpful","Hostile","Hot","Intense","Interesting","Large","Lethal","Life","Lovely","Magnificent","Masses","Mechanical","Message","Mighty","Misfortune","Mountainous","Multiple","Mundane","Mysterious","Natural","Nature","Nondescript","Ocean","Odd","Peaceful","People","Plants","Populated","Powerful","Primitive","Rain","Rare","Remarkable","Resourceful","Riches","River","Rocky","Rough","Ruined","Ruins","Sandy","Scary","Simple","Small","Strange","Strong","Technology","Threatening","Toxic","Tranquil","Trees","Unusual","Valuable","Violent","Warm","Water","Weak","Weather"],
"Undead Descriptors":["Active","Aggressive","Angry","Animal","Anxious","Attract","Beautiful","Bestow","Bizarre","Bleak","Bold","Bound","Cold","Combative","Communicate","Control","Create","Creepy","Dangerous","Dark","Deceive","Dirty","Disgusting","Elements","Enemies","Energy","Environment","Evil","Fast","Fear","Fight","Floating","Friendly","Frightening","Glad","Glow","Goals","Good","Guide","Harm","Helpful","Helpless","Historical","Horrible","Hungry","Imitate","Information","Insubstantial","Intelligent","Large","Leadership","Lethal","Light","Limited","Lonely","Love","Macabre","Malice","Message","Messy","Mighty","Mindless","Miserable","Misfortune","Monstrous","Mundane","Odd","Old","Pain","Pale","Passive","Possessions","Possessive","Powerful","Powers","Purposeful","Pursue","Quiet","Resistant","Rotting","Scary","Seeking","Shambling","Slow","Small","Smelly","Strange","Strong","Threatening","Tough","Transform","Travel","Trick","Vengeful","Violent","Weak","Weakness","Weapons","Wounds","Young"],
"Visions and Dreams":["Activity","Adversity","Allies","Assist","Attainment","Bizarre","Bleak","Catastrophe","Celebrate","Change","Colorful","Conflict","Contact","Control","Creepy","Crisis","Cruelty","Danger","Dark","Death","Defeat","Disruption","Elements","Emotions","Enemies","Energy","Environment","Event","Evil","Failure","Fears","Festive","Fight","Friendship","Frightening","Future","Goals","Good","Guidance","Harm","Helpful","Helpless","Hint","Hope","Horrible","Hurry","Ideas","Implore","Important","Incomplete","Information","Instruction","Liberty","Lies","Love","Malice","Masses","Mechanical","Message","Messy","Military","Misfortune","Mundane","Mysterious","Natural","Obscure","Odd","Oppose","Path","Peace","People","Place","Plans","Plot","Positive","Possessions","Power","Preventable","Reassuring","Riches","Riddle","Ruin","Scary","Simple","Strange","Struggle","Success","Suffering","Suppress","Tension","Threat","Time","Travel","Trouble","Trust","Uncertain","Unsettling","Violence","Warning","Weapon"]
};

var SAVED_ADVENTURES = [];
var theAdventureLog, sys_db, request

function initLoad()
{
	theAdventureLog = new adventureLog();
	document.getElementById("adventureTabBtn").click();
	const oddsNames = Object.keys(theOdds);
	const oddsSelect = document.getElementById("fateCheckOdds");
	oddsNames.forEach(function (oddsName) {
											const o = document.createElement("option");
											o.text = o.value = oddsName;
											oddsSelect.appendChild(o);
										  });
	var elemSelectors = document.getElementsByName("elements");
	const elemTblNames = Object.keys(elementsTbls);
	for(var i=0;i<elemSelectors.length;i++)
	{
		elemTblNames.forEach(function (tblName) {
													const o = document.createElement("option");
													o.text = tblName;
													elemSelectors[i].appendChild(o);
		});
	}
	request = window.indexedDB.open("saved_mythic_adventures",1);
	request.onerror = function(event)
	{
		console.log("Could not open saved Mythic Adventures.  Error: $" + event.target.result);
	};

	request.onsuccess = function(event)
	{
		sys_db = event.target.result;
		var objS = sys_db.transaction("savedAdventures").objectStore("savedAdventures");
		objS.openCursor().onsuccess = function(event) 
		{
			var cursor = event.target.result;
			if(cursor) {
				SAVED_ADVENTURES[cursor.key] = (cursor.value);
				cursor.continue();
			}
			else {
				load_saved_adventures();
			}
		};
	};

	request.onupgradeneeded = function(event)
	{
		sys_db = event.target.result;
		var objectStore = sys_db.createObjectStore("savedAdventures", { autoIncrement: true });
	};
}

function adventureLog()
{
	var me = this;
	me.textArea = document.getElementById("theLog");
	me.textArea.value = "";
	me.log = "";
	me.textArea.onchange = function() { me.log = me.textArea.value;  me.detailsSaved = false; };
	me.chaosFactor = 5;
	me.characters = [];
	me.pcs = [];
	me.threads = [];
	me.detailsSaved = true;
	me.name = document.getElementById("adventureName").value;
	me.loadKey;

	me.loadOntoPage = function()
	{
		me.setCF();
		me.updateCharacterList();
		me.updatePCList();
		me.updateThreadList();
		document.getElementById("adventureName").value = me.name;
		me.textArea.value = me.log;
	}

	me.dataObj = function()
	{
		var o = {};
		o.chaosFactor = me.chaosFactor;
		o.log = me.log;
		o.name = me.name;
		o.characters = [];
		me.characters.map(function(c) { o.characters.push(c.dataObj()); });
		o.pcs = [];
		me.pcs.map(function(c) {o.pcs.push(c.dataObj()); });
		o.threads = [];
		me.threads.map(function(t) {o.threads.push(t.dataObj());});
		return o;
	}
	
	me.read_dataObj = function(o)
	{
		me.chaosFactor = o.chaosFactor;
		/*me.textArea.value = */me.log = o.log;
		me.name = o.name;
		me.characters = [];
		me.pcs = [];
		me.threads = [];
		o.characters.map(function(c) {  var npc = new character();
										npc.read_dataObj(c);
										me.characters.push(npc);
									 });
		o.pcs.map(function(c) { var pc = new character();
								pc.read_dataObj(c);
								me.pcs.push(pc);
							  });
		o.threads.map(function(t) { var th = new thread();
									th.read_dataObj(t);
									me.threads.push(th);
								  });
		me.updateCharacterList();
		me.updatePCList();
		me.updateThreadList();
	}
	
	me.add = function(s)
	{
		me.textArea.value += s + "\r\n";
		me.textArea.scrollTop = me.textArea.scrollHeight;
		me.log = me.textArea.value;
		me.detailsSaved = false;
	}
	
	me.setCF = function(factor)
	{
		if(arguments.length < 1)
			document.getElementById("ChaosFactor").value = me.chaosFactor;
		else
			document.getElementById("ChaosFactor").value = me.chaosFactor = factor;		
		me.detailsSaved = false;
	}
	
	me.incrCF = function()
	{
		me.setCF(++me.chaosFactor);
		me.detailsSaved = false;
	}
	
	me.decrCF = function()
	{
		me.setCF(--me.chaosFactor);
		me.detailsSaved = false;
	}
	
	
	me.addCharacter = function()
	{
		var name = "New NPC name";
		var description = "New NPC description"
		var newChar = new character(name, description);
		me.characters.push(newChar);
		me.updateCharacterList();
		document.getElementById("characterList").value = name;
		me.editCharacter();
		return newChar;
	}
	
	me.editCharacter = function()
	{
		var selectList = document.getElementById("characterList");
		var focusChar = theAdventureLog.characters.find(function(c) { return c.name == selectList.value });
		var nameInput = document.getElementById("charName");
		var descInput = document.getElementById("charDesc");
		var notesInput = document.getElementById("characterNotes");
		var dispValInput = document.getElementById("dispositionValue");
		var dispDescInput = document.getElementById("dispositionDescription");
		var idDescInput = document.getElementById("identityDesc");
		var idActiveInput = document.getElementById("idActivation")
		var persDescInput = document.getElementById("persDesc");
		var persActiveInput = document.getElementById("persActivation");
		var actInput = document.getElementById("actDesc");
		var actActiveInput = document.getElementById("actActivation")

		nameInput.value = focusChar.name;
		nameInput.onchange = function() { focusChar.name = nameInput.value; me.updateCharacterList(); me.detailsSaved = false; };
		descInput.value = focusChar.description;
		descInput.onchange = function() { focusChar.description = descInput.value;  me.detailsSaved = false; };
		notesInput.value = focusChar.notes;
		notesInput.onchange = function() { focusChar.notes = notesInput.value;  me.detailsSaved = false; };
		dispValInput.value = focusChar.disposition;
		dispValInput.onchange = function() { focusChar.disposition = parseInt(dispValInput.value); focusChar.updateDisposition(dispValInput, dispDescInput); me.detailsSaved = false; };
		dispDescInput.innerHTML = dispositionTbl[Math.max(0,Math.min(16,focusChar.disposition))].name;
		idDescInput.value = focusChar.descriptors.identity.value;
		idDescInput.onchange = function() {focusChar.descriptors.identity.value = idDescInput.value; me.detailsSaved = false; };
		idActiveInput.value = focusChar.descriptors.identity.activated;
		idActiveInput.onchange = function() {focusChar.descriptors.identity.activated = parseInt(idActiveInput.value); focusChar.updateDisposition(dispValInput, dispDescInput); me.detailsSaved = false; };
		persDescInput.value = focusChar.descriptors.personality.value;
		persDescInput.onchange = function() {focusChar.descriptors.personality.value = persDescInput.value;  me.detailsSaved = false; };
		persActiveInput.value = focusChar.descriptors.personality.activated;
		persActiveInput.onchange = function() {focusChar.descriptors.personality.activated = parseInt(persActiveInput.value);  focusChar.updateDisposition(dispValInput, dispDescInput); me.detailsSaved = false; };
		actInput.value = focusChar.descriptors.activity.value;
		actInput.onchange = function() {focusChar.descriptors.activity.value = actInput.value;  me.detailsSaved = false; };
		actActiveInput.value = focusChar.descriptors.activity.activated;
		actActiveInput.onchange = function() {focusChar.descriptors.activity.activated = parseInt(actActiveInput.value);  focusChar.updateDisposition(dispValInput, dispDescInput); me.detailsSaved = false; };
	}
	
	me.behaviourCheck = function()
	{
		var dispValInput = document.getElementById("dispositionValue");
		var dispDescInput = document.getElementById("dispositionDescription");
		var selectList = document.getElementById("characterList");
		var focusChar = theAdventureLog.characters.find(function(c) { return c.name == selectList.value });
		focusChar.actionTbl1();
		focusChar.updateDisposition(dispValInput, dispDescInput);
		
	}
	
	me.delCharacter = function()
	{
		var name = document.getElementById("charName").value;
		me.characters.splice(me.characters.findIndex(function(c) { return c.name == name; } ),1);
		me.updateCharacterList();
		me.editCharacter();
		me.detailsSaved = false; 
	}
	
	me.updateCharacterList = function()
	{
		var selectList = document.getElementById("characterList");
		while(selectList.hasChildNodes())
			selectList.removeChild(selectList.firstChild);
		me.characters.sort(function(c,d) { return c.name.localeCompare(d.name); });
		me.characters.map(function(c) { 
										var o = document.createElement("option");
										o.text = o.value = c.name;
										selectList.add(o);
									  });
	}
	
	me.randomCharacter = function()
	{
		var selChar;
		if(me.characters.length == 0)
			selChar = me.addCharacter();
		else
			selChar = me.characters[Math.floor(Math.random()*me.characters.length)];
		me.add(selChar);
		document.getElementById("characterList").value = selChar.name;
		me.editCharacter();
	}
	
	me.addPC = function()
	{
		var name = "New PC name";
		var description = "New PC description";			
		var newPC = new character(name, description);
		me.pcs.push(newPC);
		me.updatePCList();
		me.detailsSaved = false;
		document.getElementById("pcList").value = name;
		me.editPC();
	}
	
	me.editPC = function()
	{
		var selectList = document.getElementById("pcList");
		var focusChar = theAdventureLog.pcs.find(function(c) { return c.name == selectList.value });
		var nameInput = document.getElementById("pcName");
		var descInput = document.getElementById("pcDesc");
		var notesInput = document.getElementById("pcNotes");
		nameInput.value = focusChar.name;
		nameInput.onchange = function() { focusChar.name = nameInput.value; me.updatePCList();  me.detailsSaved = false; };
		descInput.value = focusChar.description;
		descInput.onchange = function() { focusChar.description = descInput.value;  me.detailsSaved = false; };
		notesInput.value = focusChar.notes;
		notesInput.onchange = function() { focusChar.notes = notesInput.value;  me.detailsSaved = false; };
	}
	
	me.delPC = function()
	{
		var name = document.getElementById("pcName").value;
		me.pcs.splice(me.pcs.findIndex(function(pc) { return pc.name = name; }),1);
		me.updatePCList();	
		document.getElementById("characterDetailsDiv").style.display = "none";
		document.getElementById("threadDetailsDiv").style.display = "none";
		document.getElementById("theLogDiv").style.display = "block";
		me.detailsSaved = false; 
	}
	
	me.updatePCList = function()
	{
		var selectList = document.getElementById("pcList");
		while(selectList.hasChildNodes())
			selectList.removeChild(selectList.firstChild);
		me.pcs.sort(function(c,d) { return c.name.localeCompare(d.name); });
		me.pcs.map(function(c) { 
										var o = document.createElement("option");
										o.text = o.value = c.name;
										selectList.add(o);
									  });
	}
	
	me.randomPC = function()
	{
		var selPC = me.pcs[Math.floor(Math.random()*me.pcs.length)];
		me.add(selPC);
		me.editPC();
	}
	
	me.addThread = function()
	{
		var name = "New Thread";
		var description = "New Thread Description";
		me.threads.push(new thread(name, description));
		me.updateThreadList();
		document.getElementById("threadList").value = name;
		me.detailsSaved = false;
		me.editThread();
	}
	
	me.editThread = function()
	{
		var selectList = document.getElementById("threadList");
		var focusThr = theAdventureLog.threads.find(function(t) { return t.name == selectList.value });
		var nameInput = document.getElementById("threadDetName");
		var descInput = document.getElementById("threadDetDesc");
		var notesInput = document.getElementById("threadNotes");
		var closedInput = document.getElementById("threadClosed");
		nameInput.value = focusThr.name;
		nameInput.onchange = function() { focusThr.name = nameInput.value; me.updateThreadList();  me.detailsSaved = false; };
		descInput.value = focusThr.description;
		descInput.onchange = function() { focusThr.description = descInput.value;  me.detailsSaved = false; };
		notesInput.value = focusThr.notes;
		notesInput.onchange = function() { focusThr.notes = notesInput.value;  me.detailsSaved = false; };
		closedInput.checked = !focusThr.isOpen;
		closedInput.onchange = function() { focusThr.isOpen = !closedInput.checked; me.updateThreadList(); me.detailsSaved = false; };
	}
	
	me.closeThread = function()
	{
		var name = document.getElementById("threadDetName").value;
		me.threads.find(function(t) { return t.name == name; }).isOpen = !document.getElementById("threadClosed").value;
		me.updateThreadList();
		name += " (closed)";
		document.getElementById("threadList").value = name;
		me.editThread();
		me.detailsSaved = false; 
	}
	
	me.updateThreadList = function()
	{
		var selectList = document.getElementById("threadList");
		while(selectList.hasChildNodes())
			selectList.removeChild(selectList.firstChild);
		me.threads.sort(function(t,u) { return t.name.localeCompare(u.name); });
		me.threads.map(function(t) { 
										var o = document.createElement("option");
										o.text = o.value = t.name;
										if(!t.isOpen) o.text += " (closed)";
										selectList.add(o);
									  });		
	}
	
	me.openThreads = function()
	{
		var oThreads = [];
		for(var i=0;i<me.threads.length;i++)
			if(me.threads[i].isOpen)
				oThreads.push(me.threads[i]);
		return oThreads;
	}

	me.randomThread = function()
	{
		if(me.openThreads().length == 0)
		{
			me.addThread();
			return;
		}
		var selThread = me.threads[Math.floor(Math.random()*me.threads.length)];
		me.add(selThread);
		document.getElementById("threadList").value = selThread.name;
		me.editThread();
	}

	me.setCF();
	me.detailsSaved = true;
}

function character(name, description)
{
	var me = this;
	me.name = name ? name : "";
	me.description = description ? description : "";
	me.notes = "";
	me.isPC = false;
	me.descriptors = {identity:{value:"",activated:0},personality:{value:getDescription(),activated:0},activity:{value:getAction(),activated:0}};
	me.disposition = d10() + d10();
	
	me.dataObj = function()
	{
		var o = {};
		o.name = me.name;
		o.description = me.description;
		o.notes = me.notes;
		o.isPC = me.isPC;
		o.descriptors = Object.assign({},me.descriptors);
		o.disposition = me.disposition;
		return o;
	}
	
	me.read_dataObj = function(o)
	{
		me.name = o.name;
		me.description = o.description;
		me.notes = o.notes;
		me.isPC = o.isPC;
		me.descriptors = Object.assign({},o.descriptors);
		me.disposition = o.disposition;
		
	}
	
	me.toString = function()
	{
		var s = me.isPC ? "PC: " : "NPC: ";
		s += me.name;
		return s;
	}
	
	me.modDisposition = function()
	{
		return me.disposition + me.descriptors.identity.activated + me.descriptors.personality.activated + me.descriptors.activity.activated;
	}
	
	me.dispObj = function()
	{
		return dispositionTbl[Math.max(0,Math.min(16,me.modDisposition()))];
	}
	
	me.updateDisposition = function(dispInput, dispDescInput)
	{
		dispDescInput.innerHTML = me.dispObj().name;
		dispInput.value = me.modDisposition();
	}
	
	me.actionTbl1 = function()
	{
		var act = npcActionTbl1[Math.floor(Math.random() * npcActionTbl1.length)];
		me.disposition += act.dispMod;
		theAdventureLog.add(me + ": " + act.name);
		if(act.tbl2action)
			me.tbl2action(act.tbl2mod + me.dispObj().mod);
	}
	
	me.tbl2action = function(mod)
	{
		var tbl2act = new dice_table(npcActionTbl2);
		tbl2act.DM = mod;
		var result = tbl2act.roll();
		theAdventureLog.add(tbl2act.rollResult + ": " + result);
	}
}

function thread(name, description)
{
	var me = this;
	me.name = name;
	me.description = description;
	me.notes = "";
	me.isOpen = true;
	
	me.dataObj = function()
	{
		var o = {};
		o.name = me.name;
		o.description = me.description;
		o.notes = me.notes;
		o.isOpen = me.isOpen;
		return o;
	}
	
	me.read_dataObj = function(o)
	{
		me.name = o.name;
		me.description = o.description;
		me.notes = o.notes;
		me.isOpen = o.isOpen;
	}
	
	me.toString = function()
	{
		return me.name;
	}
}

function updateCF()
{
	theAdventureLog.chaosFactor = parseInt(document.getElementById("ChaosFactor").value);
}

function getDescription()
{
	return descriptor1[d100()-1] + " " + descriptor2[d100()-1];
}

function description()
{
	var d = getDescription();
	theAdventureLog.add(d);
}

function getAction()
{
	return action1[d100()-1] + " " + action2[d100()-1];
}

function action()
{
	var a = getAction();
	theAdventureLog.add(a);
}

function getEventMeaning()
{
	return action1[d100()-1] + " " + action2[d100()-1];
}

function eventMeaning()
{
	var em = getEventMeaning();
	theAdventureLog.add(em);
	return em;
}

function d100()
{
	return Math.floor(Math.random()*100) + 1;
}

function d20()
{
	return Math.floor(Math.random()*20) + 1;
}

function d12()
{
	return Math.floor(Math.random()*12) + 1;
}

function d10()
{
	return Math.floor(Math.random()*10) + 1;
}

function d8()
{
	return Math.floor(Math.random()*8) + 1;
}

function d6()
{
	return Math.floor(Math.random()*6) + 1;	
}

function d4()
{
	return Math.floor(Math.random()*4) + 1;
}

function d66()
{
	return (Math.floor(Math.random()*6) + 1)*10 + Math.floor(Math.random()*6) + 1;
}


function diceFn(dFnc, numDice, dName)
{
	var r = 0;
	var r_msg = "";
	for(var i=0;i<numDice;i++)
	{
		r += dFnc();
	}
	r_msg = dName + " result: " + r;
	theAdventureLog.add(r_msg);
}

function fateCheck()
{
	var cf = parseInt(document.getElementById("ChaosFactor").value);
	var odds = document.getElementById("fateCheckOdds").value;
	console.log("odds = " + odds);
	var fateObj = theOdds[odds][cf-1];
	var theRoll = d100();
	var r = "";
	if(theRoll <= fateObj.exY)
		r = "Exceptional Yes";
	else if(theRoll <= fateObj.y)
		r = "Yes";
	else if(theRoll > fateObj.y && theRoll < fateObj.exN)
		r = "No";
	else
		r = "Exceptional No";
	if(theRoll % 11 == 0)
		r += ".\r\nRoll was double " + (theRoll/11) + "s. A random event occurs. " + getRandomEvent();
	var fateS = "Odds:" + odds + " Chaos Factor: " + cf + " Target: " + fateObj.y + " Roll: " + theRoll + " Result: " + r;
	theAdventureLog.add(fateS);
}

function getEventFocus()
{
	var d100Tbl = [];
	eventFocusTbl.map(function(elem)
						{
							for(var i=0;i<elem.weight;i++)
								d100Tbl.push(elem.name);
						});
	return d100Tbl[d100()-1];
}

function getRandomEvent()
{
	var ef = getEventFocus();
	var em = getEventMeaning();
	var es = "Event Focus: " + ef + "; Event Meaning: " + em;
	return es;
}

function randomEvent()
{
	theAdventureLog.add(getRandomEvent());
}

function sceneSetup()
{
	var sceneRoll = d10();
	var sceneIdea = "Roll = " + sceneRoll + "; Chaos Factor: " + theAdventureLog.chaosFactor;
	if(sceneRoll > theAdventureLog.chaosFactor)
		sceneIdea += "; Expected Scene. ";
	else if(sceneRoll % 2 == 0)
		sceneIdea += "; Interrupt Scene. " + getRandomEvent() + ".";
	else
		sceneIdea += "; Altered Scene.  First idea needs to be altered.";
	theAdventureLog.add(sceneIdea);
}

function load_saved_adventures()
{
	var s = document.getElementById("savedAdventureList");
	while(s.length > 0)
		s.remove(0);
	SAVED_ADVENTURES.forEach(function(v, k)	{
												var o = document.createElement("OPTION");
												o.text = v.name;
												o.value = k;
												s.add(o);
											});
}

function debug_save(someText)
{
	var blob = new Blob([someText], {type: "text/plain;charset=utf-8"});
	saveAs(blob, "Debug Text.json");	
}

function saveAdventure()
{
	if(!theAdventureLog)
		return;
	var s = document.getElementById("savedAdventureList");
	var advObjStore = sys_db.transaction("savedAdventures","readwrite").objectStore("savedAdventures");
	var adv_obj = theAdventureLog.dataObj();
	var selAdventure = findSavedAdventure(theAdventureLog.name);
	var k = parseInt(selAdventure.value);
	if(selAdventure)
	{
		const adventureReq = advObjStore.get(selAdventure.value);
		adventureReq.onsuccess = function()
		{
			var adventure = adventureReq.result;
			adventure = Object.assign({}, adv_obj);
			var updateAdventure = advObjStore.put(adventure, k);
			updateAdventure.onsuccess = function(event)
			{				
				theAdventureLog.detailsSaved = true;
				alert('Adventure "' + theAdventureLog.name + '" successfully saved.');
			}
		}
		
	}
	else
	{
		var r = advObjStore.add(adv_obj);
		r.onsuccess = function(event)
		{
			SAVED_ADVENTURES[event.target.result] = adv_obj;
			load_saved_adventures();
			theAdventureLog.detailsSaved = true;
			alert("New adventure successfully saved.");
		}
	}
	
}

function findSavedAdventure(advName)
{
	var s = document.getElementById("savedAdventureList");
	for(var x=0;x<s.length;x++)
		if(s.options[x].text == advName)
			return s.options[x];
	return false;		
}

function loadAdventure()
{
	var s = document.getElementById("savedAdventureList");
	var k = parseInt(s.options[s.selectedIndex].value);
	var sys_obj;
	if(theAdventureLog.detailsSaved == false && confirm("Current adventure not saved.  Press OK to save, Cancel to abandon changes.") == true)
		updateAdventure();
	var objS = sys_db.transaction("savedAdventures").objectStore("savedAdventures");
	var objSReq = objS.get(k);
	objSReq.onsuccess = function(event)
	{
		sys_obj = event.target.result;
		theAdventureLog = new adventureLog();
		theAdventureLog.read_dataObj(sys_obj);
		theAdventureLog.loadKey = k;
		theAdventureLog.loadOntoPage();
		theAdventureLog.detailsSaved = true;
	};

}

function delAdventure()
{
	if(!confirm("This action cannot be undone.  Press OK to delete adventure shown in the Saved Adventures list, or Cancel to abort."))
		return;
	var s = document.getElementById("savedAdventureList");
	var k = parseInt(s.options[s.selectedIndex].value);
	var objS = sys_db.transaction("savedAdventures","readwrite").objectStore("savedAdventures");
	var objSReq = objS.delete(k);
	objSReq.onsuccess = function(event)
	{
		SAVED_ADVENTURES.splice(k,1);
		load_saved_adventures();
	};	
}

function exportAdventure()
{
	var saveText = JSON.stringify(theAdventureLog.dataObj());
	var blob = new Blob([saveText], {type: "text/plain;charset=utf-8"});
	saveAs(blob, theAdventureLog.name + ".json");
}

function importAdventure(fileObj)
{
	var selFile = fileObj.files[0];
	var reader = new FileReader();
	reader.addEventListener("loadend", function()
	{
		var adv_obj = JSON.parse(reader.result);
		theAdventureLog = new adventureLog();
		theAdventureLog.read_dataObj(adv_obj);
		theAdventureLog.loadOntoPage();
		theAdventureLog.detailsSaved = true;
	},false);

	reader.onerror = function(ev)
	{
		console.log("Error encountered: " + ev);
		reader.abort();
	}

	reader.readAsText(selFile);
}

function updateAdventure()
{
	if(!theAdventureLog)
		return;
	if(theAdventureLog.loadKey)
	{
		var objStore = sys_db.transaction("savedAdventures","readwrite").objectStore("savedAdventures");
		objStore.get(theAdventureLog.loadKey).onsuccess = function(event)
		{
			objStore.put(theAdventureLog.dataObj(), theAdventureLog.loadKey);
			theAdventureLog.detailsSaved = true;
		}
	}
	else
		saveAdventure();
}

function newAdventure()
{
	if(theAdventureLog.detailsSaved == false && confirm("Current adventure not saved.  Press OK to save, Cancel to abandon changes.") == true)
		updateAdventure();
	theAdventureLog = new adventureLog();
	theAdventureLog.loadOntoPage();
	theAdventureLog.detailsSaved = true;
}

function dice_table(table_data_object, objWithProperties, specialValue)
{
	var me = this;
	me.table = table_data_object;
	me.diceFnc = table_data_object.dice;
	me.min = table_data_object.min;
	me.max = table_data_object.max;
	me.modData = table_data_object.mods;
	me.DM = 0;
	me.rollResult = 0;

	me.roll = function()
	{
		var diceRoll = 0;
		diceRoll = me.diceFnc(me.specialValue);
		diceRoll += me.DM;
		diceRoll = Math.max(me.min, Math.min(me.max, diceRoll));
		me.rollResult = diceRoll;
		return me.table[diceRoll];
	}

	me.selection = function(index)
	{
		return me.table[Math.max(me.min, Math.min(me.max, index+me.DM))];
	}

	me.setDMs = function(objWithProperties)
	{
		for(var i=0;i<me.modData.length;i++)
			me.DM += me.modData[i][objWithProperties[me.modData[i].property]];
	}

	me.result = function()
	{
		return me.table[me.rollResult];
	}

	if(arguments.length > 1 && objWithProperties != null)
		me.setDMs(objWithProperties);

	if(arguments.length > 2)
		me.specialValue = specialValue;

}

function detailCheck()
{
	var r = new dice_table(detailCheckTbl, null, theAdventureLog.chaosFactor).roll();
	theAdventureLog.add("Detail Check: " + r);
	var type = r.substr(r.search(/\w+$/));
	switch(type)
	{
		case "Thread":
			theAdventureLog.randomThread();
			break;
		case "NPC":
			theAdventureLog.randomCharacter();
			break;
		default:
			theAdventureLog.randomPC();
	}
	theAdventureLog.add("(extra description if needed):" + getDescription());
}

function delAllAdventures()
{
	if(!confirm("This action cannot be undone.  Press OK to delete all saved adventures, Cancel to cancel."))
		return;
	var t = sys_db.transaction(["savedAdventures"],"readwrite");
	var q = t.objectStore("savedAdventures");
	var r = q.clear();
	r.onsuccess = function(event)
	{
		alert("All adventures deleted.");
		load_saved_adventures();
	}
	r.onerror = function(event)
	{
		alert("r - An error occurred.");
	}
}

function openTab(evt, tabID)
{
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("mechanicContainer");
	for (i = 0; i < tabcontent.length; i++)
	{
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) 
	{
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabID).style.display = "block";
	evt.currentTarget.className += " active";
}

function elementDesc(selectID)
{
	var tblName = document.getElementsByName("elements")[selectID].value;
	console.log("tblName = " + tblName);
	var elementTbl = elementsTbls[tblName];
	theAdventureLog.add(tblName + " result: " + elementTbl[Math.floor(Math.random()*elementTbl.length)] + " " + elementTbl[Math.floor(Math.random()*elementTbl.length)]);
}