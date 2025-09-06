const words = [
  // Easy (3–5 letters)
  "cat","dog","sun","moon","book","tree","game","rain","star","fish",
  "love","play","lamp","ball","bird","milk","cake","snow","frog","leaf",
  "bear","lion","duck","ship","road","wind","sand","bell","coin","farm",
  "rock","gold","king","lady","door","shoe","desk","room","baby","gift",
  "ring","flag","nest","book","song","kite","bike","rose","seed","doll",

  // Medium (6–8 letters)
  "flower","school","yellow","puzzle","laptop","summer","rocket","monkey","desert","garden",
  "castle","market","silver","butter","planet","jungle","family","bridge","circle","hunter",
  "purple","candle","cookie","singer","doctor","dragon","basket","soccer","window","ticket",
  "danger","prison","temple","supply","forest","camera","winter","sister","mother","father",
  "friend","artist","rocket","planet","frozen","island","market","silver","bridge","castle",

  // Hard (9+ letters)
  "butterfly","adventure","knowledge","chocolate","discovery","dangerous","beautiful","telescope","mountain","elephant",
  "challenge","classroom","important","education","telephone","vegetable","wonderful","volunteer","happiness","newspaper",
  "chemistry","celebrate","automatic","invisible","treasure","astronomy","condition","admission","adventure","explosion",
  "direction","hospital","secretary","structure","interface","processor","satellite","historian","mechanism","attention",
  "television","attraction","scientist","biography","literature","historical","experiment","basketball","expression","political",

  // More filler words (to reach ~500, repeating easy/medium/hard patterns)
  "anchor","battle","cactus","danger","energy","forest","giant","harbor","icicle","jungle",
  "kitten","lizard","magnet","needle","orange","pirate","quartz","rocket","signal","tunnel",
  "urgent","valley","wonder","xenon","youth","zebra","action","beacon","copper","dragon",
  "engine","future","galaxy","hunter","island","jigsaw","kernel","legend","mirror","nature",
  "option","planet","quest","rocket","signal","temple","unique","vessel","winter","yellow",
  "zodiac","airport","bottle","candle","donkey","escape","fabric","guitar","helmet","injury",
  "jungle","kitten","ladder","magnet","nation","oceanic","pirate","quartz","rescue","saddle",
  "target","united","vacuum","wander","xenon","youths","zephyr","ability","balance","courage",
  "diamond","elastic","freedom","gravity","harvest","imagine","journey","kingdom","library","monster",
  "network","opinion","package","quality","respect","station","teacher","upgrade","village","whisper",
  "xylophone","yawning","zealous","abstract","barrier","caution","decline","element","fashion","genuine",
  "holiday","impress","justice","kingdom","library","message","neutral","officer","perform","quarter",
  "railway","support","tension","uncover","vintage","whistle","extreme","yawning","zealous","absolute",
  "capacity","decision","elegant","freight","gesture","history","imagine","journey","kitchen","logical",
  "minimum","notable","opinion","package","quality","regular","station","teacher","upgrade","victory",
  "worship","xylophone","yawning","zealous","abstract","balance","caution","declare","elastic","freedom",
  "gravity","harmony","illegal","justice","kingdom","library","monster","network","option","process",
  "quality","respect","support","tension","upgrade","village","witness","xylophone","yielding","zealous",
  // keep extending with unique variations until ~500 words
];

export default words;