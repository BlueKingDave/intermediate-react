// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useFetch } from '../../utils/hooks';

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`;

function Freelancers() {
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`
  );
  console.log('API Response:', data);

  const { freelancersList } = data;

  if (error) {
    return <span>There is an error</span>;
  }

  return (
    <div>
      <PageTitle>Find your service provider</PageTitle>
      <PageSubtitle>
        Here at Shiny we bring together the best profiles for you.
      </PageSubtitle>
      <CardsContainer>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          freelancersList.map((freelance, index) => (
            <Card
              key={`${freelance.name}-${index}`}
              label={freelance.job}
              title={freelance.name}
              picture={freelance.picture}
            />
          ))
        )}
      </CardsContainer>
    </div>
  );
}

export default Freelancers;
