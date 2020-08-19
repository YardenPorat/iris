import React, { Fragment } from 'react';

import { Tip } from './Tip';

import { Button } from '../../../components';
import { Header } from '../../../typography';
import { Layout } from '../../../storybook';
import { ANCHOR_POINTS } from '../../../utils';

export default { title: 'components|info/Tip' };

export function Common() {
  return (
    <Layout.StoryVertical center>
      {ANCHOR_POINTS.map((attach, i) => (
        <Fragment key={i}>
          <Tip content="I am Tip" attach={attach}>
            <Button>Tip {attach}</Button>
          </Tip>
          <br />
        </Fragment>
      ))}
    </Layout.StoryVertical>
  );
}

export function Pill() {
  return (
    <Layout.StoryVertical center>
      {ANCHOR_POINTS.map((attach, i) => (
        <Fragment key={i}>
          <Tip content="I am Tip" attach={attach} pill>
            <Button>Tip {attach}</Button>
          </Tip>
          <br />
        </Fragment>
      ))}
    </Layout.StoryVertical>
  );
}

export function Fancy() {
  const content = (
    <>
      <img
        src="http://placekitten.com/480/120"
        alt=""
        style={{ width: '100%' }}
      />
      <Header size="4" style={{ margin: '1rem auto' }}>
        I am a very fancy tip!
      </Header>
    </>
  );
  return (
    <Layout.StoryVertical center style={{ paddingTop: '12rem' }}>
      <Tip content={content} attach="top" trigger="click">
        <Button>Tip top (click)</Button>
      </Tip>
    </Layout.StoryVertical>
  );
}