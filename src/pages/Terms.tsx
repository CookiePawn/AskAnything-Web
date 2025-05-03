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

const Terms: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Terms and Conditions</Title>
      
      <SectionTitle>1. Acceptance of Terms</SectionTitle>
      <Text>
        By accessing and using this application, you accept and agree to be bound by the terms and provision of this agreement.
      </Text>

      <SectionTitle>2. Use License</SectionTitle>
      <Text>
        Permission is granted to temporarily use this application for personal, non-commercial transitory viewing only.
      </Text>

      <SectionTitle>3. Disclaimer</SectionTitle>
      <Text>
        The materials on this application are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
      </Text>

      <SectionTitle>4. Limitations</SectionTitle>
      <Text>
        In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this application.
      </Text>

      <SectionTitle>5. Revisions</SectionTitle>
      <Text>
        We may revise these terms of service at any time without notice. By using this application you are agreeing to be bound by the then current version of these terms of service.
      </Text>

      <BackButton onClick={() => navigate(-1)}>Back</BackButton>
    </Container>
  );
};

export default Terms; 