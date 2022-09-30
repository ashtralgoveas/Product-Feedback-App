import { Dropdownnavbar } from '@product_feedback/scope.navbar.dropdownnavbar';
import { Feedbackboard } from '@product_feedback/scope.cards.feedbackboard';
import { Roadmap } from '@product_feedback/scope.cards.roadmap';
import React from 'react';
import { Stack } from '@mui/material';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Stack direction="row">
        <Stack direction="column">
          <Feedbackboard />
          <Roadmap />
        </Stack>
        <Dropdownnavbar />
      </Stack>
    </>
  );
};

export default Home;