import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const BackButton = styled.button`
  background-color: #f8f9fa;
  border: 1px solid #e0e0e0;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 2rem;
  display: block;
  margin: 2rem auto 0;
  
  &:hover {
    background-color: #e9ecef;
  }
`;

const Privacy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Privacy Policy</Title>
      
      <SectionTitle>1. Camera and Gallery Access</SectionTitle>
      <Text>
        This application requires access to your device's camera and photo gallery to provide its core functionality. We use these permissions only for:
        <br /><br />
        • Taking photos directly through the app
        <br />
        • Selecting images from your gallery
        <br /><br />
        Your photos are processed only for the purpose of AI analysis and are not stored permanently on our servers.
      </Text>

      <SectionTitle>2. Data Usage</SectionTitle>
      <Text>
        When you use our AI analysis feature:
        <br /><br />
        • Your images are temporarily processed to generate responses
        <br />
        • The images are not stored or used for any other purpose
        <br />
        • No personal data is extracted or stored from your images
        <br />
        • The analysis results are generated using AI technology and are not stored
      </Text>

      <SectionTitle>3. AI Processing</SectionTitle>
      <Text>
        Your images are processed using generative AI technology to provide analysis and responses. This processing is done in real-time and the images are not retained after the analysis is complete.
      </Text>

      <SectionTitle>4. Data Security</SectionTitle>
      <Text>
        We implement appropriate security measures to protect your data during transmission and processing. However, no method of transmission over the internet or electronic storage is 100% secure.
      </Text>

      <SectionTitle>5. Changes to Privacy Policy</SectionTitle>
      <Text>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
      </Text>

      <BackButton onClick={() => navigate(-1)}>Back</BackButton>
    </Container>
  );
};

export default Privacy; 