/*******************************
VIDEO MODEL
 
    {title: ``,
    link: "",
    tags: ["all",]},
********************************/

let db = {
  tags: [
    "all",

    // type
    "live", "performance", "vlog", "promotions", "behind", "teaser", "mv", "variety",
    "radio",

    // platform
    "youtube", "vlive",
  ],

  //------------------------------------------
  //                 YOUTUBE
  //------------------------------------------

  videos: [
    {title: `VIVIZ (비비지) - VISUAL FILM`,
    link: "https://www.youtube.com/watch?v=8U58EZADC-o",
    tags: ["all", "behind", "youtube"]},

    {title: `VIVIZ (비비지) - MAKING FILM`,
    link: "https://www.youtube.com/watch?v=f0LRqaby8ds",
    tags: ["all", "behind", "youtube"]},
    
    {title: `[VIVI.Zip] 벌칙은 은하가 받을게 🐰🎃`,
    link: "https://www.youtube.com/watch?v=MQZoMhU9CEI",
    tags: ["all", "vlog", "youtube"]},

    {title: `EUNHA(은하) X ADORA(아도라) - "MAKE U DANCE" MAKING FILM`,
    link: "https://www.youtube.com/watch?v=90k7XFSaDrQ",
    tags: ["all", "behind", "youtube"]},

    {title: `VIVO MOMENTO, VIVIZ "DAZED" MAKING FILM`,
    link: "https://www.youtube.com/watch?v=vhkLfqqajLw",
    tags: ["all", "behind", "youtube"]},

    {title: `VIVIZ 2022 SEASON'S GREETINGS [VIVIZ Diary] Teaser`,
    link: "https://www.youtube.com/watch?v=pg2pYKz59zI",
    tags: ["all", "teaser", "youtube"]},

    {title: `VIVIZ (비비지) - WINTER FILM`,
    link: "https://www.youtube.com/watch?v=cyIXlwTYxlU",
    tags: ["all", "promotions", "youtube"]},

    {title: `VIVIZ (비비지) - “WINTER FILM” BEHIND THE SCENES`,
    link: "https://www.youtube.com/watch?v=09WFmx9H8u0",
    tags: ["all", "behind", "youtube"]},

    {title: `VIVIZ (비비지) - “2022 SEASON'S GREETINGS” BEHIND THE SCENES`,
    link: "https://www.youtube.com/watch?v=a8KrY-v92mU",
    tags: ["all", "behind", "youtube"]},

    {title: `VIVIZ (비비지) - VIVIZ의 2022 새해소원은?`,
    link: "https://www.youtube.com/watch?v=cDdYQqaieB4",
    tags: ["all", "promotions", "youtube"]},

    {title: `[4K][MV] ADORA(아도라)-MAKE U DANCE (Feat. 은하 of VIVIZ)ㅣ[띵곡가들]ㅣ딩고뮤직ㅣDingo Music`,
    link: "https://www.youtube.com/watch?v=KfPfBOHQn4M",
    tags: ["all", "mv", "youtube"]},

    {title: `여자친구 근황! 신비, 은하, 엄지 재결합 이후 첫 인터뷰 (ft. 김우진)ㅣEP.4 VIVIZ, Kim Woojin`,
    link: "https://www.youtube.com/watch?v=ZHeHYVe7RZM",
    tags: ["all", "promotions", "youtube"]},

    {title: `[ENG]서프라이즈🎁 몰래 치킨 들고 찾아온 은하,신비? 심지어 배그 선수들한테?!`,
    link: "https://www.youtube.com/watch?v=GdtPVqJauXM",
    tags: ["all", "variety", "youtube"]},

    {title: `투은비가 PGC 2021 경기장에서 배그한판을 했다!? 🔫 혹시,, 자전거.. 드실래요!?`,
    link: "https://www.youtube.com/watch?v=RyThWPnGuDw",
    tags: ["all", "variety", "youtube"]},

    {title: `11월 15일 VIVIZ TONIGHT!`,
    link: "https://www.youtube.com/watch?v=64uv_tYvqsc",
    tags: ["all", "radio", "youtube"]},

    {title: `11월 8일 VIVIZ TONIGHT!`,
    link: "https://www.youtube.com/watch?v=DjUKn3rG3_E",
    tags: ["all", "radio", "youtube"]},

    {title: `11월 1일 VIVIZ TONIGHT!`,
    link: "https://www.youtube.com/watch?v=K9eTlTutkGw",
    tags: ["all", "radio", "youtube"]},

    {title: `10월 25일 VIVIZ TONIGHT!`,
    link: "https://www.youtube.com/watch?v=nZMG3wK4RcQ",
    tags: ["all", "radio", "youtube"]},

    {title: `10월 18일 VIVIZ Tonight!`,
    link: "https://www.youtube.com/watch?v=I5SBNlcPivY",
    tags: ["all", "radio", "youtube"]},


    //------------------------------------------
    //                 VLIVE
    //------------------------------------------

    {title: `We who don't do anything`,
    link: "https://www.vlive.tv/post/1-27110874",
    tags: ["all", "live", "vlive"]},

    {title: `It'Z the 1st V LIVE Appearance for Experienced Rookies 'VIVIZ'`,
    link: "https://www.vlive.tv/post/0-25953858",
    tags: ["all", "live", "vlive"]},

    {title: `MUJI's Catch Mind`,
    link: "https://www.vlive.tv/post/0-26108731",
    tags: ["all", "live", "vlive"]},

    {title: `VIVIZ Will Play the Game, Who Will Get the Penalty?`,
    link: "https://www.vlive.tv/post/1-26197531",
    tags: ["all", "live", "vlive"]},

    {title: `🏠`,
    link: "https://www.vlive.tv/post/1-26537482",
    tags: ["all", "live", "vlive"]},

    {title: `🏠`,
    link: "https://www.vlive.tv/post/0-26531382",
    tags: ["all", "live", "vlive"]},

    {title: `Suddenly?`,
    link: "https://www.vlive.tv/post/1-26897943",
    tags: ["all", "live", "vlive"]},

    {title: `Huh? Again?`,
    link: "https://www.vlive.tv/post/1-26899150",
    tags: ["all", "live", "vlive"]},

    {title: `🍎🍓🍊🍒🍇🥝`,
    link: "https://www.vlive.tv/post/0-26943700",
    tags: ["all", "live", "vlive"]},
  ],
}
