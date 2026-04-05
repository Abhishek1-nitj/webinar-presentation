import { useCallback, useEffect, useState } from 'react';
import SlideGuidelines from './components/SlideGuidelines';
import Slide21 from './components/Slide21';
import Slide22 from './components/Slide22';
import Slide23 from './components/Slide23';
import Slide24 from './components/Slide24';
import Slide32bIntro from './components/Slide32bIntro';
import Slide32bIntroFreelance from './components/Slide32bIntroFreelance';
import Slide32bHighlightUnique from './components/Slide32bHighlightUnique';
import SlideExcelNotFormulas from './components/SlideExcelNotFormulas';
import SlideWhereToLearnAllThis from './components/SlideWhereToLearnAllThis';
import SlidePracticePracticePractice from './components/SlidePracticePracticePractice';
import SlideModule22ExcelAI from './components/SlideModule22ExcelAI';
import SlideModule23InterviewPreparation from './components/SlideModule23InterviewPreparation';
import SlideReadyMadeProjects from './components/SlideReadyMadeProjects';
import SlideCompleteAdvancedExcelAI from './components/SlideCompleteAdvancedExcelAI';
import SlideBigTextPrice from './components/SlideBigTextPrice';
import SlideExcelOfferCopy from './components/SlideExcelOfferCopy';
import Slide32bRecap from './components/Slide32bRecap';
import Slide32j from './components/Slide32j';
import Slide32k from './components/Slide32k';
import Slide32kStep1 from './components/Slide32kStep1';
import Slide32kStep2 from './components/Slide32kStep2';
import Slide32n from './components/Slide32n';
import Slide32o from './components/Slide32o';
import Slide32p from './components/Slide32p';
import Slide32sGenAITools from './components/Slide32sGenAITools';
import Slide32m from './components/Slide32m';
import Slide32wDataConnection from './components/Slide32wDataConnection';
import Slide32w from './components/Slide32w';
import SlideLearnExcelSources from './components/SlideLearnExcelSources';
import SlideExcelOffer from './components/SlideExcelOffer';
import SlideMicrosoft365Link from './components/SlideMicrosoft365Link';
import SlideClaudeInsights from './components/SlideClaudeInsights';
import Slide32x from './components/Slide32x';
import Slide32z from './components/Slide32z';
import Slide32ab from './components/Slide32ab';
import Slide32DashboardTools from './components/Slide32DashboardTools';
import Slide32bFlowIntro from './components/Slide32bFlowIntro';
import Slide32bFlowFreelance from './components/Slide32bFlowFreelance';
import Slide32bFlowFreelanceHighlight from './components/Slide32bFlowFreelanceHighlight';
import Slide32bFlowFreelanceProfileHighlight from './components/Slide32bFlowFreelanceProfileHighlight';
import Slide32bFlowFreelancePortfolioHighlight from './components/Slide32bFlowFreelancePortfolioHighlight';
import Slide32bFlowResumeUnique from './components/Slide32bFlowResumeUnique';
import SlideFreelanceProfileStructure from './components/SlideFreelanceProfileStructure';
import SlideFreelanceProfileTitle from './components/SlideFreelanceProfileTitle';
import SlideFreelanceProfileSummaryDo from './components/SlideFreelanceProfileSummaryDo';
import SlideFreelanceProfileSummarySample from './components/SlideFreelanceProfileSummarySample';
import SlideFreelanceProfileSkillsPortfolio from './components/SlideFreelanceProfileSkillsPortfolio';
import SlideFreelanceProjectCategories from './components/SlideFreelanceProjectCategories';
import Slide32bPortfolioLookCopy from './components/Slide32bPortfolioLookCopy';
import Slide32bFlowFreelanceProcessHighlight from './components/Slide32bFlowFreelanceProcessHighlight';
import SlideFreelancingPlatforms from './components/SlideFreelancingPlatforms';
import SlideFreelancingPlatformsFocus from './components/SlideFreelancingPlatformsFocus';
import SlideFreelancingPlatformsFiverr from './components/SlideFreelancingPlatformsFiverr';
import SlideFreelancingPlatformsPeoplePerHour from './components/SlideFreelancingPlatformsPeoplePerHour';
import SlideFreelancingPlatformsToptal from './components/SlideFreelancingPlatformsToptal';
import SlideFreelancingPlatformsLinkedIn from './components/SlideFreelancingPlatformsLinkedIn';
import SlideHourlyVsFixedPrice from './components/SlideHourlyVsFixedPrice';
import SlideScopeCreep from './components/SlideScopeCreep';
import SlideGoldenRule from './components/SlideGoldenRule';
import SlideGoodReviews from './components/SlideGoodReviews';
import SlideNegotiationTips from './components/SlideNegotiationTips';
import SlideScreeningCall from './components/SlideScreeningCall';
import SlideRequirementDocument from './components/SlideRequirementDocument';
import SlideUpwork from './components/SlideUpwork';
import SlideUpworkFullBleed from './components/SlideUpworkFullBleed';
import SlideFreelancerPlatform from './components/SlideFreelancerPlatform';
import SlideFiverrPlatform from './components/SlideFiverrPlatform';
import SlidePeoplePerHourPlatform from './components/SlidePeoplePerHourPlatform';
import SlideToptalPlatform from './components/SlideToptalPlatform';
import SlideOutboundProcessHighlightFollowUp from './components/SlideOutboundProcessHighlightFollowUp';
import SlideFreelanceProjectsProcess from './components/SlideFreelanceProjectsProcess';
import SlideOutboundProcess from './components/SlideOutboundProcess';
import SlideOutboundProcessHighlight1 from './components/SlideOutboundProcessHighlight1';
import SlideOutboundProcessHighlight2 from './components/SlideOutboundProcessHighlight2';
import SlideSampleUpworkPosting from './components/SlideSampleUpworkPosting';
import SlideHowToBid from './components/SlideHowToBid';
import SlideSampleBid from './components/SlideSampleBid';
import SlideOutboundProcessHighlight4 from './components/SlideOutboundProcessHighlight4';
import SlideGoogleAntiGravity from './components/SlideGoogleAntiGravity';
import SlideDashboardCodex from './components/SlideDashboardCodex';
import Slide50ATS from './components/Slide50ATS';
import Slide50JD from './components/Slide50JD';
import Slide50Handshake from './components/Slide50Handshake';
import Slide51ATSFriendly from './components/Slide51ATSFriendly';
import Slide51ResumeSections from './components/Slide51ResumeSections';
import Slide51Step1 from './components/Slide51Step1';
import Slide51Step2 from './components/Slide51Step2';
import Slide51Step3 from './components/Slide51Step3';
import Slide51Step4 from './components/Slide51Step4';
import Slide51Step4Example from './components/Slide51Step4Example';
import Slide51Step5 from './components/Slide51Step5';
import Slide51Step5Example from './components/Slide51Step5Example';
import Slide51Beautify from './components/Slide51Beautify';
import Slide170 from './components/Slide170';
import Slide171 from './components/Slide171';
import Slide172 from './components/Slide172';
import Slide173 from './components/Slide173';
import Slide174 from './components/Slide174';
import Slide175 from './components/Slide175';
import Slide176 from './components/Slide176';
import Slide177 from './components/Slide177';
import Slide178 from './components/Slide178';
import Slide51StepsSummary from './components/Slide51StepsSummary';
import Slide51NoExperience from './components/Slide51NoExperience';
import Slide32bFlowProjectsOne from './components/Slide32bFlowProjectsOne';
import Slide32bPortfolioLook from './components/Slide32bPortfolioLook';
import Slide32cProjects from './components/Slide32cProjects';
import Slide52LinkedInGuides from './components/Slide52LinkedInGuides';
import Slide32bFlowJobApplicationsUnique from './components/Slide32bFlowJobApplicationsUnique';
import Slide32bFlowProjectsTwo from './components/Slide32bFlowProjectsTwo';
import Slide52InterviewTypes from './components/Slide52InterviewTypes';
import Slide52TechnicalRound from './components/Slide52TechnicalRound';
import SlideProductSet1 from './components/SlideProductSet1';
import SlideProductSet2 from './components/SlideProductSet2';
import SlideProductSet3 from './components/SlideProductSet3';
import SlideProductSet4 from './components/SlideProductSet4';
import SlideProductAll from './components/SlideProductAll';
import SlideInstagramStoryShare from './components/SlideInstagramStoryShare';
import SlideExcelOfferFinal from './components/SlideExcelOfferFinal';
import Slide179 from './components/Slide179';
import Slide180 from './components/Slide180';
import Slide181 from './components/Slide181';
import Slide183 from './components/Slide183';
import Slide185 from './components/Slide185';

const App = () => {
  const [targetSlide, setTargetSlide] = useState('');
  const [totalSlides, setTotalSlides] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const sections = document.querySelectorAll('.slide-section');
    setTotalSlides(sections.length);
    setCurrentSlide(1);
  }, []);

  useEffect(() => {
    let rafId = 0;
    const updateCurrentSlide = () => {
      const sections = Array.from(document.querySelectorAll('.slide-section'));
      if (!sections.length) return;
      const offset = window.innerHeight * 0.35;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - offset);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      setCurrentSlide(closestIndex + 1);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updateCurrentSlide();
      });
    };

    updateCurrentSlide();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  const handleJump = useCallback(
    event => {
      event.preventDefault();
      const slideNumber = parseInt(targetSlide, 10);
      if (Number.isNaN(slideNumber) || slideNumber < 1) return;
      const sections = document.querySelectorAll('.slide-section');
      const target = sections[Math.min(slideNumber, sections.length) - 1];
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTargetSlide('');
      }
    },
    [targetSlide],
  );

  return (
    <div>
      <form
        onSubmit={handleJump}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 rounded-full border border-white/10 bg-premium-black/70 px-2 py-3 text-[10px] backdrop-blur"
      >
        <input
          type="number"
          min="1"
          max={totalSlides || undefined}
          value={targetSlide}
          onChange={event => setTargetSlide(event.target.value)}
          className="no-spinner w-10 rounded-xl border border-white/15 bg-transparent px-1 py-1 text-center text-xs font-semibold text-white placeholder:text-white/40 focus:border-premium-gold focus:outline-none"
        />
      </form>
      <div className="fixed bottom-4 left-4 z-40 select-text rounded-full border border-white/10 bg-premium-black/60 px-3 py-1 text-[11px] font-semibold text-white/70 backdrop-blur">
        Slide {currentSlide}/{totalSlides || '?'}
      </div>
      <SlideGuidelines />
      <Slide21 />
      <Slide22 />
      <Slide23 />
      <Slide24 />
      <Slide32bIntro />
      <Slide32bHighlightUnique />
      <SlideExcelNotFormulas />
      <Slide32j />
      <Slide32kStep1 />
      <Slide32kStep2 />
      <Slide32k visibleSteps={3} />
      <Slide32k visibleSteps={4} />
      <Slide32k visibleSteps={5} />
      <Slide32k visibleSteps={6} />
      <Slide32k visibleSteps={7} />
      <Slide32kStep2 />
      <Slide32n />
      <Slide32o />
      <Slide179 />
      <Slide180 />
      <Slide32p />
      <Slide32sGenAITools />
      <Slide32m />
      <Slide32k visibleSteps={3} />
      <Slide32wDataConnection />
      <Slide32k visibleSteps={4} />
      <Slide32w />
      <SlideLearnExcelSources />
      <SlideWhereToLearnAllThis />
      <Slide32j />
      <SlidePracticePracticePractice />
      <SlideModule22ExcelAI />
      <SlideModule23InterviewPreparation />
      <Slide32bPortfolioLookCopy />
      <SlideReadyMadeProjects />
      <SlideFreelanceProjectCategories />
      <SlideMicrosoft365Link />
      <SlideCompleteAdvancedExcelAI />
      <SlideBigTextPrice />
      <SlideExcelOffer />
      <SlideExcelOfferCopy />
      <Slide32k visibleSteps={4} />
      <Slide32k visibleSteps={5} />
      <Slide32x />
      <Slide32z />
      <SlideClaudeInsights />
      <Slide32ab />
      <SlideGoogleAntiGravity />
      <Slide32k visibleSteps={7} highlightStep={6} />
      <Slide32DashboardTools />
      <SlideDashboardCodex />
      <Slide32k visibleSteps={7} />
      <Slide32bRecap />
      <Slide32bFlowFreelance />
      <Slide32bFlowFreelanceHighlight />
      <SlideFreelancingPlatforms />
      <SlideUpworkFullBleed />
      <SlideFreelancerPlatform />
      <SlideFiverrPlatform />
      <SlidePeoplePerHourPlatform />
      <SlideToptalPlatform />
      <SlideFreelancingPlatformsLinkedIn />
      <Slide32bFlowFreelanceProfileHighlight />
      <SlideFreelanceProfileStructure />
      <SlideFreelanceProfileTitle />
      <SlideFreelanceProfileSummaryDo />
      <SlideFreelanceProfileSummarySample />
      <SlideFreelanceProfileSkillsPortfolio />
      <Slide32bFlowFreelancePortfolioHighlight />
      <Slide32bPortfolioLookCopy />
      <SlideFreelanceProjectCategories />
      <Slide32bFlowFreelanceProcessHighlight />
      <SlideFreelanceProjectsProcess />
      <SlideOutboundProcess />
      <SlideOutboundProcessHighlight1 />
      <SlideRequirementDocument />
      <SlideOutboundProcessHighlight2 />
      <SlideSampleUpworkPosting />
      <SlideHowToBid />
      <SlideSampleBid />
      <SlideOutboundProcessHighlight4 />
      <SlideScreeningCall />
      <SlideGoldenRule />
      <SlideHourlyVsFixedPrice />
      <SlideScopeCreep />
      <SlideGoodReviews />
      <SlideNegotiationTips />
      <SlideOutboundProcessHighlightFollowUp />
      <Slide32bIntroFreelance />
      <Slide32bFlowIntro />
      <Slide32bFlowResumeUnique />
      <Slide50ATS />
      <Slide50JD />
      <Slide50Handshake />
      <Slide51ATSFriendly />
      <Slide51ResumeSections />
      <Slide51Step1 />
      <Slide51Step2 />
      <Slide51Step3 />
      <Slide51Step4 />
      <Slide51Step4Example />
      <Slide51Step5 />
      <Slide51Step5Example />
      <Slide51Beautify />
      <Slide170 />
      <Slide171 />
      <Slide172 />
      <Slide173 />
      <Slide174 />
      <Slide175 />
      <Slide176 />
      <Slide177 />
      <Slide178 />
      <Slide51StepsSummary />
      <Slide51NoExperience />
      <Slide32bFlowProjectsOne />
      <Slide32bPortfolioLook />
      <Slide32cProjects />
      <Slide32bFlowProjectsTwo />
      <Slide181 />
      <Slide183 />
      <Slide185 />
      <Slide52LinkedInGuides />
      <Slide32bFlowJobApplicationsUnique />
      <Slide52InterviewTypes />
      <Slide52TechnicalRound />
      <SlideProductSet1 />
      <SlideProductSet2 />
      <SlideProductSet3 />
      <SlideProductSet4 />
      <SlideProductAll />
      <SlideInstagramStoryShare />
      <SlideExcelOffer />
      <SlideExcelOfferFinal />
    </div>
  );
};

export default App;
