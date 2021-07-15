import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
         Welcome To <br />
         My Personal Portfolio
     </SectionTitle>
     <SectionText>
       My purpose is to gain more experience and find entry-level a fron-end job.
     </SectionText>
     <Button onClick={() => window.location ="https://google.com"}>Learn More</Button>
   </LeftSection>
  </Section>
);

export default Hero;