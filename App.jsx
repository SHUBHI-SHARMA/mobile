import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Screen1 from "./components/Screen1";
import CheckHowMuchYouCanEarn from "./components/CheckHowMuchYouCanEarn";
import MobilePhone from "./components/MobilePhone";
import Desktop1 from "./components/Desktop1";
import Text from "./components/Text";
import Text2 from "./components/Text2";
import Frame6 from "./components/Frame6";
import Mobile from "./components/Mobile";
import Frame4 from "./components/Frame4";
import Desktop2 from "./components/Desktop2";
import Dashboard from "./components/Dashboard";
import Desktop12 from "./components/Desktop12";
import X30B2 from "./components/X30B2";
import Icon from "./components/Icon";
import Mobile2 from "./components/Mobile2";
import Header5 from "./components/Header5";
import Chats from "./components/Chats";
import PhotoOpenoverlay from "./components/PhotoOpenoverlay";
import IndividualChat from "./components/IndividualChat";
import Search from "./components/Search";
import DiscoveroverflowBehavior from "./components/DiscoveroverflowBehavior";
import Profile from "./components/Profile";
import SearchResultspreserveScrollPosition from "./components/SearchResultspreserveScrollPosition";
import SearchResults from "./components/SearchResults";
import SearchKeyboardoverlay from "./components/SearchKeyboardoverlay";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/screen1">
          <Screen1 {...screen1Data} />
        </Route>
        <Route path="/mobilephone">
          <MobilePhone {...mobilePhoneData} />
        </Route>
        <Route path="/desktop-1">
          <Desktop1 {...desktop1Data} />
        </Route>
        <Route path="/mobile">
          <Mobile {...mobileData} />
        </Route>
        <Route path="/desktop-2">
          <Desktop2 {...desktop2Data} />
        </Route>
        <Route path="/dashboard">
          <Dashboard {...dashboardData} />
        </Route>
        <Route path="/desktop-1-1">
          <Desktop12 {...desktop12Data} />
        </Route>
        <Route path="/mobile-1">
          <Mobile2 {...mobile2Data} />
        </Route>
        <Route path="/desktop-12">
          <Desktop12 {...desktop122Data} />
        </Route>
        <Route path="/mobile2">
          <Mobile2 {...mobile22Data} />
        </Route>
        <Route path="/design">
          <div className="container-center-horizontal">
            <div className="design smart-layers-pointers screen">
              <div className="overlap-group-50">
                <div className="why-crappo-7">
                  <div className="overlap-group1-29">
                    <img className="x-59" src="/img/---8@1x.png" />
                    <Text
                      text4="Why you should choose AntEagle"
                      text3="EXPERIENCE THE NEXT GENERATION CRYPTOCURRENCY PLATFORM. NO FINANCIAL BORDERS, EXTRA FEES, AND FAKE REVIEWS."
                      className="text-111"
                      buttonProps={text8Data.buttonProps}
                    />
                  </div>
                  <div className="overlap-group2-39">
                    <img className="d-7" src="/img/d@2x.png" />
                    <img className="u-8" src="/img/u@2x.png" />
                    <img className="frame-2-7" src="/img/frame-2-1@1x.png" />
                  </div>
                  <div className="numbers-6">
                    <X30B2 iconBarChart="/img/icon---bar-chart@2x.png" text2Props={x30B25Data.text2Props} />
                    <div className="numbers-item-6">
                      <div className="icon-18">
                        <div className="overlap-group3-31">
                          <div className="base-20"></div>
                          <img className="icon-person-6" src="/img/icon---person@2x.png" />
                        </div>
                      </div>
                      <Text2 x30B="10M+" text2="Trusted Wallets Investor" className="text-117" />
                    </div>
                    <div className="numbers-item-6">
                      <Icon src="/img/icon---earth@2x.png" />
                      <Text2 x30B="195" text2="Countries Supported" className="text-117" />
                    </div>
                  </div>
                </div>
                <img className="x-60" src="/img/--@1x.png" />
                <Header5 {...header5Data} />
                <Frame4
                  features="Features"
                  componentLottieHttpsAssets2Lottiefi="/img/-component-lottie-https---assets2-lottiefiles-com-packages-lf20-@1x.png"
                  text130="AntEagle promises to expand the horizon of human endeavour and bring a lot of new features with advanced innovation and leading-edge technology"
                  className="frame-4-3"
                />
                <Frame6 {...frame67Data} />
              </div>
              <div className="trade-securely-5">
                <div className="overlap-group7-15">
                  <div className="bg-7"></div>
                  <img className="cryptocurrencies-7" src="/img/cryptocurrencies-1@1x.png" />
                  <img className="calculate-13" src="/img/calculate@1x.png" />
                  <CheckHowMuchYouCanEarn
                    text21="Check how much you can earn"
                    text20="Let’s check your pool rate to see how much you will earn today."
                  />
                </div>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/:path(|chats)">
          <Chats {...chatsData} />
        </Route>
        <Route path="/photo-open-overlay-1">
          <PhotoOpenoverlay
            photoOpenOverlay="/img/rectangle@1x.png"
            overlapGroup="/img/rectangle-2@2x.svg"
            union="/img/union-4@2x.svg"
            componentProps={photoOpenoverlayData.componentProps}
          />
        </Route>
        <Route path="/individual-chat">
          <IndividualChat {...individualChatData} />
        </Route>
        <Route path="/photo-open-overlay">
          <PhotoOpenoverlay
            photoOpenOverlay="/img/rectangle-1@1x.png"
            overlapGroup="/img/rectangle-2@2x.svg"
            union="/img/union-5@2x.svg"
            className="photo-open-overlay"
            componentProps={photoOpenoverlay2Data.componentProps}
          />
        </Route>
        <Route path="/search">
          <Search
            statusBarProps={searchData.statusBarProps}
            registerProps={searchData.registerProps}
            component2Props={searchData.component2Props}
          />
        </Route>
        <Route path="/discover-overflow-behavior">
          <DiscoveroverflowBehavior {...discoveroverflowBehaviorData} />
        </Route>
        <Route path="/profile">
          <Profile {...profileData} />
        </Route>
        <Route path="/search-results-preserve-scroll-position">
          <SearchResultspreserveScrollPosition {...searchResultspreserveScrollPositionData} />
        </Route>
        <Route path="/search-results">
          <SearchResults {...searchResultsData} />
        </Route>
        <Route path="/search-keyboard-overlay">
          <SearchKeyboardoverlay {...searchKeyboardoverlayData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const frame2Data = {
    group: "/img/group-4@1x.png",
    group2: "/img/group-4@1x.png",
};

const buttonData = {
    children: "Learn More",
};

const navMenuData = {
    text50: "Products",
    text52: "Features",
    text51: "About",
    place: "Contact",
};

const illustrationData = {
    vector2: "/img/vector-44@2x.png",
    vector3: "/img/vector-45@2x.png",
    vector4: "/img/vector-46@2x.png",
    vector5: "/img/vector-29@2x.png",
    vector6: "/img/vector-37@2x.png",
    vector7: "/img/vector-38@2x.png",
    vector8: "/img/vector-39@2x.png",
    vector9: "/img/vector-33@2x.png",
    vector10: "/img/vector-41@2x.png",
    vector11: "/img/vector-42@2x.png",
    vector12: "/img/vector@2x.png",
    vector13: "/img/vector-21@2x.png",
    vector14: "/img/vector-22@2x.png",
    vector15: "/img/vector-23@2x.png",
    vector16: "/img/vector-24@2x.png",
    vector17: "/img/vector-1@2x.png",
    vector18: "/img/vector-9@2x.png",
    vector19: "/img/vector-10@2x.png",
    vector20: "/img/vector-11@2x.png",
    vector21: "/img/vector-12@2x.png",
    vector22: "/img/vector-13@2x.png",
    vector23: "/img/vector-7@2x.png",
    vector24: "/img/vector-8@2x.png",
    vector25: "/img/vector-16@2x.png",
    vector26: "/img/vector-17@2x.png",
    vector27: "/img/vector-18@2x.png",
    vector28: "/img/vector-20@2x.png",
    vector29: "/img/vector-72@2x.png",
    vector30: "/img/vector-26@2x.png",
    vector31: "/img/vector-27@2x.png",
    group: "/img/vector-28@2x.png",
    vector32: "/img/vector-18@2x.png",
    vector33: "/img/vector-26@2x.png",
    vector34: "/img/vector-27@2x.png",
    vector35: "/img/vector-21@2x.png",
    vector36: "/img/vector-22@2x.png",
    vector37: "/img/vector-30@2x.png",
    vector38: "/img/vector-31@2x.png",
};

const headerData = {
    text53: "AntEagle",
    i17123521518: "/img/---9@1x.png",
    i17123521519: "/img/--@1x.png",
    navMenuProps: navMenuData,
    illustrationProps: illustrationData,
};

const calculateData = {
    enterHashRate: "/img/base-1@1x.png",
    text19: "Enter your hash rate",
    form: "/img/form@2x.png",
    thS: "TH/s",
    form2: "/img/form-1@2x.png",
    calculate: "Calculate",
    overlapGroup3: "/img/base@1x.png",
    text16: "ESTIMATED 24 HOUR REVENUE:",
    spanText: "0.055 130 59 ETH ",
    spanText2: "($1275)",
    text17: "Revenue will change based on mining difficulty and Ethereum price.",
};

const checkHowMuchYouCanEarnData = {
    text21: "Check how much you can earn",
    text20: "Let’s check your pool rate to see how much you will earn today.",
};

const button2Data = {
    children: "Know More",
};

const button22Data = {
    children: "Know More",
    className: "button-14",
};

const button23Data = {
    children: "Know More",
    className: "button-15",
};

const button24Data = {
    children: "Know More",
    className: "button-16",
};

const dott1Data = {
    vector2: "/img/vector-54@2x.png",
};

const dott12Data = {
    vector2: "/img/vector-56@2x.png",
    className: "dott-8",
};

const dott2Data = {
    vector2: "/img/vector-12@2x.png",
};

const button3Data = {
    children: "Start Trade",
};

const text32Data = {
    investSmart: "Invest Smart",
    text47: "Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.",
    button3Props: button3Data,
};

const group17Data = {
    logosBitcoin: "/img/vector-75@2x.png",
};

const cardBounceRateData = {
    increaseInTrade: "Increase in Trade",
    text46: "+75%",
    sellOption: "Sell option",
};

const group111Data = {
    vector8: "/img/vector-8-1@1x.png",
    vector7: "/img/vector-7-1@1x.png",
};

const buttonRegisterData = {
    children: "Buy",
};

const buttonRegister2Data = {
    children: "Sell",
};

const group163Data = {
    buttonRegisterProps: buttonRegisterData,
    buttonRegister2Props: buttonRegister2Data,
};

const group117Data = {
    price: "$6278.13",
    text42: "+2.74%",
    lastPrice: "Last price",
};

const group162Data = {
    x3825Btc: "38.25 BTC",
    volume24H: "Volume (24h)",
};

const group161Data = {
    usdBtc: "USD/BTC",
};

const group141Data = {
    price: "$1500",
    price2: "$1450",
    price3: "$1400",
    price4: "$1350",
};

const group113Data = {
    price: "$8256.00",
    totalAmount: "Total amount",
};

const group115Data = {
    price: "$51234.31",
    high: "High",
};

const group116Data = {
    price: "$1531.80",
    low: "Low",
};

const group1162Data = {
    spanText: "+7.3% ",
    spanText2: "(+$146)",
    trends: "Trends",
};

const group1492Data = {
    className: "group-137",
};

const group1493Data = {
    className: "group-1-1-1",
};

const group1494Data = {
    className: "group-135",
};

const group1495Data = {
    className: "group-129",
};

const group1392Data = {
    className: "group-133",
};

const group1393Data = {
    className: "group-151",
};

const group1394Data = {
    className: "group-128",
};

const group1395Data = {
    className: "group-127",
};

const group1342Data = {
    className: "group-152",
};

const group1302Data = {
    className: "group-153",
};

const group1343Data = {
    className: "group-154",
};

const group1496Data = {
    className: "group-122",
};

const group1303Data = {
    className: "group-118",
};

const group1304Data = {
    className: "group-119",
};

const group1344Data = {
    className: "group-121",
};

const group1497Data = {
    className: "group-141-2",
};

const group1498Data = {
    className: "group-1-1",
};

const group1305Data = {
    className: "group-142",
};

const group1306Data = {
    className: "group-143",
};

const group1499Data = {
    className: "group-145",
};

const group14910Data = {
    className: "group-144",
};

const group1307Data = {
    className: "group-146",
};

const group1308Data = {
    className: "group-147",
};

const group1345Data = {
    className: "group-148",
};

const group157Data = {
    children: "$1569",
};

const button32Data = {
    children: "Start Trade",
    className: "button-27",
};

const text42Data = {
    detailedStatistics: "Detailed Statistics",
    text44: "View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.",
    button3Props: button32Data,
};

const bTCData = {
    overlapGroup6: "/img/vector-69@2x.png",
    btc: "BTC",
    bitcoin: "Bitcoin",
};

const group96Data = {
    src: "/img/vector-11@2x.png",
};

const group100Data = {
    text38: "+7.3%",
    group96Props: group96Data,
};

const lTCData = {
    overlapGroup6: "/img/shape@2x.png",
    ltc: "LTC",
    litecoin: "Litecoin",
};

const group962Data = {
    src: "/img/vector-12@2x.png",
};

const group102Data = {
    text39: "+8.2%",
    group96Props: group962Data,
};

const text52Data = {
    text41: "Grow your profit and track your investments",
    text40: "Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.",
    startTrade: "Start Trade",
};

const enterYourEmailData = {
    enterYourEmail: "Enter your email",
    form: "/img/form@2x.png",
};

const button4Data = {
    children: "Subscribe",
};

const startMiningData = {
    startMining: "/img/start-mining@1x.png",
    x172722: "/img/---8@1x.png",
    x172723: "/img/---3@1x.png",
    startMiningNow: "/img/mask-group@1x.png",
    text49: "Would You Like to start a Project With Us...",
    enterYourEmailProps: enterYourEmailData,
    button4Props: button4Data,
};

const quickLinkData = {
    services: "Services",
    address: <># Decentralised Finance<br /># CryptoCurrency Insurance<br /># Post- Quantum</>,
};

const button5Data = {
    children: "Click to Join",
};

const screen1Data = {
    x1712560: "/img/---20@1x.png",
    d: "/img/d@2x.png",
    u: "/img/u@2x.png",
    text2: "Why you should choose AntEagle",
    text1: "EXPERIENCE THE NEXT GENERATION CRYPTOCURRENCY PLATFORM. NO FINANCIAL BORDERS, EXTRA FEES, AND FAKE REVIEWS.",
    circleCropped1Copy1: "/img/circle-cropped--1----copy-1@2x.png",
    text54: "Welcome to AntNet Ecosystem",
    withTheRevolutionaryTechnologyBlock: "/img/with-the-revolutionary-technology-blockchain--we-are-here-with-s@2x.png",
    learnMore: "Learn More",
    features: "Features",
    text3: "AntEagle promises to expand the horizon of human endeavour and bring a lot of new features with advanced innovation and leading-edge technology",
    text4: "Decentralised Finance",
    text8: "A new way of providing a Decentralized Finance Solution that is scalable and sustainable making your experience up to the mark.",
    crossChainSupport: "Cross-Chain Support",
    text9: "AntEagle offers you a scalable and sustainable blockchain solution with Multiple blockchain support.",
    text7: "Post-Quantam Encryption",
    text12: "AntEagle will offer you an ultimate Encryption method integrated with our blockchain network which can never be affected by Quantum Computers.",
    text5: "Fast and Secure Network",
    text10: "We provide a secure and prominent system where you can complete transactions without any worry and enjoy profit with complete security.",
    helpSupport: "Help & Support",
    text13: "You will have a 24/7 support system for all your troubleshooting and queries so that you have a better and responsive user experience",
    text6: "Cryptocurrency Insurance",
    text11: "Our crypto network has proposed a new way where you can invest your money and be worry-free from cybercrime and theft.",
    tradeSecurely: "/img/trade-securely@1x.png",
    cryptocurrencies: "/img/cryptocurrencies-1@1x.png",
    circleCropped32: "/img/circle-cropped--3--2@2x.png",
    eagleToken2: "/img/eagle-token-2@2x.png",
    circleCropped1Copy2: "/img/circle-cropped--1----copy-2@2x.png",
    title: "Upcoming Events",
    rectangle106: "/img/rectangle-106@1x.png",
    text20: "Initial Coin Offering (ICO)",
    text27: "Starting From 19th July to 25th of July, Our company will start it's IDO. All the interested crypto enthusiasts should not miss the one in a life time offer.",
    rectangle105: "/img/rectangle-105@1x.png",
    airDrop: "Air Drop",
    text26: "Don't lose the opportunity to experience the largest Air drop Event in the Cryptocurrency market. The Event will take place during 25th to 30th July.",
    rectangle104: "/img/rectangle-104@1x.png",
    text21: "Initial Dex Offering (IDO)",
    text24: "Starting From 19th July to 25th of July, Our company will start it's IDO. All the interested crypto enthusiasts should not miss the one in a life time offer.",
    text25: "Starting From 19th July to 25th of July, Our company will start it's IDO. All the interested crypto enthusiasts should not miss the one in a life time offer.",
    rectangle107: "/img/rectangle-107@1x.png",
    text22: "Initial Exchange Offering (IEO)",
    text23: "Now we're Going on Cross platform and you can buy, trade and exchange our coins on the leading Crypto Exchange markets like Binance, CoinSwitch and MetaMask etc.",
    base: "/img/base-6@1x.png",
    calculate: "/img/calculate-1@1x.png",
    roadMap: "Road-Map",
    vector2: "/img/vector-49@2x.png",
    vector3: "/img/vector-50@2x.png",
    vector4: "/img/vector-51@2x.png",
    vector5: "/img/vector-52@2x.png",
    vector6: "/img/vector-27@2x.png",
    vector7: "/img/vector-58@2x.png",
    vector8: "/img/vector-61@2x.png",
    vector9: "/img/vector-62@2x.png",
    vector10: "/img/vector@2x.png",
    vector11: "/img/vector@2x.png",
    today: "Today",
    vector12: "/img/vector-65@2x.png",
    vector13: "/img/vector-66@2x.png",
    vector14: "/img/vector@2x.png",
    vector15: "/img/vector@2x.png",
    spanText: <><br /><br />    Blockchain TestNet:<br /><br /></>,
    spanText2: <>May 2019<br /></>,
    spanText3: <><br /><br />Testing the blockchain Testnet to get Started with blockchain-based Solutions</>,
    spanText4: <><br /><br />Video rendering Testing<br /><br /></>,
    spanText5: <>JULY 2019<br /></>,
    spanText6: <><br /><br />Started Testing of Video Rendering Service and how to make it Decentralized</>,
    spanText7: <><br /><br /> Decentralized Finance <br /><br /></>,
    spanText8: <>Feb 2021<br /></>,
    spanText9: <><br /><br />Started Working on providing Decentralized Finance Service taking a step further in decentralized innovations</>,
    spanText10: <><br /><br />CryptoCurrency Insurance<br /><br /></>,
    spanText11: <>Dec 2019<br /></>,
    spanText12: <><br /><br />Started Creating Solutions for Traders with Insurance of CryptoCurrency</>,
    spanText13: <><br /><br />Layered 2 Protocol Based Testing<br /><br /></>,
    spanText14: <>July 2021<br /></>,
    spanText15: <><br /><br />We Created our own Blockchain Network with some of the most Salient Features like Layered 2 Protocol</>,
    spanText16: <><br /><br />EagleNet Token<br /><br /></>,
    spanText17: <>June 2021<br /></>,
    spanText18: <><br /><br /> Creating and Lauching EagleToken and ANTEAGLE cryptocurrency and making a exchange platform.</>,
    spanText19: <><br /><br />BlockChain Network<br /><br /></>,
    spanText20: <>Dec 2021<br /></>,
    spanText21: <><br /><br />Deploying and Launching our BlockChain Network which provides several needful solutions</>,
    polygon1: "/img/polygon-1@2x.png",
    spanText22: <><br /><br />Video Rendering <br /><br /></>,
    spanText23: <>Aug 2021<br /></>,
    spanText24: <><br /><br /> Deploying and Launching Video Rendering Service along with our blockchain Network</>,
    o: "/img/o@1x.png",
    exchange: "Exchange",
    text46: "Now you can trade and exchange your cryptocurrencies like Bitcoin,AntEagle Ethereum, Ripple, etc on our platform. Start investing and do your Happy trading with us.",
    bitcoin: "Bitcoin",
    btc: "BTC",
    text43: "+125%",
    x000080Btc: "0.00080 BTC",
    cardVisitsPerDay: "/img/card-visits-per-day@2x.png",
    rectangle81: "/img/rectangle-81@1x.png",
    group6: "/img/group-6@1x.png",
    name: "May",
    jun: "Jun",
    jul: "Jul",
    aug: "Aug",
    sep: "Sep",
    oct: "Oct",
    nov: "Nov",
    dec: "Dec",
    rectangle77: "/img/rectangle-77@1x.png",
    andriyLenin: "Andriy Lenin",
    verified: "VERIFIED",
    ellipse48: "/img/ellipse-48@2x.png",
    line7: "/img/line-7@1x.png",
    price: "$1600",
    base2: "/img/base@1x.png",
    o2: "/img/o@1x.png",
    surname: "Price",
    place: "Change",
    volume24H: "Volume (24h)",
    price2: "$6750",
    price3: "$3420214",
    eth: "/img/eth@1x.png",
    price4: "$8535",
    price5: "$5820399",
    galvatronCapital: "Galvatron Capital",
    x178A2Ae1287E4A72A4Ecd2367C6F9Ab941: "/img/178a2ae1287e4a72a4ecd2367c6f9ab9--4--1@2x.png",
    ourInvestors: "Our Investors",
    x5C6A9B8Bf9Eb427C817E846938E899Cc51: "/img/5c6a9b8bf9eb427c817e846938e899cc--5--1@2x.png",
    joinOurCommunity: "Join Our Community",
    text48: "We are one of the fastest growing company with a community of thousands of elite, masters and techies believing in our vision and mission. Come join us and be a part of the change.",
    text49: "Catch Up with Us here..",
    github_Png581: "/img/github-png58-1-2@2x.png",
    telegram_SoftwareLogo1: "/img/telegram--software--logo-1-2@2x.png",
    frame2Props: frame2Data,
    buttonProps: buttonData,
    headerProps: headerData,
    calculateProps: calculateData,
    checkHowMuchYouCanEarnProps: checkHowMuchYouCanEarnData,
    button2Props: button2Data,
    button22Props: button22Data,
    button23Props: button23Data,
    button24Props: button24Data,
    dott1Props: dott1Data,
    dott12Props: dott12Data,
    dott2Props: dott2Data,
    text32Props: text32Data,
    group17Props: group17Data,
    cardBounceRateProps: cardBounceRateData,
    group111Props: group111Data,
    group163Props: group163Data,
    group117Props: group117Data,
    group162Props: group162Data,
    group161Props: group161Data,
    group141Props: group141Data,
    group113Props: group113Data,
    group115Props: group115Data,
    group116Props: group116Data,
    group1162Props: group1162Data,
    group149Props: group1492Data,
    group1492Props: group1493Data,
    group1493Props: group1494Data,
    group1494Props: group1495Data,
    group139Props: group1392Data,
    group1392Props: group1393Data,
    group1393Props: group1394Data,
    group1394Props: group1395Data,
    group134Props: group1342Data,
    group130Props: group1302Data,
    group1342Props: group1343Data,
    group1495Props: group1496Data,
    group1302Props: group1303Data,
    group1303Props: group1304Data,
    group1343Props: group1344Data,
    group1496Props: group1497Data,
    group1497Props: group1498Data,
    group1304Props: group1305Data,
    group1305Props: group1306Data,
    group1498Props: group1499Data,
    group1499Props: group14910Data,
    group1306Props: group1307Data,
    group1307Props: group1308Data,
    group1344Props: group1345Data,
    group157Props: group157Data,
    text42Props: text42Data,
    bTCProps: bTCData,
    group100Props: group100Data,
    lTCProps: lTCData,
    group102Props: group102Data,
    text52Props: text52Data,
    startMiningProps: startMiningData,
    quickLinkProps: quickLinkData,
    button5Props: button5Data,
};

const arrowRightData = {
    src: "/img/vector-126@2x.png",
};

const button6Data = {
    children: "Learn More",
    className: "button-2",
};

const dott9Data = {
    vector2: "/img/vector-161@2x.png",
    vector3: "/img/vector@2x.png",
    vector4: "/img/vector@2x.png",
};

const dott92Data = {
    vector2: "/img/vector-161@2x.png",
    vector3: "/img/vector@2x.png",
    vector4: "/img/vector@2x.png",
    className: "dott-9-2",
};

const dott10Data = {
    vector2: "/img/vector-161@2x.png",
    dott9Props: dott92Data,
};

const dott93Data = {
    vector2: "/img/vector-161@2x.png",
    vector3: "/img/vector@2x.png",
    vector4: "/img/vector@2x.png",
    className: "dott-9-3",
};

const dott94Data = {
    vector2: "/img/vector-161@2x.png",
    vector3: "/img/vector@2x.png",
    vector4: "/img/vector@2x.png",
    className: "dott-9-4",
};

const dott102Data = {
    vector2: "/img/vector-161@2x.png",
    className: "dott-10-2",
    dott9Props: dott94Data,
};

const dott11Data = {
    vector2: "/img/vector-161@2x.png",
    dott9Props: dott93Data,
    dott9Props2: dott102Data,
};

const dott95Data = {
    vector2: "/img/vector-161@2x.png",
    vector3: "/img/vector@2x.png",
    vector4: "/img/vector@2x.png",
    className: "dott-9-5",
};

const dott96Data = {
    vector2: "/img/vector-161@2x.png",
    vector3: "/img/vector@2x.png",
    vector4: "/img/vector@2x.png",
    className: "dott-9-6",
};

const dott103Data = {
    vector2: "/img/vector-161@2x.png",
    className: "dott-10-3",
    dott9Props: dott96Data,
};

const dott112Data = {
    vector2: "/img/vector-161@2x.png",
    className: "dott-12",
    dott9Props: dott95Data,
    dott9Props2: dott103Data,
};

const dott97Data = {
    vector2: "/img/vector-195@2x.png",
    vector3: "/img/vector@2x.png",
    vector4: "/img/vector@2x.png",
    className: "dott-9",
};

const dott98Data = {
    vector2: "/img/vector-195@2x.png",
    vector3: "/img/vector@2x.png",
    vector4: "/img/vector@2x.png",
    className: "dott-9",
};

const dott104Data = {
    vector2: "/img/vector-195@2x.png",
    className: "dott-10",
    dott9Props: dott98Data,
};

const dott113Data = {
    vector2: "/img/vector-195@2x.png",
    className: "dott-14",
    dott9Props: dott97Data,
    dott9Props2: dott104Data,
};

const dott99Data = {
    vector2: "/img/vector-195@2x.png",
    vector3: "/img/vector@2x.png",
    vector4: "/img/vector@2x.png",
    className: "dott-9",
};

const dott910Data = {
    vector2: "/img/vector-195@2x.png",
    vector3: "/img/vector@2x.png",
    vector4: "/img/vector@2x.png",
    className: "dott-9",
};

const dott105Data = {
    vector2: "/img/vector-195@2x.png",
    className: "dott-10",
    dott9Props: dott910Data,
};

const dott114Data = {
    vector2: "/img/vector-195@2x.png",
    className: "dott-15",
    dott9Props: dott99Data,
    dott9Props2: dott105Data,
};

const dott911Data = {
    vector2: "/img/vector-195@2x.png",
    vector3: "/img/vector@2x.png",
    vector4: "/img/vector@2x.png",
    className: "dott-9",
};

const dott912Data = {
    vector2: "/img/vector-195@2x.png",
    vector3: "/img/vector@2x.png",
    vector4: "/img/vector@2x.png",
    className: "dott-9",
};

const dott106Data = {
    vector2: "/img/vector-195@2x.png",
    className: "dott-10",
    dott9Props: dott912Data,
};

const dott115Data = {
    vector2: "/img/vector-195@2x.png",
    className: "dott-16",
    dott9Props: dott911Data,
    dott9Props2: dott106Data,
};

const dott913Data = {
    vector2: "/img/vector-195@2x.png",
    vector3: "/img/vector@2x.png",
    vector4: "/img/vector@2x.png",
    className: "dott-9",
};

const dott914Data = {
    vector2: "/img/vector-195@2x.png",
    vector3: "/img/vector@2x.png",
    vector4: "/img/vector@2x.png",
    className: "dott-9",
};

const dott107Data = {
    vector2: "/img/vector-195@2x.png",
    className: "dott-10",
    dott9Props: dott914Data,
};

const dott116Data = {
    vector2: "/img/vector-195@2x.png",
    className: "dott-17",
    dott9Props: dott913Data,
    dott9Props2: dott107Data,
};

const group1352Data = {
    className: "group-140-2",
};

const group1353Data = {
    className: "group-144-2",
};

const group1354Data = {
    className: "group-145-2",
};

const group1355Data = {
    className: "group-137-2",
};

const group1356Data = {
    className: "group-136",
};

const group14122Data = {
    className: "group-149-2",
};

const group1357Data = {
    className: "group-129-2",
};

const group1182Data = {
    className: "group-142-2",
};

const group1183Data = {
    className: "group-143-2",
};

const group1192Data = {
    className: "group-130-1",
};

const group1184Data = {
    className: "group-153-2",
};

const group1542Data = {
    className: "group-152-2",
};

const group1272Data = {
    className: "group-139-1",
};

const group1273Data = {
    className: "group-133-2",
};

const mobilePhoneData = {
    vector2: "/img/vector-96@2x.png",
    vector3: "/img/vector-97@2x.png",
    vector4: "/img/vector-98@2x.png",
    vector5: "/img/vector-88@2x.png",
    vector6: "/img/vector-89@2x.png",
    vector7: "/img/vector-90@2x.png",
    vector8: "/img/vector-91@2x.png",
    vector9: "/img/vector-92@2x.png",
    vector10: "/img/vector-93@2x.png",
    vector11: "/img/vector-94@2x.png",
    vector12: "/img/vector@2x.png",
    vector13: "/img/vector-112@2x.png",
    vector14: "/img/vector-113@2x.png",
    vector15: "/img/vector-114@2x.png",
    vector16: "/img/vector-115@2x.png",
    vector17: "/img/vector-82@2x.png",
    vector18: "/img/vector-100@2x.png",
    vector19: "/img/vector-101@2x.png",
    vector20: "/img/vector-102@2x.png",
    vector21: "/img/vector-103@2x.png",
    vector22: "/img/vector-104@2x.png",
    vector23: "/img/vector-88@2x.png",
    vector24: "/img/vector-106@2x.png",
    vector25: "/img/vector-107@2x.png",
    vector26: "/img/vector-108@2x.png",
    vector27: "/img/vector-109@2x.png",
    vector28: "/img/vector-111@2x.png",
    vector29: "/img/vector-123@2x.png",
    vector30: "/img/vector-124@2x.png",
    vector31: "/img/vector-125@2x.png",
    vector32: "/img/vector-126@2x.png",
    vector33: "/img/vector-116@2x.png",
    vector34: "/img/vector-117@2x.png",
    vector35: "/img/vector-118@2x.png",
    vector36: "/img/vector-119@2x.png",
    vector37: "/img/vector-120@2x.png",
    vector38: "/img/vector-121@2x.png",
    vector39: "/img/vector-122@2x.png",
    withTheRevolutionaryTechnologyBlock: "/img/with-the-revolutionary-technology-blockchain--we-are-here-with-s-1@2x.png",
    u: "/img/u@2x.png",
    anteagle: "AntEagle",
    circleCropped1Copy2: "/img/circle-cropped--1----copy-2@2x.png",
    text55: "Welcome to AntNet Ecosystem.",
    getStarted: "/img/get-started-1@2x.png",
    group: "/img/group-7@1x.png",
    group2: "/img/group-7@1x.png",
    text74: "EXPERIENCE THE NEXT GENERATION CRYPTOCURRENCY PLATFORM. NO FINANCIAL BORDERS, EXTRA FEES, AND FAKE REVIEWS.",
    line8: "/img/line-8@2x.png",
    line9: "/img/line-8@2x.png",
    line10: "/img/line-8@2x.png",
    text75: "Why you should choose AntEagle",
    features: "Features",
    text56: "AntEagle promises to expand the horizon of human endeavour and bring a lot of new features with advanced innovation and leading-edge technology",
    text57: "Decentralised Finance",
    text58: "A NEW WAY OF PROVIDING A DECENTRALIZED FINANCE SOLUTION THAT IS SCALABLE AND SUSTAINABLE MAKING YOUR EXPERIENCE UP TO THE MARK.",
    text59: "Cryptocurrency Insurance",
    text60: "OUR CRYPTO NETWORK HAS PROPOSED A NEW WAY WHERE YOU CAN INVEST YOUR MONEY AND BE WORRY-FREE FROM CYBERCRIME AND THEFT.",
    crossChainSupport: "Cross-Chain Support",
    text61: "ANTEAGLE OFFERS YOU A SCALABLE AND SUSTAINABLE BLOCKCHAIN SOLUTION WITH MULTIPLE BLOCKCHAIN SUPPORT.",
    text62: "Post-Quantam Encryption",
    text63: "ANTEAGLE WILL OFFER YOU AN ULTIMATE ENCRYPTION METHOD INTEGRATED WITH OUR BLOCKCHAIN NETWORK WHICH CAN NEVER BE AFFECTED BY QUANTUM COMPUTERS.",
    text64: "Fast and Secure Network",
    text91: "WE PROVIDE A SECURE AND PROMINENT SYSTEM WHERE YOU CAN COMPLETE TRANSACTIONS WITHOUT ANY WORRY AND ENJOY PROFIT WITH COMPLETE SECURITY.",
    helpSupport: "Help & Support",
    text65: "YOU WILL HAVE A 24/7 SUPPORT SYSTEM FOR ALL YOUR TROUBLESHOOTING AND QUERIES SO THAT YOU HAVE A BETTER AND RESPONSIVE USER EXPERIENCE",
    circleCropped1Copy3: "/img/circle-cropped--1----copy-2@2x.png",
    overlapGroup6: "/img/rectangle-108-2@1x.png",
    text66: "Starting From 19th July to 25th of July, Our company will start it's IDO. All the interested crypto enthusiasts should not miss the one in a life time offer.",
    overlapGroup5: "/img/rectangle-108-3@1x.png",
    text67: "Now we're Going on Cross platform and you can buy, trade and exchange our coins on the leading Crypto Exchange markets like Binance, CoinSwitch and MetaMask etc.",
    text68: "Our CryptoCurrencies",
    anteagle2: "AntEagle",
    text69: "The AntEagle CryptoCurrency focuses on crypto-insurance and highlights the solution for money loss issue during crypto-trading by providing an insurance on the crypto-purchase.",
    circleCropped1Copy4: "/img/circle-cropped--1----copy-4@2x.png",
    eth: "/img/eth-4@2x.png",
    ltc: "/img/ltc-1@2x.png",
    upcomingEvents: "Upcoming Events",
    rectangle108: "/img/rectangle-108@1x.png",
    text70: "Initial Coin Offering (ICO)",
    text71: "Starting From 19th July to 25th of July, Our company will start it's IDO. All the interested crypto enthusiasts should not miss the one in a life time offer.",
    rectangle1082: "/img/rectangle-108-1@1x.png",
    airDrop: "Air Drop",
    text72: "Don't lose the opportunity to experience the largest Air drop Event in the Cryptocurrency market. The Event will take place during 25th to 30th July.",
    text73: "Initial Dex Offering (IDO)",
    roadMap: "Road-Map",
    vector40: "/img/vector-87@1x.png",
    spanText: <><br /><br />    Blockchain TestNet:<br /></>,
    spanText2: "May 2019",
    spanText3: <><br /><br />Video rendering Testing<br /></>,
    spanText4: "JULY 2019",
    text92: "Initial Exchange Offering (IEO)",
    spanText5: <>Layered 2 Protocol <br />Based Testing<br /></>,
    spanText6: "July 2021",
    spanText7: <>Video Rendering <br /></>,
    spanText8: "Aug 2021",
    spanText9: <><br /><br />CryptoCurrency Insurance<br /></>,
    spanText10: "Dec 2019",
    spanText11: <>Decentralized Finance <br /></>,
    spanText12: "Feb 2021",
    spanText13: <>EagleNet Token<br /></>,
    spanText14: "June 2021",
    polygon2: "/img/polygon-2@2x.png",
    today: "Today",
    spanText15: <>BlockChain Network<br /></>,
    spanText16: "Dec 2021",
    eagleToken1: "/img/eagle-token-1@2x.png",
    rectangle81: "/img/rectangle-81-1@2x.png",
    buy: "Buy",
    price: "$6278.13",
    lastPrice: "Last price",
    text80: "+2.74%",
    x3825Btc: "38.25 BTC",
    volume24H: "Volume (24h)",
    group6: "/img/group-6-1@2x.png",
    price2: "$1500",
    price3: "$1450",
    price4: "$1400",
    price5: "$1350",
    name: "May",
    jun: "Jun",
    jul: "Jul",
    aug: "Aug",
    sep: "Sep",
    nov: "Nov",
    oct: "Oct",
    dec: "Dec",
    rectangle77: "/img/rectangle-77-1@2x.png",
    andriyLenin: "Andriy Lenin",
    price6: "$8256.00",
    totalAmount: "Total amount",
    price7: "$51234.31",
    high: "High",
    price8: "$1531.80",
    low: "Low",
    spanText17: "+7.3% ",
    spanText18: "(+$146)",
    vector41: "/img/vector-146@2x.png",
    trends: "Trends",
    verified: "VERIFIED",
    ellipse48: "/img/ellipse-48-1@2x.png",
    line7: "/img/line-7-1@2x.png",
    price9: "$1569",
    price10: "$1600",
    base: "/img/base-4@1x.png",
    usdBtc: "USD/BTC",
    vector42: "/img/vector-147@2x.png",
    sell: "Sell",
    startTrade: "Start Trade",
    investSmart: "Invest Smart",
    startTrade2: "Start Trade",
    text83: "Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.",
    text82: "+125%",
    bitcoin: "Bitcoin",
    btc: "BTC",
    logosBitcoin: "/img/vector-148@2x.png",
    vector43: "/img/vector-149@2x.png",
    x000080Btc: "0.00080 BTC",
    cardVisitsPerDay: "/img/card-visits-per-day-3@2x.png",
    group111: "/img/vector-8-2@2x.png",
    vector72: "/img/vector-7-2@2x.png",
    increaseInTrade: "Increase in Trade",
    vector44: "/img/vector-392@2x.png",
    sellOption: "Sell option",
    text84: "+75%",
    text85: "Now you can trade and exchange your cryptocurrencies like Bitcoin,AntEagle Ethereum, Ripple, etc on our platform. Start investing and do your Happy trading with us.",
    exchange: "Exchange",
    detailedStatistics: "Detailed Statistics",
    text86: "View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.",
    surname: "Price",
    place: "Change",
    volume24H2: "Volume (24h)",
    logosBitcoin2: "/img/vector-111@2x.png",
    vector45: "/img/vector-112@2x.png",
    btc2: "BTC",
    bitcoin2: "Bitcoin",
    price11: "$6750",
    vector46: "/img/vector-144@2x.png",
    text76: "+7.3%",
    price12: "$3420214",
    eth2: "/img/eth-5@2x.png",
    price13: "$8535",
    vector47: "/img/vector-145@2x.png",
    text77: "+8.2%",
    price14: "$5820399",
    group38: "/img/shape-2@2x.png",
    ltc2: "LTC",
    litecoin: "Litecoin",
    text78: "Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.",
    text79: "Grow your profit and track your investments",
    startTrade3: "Start Trade",
    o: "/img/o@2x.png",
    services: "Services",
    text87: "We are one of the fastest growing company with a community of thousands of elite, masters and techies believing in our vision and mission. Come join us and be a part of the change.",
    ourInvestors: "Our Investors",
    joinOurCommunity: "Join Our Community",
    text88: "Catch Up with Us here..",
    clickToJoin: "Click to Join",
    x5C6A9B8Bf9Eb427C817E846938E899Cc52: "/img/5c6a9b8bf9eb427c817e846938e899cc--5--2@2x.png",
    x178A2Ae1287E4A72A4Ecd2367C6F9Ab942: "/img/178a2ae1287e4a72a4ecd2367c6f9ab9--4--2@2x.png",
    github_Png581: "/img/github-png58-1-3@2x.png",
    telegram_SoftwareLogo1: "/img/telegram--software--logo-1-3@2x.png",
    address: <># Decentralised Finance<br /># CryptoCurrency Insurance<br /># Post- Quantum</>,
    arrowRightProps: arrowRightData,
    buttonProps: button6Data,
    dott9Props: dott9Data,
    dott10Props: dott10Data,
    dott11Props: dott11Data,
    dott112Props: dott112Data,
    dott113Props: dott113Data,
    dott114Props: dott114Data,
    dott115Props: dott115Data,
    dott116Props: dott116Data,
    group135Props: group1352Data,
    group1352Props: group1353Data,
    group1353Props: group1354Data,
    group1354Props: group1355Data,
    group1355Props: group1356Data,
    group1412Props: group14122Data,
    group1356Props: group1357Data,
    group118Props: group1182Data,
    group1182Props: group1183Data,
    group119Props: group1192Data,
    group1183Props: group1184Data,
    group154Props: group1542Data,
    group127Props: group1272Data,
    group1272Props: group1273Data,
};

const navMenu2Data = {
    text50: "Products",
    text52: "Features",
    text51: "About",
    place: "Contact",
    className: "nav-menu-1",
};

const topData = {
    text56: "AntEagle",
    text53: "Login",
    divider: "/img/divider@2x.png",
    text55: "Register",
    navMenuProps: navMenu2Data,
};

const arrowRight2Data = {
    src: "/img/vector-7@2x.png",
    className: "arrow-right-1",
};

const valuePropositionData = {
    text51: "Welcome to AntNet.",
    heyContentCreatorsSocialMediaInflue: "/img/hey-content-creators--social-media-influencers--vloggers--and-al@2x.png",
    getStarted: "/img/get-started@2x.png",
    arrowRightProps: arrowRight2Data,
};

const illustration2Data = {
    vector2: "/img/vector-44@2x.png",
    vector3: "/img/vector-45@2x.png",
    vector4: "/img/vector-46@2x.png",
    vector5: "/img/vector-36@2x.png",
    vector6: "/img/vector-37@2x.png",
    vector7: "/img/vector-38@2x.png",
    vector8: "/img/vector-39@2x.png",
    vector9: "/img/vector-40@2x.png",
    vector10: "/img/vector-41@2x.png",
    vector11: "/img/vector-42@2x.png",
    vector12: "/img/vector@2x.png",
    vector13: "/img/vector-21@2x.png",
    vector14: "/img/vector-22@2x.png",
    vector15: "/img/vector-23@2x.png",
    vector16: "/img/vector-24@2x.png",
    vector17: "/img/vector-48@2x.png",
    vector18: "/img/vector-9@2x.png",
    vector19: "/img/vector-10@2x.png",
    vector20: "/img/vector-11@2x.png",
    vector21: "/img/vector-52@2x.png",
    vector22: "/img/vector-13@2x.png",
    vector23: "/img/vector-14@2x.png",
    vector24: "/img/vector-15@2x.png",
    vector25: "/img/vector-56@2x.png",
    vector26: "/img/vector-17@2x.png",
    vector27: "/img/vector-18@2x.png",
    vector28: "/img/vector-20@2x.png",
    vector29: "/img/vector-72@2x.png",
    vector30: "/img/vector-33@2x.png",
    vector31: "/img/vector-34@2x.png",
    group: "/img/vector-35@2x.png",
    vector32: "/img/vector-25@2x.png",
    vector33: "/img/vector-26@2x.png",
    vector34: "/img/vector-27@2x.png",
    vector35: "/img/vector-28@2x.png",
    vector36: "/img/vector-29@2x.png",
    vector37: "/img/vector-30@2x.png",
    vector38: "/img/vector-31@2x.png",
    className: "illustration-1",
};

const header7Data = {
    i17123521518: "/img/---9@1x.png",
    i17123521519: "/img/--@1x.png",
    topProps: topData,
    valuePropositionProps: valuePropositionData,
    illustrationProps: illustration2Data,
};

const frame22Data = {
    group: "/img/group-6@1x.png",
    group2: "/img/group-6@1x.png",
    className: "frame-2-1",
};

const button7Data = {
    children: "Learn More",
    className: "button-3",
};

const textData = {
    text4: "Why you should choose AntEagle",
    text3: "EXPERIENCE THE NEXT GENERATION CRYPTOCURRENCY PLATFORM. NO FINANCIAL BORDERS, EXTRA FEES, AND FAKE REVIEWS.",
    buttonProps: button7Data,
};

const text2Data = {
    x30B: "$30B",
    text2: "Digital Currency Exchanged",
};

const text22Data = {
    x30B: "10M+",
    text2: "Trusted Wallets Investor",
    className: "text-109",
};

const text23Data = {
    x30B: "195",
    text2: "Countries Supported",
    className: "text-109",
};

const numbersData = {
    overlapGroup4: "/img/vector-3@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
    vector4: "/img/vector-1@2x.png",
    vector5: "/img/vector-89@2x.png",
    vector6: "/img/vector@2x.png",
    text2Props: text2Data,
    text2Props2: text22Data,
    text2Props3: text23Data,
};

const frame6Data = {
    componentLottieHttpsAssets3Lottiefi: "/img/-component-lottie-https---assets3-lottiefiles-com-packages-lf20-@1x.png",
    features: "Features",
    text1092: "AntEagle promises to expand the horizon of human endeavour and bring a lot of new features with advanced innovation and leading-edge technology",
    text1102: "Decentralised Finance",
    text1142: "A new way of providing a Decentralized Finance Solution that is scalable and sustainable making your experience up to the mark.",
    componentLottieHttpsAssets9Lottiefi: "/img/-component-lottie-https---assets9-lottiefiles-com-packages-lf20-@2x.png",
    componentLottieHttpsAssets2Lottiefi: "/img/-component-lottie-https---assets2-lottiefiles-com-private-files-@2x.png",
    text112: "Cryptocurrency Insurance",
    text1172: "Our crypto network has proposed a new way where you can invest your money and be worry-free from cybercrime and theft.",
    crossChainSupport: "Cross-Chain Support",
    text115: "AntEagle offers you a scalable and sustainable blockchain solution with Multiple blockchain support.",
    componentLottieHttpsAssets2Lottiefi2: "/img/-component-lottie-https---assets2-lottiefiles-com-packages-lf20--1@1x.png",
    componentLottieHttpsAssets7Lottiefi: "/img/-component-lottie-https---assets7-lottiefiles-com-packages-lf20-@2x.png",
    text113: "Post-Quantam Encryption",
    text118: "AntEagle will offer you an ultimate Encryption method integrated with our blockchain network which can never be affected by Quantum Computers.",
    text111: "Fast and Secure Network",
    text116: "We provide a secure and prominent system where you can complete transactions without any worry and enjoy profit with complete security.",
    componentLottieHttpsAssets5Lottiefi: "/img/-component-lottie-https---assets5-lottiefiles-com-private-files-@2x.png",
    componentLottieHttpsAssets5Lottiefi2: "/img/-component-lottie-https---assets5-lottiefiles-com-private-files--1@2x.png",
    helpSupport: "Help & Support",
    text119: "You will have a 24/7 support system for all your troubleshooting and queries so that you have a better and responsive user experience",
};

const calculate2Data = {
    enterHashRate: "/img/base-1@1x.png",
    text19: "Enter your hash rate",
    form: "/img/form@2x.png",
    thS: "TH/s",
    form2: "/img/form-1@2x.png",
    calculate: "Calculate",
    overlapGroup3: "/img/base@1x.png",
    text16: "ESTIMATED 24 HOUR REVENUE:",
    spanText: "0.055 130 59 ETH ",
    spanText2: "($1275)",
    text17: "Revenue will change based on mining difficulty and Ethereum price.",
};

const checkHowMuchYouCanEarn2Data = {
    text21: "Check how much you can earn",
    text20: "Let’s check your pool rate to see how much you will earn today.",
};

const desktop1Data = {
    x106211: "/img/---18@1x.png",
    d: "/img/d@2x.png",
    u: "/img/u@2x.png",
    tradeSecurely: "/img/trade-securely@1x.png",
    cryptocurrencies: "/img/cryptocurrencies-2@1x.png",
    headerProps: header7Data,
    frame2Props: frame22Data,
    textProps: textData,
    numbersProps: numbersData,
    frame6Props: frame6Data,
    calculateProps: calculate2Data,
    checkHowMuchYouCanEarnProps: checkHowMuchYouCanEarn2Data,
};

const frame23Data = {
    group: "/img/group-4@1x.png",
    group2: "/img/group-4@1x.png",
};

const button8Data = {
    children: "Learn More",
    className: "button-4",
};

const text3Data = {
    text4: "Why you should choose AntEagle",
    text3: "EXPERIENCE THE NEXT GENERATION CRYPTOCURRENCY PLATFORM. NO FINANCIAL BORDERS, EXTRA FEES, AND FAKE REVIEWS.",
    className: "text-104",
    buttonProps: button8Data,
};

const text24Data = {
    x30B: "$30B",
    text2: "Digital Currency Exchanged",
};

const text25Data = {
    x30B: "10M+",
    text2: "Trusted Wallets Investor",
    className: "text-109",
};

const text26Data = {
    x30B: "195",
    text2: "Countries Supported",
    className: "text-109",
};

const numbers2Data = {
    overlapGroup4: "/img/vector-3@2x.png",
    vector2: "/img/vector-5@2x.png",
    vector3: "/img/vector-6@2x.png",
    vector4: "/img/vector-1@2x.png",
    vector5: "/img/vector-2@2x.png",
    vector6: "/img/vector@2x.png",
    text2Props: text24Data,
    text2Props2: text25Data,
    text2Props3: text26Data,
};

const whyCRAPPOData = {
    x1712560: "/img/---20@1x.png",
    d: "/img/d@2x.png",
    u: "/img/u@2x.png",
    frame2Props: frame23Data,
    textProps: text3Data,
    numbersProps: numbers2Data,
};

const navMenu3Data = {
    text50: "Products",
    text52: "Features",
    text51: "About",
    place: "Contact",
    className: "nav-menu-2",
};

const top2Data = {
    text56: "AntEagle",
    text53: "Login",
    divider: "/img/divider@2x.png",
    text55: "Register",
    navMenuProps: navMenu3Data,
};

const arrowRight3Data = {
    src: "/img/vector-7@2x.png",
    className: "arrow-right-2",
};

const valueProposition2Data = {
    text51: "Welcome to AntNet.",
    heyContentCreatorsSocialMediaInflue: "/img/hey-content-creators--social-media-influencers--vloggers--and-al@2x.png",
    getStarted: "/img/get-started@2x.png",
    arrowRightProps: arrowRight3Data,
};

const illustration3Data = {
    vector2: "/img/vector-44@2x.png",
    vector3: "/img/vector-45@2x.png",
    vector4: "/img/vector-46@2x.png",
    vector5: "/img/vector-36@2x.png",
    vector6: "/img/vector-37@2x.png",
    vector7: "/img/vector-38@2x.png",
    vector8: "/img/vector-39@2x.png",
    vector9: "/img/vector-40@2x.png",
    vector10: "/img/vector-41@2x.png",
    vector11: "/img/vector-42@2x.png",
    vector12: "/img/vector@2x.png",
    vector13: "/img/vector-21@2x.png",
    vector14: "/img/vector-22@2x.png",
    vector15: "/img/vector-23@2x.png",
    vector16: "/img/vector-24@2x.png",
    vector17: "/img/vector-8@2x.png",
    vector18: "/img/vector-9@2x.png",
    vector19: "/img/vector-10@2x.png",
    vector20: "/img/vector-11@2x.png",
    vector21: "/img/vector-12@2x.png",
    vector22: "/img/vector-13@2x.png",
    vector23: "/img/vector-14@2x.png",
    vector24: "/img/vector-15@2x.png",
    vector25: "/img/vector-16@2x.png",
    vector26: "/img/vector-17@2x.png",
    vector27: "/img/vector-18@2x.png",
    vector28: "/img/vector-20@2x.png",
    vector29: "/img/vector-32@2x.png",
    vector30: "/img/vector-33@2x.png",
    vector31: "/img/vector-34@2x.png",
    group: "/img/vector-35@2x.png",
    vector32: "/img/vector-25@2x.png",
    vector33: "/img/vector-26@2x.png",
    vector34: "/img/vector-27@2x.png",
    vector35: "/img/vector-28@2x.png",
    vector36: "/img/vector-29@2x.png",
    vector37: "/img/vector-30@2x.png",
    vector38: "/img/vector-31@2x.png",
    className: "illustration-2",
};

const header2Data = {
    x1518: "/img/---9@1x.png",
    x1519: "/img/--@1x.png",
    componentLottieHttpsAssets8Lottiefi: "/img/-component-lottie-https---assets8-lottiefiles-com-packages-lf20-@1x.png",
    topProps: top2Data,
    valuePropositionProps: valueProposition2Data,
    illustrationProps: illustration3Data,
};

const frame4Data = {
    features: "Features",
    componentLottieHttpsAssets2Lottiefi: "/img/-component-lottie-https---assets2-lottiefiles-com-packages-lf20-@1x.png",
    text130: "AntEagle promises to expand the horizon of human endeavour and bring a lot of new features with advanced innovation and leading-edge technology",
};

const frame62Data = {
    componentLottieHttpsAssets3Lottiefi: "/img/-component-lottie-https---assets3-lottiefiles-com-packages-lf20-@1x.png",
    features: "Features",
    text1092: "AntEagle promises to expand the horizon of human endeavour and bring a lot of new features with advanced innovation and leading-edge technology",
    text1102: "Decentralised Finance",
    text1142: "A new way of providing a Decentralized Finance Solution that is scalable and sustainable making your experience up to the mark.",
    componentLottieHttpsAssets9Lottiefi: "/img/-component-lottie-https---assets9-lottiefiles-com-packages-lf20-@2x.png",
    componentLottieHttpsAssets2Lottiefi: "/img/-component-lottie-https---assets2-lottiefiles-com-private-files-@2x.png",
    text112: "Cryptocurrency Insurance",
    text1172: "Our crypto network has proposed a new way where you can invest your money and be worry-free from cybercrime and theft.",
    crossChainSupport: "Cross-Chain Support",
    text115: "AntEagle offers you a scalable and sustainable blockchain solution with Multiple blockchain support.",
    componentLottieHttpsAssets2Lottiefi2: "/img/-component-lottie-https---assets2-lottiefiles-com-packages-lf20--1@1x.png",
    componentLottieHttpsAssets7Lottiefi: "/img/-component-lottie-https---assets7-lottiefiles-com-packages-lf20-@2x.png",
    text113: "Post-Quantam Encryption",
    text118: "AntEagle will offer you an ultimate Encryption method integrated with our blockchain network which can never be affected by Quantum Computers.",
    text111: "Fast and Secure Network",
    text116: "We provide a secure and prominent system where you can complete transactions without any worry and enjoy profit with complete security.",
    componentLottieHttpsAssets5Lottiefi: "/img/-component-lottie-https---assets5-lottiefiles-com-private-files-@2x.png",
    componentLottieHttpsAssets5Lottiefi2: "/img/-component-lottie-https---assets5-lottiefiles-com-private-files--1@2x.png",
    helpSupport: "Help & Support",
    text119: "You will have a 24/7 support system for all your troubleshooting and queries so that you have a better and responsive user experience",
    className: "frame-5",
};

const calculate3Data = {
    enterHashRate: "/img/base-1@1x.png",
    text19: "Enter your hash rate",
    form: "/img/form@2x.png",
    thS: "TH/s",
    form2: "/img/form-1@2x.png",
    calculate: "Calculate",
    overlapGroup3: "/img/base@1x.png",
    text16: "ESTIMATED 24 HOUR REVENUE:",
    spanText: "0.055 130 59 ETH ",
    spanText2: "($1275)",
    text17: "Revenue will change based on mining difficulty and Ethereum price.",
};

const checkHowMuchYouCanEarn3Data = {
    text21: "Check how much you can earn",
    text20: "Let’s check your pool rate to see how much you will earn today.",
};

const mobileData = {
    x11289: "/img/--@1x.png",
    tradeSecurely: "/img/trade-securely@1x.png",
    cryptocurrencies: "/img/cryptocurrencies-2@1x.png",
    whyCRAPPOProps: whyCRAPPOData,
    header2Props: header2Data,
    frame4Props: frame4Data,
    frame6Props: frame62Data,
    calculateProps: calculate3Data,
    checkHowMuchYouCanEarnProps: checkHowMuchYouCanEarn3Data,
};

const button25Data = {
    children: "Know More",
    className: "button-17",
};

const button26Data = {
    children: "Know More",
    className: "button-18",
};

const button27Data = {
    children: "Know More",
    className: "button-19",
};

const button28Data = {
    children: "Know More",
    className: "button-20",
};

const group172Data = {
    logosBitcoin: "/img/vector-15@2x.png",
    className: "group-17-1",
};

const cardBounceRate2Data = {
    increaseInTrade: "Increase in Trade",
    text46: "+75%",
    sellOption: "Sell option",
};

const group1112Data = {
    vector8: "/img/vector-8-1@1x.png",
    vector7: "/img/vector-7-1@1x.png",
};

const button33Data = {
    children: "Start Trade",
};

const text322Data = {
    investSmart: "Invest Smart",
    text47: "Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.",
    className: "text-25",
    button3Props: button33Data,
};

const buttonRegister3Data = {
    children: "Buy",
};

const buttonRegister22Data = {
    children: "Sell",
};

const group1632Data = {
    className: "group-163-1",
    buttonRegisterProps: buttonRegister3Data,
    buttonRegister2Props: buttonRegister22Data,
};

const group1172Data = {
    price: "$6278.13",
    text42: "+2.74%",
    lastPrice: "Last price",
    className: "group-117-1",
};

const group1622Data = {
    x3825Btc: "38.25 BTC",
    volume24H: "Volume (24h)",
    className: "group-162-1",
};

const group1612Data = {
    usdBtc: "USD/BTC",
};

const group1413Data = {
    price: "$1500",
    price2: "$1450",
    price3: "$1400",
    price4: "$1350",
    className: "group-141-1",
};

const group1132Data = {
    price: "$8256.00",
    totalAmount: "Total amount",
    className: "group-113-1",
};

const group1152Data = {
    price: "$51234.31",
    high: "High",
    className: "group-115-1",
};

const group1163Data = {
    price: "$1531.80",
    low: "Low",
    className: "group-116-1",
};

const group11622Data = {
    spanText: "+7.3% ",
    spanText2: "(+$146)",
    trends: "Trends",
};

const group14912Data = {
    className: "group-137-1",
};

const group14913Data = {
    className: "group-1-2-1",
};

const group14914Data = {
    className: "group-135-1",
};

const group14915Data = {
    className: "group-129-1",
};

const group1397Data = {
    className: "group-133-1",
};

const group1398Data = {
    className: "group-151-1",
};

const group1399Data = {
    className: "group-128-1",
};

const group13910Data = {
    className: "group-127-1",
};

const group1262Data = {
    className: "group-126-1",
};

const group1347Data = {
    className: "group-152-1",
};

const group13010Data = {
    className: "group-153-1",
};

const group1348Data = {
    className: "group-154-1",
};

const group14916Data = {
    className: "group-122-1",
};

const group13011Data = {
    className: "group-118-1",
};

const group13012Data = {
    className: "group-119-1",
};

const group1349Data = {
    className: "group-121-1",
};

const group14917Data = {
    className: "group-141-3",
};

const group14918Data = {
    className: "group-1-2",
};

const group13013Data = {
    className: "group-142-1",
};

const group13014Data = {
    className: "group-143-1",
};

const group14919Data = {
    className: "group-145-1",
};

const group14920Data = {
    className: "group-144-1",
};

const group13015Data = {
    className: "group-146-1",
};

const group13016Data = {
    className: "group-147-1",
};

const group13410Data = {
    className: "group-148-1",
};

const group1572Data = {
    children: "$1569",
    className: "group-157-1",
};

const button34Data = {
    children: "Start Trade",
    className: "button-29",
};

const text422Data = {
    detailedStatistics: "Detailed Statistics",
    text44: "View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.",
    className: "text-37",
    button3Props: button34Data,
};

const bTC2Data = {
    overlapGroup6: "/img/vector-9@2x.png",
    btc: "BTC",
    bitcoin: "Bitcoin",
    className: "btc-4",
};

const group963Data = {
    src: "/img/vector-11@2x.png",
};

const group1002Data = {
    text38: "+7.3%",
    className: "group-100-1",
    group96Props: group963Data,
};

const lTC2Data = {
    overlapGroup6: "/img/shape@2x.png",
    ltc: "LTC",
    litecoin: "Litecoin",
};

const group964Data = {
    src: "/img/vector-12@2x.png",
};

const group1022Data = {
    text39: "+8.2%",
    className: "group-102-1",
    group96Props: group964Data,
};

const text522Data = {
    text41: "Grow your profit and track your investments",
    text40: "Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.",
    startTrade: "Start Trade",
    className: "text-47",
};

const enterYourEmail2Data = {
    enterYourEmail: "Enter your email",
    form: "/img/form@2x.png",
};

const button42Data = {
    children: "Subscribe",
};

const startMining2Data = {
    startMining: "/img/start-mining@1x.png",
    x172722: "/img/---2@1x.png",
    x172723: "/img/---3@1x.png",
    startMiningNow: "/img/mask-group@1x.png",
    text49: "Would You Like to start a Project With Us...",
    className: "start-mining-1",
    enterYourEmailProps: enterYourEmail2Data,
    button4Props: button42Data,
};

const dott122Data = {
    vector2: "/img/vector-24@2x.png",
};

const dott123Data = {
    vector2: "/img/vector-26@2x.png",
    className: "dott-8-1",
};

const dott22Data = {
    vector2: "/img/vector-12@2x.png",
    className: "dott-2-4",
};

const logosbitcoinData = {
    logosBitcoin: "/img/vector-5@2x.png",
};

const logosbitcoin2Data = {
    logosBitcoin: "/img/vector-5@2x.png",
};

const quickLink2Data = {
    services: "Services",
    address: <># Decentralised Finance<br /># CryptoCurrency Insurance<br /># Post- Quantum</>,
    className: "quick-link-1",
};

const button52Data = {
    children: "Click to Join",
    className: "button-35",
};

const facebookF1Data = {
    src: "/img/vector-30@2x.png",
};

const instagram1Data = {
    src: "/img/vector-31@2x.png",
};

const youtube1Data = {
    src: "/img/vector-32@2x.png",
};

const twitter1Data = {
    src: "/img/vector-33@2x.png",
};

const linkedin1Data = {
    src: "/img/vector-34@2x.png",
};

const desktop2Data = {
    calculate: "/img/calculate-1@1x.png",
    componentLottieHttpsAssets1Lottiefi: "/img/-component-lottie-https---assets1-lottiefiles-com-packages-lf20-@2x.png",
    roadMap: "Road-Map",
    upcomingEvents: "Upcoming Events",
    rectangle106: "/img/rectangle-106@1x.png",
    componentLottieHttpsAssets3Lottiefi: "/img/-component-lottie-https---assets3-lottiefiles-com-packages-lf20-@2x.png",
    text1692: "Initial Coin Offering (ICO)",
    text175: "Starting From 19th July to 25th of July, Our company will start it's IDO. All the interested crypto enthusiasts should not miss the one in a life time offer.",
    rectangle105: "/img/rectangle-105@1x.png",
    componentLottieHttpsAssets3Lottiefi2: "/img/-component-lottie-https---assets3-lottiefiles-com-packages-lf20--1@2x.png",
    airDrop: "Air Drop",
    text174: "Don't lose the opportunity to experience the largest Air drop Event in the Cryptocurrency market. The Event will take place during 25th to 30th July.",
    rectangle104: "/img/rectangle-104@1x.png",
    componentLottieHttpsAssets3Lottiefi3: "/img/-component-lottie-https---assets3-lottiefiles-com-packages-lf20--2@2x.png",
    text1702: "Initial Dex Offering (IDO)",
    text173: "Starting From 19th July to 25th of July, Our company will start it's IDO. All the interested crypto enthusiasts should not miss the one in a life time offer.",
    rectangle107: "/img/rectangle-107@1x.png",
    componentLottieHttpsAssets3Lottiefi4: "/img/-component-lottie-https---assets3-lottiefiles-com-packages-lf20--3@2x.png",
    text171: "Initial Exchange Offering (IEO)",
    text172: "Now we're Going on Cross platform and you can buy, trade and exchange our coins on the leading Crypto Exchange markets like Binance, CoinSwitch and MetaMask etc.",
    o: "/img/o@1x.png",
    exchange: "Exchange",
    text159: "Now you can trade and exchange your cryptocurrencies like Bitcoin,AntEagle Ethereum, Ripple, etc on our platform. Start investing and do your Happy trading with us.",
    bitcoin: "Bitcoin",
    btc: "BTC",
    text156: "+125%",
    x000080Btc: "0.00080 BTC",
    cardVisitsPerDay: "/img/card-visits-per-day@2x.png",
    rectangle81: "/img/rectangle-81@1x.png",
    group6: "/img/group-6@1x.png",
    name: "May",
    jun: "Jun",
    jul: "Jul",
    aug: "Aug",
    sep: "Sep",
    oct: "Oct",
    nov: "Nov",
    dec: "Dec",
    rectangle77: "/img/rectangle-77@1x.png",
    andriyLenin: "Andriy Lenin",
    verified: "VERIFIED",
    ellipse48: "/img/ellipse-48@2x.png",
    line7: "/img/line-7@1x.png",
    price: "$1600",
    base: "/img/base@1x.png",
    o2: "/img/o@1x.png",
    surname: "Price",
    place: "Change",
    volume24H: "Volume (24h)",
    price2: "$6750",
    price3: "$3420214",
    eth: "/img/eth@1x.png",
    price4: "$8535",
    price5: "$5820399",
    vector2: "/img/vector-19@2x.png",
    vector3: "/img/vector-20@2x.png",
    vector4: "/img/vector-21@2x.png",
    vector5: "/img/vector-22@2x.png",
    polygon1: "/img/polygon-1@2x.png",
    vector6: "/img/vector-27@2x.png",
    vector7: "/img/vector-28@2x.png",
    vector8: "/img/vector-31@2x.png",
    vector9: "/img/vector-32@2x.png",
    vector10: "/img/vector@2x.png",
    vector11: "/img/vector@2x.png",
    today: "Today",
    vector12: "/img/vector-35@2x.png",
    vector13: "/img/vector-36@2x.png",
    vector14: "/img/vector@2x.png",
    vector15: "/img/vector@2x.png",
    spanText: <><br /><br />    Blockchain TestNet:<br /><br /></>,
    spanText2: <>May 2019<br /></>,
    spanText3: <><br /><br />Testing the blockchain Testnet to get Started with blockchain-based Solutions</>,
    spanText4: <><br /><br />Video rendering Testing<br /><br /></>,
    spanText5: <>JULY 2019<br /></>,
    spanText6: <><br /><br />Started Testing of Video Rendering Service and how to make it Decentralized</>,
    spanText7: <><br /><br /> Decentralized Finance <br /><br /></>,
    spanText8: <>Feb 2021<br /></>,
    spanText9: <><br /><br />Started Working on providing Decentralized Finance Service taking a step further in decentralized innovations</>,
    spanText10: <><br /><br />CryptoCurrency Insurance<br /><br /></>,
    spanText11: <>Dec 2019<br /></>,
    spanText12: <><br /><br />Started Creating Solutions for Traders with Insurance of CryptoCurrency</>,
    spanText13: <><br /><br />Layered 2 Protocol Based Testing<br /><br /></>,
    spanText14: <>July 2021<br /></>,
    spanText15: <><br /><br />We Created our own Blockchain Network with some of the most Salient Features like Layered 2 Protocol</>,
    spanText16: <><br /><br />EagleNet Token<br /><br /></>,
    spanText17: <>June 2021<br /></>,
    spanText18: <><br /><br /> Creating and Lauching EagleToken and ANTEAGLE cryptocurrency and making a exchange platform.</>,
    spanText19: <><br /><br />BlockChain Network<br /><br /></>,
    spanText20: <>Dec 2021<br /></>,
    spanText21: <><br /><br />Deploying and Launching our BlockChain Network which provides several needful solutions</>,
    spanText22: <><br /><br />Video Rendering <br /><br /></>,
    spanText23: <>Aug 2021<br /></>,
    spanText24: <><br /><br /> Deploying and Launching Video Rendering Service along with our blockchain Network</>,
    ourInvestors: "Our Investors",
    galvatronCapital: "Galvatron Capital",
    joinOurCommunity: "Join Our Community",
    cryptoUnitedFund: "Crypto United Fund",
    text148: "We are one of the fastest growing company with a community of thousands of elite, masters and techies believing in our vision and mission. Come join us and be a part of the change.",
    button2Props: button25Data,
    button22Props: button26Data,
    button23Props: button27Data,
    button24Props: button28Data,
    group17Props: group172Data,
    cardBounceRateProps: cardBounceRate2Data,
    group111Props: group1112Data,
    text3Props: text322Data,
    group163Props: group1632Data,
    group117Props: group1172Data,
    group162Props: group1622Data,
    group161Props: group1612Data,
    group141Props: group1413Data,
    group113Props: group1132Data,
    group115Props: group1152Data,
    group116Props: group1163Data,
    group1162Props: group11622Data,
    group149Props: group14912Data,
    group1492Props: group14913Data,
    group1493Props: group14914Data,
    group1494Props: group14915Data,
    group139Props: group1397Data,
    group1392Props: group1398Data,
    group1393Props: group1399Data,
    group1394Props: group13910Data,
    group126Props: group1262Data,
    group134Props: group1347Data,
    group130Props: group13010Data,
    group1342Props: group1348Data,
    group1495Props: group14916Data,
    group1302Props: group13011Data,
    group1303Props: group13012Data,
    group1343Props: group1349Data,
    group1496Props: group14917Data,
    group1497Props: group14918Data,
    group1304Props: group13013Data,
    group1305Props: group13014Data,
    group1498Props: group14919Data,
    group1499Props: group14920Data,
    group1306Props: group13015Data,
    group1307Props: group13016Data,
    group1344Props: group13410Data,
    group157Props: group1572Data,
    text4Props: text422Data,
    bTCProps: bTC2Data,
    group100Props: group1002Data,
    lTCProps: lTC2Data,
    group102Props: group1022Data,
    text5Props: text522Data,
    startMiningProps: startMining2Data,
    dott12Props: dott122Data,
    dott122Props: dott123Data,
    dott2Props: dott22Data,
    logosbitcoinProps: logosbitcoinData,
    logosbitcoinProps2: logosbitcoin2Data,
    quickLinkProps: quickLink2Data,
    button5Props: button52Data,
    facebookF1Props: facebookF1Data,
    instagram1Props: instagram1Data,
    youtube1Props: youtube1Data,
    twitter1Props: twitter1Data,
    linkedin1Props: linkedin1Data,
};

const button29Data = {
    children: "Know More",
    className: "button-21",
};

const button210Data = {
    children: "Know More",
    className: "button-22",
};

const button211Data = {
    children: "Know More",
    className: "button-23",
};

const button212Data = {
    children: "Know More",
    className: "button-24",
};

const dott13Data = {
    vector2: "/img/vector-6@2x.png",
};

const dott132Data = {
    vector2: "/img/vector-6@2x.png",
    className: "dott-8-2",
};

const dott23Data = {
    vector2: "/img/vector-12@2x.png",
    className: "dott-2-5",
};

const dott4Data = {
    vector2: "/img/vector-14@2x.png",
    vector3: "/img/vector@2x.png",
    vector4: "/img/vector@2x.png",
};

const dott42Data = {
    vector2: "/img/vector-14@2x.png",
    vector3: "/img/vector@2x.png",
    vector4: "/img/vector@2x.png",
    className: "dott-7-2",
};

const button35Data = {
    children: "Start Trade",
    className: "button-25",
};

const logosbitcoin3Data = {
    logosBitcoin: "/img/vector-28@2x.png",
    className: "logosbitcoin-7",
};

const buttonRegister4Data = {
    children: "Buy",
};

const buttonRegister23Data = {
    children: "Sell",
    className: "button-register-5",
};

const group1332Data = {
    className: "group-151-3",
};

const group13523Data = {
    className: "group-129-3",
};

const group13923Data = {
    className: "group-128-3",
};

const group13924Data = {
    className: "group-127-3",
};

const group1372Data = {
    className: "group-122-3",
};

const group13423Data = {
    className: "group-154-3",
};

const group13023Data = {
    className: "group-118-3",
};

const group13024Data = {
    className: "group-119-3",
};

const group1362Data = {
    className: "group-141-7",
};

const group1373Data = {
    className: "group-140-5",
};

const group1532Data = {
    className: "group-142-3",
};

const group14923Data = {
    className: "group-145-3",
};

const group14924Data = {
    className: "group-144-3",
};

const group13025Data = {
    className: "group-146-3",
};

const group13424Data = {
    className: "group-148-3",
};

const button36Data = {
    children: "Start Trade",
    className: "button-30",
};

const button37Data = {
    children: "Start Trade",
    className: "button-25",
};

const enterYourEmail3Data = {
    enterYourEmail: "Enter your email",
    form: "/img/form@2x.png",
};

const button43Data = {
    children: "Subscribe",
    className: "button-34",
};

const logosbitcoin4Data = {
    logosBitcoin: "/img/vector-36@2x.png",
    className: "logosbitcoin-8",
};

const logosbitcoin5Data = {
    logosBitcoin: "/img/vector-35@2x.png",
    className: "logosbitcoin-9",
};

const quickLink3Data = {
    services: "Services",
    address: <># Decentralised Finance<br /># CryptoCurrency Insurance<br /># Post- Quantum</>,
    className: "quick-link-2",
};

const button53Data = {
    children: "Click to Join",
    className: "button-36",
};

const facebookF12Data = {
    src: "/img/vector-30@2x.png",
};

const instagram12Data = {
    src: "/img/vector-31@2x.png",
};

const youtube12Data = {
    src: "/img/vector-32@2x.png",
    className: "youtube-1-1",
};

const twitter12Data = {
    src: "/img/vector-33@2x.png",
};

const linkedin12Data = {
    src: "/img/vector-34@2x.png",
};

const dashboardData = {
    upcomingEvents: "Upcoming Events",
    rectangle106: "/img/rectangle-106@1x.png",
    componentLottieHttpsAssets3Lottiefi: "/img/-component-lottie-https---assets3-lottiefiles-com-packages-lf20-@2x.png",
    text1762: "Initial Coin Offering (ICO)",
    text182: "Starting From 19th July to 25th of July, Our company will start it's IDO. All the interested crypto enthusiasts should not miss the one in a life time offer.",
    rectangle105: "/img/rectangle-105@1x.png",
    componentLottieHttpsAssets3Lottiefi2: "/img/-component-lottie-https---assets3-lottiefiles-com-packages-lf20-@2x.png",
    airDrop: "Air Drop",
    text181: "Don't lose the opportunity to experience the largest Air drop Event in the Cryptocurrency market. The Event will take place during 25th to 30th July.",
    rectangle104: "/img/rectangle-104@1x.png",
    componentLottieHttpsAssets3Lottiefi3: "/img/-component-lottie-https---assets3-lottiefiles-com-packages-lf20-@2x.png",
    text1772: "Initial Dex Offering (IDO)",
    text180: "Starting From 19th July to 25th of July, Our company will start it's IDO. All the interested crypto enthusiasts should not miss the one in a life time offer.",
    rectangle107: "/img/rectangle-107@1x.png",
    componentLottieHttpsAssets3Lottiefi4: "/img/-component-lottie-https---assets3-lottiefiles-com-packages-lf20-@2x.png",
    text178: "Initial Exchange Offering (IEO)",
    text179: "Now we're Going on Cross platform and you can buy, trade and exchange our coins on the leading Crypto Exchange markets like Binance, CoinSwitch and MetaMask etc.",
    calculate: "/img/calculate@1x.png",
    componentLottieHttpsAssets1Lottiefi: "/img/-component-lottie-https---assets1-lottiefiles-com-packages-lf20-@2x.png",
    roadMap: "Road-Map",
    vector2: "/img/vector-1@2x.png",
    vector3: "/img/vector-2@2x.png",
    vector4: "/img/vector-3@2x.png",
    vector5: "/img/vector-4@2x.png",
    vector6: "/img/vector-9@2x.png",
    vector7: "/img/vector-10@2x.png",
    today: "Today",
    spanText: <><br /><br />    Blockchain TestNet:<br /><br /></>,
    spanText2: <>May 2019<br /></>,
    spanText3: <><br /><br />Testing the blockchain Testnet to get Started with blockchain-based Solutions</>,
    spanText4: <><br /><br />Video rendering Testing<br /><br /></>,
    spanText5: <>JULY 2019<br /></>,
    spanText6: <><br /><br />Started Testing of Video Rendering Service and how to make it Decentralized</>,
    spanText7: <><br /><br /> Decentralized Finance <br /><br /></>,
    spanText8: <>Feb 2021<br /></>,
    spanText9: <><br /><br />Started Working on providing Decentralized Finance Service taking a step further in decentralized innovations</>,
    spanText10: <><br /><br />CryptoCurrency Insurance<br /><br /></>,
    spanText11: <>Dec 2019<br /></>,
    spanText12: <><br /><br />Started Creating Solutions for Traders with Insurance of CryptoCurrency</>,
    spanText13: <><br /><br />Layered 2 Protocol Based Testing<br /><br /></>,
    spanText14: <>July 2021<br /></>,
    spanText15: <><br /><br />We Created our own Blockchain Network with some of the most Salient Features like Layered 2 Protocol</>,
    spanText16: <><br /><br />EagleNet Token<br /><br /></>,
    spanText17: <>June 2021<br /></>,
    spanText18: <><br /><br /> Creating and Lauching EagleToken and ANTEAGLE cryptocurrency and making a exchange platform.</>,
    spanText19: <><br /><br />BlockChain Network<br /><br /></>,
    spanText20: <>Dec 2021<br /></>,
    spanText21: <><br /><br />Deploying and Launching our BlockChain Network which provides several needful solutions</>,
    spanText22: <><br /><br />Video Rendering <br /><br /></>,
    spanText23: <>Aug 2021<br /></>,
    spanText24: <><br /><br /> Deploying and Launching Video Rendering Service along with our blockchain Network</>,
    polygon1: "/img/polygon-1@2x.png",
    o: "/img/o@1x.png",
    exchange: "Exchange",
    text2012: "Now you can trade and exchange your cryptocurrencies like Bitcoin,AntEagle Ethereum, Ripple, etc on our platform. Start investing and do your Happy trading with us.",
    investSmart: "Invest Smart",
    text2002: "Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.",
    bitcoin: "Bitcoin",
    btc: "BTC",
    text198: "+125%",
    x000080Btc: "0.00080 BTC",
    increaseInTrade: "Increase in Trade",
    text199: "+75%",
    vector8: "/img/vector-29@2x.png",
    sellOption: "Sell option",
    cardVisitsPerDay: "/img/card-visits-per-day@2x.png",
    group111: "/img/vector-8-1@1x.png",
    vector72: "/img/vector-7-1@1x.png",
    rectangle81: "/img/rectangle-81@1x.png",
    price: "$6278.13",
    lastPrice: "Last price",
    text1952: "+2.74%",
    x3825Btc: "38.25 BTC",
    volume24H: "Volume (24h)",
    usdBtc: "USD/BTC",
    vector9: "/img/vector-25@2x.png",
    group6: "/img/group-6@1x.png",
    name: "May",
    jun: "Jun",
    jul: "Jul",
    aug: "Aug",
    sep: "Sep",
    oct: "Oct",
    nov: "Nov",
    dec: "Dec",
    overlapGroup3: "/img/rectangle-77@1x.png",
    vector10: "/img/vector-26@2x.png",
    spanText25: "+7.3% ",
    spanText26: "(+$146)",
    trends: "Trends",
    price2: "$8256.00",
    totalAmount: "Total amount",
    price3: "$51234.31",
    high: "High",
    price4: "$1531.80",
    low: "Low",
    ellipse48: "/img/ellipse-48@2x.png",
    andriyLenin: "Andriy Lenin",
    verified: "VERIFIED",
    line7: "/img/line-7@1x.png",
    price5: "$1500",
    price6: "$1450",
    price7: "$1400",
    price8: "$1350",
    price9: "$1569",
    price10: "$1600",
    base: "/img/base@1x.png",
    detailedStatistics: "Detailed Statistics",
    text197: "View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.",
    o2: "/img/o@1x.png",
    text194: "Grow your profit and track your investments",
    text193: "Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.",
    surname: "Price",
    place: "Change",
    volume24H2: "Volume (24h)",
    logosBitcoin: "/img/vector-21@2x.png",
    vector11: "/img/vector-22@2x.png",
    btc2: "BTC",
    bitcoin2: "Bitcoin",
    price11: "$6750",
    vector12: "/img/vector-23@2x.png",
    text191: "+7.3%",
    price12: "$3420214",
    eth: "/img/eth@1x.png",
    overlapGroup2: "/img/shape@2x.png",
    ltc: "LTC",
    litecoin: "Litecoin",
    price13: "$8535",
    vector13: "/img/vector-24@2x.png",
    text192: "+8.2%",
    price14: "$5820399",
    startMining: "/img/start-mining@1x.png",
    x1446: "/img/---2@1x.png",
    x1447: "/img/---3@1x.png",
    startMiningNow: "/img/mask-group@1x.png",
    text202: "Would You Like to start a Project With Us...",
    ourInvestors: "Our Investors",
    galvatronCapital: "Galvatron Capital",
    cryptoUnitedFund: "Crypto United Fund",
    joinOurCommunity: "Join Our Community",
    text203: "We are one of the fastest growing company with a community of thousands of elite, masters and techies believing in our vision and mission. Come join us and be a part of the change.",
    button2Props: button29Data,
    button22Props: button210Data,
    button23Props: button211Data,
    button24Props: button212Data,
    dott13Props: dott13Data,
    dott132Props: dott132Data,
    dott2Props: dott23Data,
    dott4Props: dott4Data,
    dott42Props: dott42Data,
    button3Props: button35Data,
    logosbitcoinProps: logosbitcoin3Data,
    buttonRegisterProps: buttonRegister4Data,
    buttonRegister2Props: buttonRegister23Data,
    group133Props: group1332Data,
    group1352Props: group13523Data,
    group1392Props: group13923Data,
    group13922Props: group13924Data,
    group137Props: group1372Data,
    group1342Props: group13423Data,
    group1302Props: group13023Data,
    group13022Props: group13024Data,
    group136Props: group1362Data,
    group1372Props: group1373Data,
    group153Props: group1532Data,
    group1492Props: group14923Data,
    group14922Props: group14924Data,
    group13023Props: group13025Data,
    group13422Props: group13424Data,
    button32Props: button36Data,
    button33Props: button37Data,
    enterYourEmailProps: enterYourEmail3Data,
    button4Props: button43Data,
    logosbitcoin2Props: logosbitcoin4Data,
    logosbitcoin3Props: logosbitcoin5Data,
    quickLinkProps: quickLink3Data,
    button5Props: button53Data,
    facebookF1Props: facebookF12Data,
    instagram1Props: instagram12Data,
    youtube1Props: youtube12Data,
    twitter1Props: twitter12Data,
    linkedin1Props: linkedin12Data,
};

const navMenu4Data = {
    text50: "Products",
    text52: "Features",
    text51: "About",
    place: "Contact",
    className: "nav-menu-3",
};

const top3Data = {
    text56: "AntEagle",
    text53: "Login",
    divider: "/img/divider@2x.png",
    text55: "Register",
    navMenuProps: navMenu4Data,
};

const valueProposition22Data = {
    text204: "Welcome to AntNet.",
    heyContentCreatorsSocialMediaInflue: "/img/hey-content-creators--social-media-influencers--vloggers--and-al@2x.png",
    getStarted: "/img/get-started@2x.png",
    evaChevronRightOutline: "/img/eva-chevron-right-outline@2x.png",
};

const illustration22Data = {
    i10631550: "/img/---4@2x.png",
    i10631564: "/img/---4@2x.png",
    i10631536: "/img/---4@2x.png",
};

const header3Data = {
    i10631518: "/img/---9@1x.png",
    i10631519: "/img/--@1x.png",
    topProps: top3Data,
    valueProposition2Props: valueProposition22Data,
    illustration2Props: illustration22Data,
};

const button9Data = {
    children: "Learn More",
    className: "button-5",
};

const text4Data = {
    text4: "Why you should choose AntEagle",
    text3: "EXPERIENCE THE NEXT GENERATION CRYPTOCURRENCY PLATFORM. NO FINANCIAL BORDERS, EXTRA FEES, AND FAKE REVIEWS.",
    buttonProps: button9Data,
};

const text27Data = {
    x30B: "$30B",
    text2: "Digital Currency Exchanged",
};

const x30B2Data = {
    iconBarChart: "/img/icon---bar-chart@2x.png",
    text2Props: text27Data,
};

const text28Data = {
    x30B: "10M+",
    text2: "Trusted Wallets Investor",
    className: "text-109",
};

const iconData = {
    src: "/img/icon---earth@2x.png",
};

const text29Data = {
    x30B: "195",
    text2: "Countries Supported",
    className: "text-109",
};

const numbers22Data = {
    iconPerson: "/img/icon---person@2x.png",
    x30B2Props: x30B2Data,
    text2Props: text28Data,
    iconProps: iconData,
    text2Props2: text29Data,
};

const frame63Data = {
    componentLottieHttpsAssets3Lottiefi: "/img/-component-lottie-https---assets3-lottiefiles-com-packages-lf20-@1x.png",
    features: "Features",
    text1092: "AntEagle promises to expand the horizon of human endeavour and bring a lot of new features with advanced innovation and leading-edge technology",
    text1102: "Decentralised Finance",
    text1142: "A new way of providing a Decentralized Finance Solution that is scalable and sustainable making your experience up to the mark.",
    componentLottieHttpsAssets9Lottiefi: "/img/-component-lottie-https---assets9-lottiefiles-com-packages-lf20-@2x.png",
    componentLottieHttpsAssets2Lottiefi: "/img/-component-lottie-https---assets2-lottiefiles-com-private-files-@2x.png",
    text112: "Cryptocurrency Insurance",
    text1172: "Our crypto network has proposed a new way where you can invest your money and be worry-free from cybercrime and theft.",
    crossChainSupport: "Cross-Chain Support",
    text115: "AntEagle offers you a scalable and sustainable blockchain solution with Multiple blockchain support.",
    componentLottieHttpsAssets2Lottiefi2: "/img/-component-lottie-https---assets2-lottiefiles-com-packages-lf20--1@1x.png",
    componentLottieHttpsAssets7Lottiefi: "/img/-component-lottie-https---assets7-lottiefiles-com-packages-lf20-@2x.png",
    text113: "Post-Quantam Encryption",
    text118: "AntEagle will offer you an ultimate Encryption method integrated with our blockchain network which can never be affected by Quantum Computers.",
    text111: "Fast and Secure Network",
    text116: "We provide a secure and prominent system where you can complete transactions without any worry and enjoy profit with complete security.",
    componentLottieHttpsAssets5Lottiefi: "/img/-component-lottie-https---assets5-lottiefiles-com-private-files-@2x.png",
    componentLottieHttpsAssets5Lottiefi2: "/img/-component-lottie-https---assets5-lottiefiles-com-private-files--1@2x.png",
    helpSupport: "Help & Support",
    text119: "You will have a 24/7 support system for all your troubleshooting and queries so that you have a better and responsive user experience",
};

const checkHowMuchYouCanEarn4Data = {
    text21: "Check how much you can earn",
    text20: "Let’s check your pool rate to see how much you will earn today.",
};

const tradeSecurelyData = {
    tradeSecurely: "/img/trade-securely@1x.png",
    cryptocurrencies: "/img/cryptocurrencies-2@1x.png",
    calculate: "/img/calculate@1x.png",
    checkHowMuchYouCanEarnProps: checkHowMuchYouCanEarn4Data,
};

const desktop12Data = {
    x106211: "/img/---18@1x.png",
    d: "/img/d@2x.png",
    u: "/img/u@2x.png",
    frame2: "/img/frame-2-2@1x.png",
    header3Props: header3Data,
    textProps: text4Data,
    numbers2Props: numbers22Data,
    frame6Props: frame63Data,
    tradeSecurelyProps: tradeSecurelyData,
};

const button10Data = {
    children: "Learn More",
    className: "button-6",
};

const text5Data = {
    text4: "Why you should choose AntEagle",
    text3: "EXPERIENCE THE NEXT GENERATION CRYPTOCURRENCY PLATFORM. NO FINANCIAL BORDERS, EXTRA FEES, AND FAKE REVIEWS.",
    className: "text-108",
    buttonProps: button10Data,
};

const text210Data = {
    x30B: "$30B",
    text2: "Digital Currency Exchanged",
};

const x30B22Data = {
    iconBarChart: "/img/icon---bar-chart@2x.png",
    text2Props: text210Data,
};

const text211Data = {
    x30B: "10M+",
    text2: "Trusted Wallets Investor",
    className: "text-109",
};

const icon2Data = {
    src: "/img/icon---earth@2x.png",
};

const text212Data = {
    x30B: "195",
    text2: "Countries Supported",
    className: "text-109",
};

const numbers23Data = {
    iconPerson: "/img/icon---person@2x.png",
    x30B2Props: x30B22Data,
    text2Props: text211Data,
    iconProps: icon2Data,
    text2Props2: text212Data,
};

const navMenu5Data = {
    text50: "Products",
    text52: "Features",
    text51: "About",
    place: "Contact",
    className: "nav-menu-4",
};

const top4Data = {
    text56: "AntEagle",
    text53: "Login",
    divider: "/img/divider@2x.png",
    text55: "Register",
    navMenuProps: navMenu5Data,
};

const valueProposition23Data = {
    text204: "Welcome to AntNet.",
    heyContentCreatorsSocialMediaInflue: "/img/hey-content-creators--social-media-influencers--vloggers--and-al@2x.png",
    getStarted: "/img/get-started@2x.png",
    evaChevronRightOutline: "/img/eva-chevron-right-outline@2x.png",
};

const illustration23Data = {
    i10631550: "/img/---4@2x.png",
    i10631564: "/img/---6@2x.png",
    i10631536: "/img/---4@2x.png",
};

const header4Data = {
    x1518: "/img/---9@1x.png",
    x1519: "/img/--@1x.png",
    componentLottieHttpsAssets8Lottiefi: "/img/-component-lottie-https---assets8-lottiefiles-com-packages-lf20-@1x.png",
    topProps: top4Data,
    valueProposition2Props: valueProposition23Data,
    illustration2Props: illustration23Data,
};

const frame42Data = {
    features: "Features",
    componentLottieHttpsAssets2Lottiefi: "/img/-component-lottie-https---assets2-lottiefiles-com-packages-lf20-@1x.png",
    text130: "AntEagle promises to expand the horizon of human endeavour and bring a lot of new features with advanced innovation and leading-edge technology",
};

const frame64Data = {
    componentLottieHttpsAssets3Lottiefi: "/img/-component-lottie-https---assets3-lottiefiles-com-packages-lf20-@1x.png",
    features: "Features",
    text1092: "AntEagle promises to expand the horizon of human endeavour and bring a lot of new features with advanced innovation and leading-edge technology",
    text1102: "Decentralised Finance",
    text1142: "A new way of providing a Decentralized Finance Solution that is scalable and sustainable making your experience up to the mark.",
    componentLottieHttpsAssets9Lottiefi: "/img/-component-lottie-https---assets9-lottiefiles-com-packages-lf20-@2x.png",
    componentLottieHttpsAssets2Lottiefi: "/img/-component-lottie-https---assets2-lottiefiles-com-private-files-@2x.png",
    text112: "Cryptocurrency Insurance",
    text1172: "Our crypto network has proposed a new way where you can invest your money and be worry-free from cybercrime and theft.",
    crossChainSupport: "Cross-Chain Support",
    text115: "AntEagle offers you a scalable and sustainable blockchain solution with Multiple blockchain support.",
    componentLottieHttpsAssets2Lottiefi2: "/img/-component-lottie-https---assets2-lottiefiles-com-packages-lf20--1@1x.png",
    componentLottieHttpsAssets7Lottiefi: "/img/-component-lottie-https---assets7-lottiefiles-com-packages-lf20-@2x.png",
    text113: "Post-Quantam Encryption",
    text118: "AntEagle will offer you an ultimate Encryption method integrated with our blockchain network which can never be affected by Quantum Computers.",
    text111: "Fast and Secure Network",
    text116: "We provide a secure and prominent system where you can complete transactions without any worry and enjoy profit with complete security.",
    componentLottieHttpsAssets5Lottiefi: "/img/-component-lottie-https---assets5-lottiefiles-com-private-files-@2x.png",
    componentLottieHttpsAssets5Lottiefi2: "/img/-component-lottie-https---assets5-lottiefiles-com-private-files--1@2x.png",
    helpSupport: "Help & Support",
    text119: "You will have a 24/7 support system for all your troubleshooting and queries so that you have a better and responsive user experience",
    className: "frame-5-1",
};

const checkHowMuchYouCanEarn5Data = {
    text21: "Check how much you can earn",
    text20: "Let’s check your pool rate to see how much you will earn today.",
};

const tradeSecurely2Data = {
    tradeSecurely: "/img/trade-securely@1x.png",
    cryptocurrencies: "/img/cryptocurrencies-2@1x.png",
    calculate: "/img/calculate@1x.png",
    className: "trade-securely-4",
    checkHowMuchYouCanEarnProps: checkHowMuchYouCanEarn5Data,
};

const mobile2Data = {
    x1743: "/img/---20@1x.png",
    d: "/img/d@2x.png",
    u: "/img/u@2x.png",
    frame2: "/img/frame-2-3@1x.png",
    x11289: "/img/--@1x.png",
    textProps: text5Data,
    numbers2Props: numbers23Data,
    header4Props: header4Data,
    frame4Props: frame42Data,
    frame6Props: frame64Data,
    tradeSecurelyProps: tradeSecurely2Data,
};

const navMenu6Data = {
    text50: "Products",
    text52: "Features",
    text51: "About",
    place: "Contact",
    className: "nav-menu-5",
};

const top5Data = {
    text56: "AntEagle",
    text53: "Login",
    divider: "/img/divider@2x.png",
    text55: "Register",
    navMenuProps: navMenu6Data,
};

const valueProposition24Data = {
    text204: "Welcome to AntNet.",
    heyContentCreatorsSocialMediaInflue: "/img/hey-content-creators--social-media-influencers--vloggers--and-al@2x.png",
    getStarted: "/img/get-started@2x.png",
    evaChevronRightOutline: "/img/eva-chevron-right-outline@2x.png",
};

const illustration24Data = {
    i10631550: "/img/---4@2x.png",
    i10631564: "/img/---4@2x.png",
    i10631536: "/img/---4@2x.png",
};

const header32Data = {
    i10631518: "/img/---9@1x.png",
    i10631519: "/img/--@1x.png",
    topProps: top5Data,
    valueProposition2Props: valueProposition24Data,
    illustration2Props: illustration24Data,
};

const button11Data = {
    children: "Learn More",
    className: "button-7",
};

const text6Data = {
    text4: "Why you should choose AntEagle",
    text3: "EXPERIENCE THE NEXT GENERATION CRYPTOCURRENCY PLATFORM. NO FINANCIAL BORDERS, EXTRA FEES, AND FAKE REVIEWS.",
    buttonProps: button11Data,
};

const text213Data = {
    x30B: "$30B",
    text2: "Digital Currency Exchanged",
};

const x30B23Data = {
    iconBarChart: "/img/icon---bar-chart@2x.png",
    text2Props: text213Data,
};

const text214Data = {
    x30B: "10M+",
    text2: "Trusted Wallets Investor",
    className: "text-109",
};

const icon3Data = {
    src: "/img/icon---earth@2x.png",
};

const text215Data = {
    x30B: "195",
    text2: "Countries Supported",
    className: "text-109",
};

const numbers24Data = {
    iconPerson: "/img/icon---person@2x.png",
    x30B2Props: x30B23Data,
    text2Props: text214Data,
    iconProps: icon3Data,
    text2Props2: text215Data,
};

const frame65Data = {
    componentLottieHttpsAssets3Lottiefi: "/img/-component-lottie-https---assets3-lottiefiles-com-packages-lf20-@1x.png",
    features: "Features",
    text1092: "AntEagle promises to expand the horizon of human endeavour and bring a lot of new features with advanced innovation and leading-edge technology",
    text1102: "Decentralised Finance",
    text1142: "A new way of providing a Decentralized Finance Solution that is scalable and sustainable making your experience up to the mark.",
    componentLottieHttpsAssets9Lottiefi: "/img/-component-lottie-https---assets9-lottiefiles-com-packages-lf20-@2x.png",
    componentLottieHttpsAssets2Lottiefi: "/img/-component-lottie-https---assets2-lottiefiles-com-private-files-@2x.png",
    text112: "Cryptocurrency Insurance",
    text1172: "Our crypto network has proposed a new way where you can invest your money and be worry-free from cybercrime and theft.",
    crossChainSupport: "Cross-Chain Support",
    text115: "AntEagle offers you a scalable and sustainable blockchain solution with Multiple blockchain support.",
    componentLottieHttpsAssets2Lottiefi2: "/img/-component-lottie-https---assets2-lottiefiles-com-packages-lf20--1@1x.png",
    componentLottieHttpsAssets7Lottiefi: "/img/-component-lottie-https---assets7-lottiefiles-com-packages-lf20-@2x.png",
    text113: "Post-Quantam Encryption",
    text118: "AntEagle will offer you an ultimate Encryption method integrated with our blockchain network which can never be affected by Quantum Computers.",
    text111: "Fast and Secure Network",
    text116: "We provide a secure and prominent system where you can complete transactions without any worry and enjoy profit with complete security.",
    componentLottieHttpsAssets5Lottiefi: "/img/-component-lottie-https---assets5-lottiefiles-com-private-files-@2x.png",
    componentLottieHttpsAssets5Lottiefi2: "/img/-component-lottie-https---assets5-lottiefiles-com-private-files--1@2x.png",
    helpSupport: "Help & Support",
    text119: "You will have a 24/7 support system for all your troubleshooting and queries so that you have a better and responsive user experience",
};

const checkHowMuchYouCanEarn6Data = {
    text21: "Check how much you can earn",
    text20: "Let’s check your pool rate to see how much you will earn today.",
};

const tradeSecurely3Data = {
    tradeSecurely: "/img/trade-securely@1x.png",
    cryptocurrencies: "/img/cryptocurrencies-2@1x.png",
    calculate: "/img/calculate@1x.png",
    checkHowMuchYouCanEarnProps: checkHowMuchYouCanEarn6Data,
};

const desktop122Data = {
    x106211: "/img/---18@1x.png",
    d: "/img/d@2x.png",
    u: "/img/u@2x.png",
    frame2: "/img/frame-2-2@1x.png",
    header3Props: header32Data,
    textProps: text6Data,
    numbers2Props: numbers24Data,
    frame6Props: frame65Data,
    tradeSecurelyProps: tradeSecurely3Data,
};

const button12Data = {
    children: "Learn More",
    className: "button-8",
};

const text7Data = {
    text4: "Why you should choose AntEagle",
    text3: "EXPERIENCE THE NEXT GENERATION CRYPTOCURRENCY PLATFORM. NO FINANCIAL BORDERS, EXTRA FEES, AND FAKE REVIEWS.",
    className: "text-110",
    buttonProps: button12Data,
};

const text216Data = {
    x30B: "$30B",
    text2: "Digital Currency Exchanged",
};

const x30B24Data = {
    iconBarChart: "/img/icon---bar-chart@2x.png",
    text2Props: text216Data,
};

const text217Data = {
    x30B: "10M+",
    text2: "Trusted Wallets Investor",
    className: "text-109",
};

const icon4Data = {
    src: "/img/icon---earth@2x.png",
};

const text218Data = {
    x30B: "195",
    text2: "Countries Supported",
    className: "text-109",
};

const numbers25Data = {
    iconPerson: "/img/icon---person@2x.png",
    x30B2Props: x30B24Data,
    text2Props: text217Data,
    iconProps: icon4Data,
    text2Props2: text218Data,
};

const navMenu7Data = {
    text50: "Products",
    text52: "Features",
    text51: "About",
    place: "Contact",
    className: "nav-menu-6",
};

const top6Data = {
    text56: "AntEagle",
    text53: "Login",
    divider: "/img/divider@2x.png",
    text55: "Register",
    navMenuProps: navMenu7Data,
};

const valueProposition25Data = {
    text204: "Welcome to AntNet.",
    heyContentCreatorsSocialMediaInflue: "/img/hey-content-creators--social-media-influencers--vloggers--and-al@2x.png",
    getStarted: "/img/get-started@2x.png",
    evaChevronRightOutline: "/img/eva-chevron-right-outline@2x.png",
};

const illustration25Data = {
    i10631550: "/img/---4@2x.png",
    i10631564: "/img/---6@2x.png",
    i10631536: "/img/---4@2x.png",
};

const header42Data = {
    x1518: "/img/---9@1x.png",
    x1519: "/img/--@1x.png",
    componentLottieHttpsAssets8Lottiefi: "/img/-component-lottie-https---assets8-lottiefiles-com-packages-lf20-@1x.png",
    topProps: top6Data,
    valueProposition2Props: valueProposition25Data,
    illustration2Props: illustration25Data,
};

const frame43Data = {
    features: "Features",
    componentLottieHttpsAssets2Lottiefi: "/img/-component-lottie-https---assets2-lottiefiles-com-packages-lf20-@1x.png",
    text130: "AntEagle promises to expand the horizon of human endeavour and bring a lot of new features with advanced innovation and leading-edge technology",
};

const frame66Data = {
    componentLottieHttpsAssets3Lottiefi: "/img/-component-lottie-https---assets3-lottiefiles-com-packages-lf20-@1x.png",
    features: "Features",
    text1092: "AntEagle promises to expand the horizon of human endeavour and bring a lot of new features with advanced innovation and leading-edge technology",
    text1102: "Decentralised Finance",
    text1142: "A new way of providing a Decentralized Finance Solution that is scalable and sustainable making your experience up to the mark.",
    componentLottieHttpsAssets9Lottiefi: "/img/-component-lottie-https---assets9-lottiefiles-com-packages-lf20-@2x.png",
    componentLottieHttpsAssets2Lottiefi: "/img/-component-lottie-https---assets2-lottiefiles-com-private-files-@2x.png",
    text112: "Cryptocurrency Insurance",
    text1172: "Our crypto network has proposed a new way where you can invest your money and be worry-free from cybercrime and theft.",
    crossChainSupport: "Cross-Chain Support",
    text115: "AntEagle offers you a scalable and sustainable blockchain solution with Multiple blockchain support.",
    componentLottieHttpsAssets2Lottiefi2: "/img/-component-lottie-https---assets2-lottiefiles-com-packages-lf20--1@1x.png",
    componentLottieHttpsAssets7Lottiefi: "/img/-component-lottie-https---assets7-lottiefiles-com-packages-lf20-@2x.png",
    text113: "Post-Quantam Encryption",
    text118: "AntEagle will offer you an ultimate Encryption method integrated with our blockchain network which can never be affected by Quantum Computers.",
    text111: "Fast and Secure Network",
    text116: "We provide a secure and prominent system where you can complete transactions without any worry and enjoy profit with complete security.",
    componentLottieHttpsAssets5Lottiefi: "/img/-component-lottie-https---assets5-lottiefiles-com-private-files-@2x.png",
    componentLottieHttpsAssets5Lottiefi2: "/img/-component-lottie-https---assets5-lottiefiles-com-private-files--1@2x.png",
    helpSupport: "Help & Support",
    text119: "You will have a 24/7 support system for all your troubleshooting and queries so that you have a better and responsive user experience",
    className: "frame-5-2",
};

const checkHowMuchYouCanEarn7Data = {
    text21: "Check how much you can earn",
    text20: "Let’s check your pool rate to see how much you will earn today.",
};

const tradeSecurely4Data = {
    tradeSecurely: "/img/trade-securely@1x.png",
    cryptocurrencies: "/img/cryptocurrencies-2@1x.png",
    calculate: "/img/calculate@1x.png",
    className: "trade-securely-6",
    checkHowMuchYouCanEarnProps: checkHowMuchYouCanEarn7Data,
};

const mobile22Data = {
    x1743: "/img/---20@1x.png",
    d: "/img/d@2x.png",
    u: "/img/u@2x.png",
    frame2: "/img/frame-2-3@1x.png",
    x11289: "/img/--@1x.png",
    textProps: text7Data,
    numbers2Props: numbers25Data,
    header4Props: header42Data,
    frame4Props: frame43Data,
    frame6Props: frame66Data,
    tradeSecurelyProps: tradeSecurely4Data,
};

const button13Data = {
    children: "Learn More",
    className: "button-9",
};

const text8Data = {
    buttonProps: button13Data,
};

const text219Data = {
    x30B: "$30B",
    text2: "Digital Currency Exchanged",
};

const x30B25Data = {
    text2Props: text219Data,
};

const navMenu8Data = {
    text50: "Products",
    text52: "Features",
    text51: "About",
    place: "Contact",
    className: "nav-menu-7",
};

const top7Data = {
    text56: "AntEagle",
    text53: "Login",
    divider: "/img/divider@2x.png",
    text55: "Register",
    navMenuProps: navMenu8Data,
};

const valueProposition26Data = {
    text204: "Welcome to AntNet.",
    heyContentCreatorsSocialMediaInflue: "/img/hey-content-creators--social-media-influencers--vloggers--and-al@2x.png",
    getStarted: "/img/get-started@2x.png",
    evaChevronRightOutline: "/img/eva-chevron-right-outline@2x.png",
};

const header5Data = {
    x1518: "/img/---9@1x.png",
    x1519: "/img/--@1x.png",
    x1550: "/img/---5@2x.png",
    x1564: "/img/---6@2x.png",
    x1536: "/img/---4@2x.png",
    componentLottieHttpsAssets8Lottiefi: "/img/-component-lottie-https---assets8-lottiefiles-com-packages-lf20-@1x.png",
    topProps: top7Data,
    valueProposition2Props: valueProposition26Data,
};

const statusBarData = {
    timeI0783067: "9:27",
    cellularConnection: "/img/cellular-connection-4@2x.svg",
    wifi: "/img/wifi-4@2x.svg",
    battery: "/img/battery@2x.svg",
};

const x40ToolbarNewData = {
    x40ToolbarNew: "/img/rectangle@2x.svg",
    union: "/img/union-2@2x.svg",
};

const tabBarData = {
    union: "/img/union@2x.svg",
    union2: "/img/union-1@2x.svg",
    union3: "/img/union-3@2x.svg",
    person: "/img/person@2x.svg",
    x40ToolbarNewProps: x40ToolbarNewData,
};

const chatsData = {
    overlapGroup: "/img/background@2x.svg",
    title: "Chats",
    ellipse: "/img/ellipse-19@2x.png",
    name: "James",
    text298: "Thank you! That was very helpful!",
    ellipse2: "/img/ellipse-16@2x.png",
    name2: "Will Kenny",
    text299: "I know... I’m trying to get the funds.",
    ellipse3: "/img/ellipse-17@2x.png",
    name3: "Beth Williams",
    text300: "I’m looking for tips around capturing the milky way. I have a 6D with a 24-100mm...",
    ellipse4: "/img/ellipse-18@2x.png",
    revShawn: "Rev Shawn",
    text301: "Wanted to ask if you’re available for a portrait shoot next week.",
    statusBarProps: statusBarData,
    tabBarProps: tabBarData,
};

const componentData = {
    ellipse: "/img/ellipse@2x.png",
    text304: "Ridhwan Nordin",
    text305: "@ridzjcob",
    className: "",
};

const photoOpenoverlayData = {
    componentProps: componentData,
};

const statusBar2Data = {
    timeI0783067: "9:27",
    cellularConnection: "/img/cellular-connection-4@2x.svg",
    wifi: "/img/wifi-4@2x.svg",
    battery: "/img/battery@2x.svg",
};

const x40ToolbarNew2Data = {
    x40ToolbarNew: "/img/rectangle@2x.svg",
    union: "/img/union-2@2x.svg",
};

const tabBar2Data = {
    union: "/img/union@2x.svg",
    union2: "/img/union-1@2x.svg",
    union3: "/img/union-3@2x.svg",
    person: "/img/person@2x.svg",
    className: "tab-bar-1",
    x40ToolbarNewProps: x40ToolbarNew2Data,
};

const individualChatData = {
    overlapGroup3: "/img/background@2x.svg",
    title: "James",
    chevron: "/img/chevron@2x.svg",
    label: "",
    ellipse: "/img/ellipse-21@2x.png",
    overlapGroup1: "/img/rectangle-2-6@2x.svg",
    text304: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
    overlapGroup2: "/img/rectangle-2-1-1@2x.svg",
    text306: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    ellipse2: "/img/ellipse-22@2x.png",
    ellipse3: "/img/ellipse-21@2x.png",
    overlapGroup: "/img/rectangle-2-2-1@2x.svg",
    text305: "Thank you! That was very helpful!",
    statusBarProps: statusBar2Data,
    tabBarProps: tabBar2Data,
};

const component2Data = {
    ellipse: "/img/ellipse-5@2x.png",
    text304: "Angelo Pantazis",
    text305: "@angelopantazis",
    className: "component-1",
};

const photoOpenoverlay2Data = {
    componentProps: component2Data,
};

const statusBar3Data = {
    timeI0783067: "9:27",
    cellularConnection: "/img/cellular-connection@2x.svg",
    wifi: "/img/wifi@2x.svg",
    battery: "/img/battery@2x.svg",
    className: "status-bar-2",
};

const registerData = {
    children: "Search",
};

const component22Data = {
    children: "Search all photos",
};

const searchData = {
    statusBarProps: statusBar3Data,
    registerProps: registerData,
    component2Props: component22Data,
};

const statusBar4Data = {
    timeI0783067: "9:27",
    cellularConnection: "/img/cellular-connection@2x.svg",
    wifi: "/img/wifi@2x.svg",
    battery: "/img/battery@2x.svg",
    className: "status-bar-3",
};

const register2Data = {
    children: "Discover",
    className: "register-1",
};

const component3Data = {
    ellipse: "/img/ellipse@2x.png",
    text311: "Ridhwan Nordin",
    text312: "@ridzjcob",
};

const component32Data = {
    ellipse: "/img/ellipse-1@2x.png",
    text311: "Clem Onojeghuo",
    text312: "@clemono2",
    className: "component-3-2",
};

const component33Data = {
    ellipse: "/img/ellipse-2@2x.png",
    text311: "Jon Tyson",
    text312: "@jontyson",
    className: "component-3-3",
};

const component34Data = {
    ellipse: "/img/ellipse-3@2x.png",
    text311: "Simon Zhu",
    text312: "@smnzhu",
    className: "component-3",
};

const button62Data = {
    children: "SEE MORE",
};

const x40ToolbarNew3Data = {
    x40ToolbarNew: "/img/rectangle@2x.svg",
    union: "/img/union-2@2x.svg",
};

const tabBar3Data = {
    union: "/img/union@2x.svg",
    union2: "/img/union-1@2x.svg",
    union3: "/img/union-3@2x.svg",
    person: "/img/person@2x.svg",
    className: "tab-bar-2",
    x40ToolbarNewProps: x40ToolbarNew3Data,
};

const discoveroverflowBehaviorData = {
    whatsNewToday: "WHAT’S NEW TODAY",
    rectangle28: "/img/rectangle-2-8@2x.png",
    rectangle29: "/img/rectangle-2-9-1@2x.png",
    rectangle210: "/img/rectangle-2-10-1@2x.png",
    rectangle211: "/img/rectangle-2-11@2x.png",
    browseAll: "BROWSE ALL",
    rectangle2: "/img/rectangle-2@2x.png",
    rectangle22: "/img/rectangle-2-2@2x.png",
    rectangle24: "/img/rectangle-2-4@2x.png",
    rectangle26: "/img/rectangle-2-6@2x.png",
    rectangle292: "/img/rectangle-2-9@2x.png",
    rectangle21: "/img/rectangle-2-1@2x.png",
    rectangle23: "/img/rectangle-2-3@2x.png",
    rectangle25: "/img/rectangle-2-5@2x.png",
    rectangle27: "/img/rectangle-2-7@2x.png",
    rectangle2102: "/img/rectangle-2-10@2x.png",
    statusBarProps: statusBar4Data,
    registerProps: register2Data,
    component3Props: component3Data,
    component32Props: component32Data,
    component33Props: component33Data,
    component34Props: component34Data,
    button6Props: button62Data,
    tabBarProps: tabBar3Data,
};

const button72Data = {
    children: "FOLLOW JANE",
};

const button63Data = {
    children: "MESSAGE",
    className: "button-57",
};

const statusBar5Data = {
    timeI0783067: "9:27",
    cellularConnection: "/img/cellular-connection-4@2x.svg",
    wifi: "/img/wifi-4@2x.svg",
    battery: "/img/battery@2x.svg",
};

const button64Data = {
    children: "SEE MORE",
};

const x40ToolbarNew4Data = {
    x40ToolbarNew: "/img/rectangle@2x.svg",
    union: "/img/union-2@2x.svg",
};

const tabBar4Data = {
    union: "/img/union@2x.svg",
    union2: "/img/union-1@2x.svg",
    union3: "/img/union-3@2x.svg",
    person: "/img/person@2x.svg",
    className: "tab-bar-3",
    x40ToolbarNewProps: x40ToolbarNew4Data,
};

const profileData = {
    ellipse: "/img/ellipse-20@2x.png",
    name: "Jane",
    sanFranciscoCa: "SAN FRANCISCO, CA",
    rectangle2: "/img/rectangle-2-25@2x.png",
    rectangle21: "/img/rectangle-2-1-4@2x.png",
    rectangle23: "/img/rectangle-2-3-4@2x.png",
    rectangle22: "/img/rectangle-2-2-4@2x.png",
    rectangle25: "/img/rectangle-2-5-4@2x.png",
    rectangle24: "/img/rectangle-2-4-4@2x.png",
    button7Props: button72Data,
    button6Props: button63Data,
    statusBarProps: statusBar5Data,
    button62Props: button64Data,
    tabBarProps: tabBar4Data,
};

const statusBar6Data = {
    timeI0783067: "9:27",
    cellularConnection: "/img/cellular-connection-2@2x.svg",
    wifi: "/img/wifi-2@2x.svg",
    battery: "/img/battery-2@2x.svg",
    className: "status-bar-5",
};

const register3Data = {
    children: "Search",
    className: "register-2",
};

const component4Data = {
    children: "dogs",
};

const button65Data = {
    children: "SEE MORE",
};

const x40ToolbarNew5Data = {
    x40ToolbarNew: "/img/rectangle@2x.svg",
    union: "/img/union-2@2x.svg",
};

const tabBar5Data = {
    union: "/img/union@2x.svg",
    union2: "/img/union-1@2x.svg",
    union3: "/img/union-3@2x.svg",
    person: "/img/person@2x.svg",
    className: "tab-bar-4",
    x40ToolbarNewProps: x40ToolbarNew5Data,
};

const searchResultspreserveScrollPositionData = {
    allResults: "ALL RESULTS",
    rectangle2: "/img/rectangle-2-13@2x.png",
    rectangle21: "/img/rectangle-2-1-2@2x.png",
    rectangle22: "/img/rectangle-2-2-2@2x.png",
    rectangle23: "/img/rectangle-2-3-2@2x.png",
    rectangle24: "/img/rectangle-2-4-2@2x.png",
    rectangle25: "/img/rectangle-2-5-2@2x.png",
    rectangle26: "/img/rectangle-2-6-2@2x.png",
    rectangle27: "/img/rectangle-2-7-2@2x.png",
    rectangle28: "/img/rectangle-2-8-2@2x.png",
    rectangle29: "/img/rectangle-2-9-4@2x.png",
    rectangle210: "/img/rectangle-2-10-4@2x.png",
    rectangle211: "/img/rectangle-2-11-2@2x.png",
    rectangle212: "/img/rectangle-2-12-1@2x.png",
    rectangle213: "/img/rectangle-2-13-1@2x.png",
    rectangle214: "/img/rectangle-2-14@2x.png",
    rectangle215: "/img/rectangle-2-15@2x.png",
    rectangle216: "/img/rectangle-2-16@2x.png",
    rectangle217: "/img/rectangle-2-17@2x.png",
    rectangle218: "/img/rectangle-2-18@2x.png",
    rectangle219: "/img/rectangle-2-19@2x.png",
    rectangle220: "/img/rectangle-2-20@2x.png",
    rectangle221: "/img/rectangle-2-21@2x.png",
    rectangle222: "/img/rectangle-2-22@2x.png",
    rectangle223: "/img/rectangle-2-23@2x.png",
    statusBarProps: statusBar6Data,
    registerProps: register3Data,
    component4Props: component4Data,
    button6Props: button65Data,
    tabBarProps: tabBar5Data,
};

const statusBar7Data = {
    timeI0783067: "9:27",
    cellularConnection: "/img/cellular-connection-4@2x.svg",
    wifi: "/img/wifi-4@2x.svg",
    battery: "/img/battery@2x.svg",
    className: "status-bar-6",
};

const register4Data = {
    children: "Search",
    className: "register-3",
};

const component42Data = {
    children: "dogs",
};

const button66Data = {
    children: "SEE MORE",
    className: "button-60",
};

const x40ToolbarNew6Data = {
    x40ToolbarNew: "/img/rectangle@2x.svg",
    union: "/img/union-2@2x.svg",
};

const tabBar6Data = {
    union: "/img/union@2x.svg",
    union2: "/img/union-1@2x.svg",
    union3: "/img/union-3@2x.svg",
    person: "/img/person@2x.svg",
    className: "tab-bar-5",
    x40ToolbarNewProps: x40ToolbarNew6Data,
};

const searchResultsData = {
    allResults: "ALL RESULTS",
    rectangle2: "/img/rectangle-2-13@2x.png",
    rectangle21: "/img/rectangle-2-1-2@2x.png",
    rectangle22: "/img/rectangle-2-2-2@2x.png",
    rectangle23: "/img/rectangle-2-3-2@2x.png",
    rectangle24: "/img/rectangle-2-4-2@2x.png",
    rectangle25: "/img/rectangle-2-5-2@2x.png",
    rectangle26: "/img/rectangle-2-6-2@2x.png",
    rectangle27: "/img/rectangle-2-7-2@2x.png",
    rectangle28: "/img/rectangle-2-8-2@2x.png",
    rectangle29: "/img/rectangle-2-9-4@2x.png",
    rectangle210: "/img/rectangle-2-10-4@2x.png",
    rectangle211: "/img/rectangle-2-11-2@2x.png",
    rectangle212: "/img/rectangle-2-12-1@2x.png",
    rectangle213: "/img/rectangle-2-13-1@2x.png",
    rectangle214: "/img/rectangle-2-14@2x.png",
    statusBarProps: statusBar7Data,
    registerProps: register4Data,
    component4Props: component42Data,
    button6Props: button66Data,
    tabBarProps: tabBar6Data,
};

const alphabetData = {
    children: "q",
};

const alphabet2Data = {
    children: "e",
};

const alphabet3Data = {
    children: "r",
};

const alphabet32Data = {
    children: "t",
    className: "alphabet-16",
};

const alphabet22Data = {
    children: "y",
    className: "alphabet-10",
};

const alphabet23Data = {
    children: "u",
};

const alphabet4Data = {
    children: "i",
};

const alphabet5Data = {
    children: "o",
    className: "alphabet-5",
};

const alphabet6Data = {
    children: "p",
    className: "alphabet-6",
};

const alphabet24Data = {
    children: "a",
    className: "alphabet-13",
};

const alphabet25Data = {
    children: "s",
    className: "alphabet-12",
};

const alphabet7Data = {
    children: "d",
    className: "alphabet-6",
};

const alphabet33Data = {
    children: "f",
    className: "alphabet-16",
};

const alphabet8Data = {
    children: "g",
    className: "alphabet-6",
};

const alphabet9Data = {
    children: "h",
    className: "alphabet-5",
};

const alphabet42Data = {
    children: "j",
};

const alphabet26Data = {
    children: "k",
    className: "alphabet-12",
};

const alphabet43Data = {
    children: "l",
};

const alphabet27Data = {
    children: "z",
    className: "alphabet-14",
};

const alphabet28Data = {
    children: "x",
    className: "alphabet-10",
};

const alphabet29Data = {
    children: "c",
};

const alphabet210Data = {
    children: "v",
    className: "alphabet-10",
};

const alphabet10Data = {
    children: "b",
    className: "alphabet-6",
};

const alphabet211Data = {
    children: "n",
};

const searchKeyboardoverlayData = {
    homeIndicator: "/img/home-indicator@2x.svg",
    xreturn: "return",
    space: "space",
    alphabet: "w",
    combinedShape: "/img/combined-shape@2x.svg",
    alphabet2: "m",
    overlapGroup3: "/img/shape@2x.svg",
    number: "123",
    emoji: "/img/emoji@2x.svg",
    dictation: "/img/mic@2x.svg",
    alphabetProps: alphabetData,
    alphabet2Props: alphabet2Data,
    alphabet3Props: alphabet3Data,
    alphabet32Props: alphabet32Data,
    alphabet22Props: alphabet22Data,
    alphabet23Props: alphabet23Data,
    alphabet4Props: alphabet4Data,
    alphabet2Props2: alphabet5Data,
    alphabet3Props2: alphabet6Data,
    alphabet24Props: alphabet24Data,
    alphabet25Props: alphabet25Data,
    alphabet4Props2: alphabet7Data,
    alphabet33Props: alphabet33Data,
    alphabet5Props: alphabet8Data,
    alphabet6Props: alphabet9Data,
    alphabet42Props: alphabet42Data,
    alphabet26Props: alphabet26Data,
    alphabet43Props: alphabet43Data,
    alphabet27Props: alphabet27Data,
    alphabet28Props: alphabet28Data,
    alphabet29Props: alphabet29Data,
    alphabet210Props: alphabet210Data,
    alphabet7Props: alphabet10Data,
    alphabet211Props: alphabet211Data,
};

const frame67Data = {
    componentLottieHttpsAssets3Lottiefi: "/img/-component-lottie-https---assets3-lottiefiles-com-packages-lf20-@1x.png",
    features: "Features",
    text1092: "AntEagle promises to expand the horizon of human endeavour and bring a lot of new features with advanced innovation and leading-edge technology",
    text1102: "Decentralised Finance",
    text1142: "A new way of providing a Decentralized Finance Solution that is scalable and sustainable making your experience up to the mark.",
    componentLottieHttpsAssets9Lottiefi: "/img/-component-lottie-https---assets9-lottiefiles-com-packages-lf20-@2x.png",
    componentLottieHttpsAssets2Lottiefi: "/img/-component-lottie-https---assets2-lottiefiles-com-private-files-@2x.png",
    text112: "Cryptocurrency Insurance",
    text1172: "Our crypto network has proposed a new way where you can invest your money and be worry-free from cybercrime and theft.",
    crossChainSupport: "Cross-Chain Support",
    text115: "AntEagle offers you a scalable and sustainable blockchain solution with Multiple blockchain support.",
    componentLottieHttpsAssets2Lottiefi2: "/img/-component-lottie-https---assets2-lottiefiles-com-packages-lf20--1@1x.png",
    componentLottieHttpsAssets7Lottiefi: "/img/-component-lottie-https---assets7-lottiefiles-com-packages-lf20-@2x.png",
    text113: "Post-Quantam Encryption",
    text118: "AntEagle will offer you an ultimate Encryption method integrated with our blockchain network which can never be affected by Quantum Computers.",
    text111: "Fast and Secure Network",
    text116: "We provide a secure and prominent system where you can complete transactions without any worry and enjoy profit with complete security.",
    componentLottieHttpsAssets5Lottiefi: "/img/-component-lottie-https---assets5-lottiefiles-com-private-files-@2x.png",
    componentLottieHttpsAssets5Lottiefi2: "/img/-component-lottie-https---assets5-lottiefiles-com-private-files--1@2x.png",
    helpSupport: "Help & Support",
    text119: "You will have a 24/7 support system for all your troubleshooting and queries so that you have a better and responsive user experience",
    className: "frame-5-3",
};

