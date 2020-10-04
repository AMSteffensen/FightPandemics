import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import GetInvButton from "components/Button/GetInvolvedButton";
import HelpBoardButton from "components/Button/HelpBoardButton";
import {
  AboutUsContainer,
  ImageContainer,
  MobileContentContainer,
  HeadingContainer,
  HowDoesThisWorkContainer,
  OurStoryContainer,
  ConnectContainer,
  SupporterContainer,
  SupportersLogosContainer,
  SocialContainer,
  AboutUsLink,
  Grid,
  FlexBox,
  Col,
  SocialStyle,
} from "components/AboutUs/AboutUsContainer";
import BlankImage from "assets/about-us-images/Blank.jpg";
import Group from "assets/about-us-images/group.svg";
import WorldMap from "assets/about-us-images/world-map.png";
import HelpBoard from "assets/how-does-work-images/Help-Board.gif";
import LocalGlobal from "assets/how-does-work-images/Local&Global.gif";
import RelevantContent from "assets/how-does-work-images/Relevant-content.gif";
import ConnectImage from "assets/about-us-images/weConnectPeople.png";

// company supporter logos import
import airtableLogo from "assets/supporters-logos/airtable-logo.svg";
import algoliaLogo from "assets/supporters-logos/algolia-logo.svg";
import aut0Logo from "assets/supporters-logos/auth0-logo.svg";
import awsLogo from "assets/supporters-logos/awsLogo.png";
import calendlyLogo from "assets/supporters-logos/calendlyLogo2.png";
import figmaLogo from "assets/supporters-logos/figmaLogo.png";
import gitkrakenLogo from "assets/supporters-logos/gitkraken-logo.png";
import googleMapsLogo from "assets/supporters-logos/googleMapsLogo.png";
import hackoladeLogo from "assets/supporters-logos/hackoladeLogo.png";
import leypayLogo from "assets/supporters-logos/leypalLogo2.png";
import lokaliseLogo from "assets/supporters-logos/lokaliseLogos.png";
import lambdatestLogo from "assets/supporters-logos/lambdatestLogo.png";
import miroLogo from "assets/supporters-logos/miro-logo.svg";
import mongodbLogo from "assets/supporters-logos/mongodb-logo.png";
import notionLogo from "assets/supporters-logos/notionLogo.svg";
import pagerdutyLogo from "assets/supporters-logos/pagerduty.png";
import prowlyLogo from "assets/supporters-logos/prowlyLogo.png";
import sendgridLogo from "assets/supporters-logos/sendgrid-logo.svg";
import seo4ajaxLogo from "assets/supporters-logos/seo4ajaxLogo.png";
import supermetricsLogo from "assets/supporters-logos/supermetricsLogo.png";
import sentryLogo from "assets/supporters-logos/sentry-logo.svg";
import saucelabsLogos from "assets/supporters-logos/saucelabsLogo.png";
import slackLogo from "assets/supporters-logos/slack-logo.svg";
import socialbeeLogo from "assets/supporters-logos/socialbee-logo.svg";
import twilioLogo from "assets/supporters-logos/twilio-logo.svg";
import typeformLogo from "assets/supporters-logos/typeform-logo.png";
import workableLogo from "assets/supporters-logos/workableLogo.png";
import whitesourceLogo from "assets/supporters-logos/whitesourceLogo.png";
import zendeskLogo from "assets/supporters-logos/zendeskLogo.svg";
import zeplinLogo from "assets/supporters-logos/zeplin-logo.svg";

// social icons
import instagramLogo from "assets/icons/social-instagram.png";
import linkedInLogo from "assets/icons/social-linkedin.png";
import facebookLogo from "assets/icons/social-facebook.png";
import twitterLogo from "assets/icons/social-twitter.png";
import { size } from "lodash";

const DemoBox = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);

const LogosMap = new Map([
  [algoliaLogo, "https://www.algolia.com/"],
  [airtableLogo, "https://airtable.com"],
  [awsLogo, "http://aws.amazon.com"],
  [aut0Logo, "http://auth0.com"],
  [calendlyLogo, "https://calendly.com"],
  [hackoladeLogo, "https://hackolade.com/"],
  [figmaLogo, "https://www.figma.com"],
  [whitesourceLogo, "https://www.whitesourcesoftware.com"],
  [gitkrakenLogo, "https://www.gitkraken.com"],
  [googleMapsLogo, "https://maps.google.com"],
  [lokaliseLogo, "https://lokalise.com"],
  [leypayLogo, "https://www.leypal.com"],
  [lambdatestLogo, "https://www.lambdatest.com"],
  [miroLogo, "http://www.miro.com"],
  [mongodbLogo, "https://www.mongodb.com"],
  [notionLogo, "https://www.notion.so"],
  [pagerdutyLogo, "https://www.pagerduty.com"],
  [prowlyLogo, "https://prowly.com/en"],
  [sendgridLogo, "http://sendgrid.com"],
  [saucelabsLogos, "http://saucelabs.com"],
  [sentryLogo, "https://sentry.io/welcome"],
  [seo4ajaxLogo, "https://www.seo4ajax.com"],
  [socialbeeLogo, "https://socialbee.io/"],
  [slackLogo, "https://slack.com"],
  [supermetricsLogo, "http://supermetrics.com"],
  [twilioLogo, "http://www.twilio.com"],
  [typeformLogo, "http://www.typeform.com"],
  [workableLogo, "https://www.workable.com"],
  [zeplinLogo, "http://zeplin.io"],
  [zendeskLogo, "http://www.zendesk.com"],
]);

const supporterLogosLifetime = [
  algoliaLogo,
  hackoladeLogo,
  lokaliseLogo,
  miroLogo,
  saucelabsLogos,
  sentryLogo,
  socialbeeLogo,
  whitesourceLogo,
];
const supporterLogosCurrent = [
  airtableLogo,
  awsLogo,
  aut0Logo,
  figmaLogo,
  gitkrakenLogo,
  googleMapsLogo,
  lambdatestLogo,
  mongodbLogo,
  notionLogo,
  pagerdutyLogo,
  prowlyLogo,
  sendgridLogo,
  seo4ajaxLogo,
  slackLogo,
  supermetricsLogo,
  twilioLogo,
  typeformLogo,
  workableLogo,
  zeplinLogo,
  zendeskLogo,
];
const supporterLogosPast = [calendlyLogo, leypayLogo];

function LogoItem(props) {
  return (
    <div>
      <a href={LogosMap.get(props.value)} target="_blank">
        <img src={props.value} alt="" />
      </a>
    </div>
  );
}

function LogosList(props) {
  const supporterLogos = props.supporterLogos;
  const logoItems = supporterLogos.map((logo) => (
    <LogoItem key={logo.toString()} value={logo} />
  ));
  return logoItems;
}

const i18nSCOPE = "aboutUs";

const AboutUs = () => {
  const { t: i18n } = useTranslation();
  const t = React.useCallback((id, absolute = false) =>
    i18n(absolute ? id : `${i18nSCOPE}.${id}`),
  );

  return (
    <AboutUsContainer>
      <HeadingContainer>
        <h2>{t("heading")}</h2>
        <p>{t("subHeading")}</p>
      </HeadingContainer>

      <ImageContainer
        img={Group}
        width={"100%"}
        height={"50rem"}
        mobileHeight={"40rem"}
        flexDirection={"row"}
      >
        <h2>{t("forWhoHeading")}</h2>
      </ImageContainer>

      <MobileContentContainer>
        <h2>{t("forWhoHeading")}</h2>
        <p>{t("forWho")}</p>
      </MobileContentContainer>

      <ImageContainer
        img={WorldMap}
        width={"83.17rem"}
        height={"42.5rem"}
        background-color={"#fbfbfd"}
        background-blend-mode={"multiply"}
      >
        <h1>{t("ourCommunity")}</h1>
        <p>{t("community")}</p>
        <GetInvButton />
      </ImageContainer>

      <ConnectContainer>
        <FlexBox justify="center">
          <img src={ConnectImage} />
        </FlexBox>
        <FlexBox direction="column" justify="center" align="center">
          <h1>{t("connectPeople")}</h1>
          <p>{t("connect")}</p>
        </FlexBox>
      </ConnectContainer>

      <HowDoesThisWorkContainer>
        <h1>{t("howWork")}</h1>
        <>
          <FlexBox justify="center" wrap={"wrap"}>
            <FlexBox
              direction="column"
              align="center"
              style={{ marginTop: "3rem" }}
            >
              <h3>{t("helpBoard")}</h3>
              <img alt={t("helpBoard")} src={HelpBoard} />
              <p>{t("helpBoardDetail")}</p>
            </FlexBox>
            <FlexBox
              direction="column"
              align="center"
              style={{ marginTop: "3rem" }}
            >
              <h3>{t("localGlobal")}</h3>
              <img alt={t("localGlobal")} src={LocalGlobal} />
              <p>{t("localGlobalDetail")}</p>
            </FlexBox>
            <FlexBox
              direction="column"
              align="center"
              style={{ marginTop: "3rem" }}
            >
              <h3>{t("relevantContent")}</h3>
              <img
                style={{ objectPosition: "3rem" }}
                alt={t("relevantContent")}
                src={RelevantContent}
              />
              <p>{t("relevantContentDetail")}</p>
            </FlexBox>
          </FlexBox>
          <HelpBoardButton type="primary">
            <Link to="/feed">{t("goToHelpBoard")}</Link>
          </HelpBoardButton>
        </>
      </HowDoesThisWorkContainer>

      <OurStoryContainer>
        <h1>{t("ourStory")}</h1>
        <h3>{t("FightPandemics")}</h3>
        <p>{t("story")}</p>
        <br />
        <p dangerouslySetInnerHTML={{ __html: t("storyInspired") }}></p>
        {/* TODO Add FightPandemics Video */}
        {/* <img src={BlankImage} alt="loading..." /> */}
      </OurStoryContainer>

      <SupporterContainer>
        <h1>{t("supporters")}</h1>
        <p>
          {t("thanksSupporters")}
          <br />
          <br />
          {t("becomeSupporter")}{" "}
          <AboutUsLink href="mailto:partnerships@fightpandemics.com">
            {" "}
            {t("becomePartnerEmail")}
          </AboutUsLink>
          <br />
          <br />
          {t("companyLogoInfo")}
        </p>
        <h3>{t("lifetimeSupporters")}</h3>
        <SupportersLogosContainer>
          <LogosList supporterLogos={supporterLogosLifetime} />
        </SupportersLogosContainer>
        <br />
        <h3>{t("currentSupporters")}</h3>
        <SupportersLogosContainer>
          <LogosList supporterLogos={supporterLogosCurrent} />
        </SupportersLogosContainer>
        <br />
        <h4>{t("pastSupporters")}</h4>
        {/* max-width will change according to number of logos */}
        <SupportersLogosContainer style={{ maxWidth: "35rem" }}>
          <LogosList supporterLogos={supporterLogosPast} />
        </SupportersLogosContainer>
      </SupporterContainer>

      <SocialStyle>
        <FlexBox direction="column">
          <h3>{t("followUs")}</h3>
          <SocialContainer>
            <AboutUsLink href="https://www.linkedin.com/company/fightpandemics/">
              <img src={linkedInLogo} alt="FightPandemics LinkedIn Icon" />
            </AboutUsLink>
            <AboutUsLink href="https://www.facebook.com/FightPandemics/">
              <img src={facebookLogo} alt="FightPandemics Facebook Icon" />
            </AboutUsLink>
            <AboutUsLink href="https://www.instagram.com/fightpandemics/">
              <img src={instagramLogo} alt="FightPandemics Instagram Icon" />
            </AboutUsLink>
            <AboutUsLink href="https://twitter.com/FightPandemics">
              <img src={twitterLogo} alt="FightPandemics Twitter Icon" />
            </AboutUsLink>
          </SocialContainer>
        </FlexBox>
        <FlexBox direction="column">
          <p>
            <span>{t("hashtag")}</span>
          </p>
          <p>
            {t("contactUs")}
            <AboutUsLink href="mailto:admin@fightpandemics.com">
              {t("contactEmail")}
            </AboutUsLink>
          </p>
        </FlexBox>
      </SocialStyle>
    </AboutUsContainer>
  );
};

export default AboutUs;
